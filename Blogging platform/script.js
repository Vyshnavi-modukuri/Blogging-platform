document.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        const img = item.querySelector('img');
        img.style.filter = 'brightness(1.0)';  // Darken image on hover
    });

    item.addEventListener('mouseout', () => {
        const img = item.querySelector('img');
        img.style.filter = 'brightness(0.7)';  // Restore image to default brightness
    });
});
