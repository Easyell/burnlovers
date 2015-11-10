/**
 * Created by zyg on 15/11/10.
 */
var resource = 'cdn1';
var visit = 0;

module.exports = {
  getR:function(){
    return resource;
  },
  setR:function(r){
    resource = r;
  },
  count:function(notAdd){
    if(notAdd){
      return visit;
    }
    return visit++;
  }
};