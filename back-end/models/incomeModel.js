const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//transactions => fields =>[{id, text, amount, date}]
const IncomeTransaction_Model = new Schema({
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
        require: true
    }
});

const IncomeTransaction = mongoose.model("IncomeTransaction", IncomeTransaction_Model);

module.exports = IncomeTransaction;