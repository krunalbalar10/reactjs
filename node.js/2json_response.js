var http = require('http');

var server = http.createServer(function(request , response){
    var url = request.url;

    response.writeHead(200 , {'content-type':'application/json'});

    var data = {};

    if(url === '/poonam'){
        data = JSON.stringify([
            {
                name: "Pausha Purnima",
                date: "January 25, 2024",
                timings: "Purnima Tithi Begins - January 24, 2024 - 09:49 PM\nPurnima Tithi Ends - January 25, 2024 - 11:23 PM"
            },
            {
                name: "Magha Purnima",
                date: "February 24, 2024",
                timings: "Purnima Tithi Begins - February 23, 2024 - 03:33 PM\nPurnima Tithi Ends - February 24, 2024 - 05:59 PM"
            },
            {
                name: "Phalguna Purnima",
                date: "March 24, 2024",
                timings: "Purnima Tithi Begins - March 24, 2024 - 09:54 AM\nPurnima Tithi Ends - March 25, 2024 - 12:29 PM"
            },
            {
                name: "Chaitra Purnima",
                date: "April 23, 2024",
                timings: "Purnima Tithi Begins - April 23, 2024 - 03:25 AM\nPurnima Tithi Ends - April 24, 2024 - 05:18 AM"
            },
            {
                name: "Vaishakha Purnima",
                date: "May 23, 2024",
                timings: "Purnima Tithi Begins - May 22, 2024 - 06:47 PM\nPurnima Tithi Ends - May 23, 2024 - 07:22 PM"
            },
            {
                name: "Jyeshtha Purnima",
                date: "June 21, 2024",
                timings: "Purnima Tithi Begins - June 21, 2024 - 07:31 AM\nPurnima Tithi Ends - June 22, 2024 - 06: 37 AM"
            },
            {
                name: "Ashadha Purnima",
                date: "July 21, 2024",
                timings: "Purnima Tithi Begins - July 20, 2024 - 05:59 PM\nPurnima Tithi Ends - July 21, 2024 - 03:46 PM"
            },
            {
                name: "Shravana Purnima",
                date: "August 19, 2024",
                timings: "Purnima Tithi Begins - August 19, 2024 - 03:04 AM\nPurnima Tithi Ends - August 19, 2024 - 11:55 PM"
            },
            {
                name: "Bhadrapada Purnima",
                date: "September 17, 2024",
                timings: "Purnima Tithi Begins - September 17, 2024 - 11:44 AM\nPurnima Tithi Ends - September 18, 2024 - 08:04 AM"
            },
            {
                name: "Sharad Purnima",
                date: "October 17, 2024",
                timings: "Purnima Tithi Begins - October 16, 2024 - 08:40 PM\nPurnima Tithi Ends - October 17, 2024 - 04:55 PM"
            },
            {
                name: "Kartik Purnima",
                date: "November 15, 2024",
                timings: "Purnima Tithi Begins - November 15, 2024 - 06:19 AM\nPurnima Tithi Ends - November 16, 2024 - 02:58 AM"
            },
            {
                name: "Margashirsha Purnima",
                date: "December 15, 2024",
                timings: "Purnima Tithi Begins - December 14, 2024 - 04:58 PM\nPurnima Tithi Ends - December 15, 2024 - 02:31 PM"
            }
        ]);
    }
    response.write(data);
    response.end();
});

server.listen(5000);
console.log('server is ready...............')