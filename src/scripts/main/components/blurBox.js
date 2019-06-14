function blurBox () {
    let cb = () => document.querySelectorAll('.blur-box__outer').forEach((elem) => {
        let timer;
        elem.onmouseout = () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                window.addEventListener('mousemove', watching);
            }, 300);
        };

        elem.onmouseover = () => {
            clearTimeout(timer);
            window.removeEventListener('mousemove', watching);
            elem.style.top  = '0%';
            elem.style.left = '0%';
        };

        function watching(event) {
            let percentX = event.clientX / window.outerWidth;
            let percentY = event.clientY / window.outerHeight;
            let top;
            let left;

            top  = percentY * 10 - 5;
            left = percentX * 10 - 5;

            requestAnimationFrame(() => {
                elem.style.top = top + '%';
                elem.style.left = left + '%';
            });
        }
    });
    respondFrom(breakpoint.small, cb, true);
}