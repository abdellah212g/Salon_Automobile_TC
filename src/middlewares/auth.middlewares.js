const Client = require('../models/client.model');
// const owner = require('../models/owner.model');

exports.roleClient = (req, res, next) => {
  res.Role = 'Client';
  next();
};
// exports.roleOwner = (req, res, next) => {
//   res.Role = 'owner';
//   next();
// };
exports.auth = async (req, res, next) => {
 
};
