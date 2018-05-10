# Template variants

Element variants available to user when editing a site are defined per-template basis. System will look for these variants in `templates/kodkod/<module>/` directory. Each of these directories contains element variant templates which are meant to be used in conjunction with module of the same name. It's advisable to consult Caracal documentation for the specific module and its attributes available for use.


## Variant directory structure

Directory is expected to be in certain format in order for system to present it properly to user and include variants in page templates.

Each variant must contain three files:
- Template for rendering data on the site ends just with extension `.xml`;
- Template for calling module which uses previous template to present data. Name of this file must end with `.call.xml` and have the same base name as previous template;
- Preview template which is used during editing process to present sample data. This template is named with `.preview.xml` and first template name.

For example, `generic` variant of articles module has the following files:

```
generic.xml
generic.call.xml
generic.preview.xml
```


## Metadata file

Aside from variant files each directory must contain `metadata.json`. This file is used to define additional data related to templates. This data is used both during editing process and when saving page template.

File is in JSON format of which top level keys correspond to variant names.

Example file:

```json
{
	"generic": {
		"default": true,
		"name": "variation_article_generic",
		"preview_image": "generic.png",
		"stylesheet": {
			"desktop": "generic.less",
			"mobile": "generic.mobile.less"
		},
		"script": "generic.js",
		"editable": ["id"]
	}
}
```

Available variant keys:
- `default` - Whether this variant is default when creating new element;
- `name` - Language constant whose value will be used when presenting variant to user during editing process. Value is loaded from the template `data/language_<code>.json` file;
- `preview_image` - Path to preview image relative to metadata file. Acceptable formats are either PNG or SVG;
- `stylesheet` - Optional object containing file names of styles located in `styles/kodkod/<module>/` directory. If present these styles will be included on the page where variant is used;
- `script` - Optional JavaScript to be included on pages where variant is used. Script will be included only once per page so it needs to take into account multiple uses of variant;
- `editable` - List of attributes which system is to treat as editable for this variant.
