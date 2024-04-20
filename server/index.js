const express = require("express");
const path = require("path")
const bodyParser = require("body-parser");
const router = require("./routes/router.js"); // Use 'router' with a lowercase 'r'

const Connection = require("./database/db");

const app = express();


// Middleware to handle OPTIONS requests
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', router); 


app.use(express.static(path.join(__dirname,'..','public')))

app.get('/*',(req,res) => {
    res.sendFile(path.join(__dirname,'..','public','index.html'))
})


const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Your server is running successfully on ${PORT}`));

