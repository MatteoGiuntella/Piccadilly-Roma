import { Component } from '@angular/core';

@Component({
  selector: 'app-wine',
  standalone: true,
  imports: [],
  template: `
  <h1 class="text-center text-white">Le nostre etichette</h1>
  <div class="carousel" mask>
	<article>
		<img src="https://images.pexels.com/photos/635699/pexels-photo-635699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
		<h2>The Cross</h2>
		<div>
			<p>The Cross is a central symbol of Easter, representing the crucifixion of Jesus Christ and his sacrifice for humanity. It serves as a reminder of suffering, love, and redemption, and is often displayed during Holy Week and Easter Sunday to honor the foundation of Christian faith.</p>

		</div>
	</article>

	<article>
		<img src="https://images.pexels.com/photos/7168798/pexels-photo-7168798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="easter eggs">
		<h2>Easter Eggs</h2>
		<div>
			<p>Easter eggs are a colorful symbol of new life and rebirth, often decorated and hidden for festive hunts. The tradition comes from ancient spring rituals and was later adopted into Easter celebrations to represent the resurrection.</p>

		</div>
	</article>

	<article>
		<img src="https://images.pexels.com/photos/4099179/pexels-photo-4099179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="hot cross buns">
		<h2>Hot Cross Buns</h2>
		<div>
			<p>Hot cross buns are sweet, spiced buns marked with a cross on top, traditionally eaten on Good Friday. They originated in England and symbolize the crucifixion, with the cross representing Jesus and the spices recalling burial traditions.</p>

		</div>
	</article>

	<article>
		<img src="https://images.pexels.com/photos/5145/animal-easter-chick-chicken.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="easter chick">
		<h2>Easter Chick</h2>
		<div>
			<p>Easter chicks are a cheerful symbol of new life and beginnings, often seen alongside eggs in spring decorations. They represent birth and renewal, tying into the themes of Easter and the arrival of spring.</p>

		</div>
	</article>

	<article>
		<img src="https://images.pexels.com/photos/2072158/pexels-photo-2072158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="easter bunny">
		<h2>Easter Bunnies</h2>
		<div>
			<p>Easter bunnies are a popular symbol of spring and new life, often seen delivering colorful eggs to children.</p>

		</div>
	</article>

	<article>
		<img src="https://images.pexels.com/photos/12787666/pexels-photo-12787666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="crown of thorms">
		<h2>Crown of Thorns</h2>
		<div>
			<p>The Crown of Thorns symbolizes the suffering of Jesus before his crucifixion. It represents the pain he endured for humanity’s salvation and is a reminder of his sacrifice during Easter.</p>

		</div>
	</article>

</div>
  `,
  styles: `
  @layer base, demo;
@import url(https://fonts.bunny.net/css?family=abel:400);

@layer demo {
	.carousel {
		--items: 6;
		--carousel-duration: 40s;
		@media (width > 600px) {
			--carousel-duration: 30s;
		}
		--carousel-width: min(
			80vw,
			
		); /* note - it will "break" if it gets too wide and there aren't enough items */
		--carousel-item-width: 280px;
		--carousel-item-height: 450px;
		--carousel-item-gap: 2rem;

		--clr-cta: rgb(0, 132, 209);

		position: relative;
		width: var(--carousel-width);
		height: var(--carousel-item-height);
		overflow: clip;

		&[mask] {
			/* fade out on sides */
			mask-image: linear-gradient(
				to right,
				transparent,
				black 10% 90%,
				transparent
			);
		}

		&[reverse] > article {
			animation-direction: reverse;
		}
		/* hover pauses animation */
		&:hover > article {
			animation-play-state: paused;
		}
	}
	.carousel > article {
		position: absolute;
		top: 0;
		left: calc(100% + var(--carousel-item-gap));
		width: var(--carousel-item-width);
		height: var(--carousel-item-height);
		display: grid;
		grid-template-rows: 200px auto 1fr auto;
		gap: 0.25rem;
		border: 1px solid light-dark(rgba(0 0 0 / 0.25), rgba(255 255 255 / 0.15));

		padding-block-end: 1rem;
		border-radius: 10px;
		background: light-dark(white, rgba(255 255 255 / 0.05));
		color: light-dark(rgb(49, 65, 88), white);

		/* animation */
		will-change: transform;
		animation-name: marquee;
		animation-duration: var(--carousel-duration);
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		animation-delay: calc(
			var(--carousel-duration) / var(--items) * 1 * var(--i) * -1
		);
		&:nth-child(1) {
			--i: 0;
		}
		&:nth-child(2) {
			--i: 1;
		}
		&:nth-child(3) {
			--i: 2;
		}
		&:nth-child(4) {
			--i: 3;
		}
		&:nth-child(5) {
			--i: 4;
		}
		&:nth-child(6) {
			--i: 5;
		}
		&:nth-child(7) {
			--i: 6;
		}
		&:nth-child(8) {
			--i: 7;
		}
	}
	.carousel img {
		width: 100%;
		height: 100%;
		object-fit: cover;

		border-radius: 10px 10px 0 0;
	}
	.carousel > article > *:not(img) {
		padding: 0 1rem;
	}
	.carousel > article > div {
		grid-row: span 2;
		display: grid;
		grid-template-rows: subgrid;
		font-size: 0.8rem;
	}
	.carousel > article h2 {
		font-size: 1.2rem;
		font-weight: 300;
		padding-block: 0.75rem 0.25rem;
		margin: 0;
	}
	.carousel > article p {
		margin: 0;
	}
	.carousel > article a {
		text-decoration: none;
		text-transform: lowercase;
		border: 1px solid var(--clr-cta);
		color: light-dark(var(--clr-cta), white);
		border-radius: 3px;
		padding: 0.25rem 0.5rem;
		place-self: start;
		transition: 150ms ease-in-out;
		&:hover,
		&:focus-visible {
			background-color: var(--clr-cta);
			color: white;
			outline: none;
		}
	}

	@keyframes marquee {
		100% {
			transform: translateX(
				calc(
					(var(--items) * (var(--carousel-item-width) + var(--carousel-item-gap))) *
						-1
				)
			);
		}
	}
}

/* general styling */
@layer base {
	* {
		box-sizing: border-box;
	}
	:root {
		color-scheme: light dark;

		--bg-dark: rgb(2, 6, 24);
		--bg-light: rgb(229, 229, 229);
		--txt-light: rgb(10, 10, 10);
		--txt-dark: rgb(245, 245, 245);
	}
	body {
		background-color: light-dark(var(--bg-light), var(--bg-dark));
		color: light-dark(var(--txt-light), var(--txt-dark));
		min-height: 100svh;
		margin: 0;
		padding: 1rem;
		font-size: 1rem;
		font-family: "Abel", sans-serif;
		line-height: 1.5;
		display: grid;
		place-items: center;
		gap: 2rem;
	}
}

  `
})
export class WineComponent {

}
