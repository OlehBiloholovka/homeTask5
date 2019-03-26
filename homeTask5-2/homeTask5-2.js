const balloon = document.getElementById('balloon');
const startSize = balloon.style.fontSize = '100px';
const balloonEmoji = '&#x1F388';
const boomEmoji = '&#x1F4A5';

document.addEventListener("keydown", changeSize);
document.addEventListener("keydown", newGame);

function changeSize(evt) {
    let currentSize = parseFloat(balloon.style.fontSize);
    switch (evt.code) {
        case 'ArrowUp':
            balloon.style.fontSize = (currentSize * 1.1) + 'px';
            if (currentSize >= parseFloat(startSize) * 1.5) {
                balloon.innerHTML = boomEmoji;
                document.removeEventListener('keydown', changeSize);
            }
            break;
        case 'ArrowDown':
            balloon.style.fontSize = (currentSize / 1.1) + 'px';
            break;
    }
}

function newGame(evt) {
    if (evt.code === 'Space') {
        balloon.style.fontSize = startSize;
        balloon.innerHTML = balloonEmoji;
        document.addEventListener("keydown", changeSize);
    }
}
