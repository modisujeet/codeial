// import the user schema
const User = require('../models/user');

module.exports.profile = function(req, res){
    return res.render('user', {
            title : "User Profile"
    });
}

// ************** render the sign up pages ********

module.exports.signUp = function(req, res){
    return res.render('user_sign_up',{
        title : "codeial | Sign Up"
    })
}

// // ********** get the sign up data *************
// module.exports.create = function(req, res){
//     if(req.body.password != req.body.confirm_password){
//         return res.redirect('back');
//     }
//     User.findOne({email: req.body.email}, function(err, user){
//             if(err){console.log('error in finding user in signing up!'); return}

//             if(!user){
//                 User.create(req.body, function(err, user){
//                     if(err){console.log('error in creating user while signing up!'); return}

//                         return res.redirect('/users/sign-in');
//                 })
//             }else{
//                 return res.redirect('back');
//             }
//     });
// }




// ************ render the sign in pages ***********

module.exports.signIn = function(req, res){
    return res.render('user_sign_in', {
        title : "codeial | Sign In"  
    })
}