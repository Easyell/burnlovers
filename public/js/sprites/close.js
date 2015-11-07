/**
 * Created by zyg on 15/11/7.
 */
/**
 * Created by zyg on 15/11/7.
 */
var sprite = require('./sprite');
var R = require('../resource');

var close = sprite.getIm({
    img: R.ca,
    'position.set': [280,10],
    'scale.x': 0.15,
    'scale.y': 0.15
});

module.exports = close;