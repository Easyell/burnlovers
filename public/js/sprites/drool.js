/**
 * Created by zyg on 15/11/8.
 */
var sprite = require('./sprite');
var spriteTools = require('./spriteTools');

var droolBuild = function(config){
    if(!config){
        config = {
            x:320,
            y:320
        }
    }

    var drool = sprite.getMc(spriteTools.extend(config,{
        maxFrame:2,
        preFix:'drool',
        'anchor.set':[0.5,0.5],
        'scale.x':0.25,
        'scale.y':0.25,
        'loop':false
    }));

    drool.speed = 4;
    drool.direction  =spriteTools.makeIdentity([85-config.x,940-config.y]);

    //停留帧数
    drool.keeyTimes = 60;

    drool.fly = function(dt){
        this.x = this.x + this.direction[0] * this.speed * dt
        this.y = this.y + this.direction[1] * this.speed * dt

    };

    drool.hit = function(){
        if(this.y >= 940){
            return true;
        }
    }
    drool.hited = function(){
        if(this.keeyTimes > 0){
            this.keeyTimes--;
            this.scale.x = 0.5;
            this.scale.y = 0.5;

            this.gotoAndStop(1);

        }else{
            this.parent.removeChild(this);
        }
    }

    drool.render = function(){
        if(this.hit()){
            this.hited();
        }else{
            this.fly(2);
        }
    };

    return drool
};

module.exports = droolBuild;