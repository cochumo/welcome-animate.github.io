import { responsiveObject } from './utils.js'

const breakPointA = 768;
const breakPointB = 1366;
const windowWidth = window.innerWidth;

const isMobileSize = (windowWidth < breakPointA);
const isTabletSize = (windowWidth <= breakPointB) && (windowWidth > breakPointA);
const isPcSize = (windowWidth > breakPointB);

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
		delay: 12000,
		opacity: 0,
		duration: 1000,
	 	complete: function(anime) {
			document.body.classList.remove('no-scroll');
			// document.querySelector('.welcome_animation').remove();
		}
	})

	/**
	 * screen1
	 */
  // mv-todaka animation
	anime.timeline({
		targets: "#screen1 .mv-todaka-wrapper",
		easing: "easeOutExpo",
	})
	.add({
		delay: 400,
		opacity: 1,
		perspective: '100px',
		translateZ: ["100px", "0px"],
		duration: 500,
	})

	anime.timeline({
		targets: "#screen1 .mv-todaka-image",
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
		targets: "#screen1 .phrase-wrapper",
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
		targets: "#screen1 .philosphy-wrapper",
		easing: "easeOutExpo",
	})
	.add({
		delay: 1200,
		opacity: 1,
		left: ["30%", "0"],
		duration: 1000,
	})
	.add({
		complete: function(anime) {
			document.querySelector('#screen1').remove();
		}
	})

	/**
	 * screen2
	 */
  // mv-nakajima animation
	anime.timeline({
		targets: "#screen2 .mv-nakajima-wrapper",
		easing: "easeOutExpo",
	})
	.add({
		delay: 3400,
		opacity: 1,
		perspective: '100px',
		translateZ: ["100px", "0px"],
		duration: 500,
	})

	anime.timeline({
		targets: "#screen2 .mv-nakajima-image",
		easing: "easeOutExpo",
	})
	.add({
		delay: 3500,
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
		targets: "#screen2 .phrase-wrapper",
		easing: "easeOutExpo",
	})
	.add({
		delay: 3800,
		opacity: 1,
		...responsiveObject(isMobileSize, {
      right: ["-30%", "0"],
    }),
		...responsiveObject((isPcSize || isTabletSize), {
      right: ["-50%", "-20%"],
    }),
		duration: 1000,
	})

  // philosphy animation
	anime.timeline({
		targets: "#screen2 .philosphy-wrapper",
		easing: "easeOutExpo",
	})
	.add({
		delay: 4200,
		opacity: 1,
		right: ["30%", "0"],
		duration: 1000,
	})
	.add({
		complete: function(anime) {
			document.querySelector('#screen2').remove();
		}
	})

	/**
	 * screen3
	 */
  // mv-katsuno animation
	anime.timeline({
		targets: "#screen3 .mv-katsuno-wrapper",
		easing: "easeOutExpo",
	})
	.add({
		delay: 6400,
		opacity: 1,
		perspective: '100px',
		translateZ: ["100px", "0px"],
		duration: 500,
	})

	anime.timeline({
		targets: "#screen3 .mv-katsuno-image",
		easing: "easeOutExpo",
	})
	.add({
		delay: 6500,
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
		targets: "#screen3 .phrase-wrapper",
		easing: "easeOutExpo",
	})
	.add({
		delay: 6800,
		opacity: 1,
		...responsiveObject(isMobileSize, {
      left: ["-30%", "0"],
    }),
		...responsiveObject((isPcSize || isTabletSize), {
      left: ["-50%", "-20%"],
    }),
		duration: 1000,
	})

  // philosphy animation
	anime.timeline({
		targets: "#screen3 .philosphy-wrapper",
		easing: "easeOutExpo",
	})
	.add({
		delay: 7200,
		opacity: 1,
		left: ["30%", "0"],
		duration: 1000,
	})
})