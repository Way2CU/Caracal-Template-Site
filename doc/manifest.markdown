# Template manifest

Manifest file is located on root of template repository as `manifest.json`. File contains common information about the template which will allow system to present it to users in proper way. To ensure interoperability system requires this file to be formatted in a specific way.

Example:

```json
{
	"name": {
		"en": "Sample template"
	},
	"author": "John Doe",
	"contact": "john@email.com",
	"version": "1.0",
	"updated": "2017-07-07 12:00:01",
	"categories": ["landing_page", "mini_site"],
	"features": ["ltr", "rtl"],
	"themes": [
		{
			"name": "default",
			"colors": {
				"color1": "#ff00ff",
				"background": "#ffffff"
			}
		}
	]
}
```

Properties:
- `name` - Object containing user localized names for the template. If the template name is not available in application locale default `en` is used;
- `author`: Name of the author;
- `contact`: Contact email address of the author;
- `version`: Version of the template;
- `updated`: Date and time of last template update;
- `categories`: Subset of categories this template belongs to. Categories listed here that are not part of [global categories](categories.markdown) list will be ignored;
- `features`: Subset of [features](features.markdown) template implements;
- `themes`: List of themes template is available in. Has to contain at least one.

Theme object:
- `name`: Lower-case theme name which must match one defined in `site/styles/themes.less` file;
- `colors`: List of colors to be presented to user. These colors are applied to [preview SVG image](preview.markdown).
