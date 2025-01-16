let currentIndex = 0;
const images = document.querySelectorAll('.carrossel-images img');
const totalImages = images.length;

function moveCarrossel(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalImages - 3;
    } else if (currentIndex >= totalImages - 2) {
        currentIndex = 0;
    }
    document.querySelector('.carrossel-images').style.transform = `translateX(-${currentIndex * 33.33}%)`;
}

setInterval(() => {
    moveCarrossel(1);
}, 9000);