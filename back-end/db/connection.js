const mongoose = require("mongoose"); //importing mongoose

//-----------------connection creation and creating a new db------------------------
mongoose.set("strictQuery", false);
const connection = mongoose.connect("mongodb://127.0.0.1/Expense-Tracker", {
    useNewUrlParser: true, //for neglacting duplication warning
    // useUnifiedTopology: true,
})
    .then(db => {
        console.log("Database connection successfull");
        return db;
    }).catch(error => {
        console.log(error);}
    );

module.exports = connection;