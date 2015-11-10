/**
 * Created by zyg on 15/11/10.
 */
var resource = 'cdn1';

module.exports = {
  getR:function(){
    return resource;
  },
  setR:function(r){
    resource = r;
  }
};