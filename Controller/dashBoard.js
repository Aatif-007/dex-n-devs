const userModel = require("../Models/userModel")

const dashboard = async(req,res) => {


    try{
        const data = await userModel.find();
        res.status(200).json({
            data
        })
    }

    catch(error) {
        res.status(400).json({
            message : error.message
        })
    }
}

module.exports = dashboard