/**
 * Created by guoshencheng on 11/9/15.
 */

var sprite = require('./sprite');

var fffStart = sprite.getMc({
    maxFrame: 2,
    preFix: 'fff_start',
    'position.set': [320, 800],
    'anchor.set': [0.5,1],
    'animationSpeed': 0.05,
    'scale.x': 1,
    'scale.y': 1
});

module.exports = fffStart;