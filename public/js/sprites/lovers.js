var sprite = require('./sprite');
var R = require('../resource');
var lovers = sprite.getIm({
    img: R.lovers,
    'position.set': [280,10],
    'scale.x': 1,
    'scale.y': 1
})
module.exports = lovers;