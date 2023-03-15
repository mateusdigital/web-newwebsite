const imgs = document.querySelectorAll('img');

imgs.forEach(element => {
    element.addEventListener('mousemove', (e) => {
        // const x = e.pageX - element.offsetLeft;
        const y = e.pageY - element.offsetTop;

        const h = 50; // (x / element.offsetWidth) * 100;
        const v = (y / element.offsetHeight) * 100;

        element.style.objectPosition = `${h}% ${v}%`;
    });
});