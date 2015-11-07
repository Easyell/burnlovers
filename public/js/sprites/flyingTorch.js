/**
 * Created by zyg on 15/11/7.
 */
var sprite = require('./sprite');
var R = require('../resource');

var flyingTrace = function(x){


};

var setConfig = function(flyingTorch){

    flyingTorch.direction = [0,0];
    flyingTorch.speed = 2;

    flyingTorch.fly = function(dt){

        this.x = this.x + this.direction[0] * this.speed * dt
        this.y = this.y + this.direction[1] * this.speed * dt
    };

    flyingTorch.render = function(){

        if(this.x < 0 || this.x > 640 || this.y < 0){
            this.parent.removeChild(this);
        }else{
            this.fly(2);
        }
    };

    return flyingTorch;
};

module.exports = function(){
    var flyingTorch = sprite.getIm({
        img: R.flyingTorch,
        'scale.x':0.15,
        'scale.y':0.15,
        'anchor.set':[0.5,0.5]
    });

    return setConfig(flyingTorch);
};