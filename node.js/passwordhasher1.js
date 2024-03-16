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

    Matchpassword: function(userGivenPassword , hashedPassword){
        let isPasswordMatched = false;
        return isPasswordMatched;
    }
}

module.exports = hasher;