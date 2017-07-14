/**
 * Created by user on 7/14/2017.
 */

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var heroSchema = new Schema({
    name : {type : String,
            required : true},
    power : String
});

module.exports = mongoose.model('Hero', heroSchema);