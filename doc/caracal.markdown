# Caracal Extension

Kodkod is a system for generating sites and landing pages through functionality and features of Caracal development framework. To ensure inter-operability and customizability of the resulting product Kodkod extends Caracal's subset of custom XML tags and attributes with its own. These additions are ignored by the Caracal system but allow Kodkod to reliably load and save templates.

This document lists and explains each addition to this new namespace and provides examples on how to use them.

Table of contents:

- Theming:
	- Directory structure;
	- Style sheets;
	- Preview SVG image.
- Attributes:
	- Element variation `kodkod:variation`;
	- Container definition `kodkod:container`;
	- Container content type `kodkod:type`.


## Theming

System allows for different color schemes and layouts to be defined for site template. These schemes are defined per site basis to avoid additional complications.

### Directory structure

In order for site template to be usable by the Kodkod directory structure must be compatible with the following definition. This not only provides functionality but also gives projects predictability and ease of maintenance.

Following Caracal directory structure all styles are located in `site/styles/` directory with restriction to only using LESS counterparts for styling (Caracal supports CSS and perhaps others). All the configuration of the resulting site is done through modifying `main.less` and `main_mobile.less` files.

Other files specific to the system are located in `site/data/` directory and are used as following:

- `template.json` - Detailed information about the author and the template itself;
- `preview.svg` - Preview image for the web application;

Base template provides examples files. More information can be found in dedicated documents.


### Style sheets

Support for different color schemes and layouts in templates is entirely done through use of style sheets. To achieve this flexibility themes are defined as `mixin` switch case. These definitions create global variables which are applied based on switching value which is the theme name.

```less
.theme('default') {
	@color_background: white;
	@color_text: black;
}

.theme('inverse') {
	@color_background: black;
	@color_text: white;
}
```

Themes are by default stored in `site/styles/themes.less` file of the base template. Aside from individual theme definitions this file must contain universal `mixin` which sets global `@theme` variable, used in other styles to apply properties selectively based on theme name.

```less
.theme(@name) {
	@theme: @name;
}
```

Files `main.less` and `main_mobile.less` call this `mixin` to apply theme specific values. Editor will modify this line to apply theme user selected.

Other than using variables defined in individual themes selectors can be written to only apply if certain theme is selected.

```less
header when (@theme='inverse') {
	bottom: 0;
}
```


### Preview SVG image

To present users with insight into how certain color scheme, logo and other data would look on their site system presents, in configuration dialog, small preview of selected options. This preview is a single SVG file modified on the fly. This file is required for each site template. Example can be found in base template along with [additional documentation](preview.markdown).


## Attributes

Attributes provide easy way for developers to control the behavior of template and options available to users during editing process. Caracal will ignore these attributes when rendering the final layout of the site.


### Element variation `kodkod:variation`

Attribute which allows user to select one of the specified values. This value is used as a class name in generated template. This allows user to further customize looks of the template.

Editor will not modify or remove child elements of the tag containing `kodkod:variation`. Only class is changed. Other classes than listed will be preserved as well.

```xml
<header kodkod:variation="generic,fixed" class="bright generic">
</header>
```


### Container definition `kodkod:container`

Tag containing this attribute is used by the editor as container for other elements in the system. Attribute value lists all element types that are accepted. Optionally maximum number of elements can be specified with `kodkod:count` attribute, which if omitted defaults to one.Each element must contain `kodkod:type` attribute. 

Developers should not place anything inside of containers other than elements themselves as content will be overwritten by the editor.

```xml
<div kodkod:container="gallery,features" kodkod:count="1">
</div>
```


### Container content type `kodkod:type`

This attribute is used to denote type of element to be displayed. Other attributes in the tag will be used by the editor to present different configuration presets and options to user.

Attribute can be used in following ways: 

- Standalone without `kodkod:container` and `kodkod:variation` representing an element whose _content_ and _template_ user will be allowed to change and select but type will remain static;
- In combination with `kodkod:variation` to indicate which is the currently selected variation of the element from the list of selected. In this mode user will be able to select which module to show from list of supported as well as the template and element content;
- In combination with `kodkod:container` when it indicates of which type container element is allowing selection of supported element types as well as templates and content. 

```xml
<div kodkod:container="gallery,features" kodkod:count="1">
	<cms:module
		name="articles"
		action="show_list"
		template="kodkod/features/generic.xml"
		kodkod:type="features"
		>
		<param name="icon" value="something.svg"/>
	</cms:module>
</div>
```
