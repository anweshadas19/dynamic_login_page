document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const trailCount = 30;
    const trailElements = [];

    // Create trail elements
    for (let i = 0; i < trailCount; i++) {
        const trail = document.createElement('div');
        trail.classList.add('trail');
        body.appendChild(trail);
        trailElements.push(trail);
    }

    let mouseX = 0, mouseY = 0;
    let trailIndex = 0;

    // Update mouse position
    document.addEventListener('mousemove', (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    // Update trail positions
    function updateTrail() {
        trailElements[trailIndex].style.left = mouseX + 'px';
        trailElements[trailIndex].style.top = mouseY + 'px';

        trailIndex = (trailIndex + 1) % trailCount;

        requestAnimationFrame(updateTrail);
    }

    updateTrail();
});
