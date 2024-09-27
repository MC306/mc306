document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const nyanCat = document.getElementById('nyan-cat');
    const rainbow = document.getElementById('rainbow');
    const audio = document.getElementById('nyan-music');

    startButton.addEventListener('click', () => {
        startButton.style.display = 'none';
        nyanCat.style.display = 'block';
        rainbow.style.display = 'block';
        audio.play();

        // Add stars
        for (let i = 0; i < 50; i++) {
            createStar();
        }
    });

    function createStar() {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        document.getElementById('space').appendChild(star);
    }
});
