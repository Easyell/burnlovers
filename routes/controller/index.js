/**
 * Created by zyg on 15/11/6.
 */
var policy = require('../policy');
var config = require('../config');

module.exports = {
  index:[policy('fromWX'),function(req,res){
    res.render('index',{
      position:config.getR()
    });
  }]
};