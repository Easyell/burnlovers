/**
 * Created by zyg on 15/11/7.
 */
var sprite = require('./sprites/sprite');
var R = require('./resource')
var stage = new PIXI.Container();

var generateLovers = function(stage, x) {
    var lovers = require('./sprites/lovers')(x)
    lovers.play()
    stage.loversArr.push(lovers)
    stage.addChild(lovers);
    //console.log('增加后：' + loversArr.length)
}

var randomLovers = {
    0: function(stage) {
        generateLovers(stage, 0)
    },
    1: function(stage) {
        generateLovers(stage, 1)
    },
    2: function(stage) {
        generateLovers(stage, 2)
    },
    3: function(stage) {
        generateLovers(stage, 0)
        generateLovers(stage, 2)
    },
    4: function(stage) {
        generateLovers(stage, 0)
        generateLovers(stage, 1)
    },
    5: function(stage) {
        generateLovers(stage, 1)
        generateLovers(stage, 2)
    },
    6: function(stage) {
        generateLovers(stage, 0)
        generateLovers(stage, 1)
        generateLovers(stage, 2)
    }
}

stage.clear = function() {
    stage.removeChildren()
    stage.parent.removeChild(stage)
    this.visible = false
}

stage.init = function() {
    stage.loversArr = []
    stage.timer = 0
    this.visible = true
    this.burnCount = 0
    this.progress = 0
    var count = require('./sprites/count')()
    var hand = require('./sprites/hand');

    hand.play();

    var fff = require('./sprites/fff');

    fff.play();

    var torch = require('./sprites/torch');

    torch.play();

    var endProgress = require('./sprites/endProgress')


    var bg = sprite.getIm({
        img: R.background,
        'position.set':[0,0],
        'width':640,
        'height':1004
    });
    var throwTorch = require('./actions/throwTorch')
    throwTorch({
        before:function(){
            console.log('beforeTorch');
            hand.gotoAndPlay(0);
            torch.rf = 2
        }
    })
    this.addChild(bg);
    this.addChild(endProgress)
    this.addChild(torch);
    this.addChild(hand)
    this.addChild(fff)
    this.addChild(count)
}

stage.render = function() {
    if(stage.timer % 120 == 0) {
        var r = parseInt(Math.random() * 7)
        randomLovers[r](stage)
    }
    stage.timer ++
    stage.children.forEach((function(child){
        if(child.render){
            child.render();
        }
    }));
}

module.exports = stage;

