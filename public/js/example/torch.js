/**
 * Created by zyg on 15/11/7.
 */
var isLoaded = false;

var whenAssetsLoaded = function (config, assesLoadedEnd) {

    return function () {
        isLoaded = true;

        if (assesLoadedEnd) {

            var frames = [];

            for (var i = 0; i < 4; i++) {
                frames.push(PIXI.Texture.fromFrame('fire' + (i + 1) + '.png'))
            }

            Fire = new PIXI.extras.MovieClip(frames);
            Fire.position.set(300);
            Fire.anchor.set(0.5);
            Fire.loop = false;
            Fire.animationSpeed = 0.5;

            assesLoadedEnd(Fire);
        }
    }
};

module.exports = function (config, cb) {
    if (!isLoaded) {
        PIXI.loader.add('/assets/fires/fires.json').load(whenAssetsLoaded(config, cb));
    } else {
        whenAssetsLoaded(config, cb)();
    }
};