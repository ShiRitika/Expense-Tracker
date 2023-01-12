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
        type: Date,
        default: Date.now
    }
});

// const ExpenseTransaction_Model = new Schema({
//     id: {
//         type: Number,
//         default: "Anonymous"
//     },
//     text: {
//         type: String,
//         required: true,
//         default: "investment"
//     },
//     amount: {
//         type: Number,
//         required: true,
//     },
//     date: {
//         type: Date,
//         default: Date.now
//     }
// });

const IncomeTransaction = mongoose.model("IncomeTransaction", IncomeTransaction_Model);
// const ExpenseTransaction = mongoose.model("ExpenseTransaction", ExpenseTransaction_Model);

module.exports = IncomeTransaction;
// exports.default = IncomeTransaction;
// module.exports = {
//     IncomeTransaction,
//     ExpenseTransaction
// };