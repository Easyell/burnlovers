/**
 * Created by zyg on 15/11/6.
 */
var hello = require('./example/hello');
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
    var hand = require('./sprites/hand');

    hand.play();

    var fff = require('./sprites/fff');

    fff.play();

    var fire = require('./sprites/torch');

    fire.play();
    var lovers = sprite.getIm({
         img: R.lovers,
        'position.set': [280,10],
        'scale.x': 1,
        'scale.y': 1
    })

    var close = require('./sprites/close');
    close.interactive = true;
    close.on('touchstart', function () {
        close.scale.x -= 0.1;
    });


    stage.addChild(close);
    stage.addChild(fire);
    stage.addChild(hand)
    stage.addChild(fff)
    stage.addChild(lovers)

    animate();
    function animate() {
        // render the stage container
        renderer.render(stage);

        requestAnimationFrame(animate);
    }

});