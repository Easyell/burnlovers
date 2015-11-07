/**
 * Created by zyg on 15/11/7.
 */
var isLoaded = false;

var waitingFnStack = [];

var waiting = function (config, fn) {
    var key = ['config', 'fn'];

    if (fn) {
        var waiting = {};
        waiting[key[0]] = config;
        waiting[key[1]] = fn;

        waitingFnStack.push(waiting)
    }

    return key;
};

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

        var key = waiting(config, assesLoadedEnd);

        waitingFnStack.forEach(function (fn) {
            var fire = frameBuild(fn[key[0]]);
            fn.callback(key[1]);
        });

        waitingFnStack = [];
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
            waiting(config, fn);
        } else {
            whenAssetsLoaded(config, fn)();
        }
    }
};