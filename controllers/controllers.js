const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

// Importing the User MongoDB Model
const User=require('../models/userSchema');

const registerStart=(req,res,next)=>
{
    bcrypt.hash(req.body.password,20).then(hashedPassword=>
        {
            const user=new User(
                {
                    email: req.body.email,
                    password: hashedPassword
                }
            )

            user.save().then((savedUser)=>
            {
             res.status(201).json(
                 {
                     message: 'New user created successfully',
                     id: savedUser._id
                 }
             )
            })
        }).catch(console.log);
}

const loginStart=(req,res,next)=>
{
    User.find({email: req.body.email}).then(user=>
        {
            bcrypt.compare(user.password,req.body.password).then(result=>
                {
                    if(!result)
                    {
                        return res.status(400).json(
                            {
                                message: 'The password you entered was incorrect'
                            }
                        )
                    }

                   const token=jwt.sign({id: user._id ,email: user.email},process.env.ENCR,{expiresIn: '1h'});

                   res.status(200).json(
                       {
                           message: 'Login Successfull',
                           token: token,
                           expiration: 3600
                       }
                   )

                }).catch(err=>
                    {
                        res.status(400).json(
                            {
                                message: 'The password you entered was incorrect'
                            }
                        ) 
                    })
        }).catch(err=>
            {
                res.status(404).json(
                    {
                        message: 'The user with the email you entered does not exist'
                    }
                )
            })
}


module.exports={
    login: loginStart,
    register: registerStart
}
