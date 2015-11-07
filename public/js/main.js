/**
 * Created by zyg on 15/11/6.
 */
var hello = require('./example/hello');
var sprite = require('./sprite');
//var fire = require('./example/fires');
var torchLoad = require('./example/torch');

var renderer = new PIXI.WebGLRenderer(screen.width, screen.height, {
        backgroundColor: 0x474747
    }
);
document.body.appendChild(renderer.view);

var stage = new PIXI.Container();

var R = require('./resource');

var l = require('./loader');

l(function (com) {
    var hand = sprite.getMc({
        maxFrame: 8,
        preFix:'hand',
        'position.set': [280, 568],
        'anchor.set': [1, 1],
        'animationSpeed': 0.2,
        'loop':false,
        'scale.x': 0.3,
        'scale.y': 0.3
    });
    hand.play();

    var fff = sprite.getMc({
        maxFrame: 2,
        preFix: 'fff',
        'position.set': [200, 580],
        'anchor.set': [1,1],
        'animationSpeed': 0.05,
        'scale.x': 0.5,
        'scale.y': 0.5
    });
    fff.play();

    var fire = sprite.getMc({
        maxFrame: 4,
        preFix: 'fire',
        'position.set': [300,520],
        'anchor.set': [1,1],
        'animationSpeed': 0.5,
        'scale.x': 0.3,
        'scale.y': 0.3
    });

    fire.play();


    var fire2 = sprite.getIm({
        img: R.ca,
        'position.set': [280,10],
        'scale.x': 0.15,
        'scale.y': 0.15
    });


    fire2.interactive = true;
    fire2.on('touchstart', function () {
        fire2.scale.x -= 0.1;
    });


    stage.addChild(fire2);
    stage.addChild(fire);
    stage.addChild(hand)
    stage.addChild(fff)

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