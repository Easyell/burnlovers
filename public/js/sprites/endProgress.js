/**
 * Created by guoshencheng on 11/10/15.
 */

var sprite = require('./sprite');

var endProgress = sprite.getMc({
    maxFrame: 11,
    preFix:'end_progress',
    'position.set': [200, 990],
    'anchor.set': [0, 1],
    'loop':false,
    'scale.x': 1,
    'scale.y': 1
});

module.exports = endProgress;