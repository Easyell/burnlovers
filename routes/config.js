/**
 * Created by zyg on 15/11/10.
 */
var resource = 'local';

module.exports = {
  getR:function(){
    return resource;
  },
  setR:function(r){
    resource = r;
  }
};