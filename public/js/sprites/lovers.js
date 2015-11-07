var sprite = require('./sprite');
var R = require('../resource')
<<<<<<< Updated upstream
=======

var lovers = sprite.getIm({
    img: R.lovers,
    'position.set': [280,10],
    'scale.x': 1,
    'scale.y': 1
})
>>>>>>> Stashed changes

var loverBuilder = function() {
    var lovers = sprite.getIm({
        img: R.lovers,
        'position.set': [280,10],
        'scale.x': 1,
        'scale.y': 1
    })
    lovers.direction = [0, 0]
    lovers.speed = 5

    lovers.move = function(dt) {
        lovers.x = lovers.x + lovers.direction[0] * lovers.speed * dt
        lovers.y = lovers.y + lovers.direction[1] * lovers.speed * dt
    }

    lovers.render = function(){
        this.move(0.1);
    }
    return lovers
}

module.exports = loverBuilder