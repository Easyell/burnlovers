/**
 * Created by zyg on 15/11/7.
 */
var flyingTorchBuild = require('../sprites/flyingTorch');

var stage = require('../stage');

var defaultConfig = {
    before: [],
    after: [],
    progress: []
};

var checkShoot = function(x, y) {
    var i = 0,
      loversArr = stage.loversArr.slice();
    try{

        while(i<loversArr.length){
            var lovers = loversArr[i];
            if(Math.abs(lovers.x - x) < 40 && Math.abs(lovers.y - y)) {
                loversArr.splice(i,1);
                stage.removeChild(lovers)
            }else{
                i++;
            }
        }
    }catch(e){
        console.error('e',e);
    }
    stage.loversArr = loversArr;
};

stage.on('touchstart', function (e) {
    //before
    defaultConfig.before.forEach(function(fn){fn()});

    var x = e.data.global.x;
    var y = e.data.global.y;

    var flyingTorch = flyingTorchBuild(x, y, function(torch) {
        console.log('目标x:' + torch.tarx + ' 实际到达x：' + torch.x +'目标y:'+ torch.y + ' 实际到达y：' + torch.tary);
        checkShoot(torch.x, torch.y)
    });

    //console.log(+x,+y);
    //console.log(flyingTorch.direction);

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