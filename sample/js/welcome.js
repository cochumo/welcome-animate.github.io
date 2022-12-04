document.addEventListener('DOMContentLoaded', () => {
	//Wrapper animation
	anime.timeline({
		targets: ".welcome",
		easing: "easeOutExpo",
	})
	.add({
		opacity: 1,
		duration: 1200,
	})
	.add({
		delay: 6000,
		opacity: 0,
		duration: 1000,
	 	complete: function(anime) {
			document.querySelector('.welcome').remove();
		}
	})

	//Text animation
	anime.timeline({
		targets: ".heading",
		easing: "easeOutExpo",
	})
	.add({
		delay: 400,
		opacity: 1,
		translateY: ["40px", "0px"],
		duration: 1000,
	})
	.add({
		delay: 1200,
		opacity: 0,
		translateY: ["0px","-40px"],
		duration: 1000,
		complete: () => {
			document.querySelector('.heading').remove();
		}
	})

	const xMax = 16

	// Second screen animation
	anime.timeline({
		targets: ".sub-heading-wrapper",
		easing: "easeOutExpo",
	})
	.add({
		delay: 4300,
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

	// Sub Text animation
	anime.timeline({
		targets: ".sub-heading",
		easing: "easeOutExpo",
	})
	.add({
		delay: 4200,
		opacity: 1,
		perspective: '100px',
		translateZ: ["100px", "0px"],
		duration: 500,
	})
})

//Paragraphs
anime({
	targets: 'p',
	opacity: 1,
	duration: 1800,
	translateY: ["-30px", "0px"],
	easing: "easeOutExpo",
	delay: (el, i) => 7500 + 100 * i,
})
