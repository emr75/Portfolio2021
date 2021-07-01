window.onload = function () {
    var imgContainer = document.getElementsByClassName('image-container');
    var text = document.getElementsByClassName('event');

    imgContainer.addEventListener('mouseover', changeText);

    function changeText() {
        text.style.color = "red";
    }
};