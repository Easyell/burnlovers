// Generated by CoffeeScript 1.8.0
var allowAll, path, wxReg;

path = require('path');

allowAll = true;

wxReg = /micromessenger/;

module.exports = function (req, res, next) {
  var isTest, iswx, userAgent;
  userAgent = req.headers['user-agent'];
  iswx = wxReg.test(userAgent.toLowerCase());
  isTest = req.query.isTest === 'true';
  if (iswx || isTest || allowAll) {
    return next(req, res);
  } else {
    return res.render('error/wxForbidden');
  }
};

//# sourceMappingURL=fromWX.js.map
