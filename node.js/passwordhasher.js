let hasher = {
    PasswordHash: function(originalPassword){
        let hashedPassword = 'abc';
        return hashedPassword;
    },
    Matchpassword: function(userGivenPassword , hashedPassword){
        let isPasswordMatched = false;
        return isPasswordMatched;
    }
}

module.exports = hasher;