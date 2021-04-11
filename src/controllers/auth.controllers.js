const bcrypt = require("bcrypt");
const Joi = require("joi");
const Client = require("../models/client.model");
const {
  registerValidation,
  loginValidations,
} = require("../validations/auth.validation");

exports.registerController = async (req, res) => {
  // verification des input Joi
  const { error } = registerValidation(req.body);
  if (error)
    return res.status(400).json({ invalidData: error.datails[0].message });
  try {
    // if mail req.body.mail deja existant dans la base de donnée  -> error
    const ifEmailExist = await Client.findOne({ email: req.body.email });
    if (ifEmailExist)
      return res.status(400).json({ errorMail: "adress mail deja existante" });
    const newClient = new Client({
      ...req.body,
    });
    // save
    if (await newClient.save()) return res.status(200).json({ newClient });
  } catch (error) {
    res.status(400).json({ registerControllerError: error });
  }
  // catsh
  newClient.password = await bcrypt.hash(
    req.body.password,
    await bcrypt.genSalt(10)
  );
};
/////////////// login ///////////
exports.loginController = (req, res) => {
  const { error } = loginValidation(req.body);
  if (error)
    return res.status(400).json({ validationError: error.delails[0].message });
  try {
    // l'existance de l'adress mail et du modepasse
    clientInformation.findOne({ email: res.body.email });
  } catch (error) {
    console.log(error);
  }
};
/////////////// logout ///////////

exports.logoutController = (req, res) => {
  res.send("logout");
  
};
