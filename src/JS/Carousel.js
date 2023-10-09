const slides = document.querySelectorAll('.carousel-slide');
const bullets = document.querySelectorAll('.carousel-bullet');
let currentSlide = 0;
let interval;

function showSlide(index) {
	slides[currentSlide].classList.remove('active');
	slides[index].classList.add('active');
	bullets[currentSlide].classList.remove('active');
	bullets[index].classList.add('active');
	currentSlide = index;
	restartInterval();
}

function startInterval() {
	interval = setInterval(() => {
		const nextSlide = (currentSlide + 1) % slides.length;
		showSlide(nextSlide);
	}, 5000);
}

function restartInterval() {
	clearInterval(interval);
	startInterval();
}

startInterval();
showSlide(currentSlide);