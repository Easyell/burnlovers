/**
 * Created by zyg on 15/11/6.
 */
var hello = require('./example/hello');

var fire = require('./example/fires');

var renderer = new PIXI.WebGLRenderer(screen.width, screen.height);
document.body.appendChild(renderer.view);

var fire2 = null;

var stage = new PIXI.Container();
fire.createSelf(function(fire) {
    fire2 = fire;
    fire.scale.x = 0.3
    fire.scale.y = 0.3
    stage.addChild(fire)

    animate();
});

function animate() {

    // render the stage container
    if(fire2){
        fire2.play();
    }
    renderer.render(stage);

    requestAnimationFrame(animate);
}

setInterval(function(){
    if(fire2){
        fire2.play();
    }
},500);