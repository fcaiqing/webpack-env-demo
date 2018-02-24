require("../css/main.scss");
require("../css/liMarquee.css");
document.addEventListener('DOMContentLoaded', function (e) {
    var title = document.querySelector('title');
    title.innerHTML = config.title;
})