const sword = document.getElementById('sword');
const target = document.getElementById('target');

let isSwinging = false;

document.addEventListener('mousemove', (e) => {
    const rect = sword.getBoundingClientRect();
    const angle = Math.atan2(e.clientY - rect.top, e.clientX - rect.left) * 180 / Math.PI;
    sword.style.transform = `rotate(${angle}deg)`;
});

document.addEventListener('click', () => {
    if (!isSwinging) {
        isSwinging = true;
        sword.style.transition = 'transform 0.1s ease-out';
        sword.style.transform += ' rotate(90deg)';
        setTimeout(() => {
            sword.style.transition = 'none';
            isSwinging = false;
        }, 100);
    }
});

function checkCollision() {
    const swordRect = sword.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    const collision = !(
        swordRect.top > targetRect.bottom ||
        swordRect.bottom < targetRect.top ||
        swordRect.left > targetRect.right ||
        swordRect.right < targetRect.left
    );

    if (collision) {
        target.style.backgroundColor = '#0000ff';
    }
}

setInterval(checkCollision, 50);
