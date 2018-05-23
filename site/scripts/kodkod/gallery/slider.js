/**
 * Gallery Slider JavaScript
 *
 * This script will integrate different variants of sliders on Kodkod
 * generated template. It looks for `kodkod gallery` classes in elements
 * and attaches to images contained within. All gallery objects are stored
 * in global `Caracal.Gallery` namespace.
 *
 * Authors: Mladen Mijatov
 */

var Caracal = Caracal || new Object();
Caracal.Gallery = Caracal.Gallery || new Object();


window.addEventListener('load', function(event) {
	var galleries = document.querySelectorAll('.kodkod.gallery');
	Caracal.Gallery.sliders = new Array();

	for (var i=0, count=galleries.length; i<count; i++) {
		var container = galleries[i];

		// decide how many items we need in slider
		var number_of_items = null;
		if (container.classList.contains('slider'))
			number_of_items = 3; else
		if (container.classList.contains('switcher'))
			number_of_items = 1;

		// continue if this is not a slider gallery
		if (number_of_items === null)
			continue;

		// create new slider object and configure it
		var controls = container.querySelector('a.control');
		var slider = new Caracal.Gallery.Slider(number_of_items);
		slider
			.images.set_container(container.querySelector('div'))
			.images.add(container.querySelector('div > img'))
			.controls.attach_next(controls[0])
			.controls.attach_previous(controls[1])
			.images.update();

		Caracal.Gallery.sliders.push(slider);
	}
});
