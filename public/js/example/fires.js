/**
 * Created by guoshencheng on 15/11/7.
 */

var Fire = {};

Fire.createSelf = function (cb) {
    PIXI.loader.add('/assets/fires/fires.json').load(function(){
        onAssertsLoad(cb)
    });

};

function onAssertsLoad(cb) {

        var frames = []
        for (var i = 0; i < 4; i++) {
            frames.push(PIXI.Texture.fromFrame('fire' + (i + 1) + '.png'))
        }
        Fire = new PIXI.extras.MovieClip(frames)
        Fire.position.set(300)
        Fire.anchor.set(0.5);
        Fire.loop = false;
        Fire.animationSpeed = 0.5;

        cb(Fire);
}

module.exports = Fire;