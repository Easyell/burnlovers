/**
 * Created by zyg on 15/11/6.
 */
var policy = require('../policy');
var config = require('../config');

module.exports = {
  index:[policy('fromWX'),function(req,res){

    config.count();

    res.render('index',{
      position:config.getR(),
      env:process.env.NODE_ENV
    });
  }]
};