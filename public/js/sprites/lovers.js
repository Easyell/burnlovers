var sprite = require('./sprite');
var spriteTool = require('./spriteTools')
var R = require('../resource')
var config = require('../config')


var droolBuild = require('./drool');

var loverBuilder = function(type ,cb) {
    var cf = config.lovers[type]
    var lovers = sprite.getMc({
        maxFrame: 6,
        preFix: 'lovers',
        'position.set': [cf.x, 480],
        'animationSpeed': 0.2,
        'anchor.set': [0.5, 0.5],
        'scale.x': 0.5,
        'scale.y': 0.5
    })

    lovers.direction = spriteTool.makeIdentity(cf.direction)
    lovers.speed = 10

    lovers.dscale = 0.5 * lovers.speed / 5000

    lovers.move = function(dt) {
        this.scale.x += lovers.dscale
        this.scale.y += lovers.dscale
        this.x = this.x + this.direction[0] * this.speed * dt
        this.y = this.y + this.direction[1] * this.speed * dt
    };

    lovers.checkout = function() {
        if(!this.drooled && lovers.y > (1004 - 210)){
            console.log('吐口水啦');

            this.drooled = true;

            var drool = droolBuild({
                x:lovers.x,
                y:lovers.y
            });

            this.parent.addChild(drool,2);

        }

        if(lovers.y > (1004 - 70)) {
            var stage = this.parent;
            stage.removeChild(lovers)
            stage.loversArr.splice(stage.loversArr.indexOf(lovers), 1)
            lovers.destroy()
        }
    }

    lovers.render = function(){
        this.move(0.1);
        this.checkout()
    }
    return lovers
}

module.exports = loverBuilder