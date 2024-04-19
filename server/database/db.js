const mongoose =require("mongoose");

const Connection = () =>{
    const MONGODB_URI = 'mongodb+srv://sharmanehul699:LY8xtcFdlswPRc4W@cluster0.lpa8sp3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

    mongoose.connect(MONGODB_URI, {useNewUrlParser: true });

    mongoose.connection.on("connected",()=>{
        console.log("Database connected successfully");
    })

    mongoose.connection.on("disconnected",()=>{
        console.log("Database disconnected");
    });

    mongoose.connection.on("error", ()=>{
        console.log("Error while connecting with database",error.message);
    })
}

module.exports = Connection;