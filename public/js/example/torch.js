/**
 * Created by zyg on 15/11/7.
 */
var frameBuild = function (config) {

    var frames = [];

    for (var i = 0; i < 4; i++) {
        frames.push(PIXI.Texture.fromFrame('fire' + (i + 1) + '.png'))
    }

    var Fire = new PIXI.extras.MovieClip(frames);
    Fire.position.set(160);
    Fire.anchor.set(0.5);
    Fire.animationSpeed = 0.5;

    return Fire;
};

module.exports = function (config) {

    return frameBuild(config)
};