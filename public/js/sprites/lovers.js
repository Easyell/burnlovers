var sprite = require('./sprite');
var R = require('../resource')
var lovers = sprite.getIm({
    img: R.lovers,
    'position.set': [280,10],
    'scale.x': 1,
    'scale.y': 1
})
lovers.direction = [0, 0]
lovers.speed = 0
lovers.move = function(dt) {
    lovers.x = lovers.direction[0] * lovers.speed * dt
    lovers.y = lovers.direction[1] * lovers.speed * dt
}

module.exports = lovers;