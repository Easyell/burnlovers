/**
 * Created by guoshencheng on 11/9/15.
 */
/**
 * Created by zyg on 15/11/7.
 */
var sprite = require('./sprite');

var torch = sprite.getMc({
    maxFrame: 4,
    preFix: 'fire',
    'position.set': [430,700],
    'anchor.set': [0,1],
    'animationSpeed': 0.5,
    'scale.x': 0.5,
    'scale.y': 0.5
});

module.exports = torch;