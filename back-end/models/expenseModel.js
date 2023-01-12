const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//transactions => fields =>[{id, text, amount, date}]
const ExpenseTransaction_Model = new Schema({
    text: {
        type: String,
        required: true,
        default: "investment"
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const ExpenseTransaction = mongoose.model("ExpenseTransaction", ExpenseTransaction_Model);

module.exports = ExpenseTransaction;
