const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const owner_carSchema = Schema({
  id_owner:{
    type:Schema.types.objectId,
    ref:'owner',
    required:true
},
  id_car:{
      type:Schema.types.objectId,
      ref:'car',
      required:true
  },
  id_place:{
    type:Schema.types.objectId,
    ref:'placecar',
    required:true
},

});

module.exports = model('ownercar', owner_carSchema);
