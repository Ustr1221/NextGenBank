const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema (
    {
        transactionId: {
            type: Number, 
            required: true
        },
        transactionType: {
            type: String,
            required: true 
        },
        description: {
            type: String,
            required: true
        },
        amount: {
            type: Schema.Types.Decimal128,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        accountNumber: {
            type: Number,
            required: true
        }
    }
);

const transaction = mongoose.model("transaction", userSchema);
module.exports = transaction;
