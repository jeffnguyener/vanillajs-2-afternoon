let mousePosition = { x: 0, y: 0 };
let drawId;

let getRandomNumber = function(min, max) {
    return Math.round(Math.random() * (max - min + 1)) + min;
};

window.addEventListener('mousemove', function(mouseMoveEvent) {
    mousePosition.x = mouseMoveEvent.pageX;
    mousePosition.y = mouseMoveEvent.pageY;
});

