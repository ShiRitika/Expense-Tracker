const express = require("express");
const router = express.Router();
require("../db/connection");
const IncomeTransaction = require("../models/incomeModel");
const ExpenseTransaction = require("../models/expenseModel");

router.get("/",(req, res) => {
    res.send("hello from server side");
});

//post:http://localhost:8080/api/income
router.post("/api/income", (req, res) => {
    let { text, amount , date } = req.body;

    if( !text && !amount){
        return res.status(422).json({error: "plz fill field properly"});
    }

    const incomeTransaction = new IncomeTransaction({
        text,
        amount,
        date
    });

    incomeTransaction.save().then(() => {
        res.status(201).json({message: "income transaction successfully done"});
    }).catch((error) => res.status(400).json({error: `faild income transaction${error}`}));
});

//Get:http://localhost:8080/api/income
router.get("/api/income", async (req, res) => {
    try{
        let transactionData = await IncomeTransaction.find({});
        return res.json(transactionData);
    } catch(e){
        res.send(e);
    }
});

//Delete:http://localhost:8080/api/income
router.delete("/api/income", async (req, res) => {
    try {
        if(!req.body)res.status(404).json({message: "Request body not found"});
        await IncomeTransaction.deleteOne(req.body, function(error){
            if(!error)res.json(`income Record deleted${error}`);
        }).clone();
    } catch(e){
        res.send(e);
    }
});

//post:http://localhost:8080/api/expense
router.post("/api/expense", (req, res) => {
    let { text, amount, date } = req.body;

    if( !text && !amount){
        return res.status(422).json({error: "plz fill field properly"});
    }

    const expenseTransaction = new ExpenseTransaction({
        text,
        amount,
        date
    });

    expenseTransaction.save().then(() => {
        res.status(201).json({message: "expense transaction successfully done"});
    }).catch((error) => res.status(400).json({error: `faild expense transaction${error}`}));
});

//Get:http://localhost:8080/api/expense
router.get("/api/expense", async (req, res) => {
    try{
        let transactionData = await ExpenseTransaction.find({});
        return res.json(transactionData);
    } catch(e){
        res.send(e);
    }
});

//Delete:http://localhost:8080/api/expense
router.delete("/api/expense", async (req, res) => {
    try {
        if(!req.body)res.status(404).json({message: "Request body not found"});
        await ExpenseTransaction.deleteOne(req.body, function(error){
            if(!error)res.json(`expense Record deleted${error}`);
        }).clone();
    } catch(e){
        res.send(e);
    }
});

module.exports = router;