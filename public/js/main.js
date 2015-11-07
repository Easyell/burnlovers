/**
 * Created by zyg on 15/11/6.
 */
var hello = require('./example/hello');
var sprite = require('./sprite');
//var fire = require('./example/fires');
var torchLoad = require('./example/torch');

var renderer = new PIXI.WebGLRenderer(screen.width, screen.height);
document.body.appendChild(renderer.view);

var stage = new PIXI.Container();


var l = require('./loader');
l(function () {

    var fire = sprite.getMc({
        maxFrame:4,
        preFix:'fire',
        'position.set':160,
        'anchor.set':0.5,
        'animationSpeed':0.5
    });

    fire.play();

    fire.scale.x = 0.3;
    fire.scale.y = 0.3;

    stage.addChild(fire);

    animate();


    function animate() {
        // render the stage container
        renderer.render(stage);

        requestAnimationFrame(animate);
    }

})


//fire.createSelf(function(fire) {
//    fire2 = fire;
//    fire.scale.x = 0.3
//    fire.scale.y = 0.3
//    stage.addChild(fire)
//
//    animate();
//});
//
//
//setInterval(function(){
//    if(fire2){
//        fire2.play();
//    }
//},500);