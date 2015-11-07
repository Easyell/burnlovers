/**
 * Created by zyg on 15/11/6.
 */
var hello = require('./example/hello');

var fire = require('./example/fires');

var renderer = new PIXI.WebGLRenderer(screen.width, screen.height);
document.body.appendChild(renderer.view);

var stage = new PIXI.Container();
fire.createSelf(function(fire) {
    fire.play();
    fire.scale.x = 0.3
    fire.scale.y = 0.3
    stage.addChild(fire)
    animate();
});

function animate() {
    // render the stage container
    renderer.render(stage);

    requestAnimationFrame(animate);
}