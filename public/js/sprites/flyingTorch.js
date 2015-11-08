/**
 * Created by zyg on 15/11/7.
 */
var sprite = require('./sprite');
var R = require('../resource');
var spriteTools = require('./spriteTools');

var flyingTrace = function(x){


};

var setGravity = function (flyingTorch, tarx, tary) {
    flyingTorch.g = 0.05
    var distance = spriteTools.distance(flyingTorch.x, flyingTorch.y, tarx, tary)
    var times = parseInt(distance / flyingTorch.speed);
    flyingTorch.vup =  - flyingTorch.g * times / 2
};

var setConfig = function(flyingTorch, tarx, tary, cb){
    //flyingTorch.vup = 5
    flyingTorch.x = 160;
    flyingTorch.y = 870;
    flyingTorch.direction = spriteTools.makeIdentity([parseInt(tarx-160),parseInt(tary-870)]);
    flyingTorch.tarx = tarx
    flyingTorch.tary = tary
    flyingTorch.speed = 2;

    setGravity(flyingTorch, tarx, tary)

    flyingTorch.fly = function(dt){

        this.x = this.x + this.direction[0] * this.speed * dt
        this.y = this.y + this.direction[1] * this.speed * dt
        this.y = this.y + this.vup * dt
        this.vup = this.vup + this.g * dt
    };

    flyingTorch.render = function(){
        if(this.x < 0 || this.x > 640 ||
                (this.direction[0] < 0 && (this.x < this.tarx)) ||
                (this.direction[0] >= 0 && (this.x >= this.tarx))) {
            cb(this);
            this.parent.removeChild(this)
        }else{
            this.fly(2);
        }
    };

    return flyingTorch;
};

module.exports = function(tarx, tary, cb){
    var flyingTorch = sprite.getIm({
        img: R.flyingTorch,
        'scale.x':0.15,
        'scale.y':0.15,
        'anchor.set':[0.5,0.5]
    });

    return setConfig(flyingTorch, tarx, tary, cb);
};