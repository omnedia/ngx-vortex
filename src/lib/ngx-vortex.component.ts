import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  signal,
  ViewChild,
} from "@angular/core";
import {CommonModule, isPlatformBrowser} from "@angular/common";

@Component({
  selector: "om-vortex",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./ngx-vortex.component.html",
  styleUrl: "./ngx-vortex.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxVortexComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("OmVortexBackground", {static: true})
  container!: ElementRef<HTMLDivElement>;

  @Input()
  set animationDuration(duration: string) {
    this.inlineStyle.update(prev => ({...prev, '--om-vortext-animation-duration': duration}));
  }

  @Input()
  set vortexBlur(blur: string) {
    this.inlineStyle.update(prev => ({...prev, '--om-vortext-blur': blur}));
  }

  @Input()
  set strokeWidth(width: string) {
    this.inlineStyle.update(prev => ({...prev, '--om-vortext-stroke-width': width}));
  }

  @Input()
  set firstGradientColors(colors: string[]) {
    if (colors.length <= 0 || colors.length > 2) {
      throw new Error("Gradient Colors must be an array of one or two strings");
    }

    if (colors.length === 1) {
      colors.push(colors[0]);
    }

    this.gradient1Colors.set(colors);
  }

  @Input()
  set secondGradientColors(colors: string[]) {
    if (colors.length <= 0 || colors.length > 2) {
      throw new Error("Gradient Colors must be an array of one or two strings");
    }

    if (colors.length === 1) {
      colors.push(colors[0]);
    }

    this.gradient2Colors.set(colors);
  }

  gradient1Colors = signal(["#8533ff", "#9600fa"]);
  gradient2Colors = signal(["#0048a6", "#8533ff"]);

  @Input()
  styleClass: string | undefined;

  @Input("style")
  set style(style: any) {
    this.inlineStyle.update(prev => ({...prev, ...style}));
  }

  inlineStyle = signal({});

  @Input()
  set waveAmount(amount: number) {
    if (amount <= 0) {
      throw new Error("Wave amount must be greater than 0.");
    }

    this.updateWaveData(amount);
  }

  waveData: {
    index: number;
    delay: string;
  }[] = [];

  private previousWaveAmount: number | null = null;

  private intersectionObserver?: IntersectionObserver;
  isInView = signal(false);

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
  }

  ngOnInit() {
    if (this.waveData.length <= 0) {
      this.updateWaveData(24);
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.intersectionObserver = new IntersectionObserver(([entry]) => {
        this.isInView.set(entry.isIntersecting);
      });
      this.intersectionObserver.observe(this.container.nativeElement);
    }
  }

  ngOnDestroy(): void {
    this.intersectionObserver?.disconnect();
  }

  updateWaveData(amount: number): void {
    if (amount === this.previousWaveAmount) {
      return;
    }

    this.previousWaveAmount = amount;

    this.waveData = Array.from({length: amount}, (_, i) => ({
      index: i + 1,
      delay: `calc(-1 * var(--om-vortext-animation-duration) / ${amount} * ${i} * 0.5)`,
    }));
  }

  getWavePath(index: number): string {
    const curvature = 100 + index * 20;
    const startOffset = 600;
    return `M0 ${startOffset} C${curvature} ${curvature / 2} ${2000 - curvature} ${
      1200 - curvature / 2
    } 2000 ${startOffset}`;
  }
}
