/**
 * Created by zyg on 15/11/6.
 */
var hello = require('./example/hello');
var sprite = require('./sprites/sprite')
//var fire = require('./example/fires');
var torchLoad = require('./example/torch');

var renderer = new PIXI.WebGLRenderer(screen.width, screen.height, {
        transparent:true
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

    var lovers = require('./sprites/lovers')
    lovers.direction = sprite.makeIdentity([-2, 0])
    lovers.speed = 2

    var close = require('./sprites/close');
    close.interactive = true;
    close.on('touchstart', function () {
        close.scale.x -= 0.1;
    });


    stage.addChild(close);
    stage.addChild(fire);
    stage.addChild(hand)
    stage.addChild(fff)
    stage.addChild(lovers);

    animate();
    function animate() {
        // render the stage container
        renderer.render(stage);
        lovers.move(0.1)

        requestAnimationFrame(animate);
    }

});