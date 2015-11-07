/**
 * Created by zyg on 15/11/6.
 */
//var fire = require('./example/fires');
var spriteTools = require('./sprites/spriteTools');

var renderer = new PIXI.WebGLRenderer(640, 1004, {
        transparent:true
    }
);

document.body.appendChild(renderer.view);

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


    var lovers = require('./sprites/lovers')()
    lovers.direction = spriteTools.makeIdentity([0, 0])
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

    stage.addChild(close);
    stage.addChild(torch);
    stage.addChild(hand)
    stage.addChild(fff)
    stage.addChild(lovers);

    render(stage);
});

var render = function(){
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


