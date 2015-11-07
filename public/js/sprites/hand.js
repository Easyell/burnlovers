/**
 * Created by zyg on 15/11/7.
 */
var sprite = require('./sprite');

var hand = sprite.getMc({
    maxFrame: 8,
    preFix:'hand',
    'position.set': [130, 568],
    'anchor.set': [0, 1],
    'animationSpeed': 0.2,
    'loop':false,
    'scale.x': 0.3,
    'scale.y': 0.3
});

module.exports = hand;