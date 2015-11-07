/**
 * Created by zyg on 15/11/7.
 */
var sprite = require('./sprite');

var torch = sprite.getMc({
    maxFrame: 4,
    preFix: 'fire',
    'position.set': [135,960],
    'anchor.set': [0,1],
    'animationSpeed': 0.5,
    'scale.x': 0.3,
    'scale.y': 0.3
});

torch.rf = 0

torch.tf = function() {

    if(this.rf <= 0) {
        this.x = 135, this.y = 960
        this.rotation = 0
    } else {
        if (this.rf <= 1) {
            this.x = 110, this.y = 980
            this.rotation = -0.5
        } else if (this.rf <= 2) {
            this.x = 135, this.y = 960
        }
        this.rf -= 0.3
    }
};

torch.render = function() {
    torch.tf()
};

module.exports = torch;