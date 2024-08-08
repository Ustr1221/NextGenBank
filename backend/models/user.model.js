const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        userId: {
            type: Number,
            unique: true,
            required: true
        },
        email: {
            type: String, 
            unique: true,
            required: true
        }, 
        password: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            requred: true
        },
        lastName: {
            type: String, 
            required: true
        }, 
        contactNumber: {
            type: String, 
            required: true
        }, 
        address: {
            type: String,
            required: true
        }
    }
);

const user = mongoose.model("user", userSchema);
module.exports = user;