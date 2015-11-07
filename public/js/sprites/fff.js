/**
 * Created by zyg on 15/11/7.
 */
var sprite = require('./sprite');

var fff = sprite.getMc({
    maxFrame: 2,
    preFix: 'fff',
    'position.set': [0, 1010],
    'anchor.set': [0,1],
    'animationSpeed': 0.05,
    'scale.x': 0.5,
    'scale.y': 0.5
});

module.exports = fff;