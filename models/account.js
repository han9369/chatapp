/**
 * Created by han on 16/9/10.
 */
var mongoose = require('mongoose'),
    passportLocalMongoose = require('passport-local-mongoose'),
    Schema = mongoose.Schema;

var Account = new Schema({
    username:String,
    passowrd:String
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);