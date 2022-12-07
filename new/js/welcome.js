const xMax = 16

document.addEventListener('DOMContentLoaded', () => {
	document.body.classList.add('no-scroll');

  //Wrapper animation
	anime.timeline({
		targets: ".welcome_animation",
		easing: "easeOutExpo",
	})
	.add({
		opacity: 1,
		duration: 1200,
	})
	.add({
		delay: 3000,
		opacity: 0,
		duration: 1000,
	 	complete: function(anime) {
			document.body.classList.remove('no-scroll');
			document.querySelector('.welcome_animation').remove();
		}
	})

  // mv-todaka animation
	anime.timeline({
		targets: ".mv-todaka-wrapper",
		easing: "easeOutExpo",
	})
	.add({
		delay: 400,
		opacity: 1,
		// bottom: ["-30%", "0"],
		// scale: ["2", "1"],
		perspective: '100px',
		translateZ: ["100px", "0px"],
		duration: 500,
	})

	anime.timeline({
		targets: ".mv-todaka-image",
		easing: "easeOutExpo",
	})
	.add({
		delay: 500,
		translateX: [
			{
				value: xMax * -2,
			},
			{
				value: xMax * 2,
			},
			{
				value: xMax * -1,
			},
			{
				value: xMax,
			},
			{
				value: xMax / -2,
			},
			{
				value: xMax / 2,
			},
			{
				value: xMax / -3,
			},
			{
				value: xMax / 3,
			},
			{
				value: xMax / -4,
			},
			{
				value: xMax / 4,
			},
			{
				value: 0
			}
		],
		easing: 'easeInOutSine',
		duration: 400,
	})

  // phrase animation
	anime.timeline({
		targets: ".phrase-wrapper",
		easing: "easeOutExpo",
	})
	.add({
		delay: 800,
		opacity: 1,
		left: ["-30%", "0"],
		duration: 1000,
	})

  // philosphy animation
	anime.timeline({
		targets: ".philosphy-wrapper",
		easing: "easeOutExpo",
	})
	.add({
		delay: 1200,
		opacity: 1,
		left: ["30%", "0"],
		duration: 1000,
	})
})