# ngx-vortex

<a href="https://ngxui.com" target="_blank" style="display: flex;gap: .5rem;align-items: center;cursor: pointer; padding: 0 0 0 0; height: fit-content;">
  <img src="https://ngxui.com/assets/img/ngxui-logo.png" style="width: 64px;height: 64px;">
</a>

This Library is part of the NGXUI ecosystem. <br>
View all available components at https://ngxui.com

`@omnedia/ngx-vortex` is an Angular library that creates a stunning, animated vortex effect. This component provides smooth animations and customizable visuals, making it perfect for eye-catching designs in your Angular applications.

## Features

- Animated vortex with configurable wave paths and gradients.
- Flexible customization for animation speed, colors, blur effects, and stroke widths.
- Built-in support for responsive design and CSS styling.

## Installation

Install the library using npm:

```bash
npm install @omnedia/ngx-vortex
```

## Usage

Import the `NgxVortexComponent` in your Angular module or component:

```typescript
import { NgxVortexComponent } from '@omnedia/ngx-vortex';

@Component({
  ...
  imports: [NgxVortexComponent],
  ...
})
```

Use the component in your template:

```html
<om-vortex
  [waveAmount]="24"
  [animationDuration]="'8s'"
  [vortexBlur]="'5px'"
  [strokeWidth]="'10px'"
  [firstGradientColors]="['#8533ff', '#9600fa']"
  [secondGradientColors]="['#0048a6', '#8533ff']">
</om-vortex>
```

## How It Works

- **Customizable Wave Paths:** Adjust the number of waves, stroke widths, and animation duration to match your design needs.
- **Dynamic Gradients:** Configure vibrant gradients for wave strokes via input properties.
- **Responsive Design:** The component adjusts its size and animation dynamically based on the parent container.

## API

```html
<om-vortex
  [waveAmount]="waveAmount"
  [animationDuration]="animationDuration"
  [vortexBlur]="vortexBlur"
  [strokeWidth]="strokeWidth"
  [firstGradientColors]="firstGradientColors"
  [secondGradientColors]="secondGradientColors"
  [styleClass]="styleClass"
  [style]="style"
></om-vortex>
```

### Inputs:

- `waveAmount` (optional): The number of waves in the vortex. Defaults to `24`.
- `animationDuration` (optional): The duration of the animation cycle. Accepts values like `'8s'`. Defaults to `'8s'`.
- `vortexBlur` (optional): The amount of blur applied to the vortex. Accepts CSS values like `'5px'`. Defaults to `'3px'`.
- `strokeWidth` (optional): The width of the wave strokes. Accepts values like `'8px'`. Defaults to `'8px'`.
- `firstGradientColors` (optional): An array of one or two strings defining the first gradient colors. Default: `['#8533ff', '#9600fa']`.
- `secondGradientColors` (optional): An array of one or two strings defining the second gradient colors. Default: `['#0048a6', '#8533ff']`.
- `styleClass` (optional): A custom CSS class for additional styling.
- `style` (optional): A key-value object for inline styles.

## Example

```html
<om-vortex
  [waveAmount]="30"
  [animationDuration]="'10s'"
  [vortexBlur]="'8px'"
  [strokeWidth]="'12px'"
  [firstGradientColors]="['#ff5733', '#ffbd33']"
  [secondGradientColors]="['#33ff57', '#33ffbd']"
  styleClass="custom-vortex"
  [style]="{ 'margin': '2rem auto', 'max-width': '600px' }"
>
</om-vortex>
```

## Styling

`.om-vortex`

The `.om-vortex` container allows you to apply global or custom styles using the `styleClass` input. The component handles gradients and animations internally, while you can extend styling for the container or waves.

### Example of Global and Custom Styling

```html
<om-vortex styleClass="custom-vortex">
  <div class="content">
    <h2>Interactive Vortex</h2>
  </div>
</om-vortex>
```

```css
.custom-vortex {
  background-color: #121212;
  padding: 3rem;
  border-radius: 15px;
}

.content {
  text-align: center;
  color: white;
}
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss new features or bug fixes.

## License

This project is licensed under the MIT License.

