const mongoose=require('mongoose');


const db = async ()=>
{

    try
    {
        const conn=await mongoose.connect(process.env.API,{
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            useCreateIndex: true
        }).then(()=>
        {
            console.log('MongoDB connection started');
        })
    
    }
    catch(err)
    {
      console.log('There was an error while connecting to MongoDB servers. For more info check the original error message: \n' + err)
    }
}

module.exports=db;