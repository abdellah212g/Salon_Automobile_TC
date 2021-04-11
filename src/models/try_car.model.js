const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const try_carSchema = Schema({
  id_car:{
      type:Schema.types.objectId,
      ref:'car',
      required:true
  },
  id_client:{
    type:Schema.types.objectId,
    ref:'client',
    required:true
},

});

module.exports = model('trycar', try_carSchema);
