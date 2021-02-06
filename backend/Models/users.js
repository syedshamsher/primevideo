const mongoose = require("mongoose")
const Schema = mongoose.Schema
const userSchema = new Schema({
    name: {
        type: String,
    },
    mobile: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    fav:  {
        type: Array,
    },
    subscription: {
        type: Boolean,
        default: false,
    }
},
    {
        versionKey: false
    }
)

module.exports = mongoose.model("Users", userSchema)