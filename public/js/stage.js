/**
 * Created by zyg on 15/11/7.
 */
var sprite = require('./sprites/sprite');
var R = require('./resource')
var stage = new PIXI.Container();
var htmlTitle =document.querySelector('title');

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

function rate (count) {
    if (count > 200 * 0.99) {
        return 99 + '%'
    } else {
        return count / 200 * 100 + '%'
    }
}

stage.showEndMask = function() {
    stage.isEnd = true
    stage.interactive = false
    var mask = sprite.getIm({
        img: R.endMask,
        'position.set':[0,0],
        'width':640,
        'height':1004
    });
    var textStr = rate(stage.burnCount);
    var text = new PIXI.Text(textStr,{font : '50px Arial', fill : 0x000000, align : 'center'});
    text.x = 360
    text.y = 340

    var backButton = sprite.getIm({
        img: R.backButton,
        'anchor.set': [0.5, 0.5],
        'position.set':[320,550]
    });
    backButton.interactive = true
    backButton.on('touchstart', function(e) {
        stage.gameOver()
    })
    stage.addChild(mask)
    stage.addChild(backButton)
    stage.addChild(text)
}

stage.init = function() {
    stage.isEnd = false
    stage.interactive = true
    stage.loversArr = []
    stage.timer = 0
    stage.lg = 0 //lover group count
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
    endProgress.gotoAndStop(stage.progress)
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
    if(this.isEnd) {
        return
    }
    if(stage.timer % 120 == 0) {
        var r = parseInt(Math.random() * 7)
        randomLovers[r](stage)
        stage.lg ++
    }
    stage.timer ++
    stage.children.forEach((function(child){
        if(child.render){
            child.render();
        }
    }));
}

module.exports = stage;

