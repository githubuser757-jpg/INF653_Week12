// mongodb+srv://badams2:AXTBsGsb1RJN77IJ@cluster0.jtfqpdp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const mongoose = require('mongoose');

const connetDB = async() =>{
    try{
        await mongoose.connet(process.env.DATABASE_URL,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    } catch(e)
    {
        console.log(e);
    }
}

module.exports = connectDB;