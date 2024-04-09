module.exports.add = function(request , response){
    let num1 = request.params.num1;
    let num2 = request.params.num2;
    
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    //addition
    let result = num1 + num2;
    response.send("addition = " + result);
}

module.exports.sub = function(request , response){
    let num1 = request.params.num1;
    let num2 = request.params.num2;
    
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    //subtraction
    let result = num1 - num2;
    response.send("subtraction = " + result);
}

module.exports.mul = function(request , response){
    let num1 = request.params.num1;
    let num2 = request.params.num2;
    
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    //multiplication
    let result = num1 * num2;
    response.send("multiplication = " + result);
}

module.exports.div = function(request , response){
    let num1 = request.params.num1;
    let num2 = request.params.num2;
    
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    //division
    let result = num1 / num2;
    response.send("division = " + result);
}

module.exports.si = function(request , response){
    if (request.body.amount === undefined || request.body.rate === undefined || request.body.year === undefined)
    {
        response.send("Amount , rate and Year is required");
    }

    else
    {
        let amount = parseInt(request.body.amount)
        let year = parseInt(request.body.year)
        let rate = parseInt(request.body.rate)
        let interest = (amount * rate * year)/100;
        response.send("Simple Interest = " + interest);
    }
}
