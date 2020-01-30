// import the user schema
const User = require('../models/user');

module.exports.profile = function(req, res){
        if(req.cookies.user_id){
            User.findById(req.cookies.user_id, function(err, user){
                if(user){
                    return res.render('user_profile',{
                        title : "user profile",
                        user : user
                    })
                }
                return res.redirect('/users/sign-in');
            });

        }else{ 
            return res.redirect('/users/sign-in');
        }
}

// ************** render the sign up pages ********

module.exports.signUp = function(req, res){
    return res.render('user_sign_up',{
        title : "codeial | Sign Up"
    })
}

// ********** get the sign up data *************
module.exports.create = function(req, res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email: req.body.email}, function(err, user){
            if(err){console.log('error in finding user in signing up!'); return}

            if(!user){
                User.create(req.body, function(err, user){
                    if(err){console.log('error in creating user while signing up!'); return}

                        return res.redirect('/users/sign-in');
                })
            }else{
                return res.redirect('back');
            }
    });
}




// ************ render the sign in pages ***********

module.exports.signIn = function(req, res){
    return res.render('user_sign_in', {
        title : "codeial | Sign In"  
    })
}

// sign in and create session for user
module.exports.createSession = function(req, res){
    // STEPS to AUTHENTICATION
    //1. find the user
        User.findOne({email : req.body.email} , function(err, user){
            if(err){console.log('error in creating user while signing In!'); return}

    //2. handle if the user found

                if(user){
     //3. handle password which doesn't match 
                        if(user.password != req.body.password){
                            return res.redirect('back');
                        }

    //4. handle session creation
                        res.cookie('user_id',user.id);
                        return res.redirect('./profile');

                }else{
    //5. handle if user not found
                    return res.redirect('back');
                }
            
        });
    }

