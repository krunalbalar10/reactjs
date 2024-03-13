function getCurrentDate()
{
    //create a local object of date class
    let today = new Date();
    let currentDate = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
    return currentDate;
}

function getCurrentTime() 
{
    let today = new Date();
    let currentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return currentTime;
}

function getCurrentDateTime(){
    let currentDateTime = getCurrentDate() + " " + getCurrentTime();
    return currentDateTime;
}

//call function

let currentDateTime = getCurrentDateTime();
console.log(currentDateTime);
console.log(getCurrentDate());
console.log(getCurrentTime());