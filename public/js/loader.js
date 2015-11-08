/**
 * Created by zyg on 15/11/7.
 */

var r = require('./resource');

module.exports = function (cb) {

    var loader = PIXI.loader; // pixi exposes a premade instance for you to use.

    for (var k in r) {
        loader.add(k, r[k]);
    }

    loader.on('progress', function (a, b) {
        console.log.apply(console, arguments);
    });

    loader.once('complete', cb);

    loader.load();
};