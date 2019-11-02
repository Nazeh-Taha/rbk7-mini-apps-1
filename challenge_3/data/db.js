var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mini');
mongoose.connection.on('error', err => {
    logError(err);
  });

var chickSchema = mongoose.Schema({
    username: {type: String, trim: true, unique: true},
    email: {type: String, trim: true, unique: true},
    password: {type: String, trim: true},
    adress1: {type: String, trim: true},
    adress2: {type: String, trim: true},
    state: {type: String, trim: true},
    code: {type: Number, trim: true},
    phone: {type: Number ,trim: true},
    cardnum: {type: Number, trim: true, unique: true},
    exp: {type: Date},
    cvv: {type: Number, trim: true, unique: true},
    code1: {type: Number, trim: true},
    code2: {type: Number, trim: true}

});

let User = mongoose.model("User", chickSchema);

let savenazeh = (username,email,password)=> {
var rb = new User({
    username: username,
    email: email,
    password: password,
    // adress1: adress1,
    // adress2: adress2,
    // state: state,
    // code: code,
    // phone: phone,
    // cardnum: cardnum,
    // exp: exp,
    // cvv: cvv,
    // code1: code1,
    // code2: code2
    
});

rb.save();
}

module.exports.savenazeh = savenazeh;
module.exports.User = User;
