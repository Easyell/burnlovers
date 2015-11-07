/**
 * Created by zyg on 15/11/7.
 */
var flyingTorch = require('../sprites/flyingTorch');
var spriteTools = require('../sprites/spriteTools');

var stage = require('../stage');

var defaultConfig = {
    before: [],
    after: [],
    progress: []
};

stage.on('touchstart', function (e) {
    //before
    defaultConfig.before.forEach(function(fn){fn()});

    var x = e.data.global.x;
    var y = e.data.global.y;

    flyingTorch.x = 160;
    flyingTorch.y = 870;

    //flyingTorch.throwX = flyingTorch.x;
    //flyingTorch.throwY = flyingTorch.y;

    flyingTorch.direction = spriteTools.makeIdentity([parseInt(x-160),parseInt(y-870)]);

    console.log(+x,+y);
    console.log(flyingTorch.direction);

    stage.addChild(flyingTorch);

    //after
    defaultConfig.after.forEach(function(fn){fn()});
});

module.exports = function (throwLifeCb) {
    //记录插入的坐标
    var indexes = {};

    for(var period in defaultConfig){
            var cb = throwLifeCb[period];
            if (cb) {
                indexes[period] = defaultConfig[period].push(cb) - 1;
            }
    }
    //remove
    return function(){
        for(var recordPeriod in indexes){
            defaultConfig[recordPeriod].splice(indexes[recordPeriod],1);
        }
    }
};