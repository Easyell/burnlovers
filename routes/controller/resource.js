/**
 * Created by zyg on 15/11/10.
 */
//开关
var config = require('../config');
module.exports = {
  change:function(req,res){
    var r = req.query.position;
    if(r){
      config.setR(r);
    }
    res.json({
      position:config.getR()
    });
  },
  count:function(req,res){
    res.json({
      count:config.count(true)
    })
  }
};