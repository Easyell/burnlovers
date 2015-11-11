var stage = require('../stage');
var htmlTitle = document.querySelector('title');
var text = new PIXI.Text('已经烧死 ' + stage.burnCount + ' 对',{font : '24px Arial', fill : 0xffffff, align : 'center'});

function changeTitle (count) {
    var p
    if (count > 200 * 0.99) {
        p =  99 + '%'
    } else {
        p = count / 200 * 100 + '%'
    }
    var title = '我成功烧掉' + count + '对情侣,击败了' + p + '的单身狗';
    htmlTitle.innerText = title;
}

text.x = 400
text.y = 60
text.render = function() {
    this.text = '已经烧死 ' + stage.burnCount + ' 对'

    changeTitle(stage.burnCount);
}

module.exports = function() {
    return text
}