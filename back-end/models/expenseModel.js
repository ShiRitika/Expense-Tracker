const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//transactions => fields =>[{id, text, amount, date}]
const ExpenseTransaction_Model = new Schema({
    text: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        require: true,
    },

});

const ExpenseTransaction = mongoose.model("ExpenseTransaction", ExpenseTransaction_Model);

module.exports = ExpenseTransaction;
