import { responsiveObject } from './utils.js'

const breakPointA = 768;
const breakPointB = 1366;
const windowWidth = window.innerWidth;

const isMobileSize = (windowWidth < breakPointA);
const isTabletSize = (windowWidth <= breakPointB) && (windowWidth > breakPointA);
const isPcSize = (windowWidth > breakPointB);

document.addEventListener('DOMContentLoaded', () => {
	document.body.classList.add('no-scroll');
	document.getElementById('container').classList.add('no-scroll');

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
			// document.querySelector('.welcome_animation').remove();
			document.body.classList.remove('no-scroll');
			document.getElementById('container').classList.remove('no-scroll');
		}
	})

  // background line animation
	anime.timeline({
		targets: ".background-line-wrapper",
		easing: "easeOutExpo",
	})
	.add({
		delay: 400,
		opacity: 1,
		duration: 1000,
    ...responsiveObject(isMobileSize, {
      bottom: ["-20%", "0"],
    }),
    ...responsiveObject((isPcSize || isTabletSize), {
      translateY: ["-30%", "-50%"],
    })
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
		scale: ["2", "1"],
		duration: 1000,
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