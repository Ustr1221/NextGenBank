const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const accountSchema = new Schema(
    {
        accountNumber: {
            type: Number,
            required: true
        },
        accountType: {
            type: String,
            required: true
        },
        currentBalance: {
            type: Float32Array,
            required: true
        },
        userId: {
            type: Number,
            required: true
        }
    }
);
const account = mongoose.model("account", userSchema);
module.exports = account;