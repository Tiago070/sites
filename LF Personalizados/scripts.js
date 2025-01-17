let currentIndex = 0;
const images = document.querySelectorAll('.carrossel-images img');
const totalImages = images.length;
let autoMoveInterval;

function moveCarrossel(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalImages - 3;
    } else if (currentIndex >= totalImages - 2) {
        currentIndex = 0;
    }
    document.querySelector('.carrossel-images').style.transform = `translateX(-${currentIndex * 18.67}%)`;
}

function startAutoMove() {
    autoMoveInterval = setInterval(() => {
        moveCarrossel(1);
    }, 3000);
}

function stopAutoMove() {
    clearInterval(autoMoveInterval);
}

document.querySelector('.carrossel-btn.left').addEventListener('click', () => {
    moveCarrossel(-1);
    stopAutoMove();
});

document.querySelector('.carrossel-btn.right').addEventListener('click', () => {
    moveCarrossel(1);
    stopAutoMove();
});

startAutoMove();