var argon2 = require('argon2');
//import third party module
let hasher = {
    PasswordHash: async function(OriginalPassword){
        try{
            var hashedPassword = await argon2.hash(OriginalPassword);
            console.log(OriginalPassword);
            return hashedPassword;
        }
        catch(error){
            console.log("Something went wrong!")
        }
    },

    Matchpassword: async function (userGivenPassword , hashedPassword){
        let isPasswordMatched = false;
        try{
            if(await argon2.verify(hashedPassword , userGivenPassword)){
                isPasswordMatched = true;
            }
            else{
                isPasswordMatched = false;
            }
        } catch(error){
            console.log(error);
        }
        return isPasswordMatched;
    }
}

module.exports = hasher;