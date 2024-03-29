var http = require('http');
var fs = require('fs');
//create server 
var server = http.createServer(function (request, response) {

   var FileName = "story.txt";

   fs.open(FileName,"r",function(error,file_handler){
        // file_handler has reference of the opened file.
        // error is null in case of file opened successfully otherwise it has error
        if(error)
        {
            response.writeHead(404,{'content-type':'text/html'});
            response.write('File not found');
            response.end();

        }
        else 
        {
            //now read data from file.
            let bucketSize = 8192;
            let bucket = new Buffer.alloc(bucketSize);

            fs.read(file_handler,bucket,0,bucketSize,0,function(error,bytesRead){
                if(error)
                {
                    response.writeHead(404,{'content-type':'text/html'});
                    response.write('Error in Reding file');
                }
                else 
                {
                    response.writeHead(200,{'content-type':'text/html'});
                    response.write(bucket.toString());
                }

                fs.close(file_handler);
                response.end();
            });
        }
   });
});
server.listen(5000);
console.log('ready to accept request.....');

// fs.open(path, flags[, mode], callback): This method is used to open a file. It takes a file path (path) as its first argument, flags as the second argument, an optional mode (file permission) as the third argument, and a callback function as the last argument. The flags parameter specifies the behavior of the file opening. For example, you can use 'r' for reading or 'w' for writing. The callback function is called with an error if an error occurs or a file descriptor if the file is successfully opened.

// fs.read(fd, buffer, offset, length, position, callback): This method is used to read data from an open file. It takes a file descriptor (fd) as its first argument (obtained from fs.open), a buffer to store the data, the offset in the buffer at which to start writing the data, the number of bytes to read, the position in the file from which to start reading, and a callback function. The callback function is called with an error if an error occurs or the number of bytes read and the buffer containing the data.

// fs.close(fd, callback): This method is used to close an open file. It takes a file descriptor (fd) as its first argument and a callback function. The callback function is called with an error if an error occurs or null if the file is successfully closed.