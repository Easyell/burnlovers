/**
 * Created by zyg on 15/11/7.
 */
var flyingTorchBuild = require('../sprites/flyingTorch');

var stage = require('../stage');
var landFireBuilder = require('../sprites/landFire.js')

var defaultConfig = {
  before: [],
  after: [],
  progress: []
};

var checkShoot = function (x, y) {
  var i = 0,
    loversArr = stage.loversArr;

  while (i < loversArr.length) {
    var lovers = loversArr[i];
    if (Math.abs(lovers.x - x) < 40 && Math.abs(lovers.y - y) < 40) {
      loversArr.splice(i, 1);
      stage.removeChild(lovers)
      stage.burnCount ++
    } else {
      i++;
    }
  }

  stage.loversArr = loversArr;
};
//等于true，使之能够监听事件
stage.interactive = true;
stage.on('touchstart', function (e) {
  //before
  defaultConfig.before.forEach(function (fn) {
    fn()
  });

  var x = e.data.global.x;
  var y = e.data.global.y;

  var flyingTorch = flyingTorchBuild({
    tarx: x,
    tary: y,
    arrived: function (torch) {
      console.log('目标x:' + torch.tarx + ' 实际到达x：' + torch.x + '目标y:' + torch.y + ' 实际到达y：' + torch.tary);
      checkShoot(torch.x, torch.y)
      var landFire = landFireBuilder()
      landFire.x = torch.x
      landFire.y = torch.y + torch.height / 3
      landFire.scale.x = torch.scale.x + 0.1
      landFire.scale.y = torch.scale.y + 0.1
      stage.addChild(landFire)
    }
  });

  //console.log(+x,+y);
  //console.log(flyingTorch.direction);

  stage.addChild(flyingTorch);

  //after
  defaultConfig.after.forEach(function (fn) {
    fn()
  });
});

module.exports = function (throwLifeCb) {
  //记录插入的坐标
  var indexes = {};

  for (var period in defaultConfig) {
    var cb = throwLifeCb[period];
    if (cb) {
      indexes[period] = defaultConfig[period].push(cb) - 1;
    }
  }
  //remove
  return function () {
    for (var recordPeriod in indexes) {
      defaultConfig[recordPeriod].splice(indexes[recordPeriod], 1);
    }
  }
};