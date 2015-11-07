/**
 * Created by zyg on 15/11/7.
 */
var isLoaded = false;

var waitingFnStack = [];

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

var whenAssetsLoaded = function (config, assesLoadedEnd) {

    return function () {
        isLoaded = true;


        waitingFnStack.push({
            config: config,
            callback: assesLoadedEnd
        });

        waitingFnStack.forEach(function (fn) {
            if (fn.callback) {
                var fire = frameBuild(fn.config);
                fn.callback(fire);
            }
        });
    }
};

module.exports = function (config, cb) {

    if (!isLoaded) {
        PIXI.loader.add('/assets/fires/fires.json').load(whenAssetsLoaded(config, cb));
    } else {
        whenAssetsLoaded(config, cb)();
    }

    return function (config, fn) {

        if (!isLoaded) {
            waitingFnStack.push({
                config: config,
                callback: fn
            })
        } else {
            whenAssetsLoaded(config, fn)();
        }
    }
};