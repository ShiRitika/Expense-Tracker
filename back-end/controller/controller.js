const model = require("../models/incomeModel");

//post:http://127.0.0.1:8080/api/income
// async function createCategories(req, res){
//     const Create = new model.IncomeTransaction({
//         id: {
//             type: Number,
//             default: "Anonymous"
//         },
//         text: {
//             type: String,
//             required: true,
//             default: "investment"
//         },
//         amount: {
//             type: Number,
//             required: true,
//         },
//         date: {
//             type: Date,
//             default: Date.now
//         }
//     });

//     await Create.save(function(error){
//         if(!error)return res.json(Create);
//         return res.status(400).json({message: `error while creating income transaction${error}`});
//     });
// }

//post:http://localhost:8080/api/income
async function create_IncomeTransaction(req, res){
    if(!req.body)return res.status(400).json("post HTTP Data not provided");
    let { id,text,amount } = req.body;

    const create = await new model.IncomeTransaction(
        {
            id,
            text,
            amount,
            date: new Date()
        }
    );

    create.save(function(error){
        if(!error)return res.json(create);
        return res.status(400).json({message: `error while creating income transaction ${error}`});
    });
}
module.exports = {
    // createCategories,
    create_IncomeTransaction
};