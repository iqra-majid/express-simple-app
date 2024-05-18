const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000 
// specify on which port your app will run

const server = http.createServer((req,res)=>{
    //res.statusCode = 200;
    res.setHeader('Content-Type' , 'text-html')
    // which type of content is serverd by server 
    console.log(req.url)
    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString())
        //res.end(data.toString('utf8')); // Assuming utf8 encoding

    }
    else if(req.url == '/about'){
            res.statusCode = 200;
            const data = fs.readFileSync('about.html');
            res.end(data.toString())
    }
    else if(req.url == '/services'){
        res.statusCode = 200;
        const data = fs.readFileSync('services.html');
        res.end(data.toString())
    }
    else{
        res.statusCode = 404;
        res.end('<h1>This page is not found</h1>')
    }

})
 
server.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  })

  