function $(id) {
    return document.getElementById(id);
}
const t = ['They look like the castles in fairyland. ',
    'If this is the case, then in the summer, everyone believed that dream, this is a truly fantasticseason. ',
    'You can see the beauty of the world.',
    'If this is the case, then in the summer, everyone believed that dream, this is a truly fantasticseason. ',
    'You can see the beauty of the world.',
    'The world that stops is only the scenery, and the scenery that goes forward is called the world.',
    'Wandering in the blue sky and white clouds, self landscape, self beautiful.'
]

window.onload = function() {
    var oLeft = $("left");
    var oRight = $("right");
    var p = $("p");
    var index = 0;
    var timer = null;
    var pic = $("pic").getElementsByTagName("li");
    var num = $("num").getElementsByTagName("li");
    var oDiv = $("wrap");

    oRight.onclick = function() {
        index++;
        if (index >= pic.length) {
            index = 0;
        }
        change(index);
    }
    oLeft.onclick = function() {
        index--;
        if (index < 0) {
            index = pic.length - 1;
        }
        change(index);
    }
    oDiv.onmouseover = function() {
        clearInterval(timer);
    }
    oDiv.onmouseout = function() {
        timer = setInterval(run, 2000); //鼠标移出后重新开始定时器
    }

    timer = setInterval(run, 4000); //定时器

    function run() { //用于定时器的函数
        index++;
        if (index >= pic.length) {
            index = 0;
        }
        change(index);
    }

    for (var i = 0; i < num.length; i++) {
        num[i].index = i; //把索引值存起来
        num[i].onmouseover = function() {
            change(this.index);
        }
    }

    function change(curindex) { //用于切换图片的函数
        for (var i = 0; i < pic.length; i++) {
            pic[i].style.display = "none";
            num[i].className = "";
        }

        p.innerHTML = t[curindex]

        pic[curindex].style.display = "block";
        num[curindex].className = "active";
        index = curindex;
    }
}