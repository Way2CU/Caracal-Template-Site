# Preview image

Preview image is an SVG image used to show users roughly how home page of their site will look. As the user progresses through configuration preview image will be dynamically updated. To achieve this CSS classes are created and updated as needed. By using these classes you can control how preview image is updated.

Each preview image must be 360 by 500 pixels. If image is smaller or bigger it will be scaled to fit this size.

Table of contents:

1. Theme colors;
2. Logo image;
3. Site title.


## Theme colors

[Manifest file](manifest.markdown) contains `themes` section in which developer can define different color themes particular template supports. Colors defined in this section are only used to update preview image by defining named classes.

Kodkod will generate separate class for `fill` and separate class for `stroke` to provide maximum control of the behavior to the developer. All of the dynamic contain `preview` prefix followed by type of color and color name defined in theme object.

Apart from these theme defined colors you can define your own style sheet inside of SVG file and use it to adjust the look of the preview image.

For example, if the theme colors are defined as:

```json
"themes": [
	{
		"name": "default",
		"colors": {
			"color1": "#ff00ff",
			"background": "#ffffff"
		}
	}
]
```

The following classes will be generated when theme `default` is selected:

```css
.preview-fill-color1 {
	fill: #ff00ff;
}

.preview-fill-background {
	fill: #ffffff;
}

.preview-stroke-color1 {
	stroke: #ff00ff;
}

.preview-stroke-background {
	stroke: #ffffff;
}
```

It's important to note that number of colors in each theme doesn't have to be the same and that system will generate a class in the same format (`.preview-[fill|stroke]-<color_name>`) for each color defined. However your template has to handle this difference in number of colors properly.

These classes can then be used in SVG file to achieve desired effect. As defining `style` attribute on tag takes highest precedence you can combine these classes with additional styles to provide extra flexibility. In example below rectangle uses fill color from the defined class but makes it 50% transparent through `style` attribute.

```svg
<svg width="360" height="500" viewbox="0 0 360 500" xmlns="http://www.w3.org/2000/svg">
	<rect
		class="preview-fill-color1"
		style="fill-opacity: 0.5"
		x="0" y="0"
		width="360" height="50"
		/>
	<circle
		class="preview-stroke-background"
		style="stroke-width: 3px"
		cx="25" cy="25" r="20"
		/>
</svg>
```


## Logo image

Image is applied through specially defined `preview-logo-image` class by using `background-image` CSS property. Mask is applied through a different class (`preview-logo-mask`). This is done to provide additional flexibility when displaying logo in preview image. Both of these classes _can_ be used on a same element.

On final site image will be saved in it's original format and `@logo_image` variable in main style sheet updated.


## Site title

Any element with `preview-site-title` class will have it's content changed to user provided value. On final site this value will be saved in language file under `site_title` language constant.
