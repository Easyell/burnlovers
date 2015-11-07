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


module.exports = {
    makeIdentity:makeIdentity
}