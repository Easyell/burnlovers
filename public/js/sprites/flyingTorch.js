/**
 * Created by zyg on 15/11/7.
 */
var sprite = require('./sprite');
var R = require('../resource');

var flyingTrace = function(x){


};

var flyingTorch = sprite.getIm({
    img: R.flyingTorch,
    'scale.x':0.15,
    'scale.y':0.15,
    'anchor.set':[0.5,0.5]
});

flyingTorch.fly = function(){

};

flyingTorch.render = function(){

};

module.exports = flyingTorch;