/**
 * Custom Cursors 1.1.0
 *
 * Improve interaction by customizing the mouse pointer
 *
 * Copyright 2017-2019 Charley
 *
 * Released under the MIT License
 * 
 * Email: lc_work@qq.com
 *
 * Released on: October 19, 2017
 */

var Cursor = function(TagName,Effect){
	// Get Element.
	const cursor = document.querySelector('.cursor');
	// Get coordinates.
	window.addEventListener('mousemove', (e) => {
		e = e || window.event;
		let mouseX = e.clientX - cursor.offsetWidth / 2;
		let mouseY = e.clientY - cursor.offsetHeight / 2;
		// Set new coordinates.
		cursor.setAttribute(
			"style", 
			"display: block; top: "+mouseY+"px; left: "+mouseX+"px;"
		)
	});
	// Listen for mouse click events.
	document.addEventListener('click', (e) => {
		e = e || window.event;
	    cursor.classList.add("expand");
	    // console.log("user mouse click")
	    setTimeout(() => {
	        cursor.classList.remove("expand");
	    }, 500)
	});
	// Get the target element and set the effect.
	(function SetTarget (TagName,Effect){
		const target = document.querySelectorAll(TagName);
		for(let i = 0; i<target.length; i++){
			target[i].onmouseenter = function(){
				cursor.classList.add(Effect)
			};
			target[i].onmouseleave = function(){
				cursor.classList.remove(Effect)
			}
		}
	})(TagName,Effect);
}
