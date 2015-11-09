/**
 * Created by guoshencheng on 11/9/15.
 */

var sprite = require('./sprites/sprite')
var R = require('./resource')

var stage = new PIXI.Container();

stage.clear = function () {
    stage.removeChildren()
}

stage.init = function(start) {
    var bg = sprite.getIm({
        img: R.startBackground,
        'position.set':[0,0],
        'width':640,
        'height':1004
    });
    var fffStart = require('./sprites/fffStart')
    fffStart.play()
    var torch = require('./sprites/startTorch');
    torch.play();
    var startButton = sprite.getIm({
        img: R.startButton,
        'position.set':[20,0]
    });
    startButton.interactive = true;
    startButton.on('touchstart', function () {
        start()
    });
    this.addChild(bg)
    this.addChild(torch)
    this.addChild(fffStart)
    this.addChild(startButton)
}

stage.render = function() {

}

module.exports = stage