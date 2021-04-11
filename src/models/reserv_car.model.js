const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const reservecarSchema = Schema({
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
  id_owner:{
    type:Schema.types.objectId,
    ref:'owner',
    required:true
  },
  proposed_reduction: {
    type: Number,
    required: true,
    default :false,
  },
  is_accepted: {
    type: Boolean,
    default:false,
  },

});

module.exports = model('reservecar', reservecarSchema);
