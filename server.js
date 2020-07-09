const express=require('express');
const dotenv=require('dotenv');
const router=require('./router/router');

// Exporting the database connection function

const db=require('./database/db');

// Initiliazing the express library

const app=express();

// Configuration for json files to be sent and accepted

app.use(express.json());

// Configuring the .env file 

dotenv.config({path: './node.env'});

// Using the router middleware
app.use('',router);

let port = 5000 | process.env.PORT;

db();
app.listen(port,()=>
{
    console.log(`Server started at port: ${port}`)
})

