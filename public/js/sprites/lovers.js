var sprite = require('./sprite');
var R = require('../resource')

//var lovers = sprite.getIm({
//    img: R.lovers,
//    'position.set': [280,10],
//    'scale.x': 1,
//    'scale.y': 1
//})

var loverBuilder = function(cb) {
    var lovers = sprite.getIm({
        img: R.lovers,
        'position.set': [280,10],
        'scale.x': 1,
        'scale.y': 1
    })
    lovers.direction = [0, 1]
    lovers.speed = 10

    lovers.move = function(dt) {

        this.x = this.x + this.direction[0] * this.speed * dt
        this.y = this.y + this.direction[1] * this.speed * dt
    };

    lovers.checkout = function() {
        if(lovers.y > (1004 - 122)) {
            cb()
        }
    }

    lovers.render = function(){
        this.move(0.1);
        this.checkout()
    }
    return lovers
}

module.exports = loverBuilder