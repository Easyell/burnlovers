/**
 * Created by zyg on 15/11/7.
 */

var makeIdentity = function(a) {
    var b = Math.pow((Math.pow(a[0], 2) + Math.pow(a[1], 2)), 0.5);
    return [a[0] / b , a[1] / b]
}


var setValue = function(obj,key,value){
    if(key.length === 1){
        var k0 = key[0];
        if(typeof obj[k0] === 'function'){
            obj[k0].apply(obj,[].concat(value));
        }else{
            obj[k0] = value;
        }
    }else{
        setValue(obj[key.shift()],key,value);
    }
    return obj;
};

var setConfig = function(object,config){
    for(var k in config){
        setValue(object, k.split('.'),config[k]);
    }
    return object;
};

module.exports = {
    makeIdentity: makeIdentity,
    getMc:function(config){
        var maxFrame = config.maxFrame;
        var preFix = config.preFix;
        var         frames = [];

        delete config.maxFrame;
        delete config.preFix;

        for(var i=0;i<maxFrame;i++){
            frames.push(PIXI.Texture.fromFrame(preFix + (i + 1) + '.png'))
        }

        var mc = new PIXI.extras.MovieClip(frames);

        return setConfig(mc,config);
    },
    getIm:function(config){
        var img = config.img;

        delete config.img;

        var texture = PIXI.Texture.fromImage(img);
        var sp = new PIXI.Sprite(texture);

        return setConfig(sp,config);
    }
};