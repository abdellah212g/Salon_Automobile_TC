const Joi = require('joi');

exports.registerValidation = async  (req,res)=>{
    // verification des input Joi 
 
    //try
    // if mail req.body.mail deja existant dans la base de donnée  -> error 
    // creation d'un nouveau cleint 
    //   - const newClient = new Client({})
    // save 
    //catsh
    const schema = Joi.object({
     first_name: Joi.string().required().trim(),
     last_name: Joi.string().required().trim(),
     cin: Joi.string().required().unique(),
     email: Joi.required().email().unique().trim(),
     phone: Joi.number().required().unique(),
     password: Joi.string().require(),
 });
 return schema.validation(data);
};

// export.login
exports.loginValidations = (data) => {
    const schema = Joi.object({
      email: Joi.string().email().required().trim(),
      password: Joi.string().required(),
    });
  
    return schema.validate(data);
  };