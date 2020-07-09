const mongoose=require('mongoose');


const userSchema=new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            minlength: [8,'Your email cannot contain less than 8 characters'],
            maxlength: [30, 'Your email has exceeded the maximum numbers of characters allowed.'],
            trim: true
        },
        password: 
        {
            type: String,
            required: true,
            trim: true
            // validate: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/
        }
    })

module.exports=mongoose.model('User',userSchema);