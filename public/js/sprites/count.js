var stage = require('../stage');

var text = new PIXI.Text('已经烧死 ' + stage.burnCount + ' 对',{font : '24px Arial', fill : 0xffffff, align : 'center'});
text.x = 400
text.y = 60
text.render = function() {
    this.text = '已经烧死 ' + stage.burnCount + ' 对'
}

module.exports = function() {
    return text
}