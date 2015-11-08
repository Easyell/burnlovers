/**
 * Created by guoshencheng on 11/8/15.
 */

var sprite = require('./sprite')
var R = require('../resource')
var spriteTools = require('./spriteTools')

var landFireBuilder = function() {
    var landFire = sprite.getIm(spriteTools.extend({
        img: R.landFire,
        'scale.x': 0.3,
        'scale.y': 0.3,
        'anchor.set': [0.5, 0.5]
    }));

    landFire.restTime = 50

    landFire.render = function() {
        if(this.restTime <= 0) {
            this.parent.removeChild(this)
            this.destroy()
        } else {
            landFire.restTime --
        }
    }
    return landFire
}

module.exports = landFireBuilder;