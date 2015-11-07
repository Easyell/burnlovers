/**
 * Created by zyg on 15/11/7.
 */
var flyingTorch = require('../sprites/flyingTorch');
var stage = require('../stage');

var defaultConfig = {
    before: [],
    after: [],
    progress: []
};

document.body.addEventListener('touchstart', function (e) {
    //before
    defaultConfig.before.forEach(function(fn){fn()});

    var touch = e.touches[0];
    console.log(touch.pageX, touch.pageY);

    flyingTorch.x = touch.pageX;
    flyingTorch.y = touch.pageY;

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