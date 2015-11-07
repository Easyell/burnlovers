/**
 * Created by zyg on 15/11/7.
 */
var sprite = require('./sprite');

var torch = sprite.getMc({
    maxFrame: 4,
    preFix: 'fire',
    'position.set': [300,520],
    'anchor.set': [1,1],
    'animationSpeed': 0.5,
    'scale.x': 0.3,
    'scale.y': 0.3
});

module.exports = torch;