# Right to left language support

Support for right to left language is native in Kodkod and Caracal systems. However to ensure best inter-operability with other sites and search engines it's advised for RTL support to be done in a specific way.

Only part of template which requires special attention when it comes to RTL support is style sheets. Content and site structure should remain the same on both LTR and RTL languages and any necessary layout changes are done in style sheets.

Templates which only support either LTR or RTL need only set `direction: rtl` or `direction: ltr` respectively in main style sheet on document body. If template however wants to support both directions then support is done through `dir` attribute on `html` tag. This attribute is automatically added by the Caracal system. Use of this attribute will automatically change rendering order of tables and other inline elements.

As LTR languages are prevalent it is recommended to style page layout for this direction by default and only include modifications for RTL immediately after. For example in LESS:

```less
nav#main {
	position: absolute;
	top: 0;
	left: 0;

	border: 1px solid black;
	background-color: gray;

	html[dir=rtl] & {
		left: auto;
		right: 0;
	}
}
```

With this approach structure remains the same and layout is only slightly modified for different directions.
