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

    stage.interactive = true;

    throwTorch({
       before:function(){
           console.log('beforeTorch');
           hand.gotoAndPlay(0);
           torch.rf = 2
       }
    });

    var bg = sprite.getIm({
        img: R.background,
        'position.set':[0,0],
        'width':640,
        'height':1004
    });
    stage.addChild(bg);
    stage.addChild(close);
    stage.addChild(torch);
    stage.addChild(hand)
    stage.addChild(fff)
    generateLovers(stage, 230)
    render(stage);
});

var generateLovers = function(stage, x) {
    var lovers = require('./sprites/lovers')(x ,function () {
        stage.removeChild(lovers)
        lovers.destroy()
    })
    stage.addChild(lovers);
}

var timer = 0

var randomLovers = {
    0: function(stage) {
        generateLovers(stage, 30)
    },
    1: function(stage) {
        generateLovers(stage, 230)
    },
    2: function(stage) {
        generateLovers(stage, 430)
    },
    3: function(stage) {
        generateLovers(stage, 30)
        generateLovers(stage, 430)
    },
    4: function(stage) {
        generateLovers(stage, 30)
        generateLovers(stage, 430)
    },
    5: function(stage) {
        generateLovers(stage, 230)
        generateLovers(stage, 430)
    },
    6: function(stage) {
        generateLovers(stage, 30)
        generateLovers(stage, 230)
        generateLovers(stage, 430)
    }
}

var render = function(stage){
    function animate() {
        if(timer % 120 == 0) {
            var r = parseInt(Math.random() * 7)
            randomLovers[r](stage)
        }
        timer ++
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


