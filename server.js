const express = require('express')
const colors = require('colors')
const moragan = require('morgan')
const dotenv = require('dotenv');
const connectDB = require('./config/db');



//dotenv contig 
dotenv .config();
//mongodb connection
connectDB();

//rest ojject 
const app = express();

//middlewares 
app.use(express.json());
app.use(moragan("dev"));


app.use('/api/v1/user', require("./routes/userRoutes")); 


// port
const port = process.env.PORT || 8080 
//listen port
app.listen(port, ()=>{
    console.log(`Server Running in  Mode on port ${process.env.PORT}`
        .bgCyan.white
    );
});
