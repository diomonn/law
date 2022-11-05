(function() {
    const background = document.querySelectorAll('.background');
    const body = document.querySelector('body');
    const t = body.offsetWidth;
    const h = body.offsetHeight;
    const Random = function() {
        for (let i = 0; i < background.length; i++) {
            console.log();
            background[i].style.top = Math.floor(Math.random() * h - 200) + 'px'
            background[i].style.left = Math.floor(Math.random(200) * t - 200) + 'px'
        }
    }
    Random();
    setInterval(() => {
        Random()
    }, 5000)
})()