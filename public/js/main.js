/**
 * Created by zyg on 15/11/6.
 */
//var fire = require('./example/fires');
var sprite = require('./sprites/sprite');
var spriteTools = require('./sprites/spriteTools');

var renderer = new PIXI.WebGLRenderer(640, 1004, {
        transparent:true
    }
);

document.body.appendChild(renderer.view);

var loversArr = []

var stage = require('./stage');

var R = require('./resource');

var ready = require('./loader');

var throwTorch = require('./actions/throwTorch');

ready(function (com) {

    var hand = require('./sprites/hand');

    hand.play();

    var fff = require('./sprites/fff');

    fff.play();

    var torch = require('./sprites/torch');

    torch.play();
    var close = require('./sprites/close');
    close.interactive = true;
    close.on('touchstart', function () {
        close.scale.x -= 0.1;
    });
    stage.interactive = true

    throwTorch({
       before:function(){
           console.log('beforeTorch');
           hand.gotoAndPlay(0)
           torch.rf = 2
       }
    });


    var bg = sprite.getIm({
        img:'/assets/background/background_street2.png',
        'position.set':[0,0],
        'width':640,
        'height':1004
    });
    stage.addChild(bg);
    stage.addChild(close);
    stage.addChild(torch);
    stage.addChild(hand)
    stage.addChild(fff)
    generateLovers(stage)
    render(stage);
});

var generateLovers = function(stage) {
    var lovers = require('./sprites/lovers')( function () {
        lovers.speed = 0
    })
    stage.addChild(lovers);
}

var render = function(stage){
    function animate() {

        stage.children.forEach((function(child){
            if(child.render){
                child.render();
            }
        }));

        // render the stage container
        renderer.render(stage);

        requestAnimationFrame(animate);
    }
    animate();
};


