// exports.profileClient = (req,res)=>{

const ClientSchema = require("../models/client.model");
// }
exports.trycar = (req,res)=>{

}
exports.reservecar = (req,res)=>{
}
exports.reservecar = (req,res)=>{
}
exports.registerClient = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashdPassword = await bcrypt.hash(req.body.password, salt);
  new ClientSchema.create({
    first_name: req.body.firstname,
    last_name: req.body.lastname,
    cin: req.body.cin,
    email: req.body.email,
    phone: req.body.telephone,
    password: hashdPassword,
    global_tries: req.body.hashdPassword,
  }).then((user) => {
    res.redirect("/signIn");
    // res.json({ message: user });
  });
};
