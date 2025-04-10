const mongoose = require('mongoose');

const noteShema = new mongoose.Schema({

//dev
    title:{
        type:String,
        required:true
    },

    content:{
        type: String,
        required:true

    }, 

    description:{
        type: String,
        required: false
    },

    pages:{
        type:Number,
        required: false
    }

}, {timestamps:true});

module.exports = mongoose.model('Note', noteShema)