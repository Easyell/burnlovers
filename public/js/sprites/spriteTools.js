/**
 * Created by zyg on 15/11/7.
 */
var makeIdentity = function(a) {
    if(a[0] == 0 && a[1] == 0) {
        return [0, 0]
    }
    var b = Math.pow((Math.pow(a[0], 2) + Math.pow(a[1], 2)), 0.5);
    return [a[0] / b , a[1] / b]
};

var distance = function(x1, y1, x2, y2) {
    return Math.pow((Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)), 0.5);
}

module.exports = {
    makeIdentity:makeIdentity,
    distance: distance
}