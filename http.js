const http = require('http');
const server = http.createServer((req, res) => {
    // console.log(req);
    if(req.url === "/"){
        res.end("welcome to our homepage")
    }
    else if(req.url === "/about"){
        res.end("welcome to our about page")
    }else{
        res.end(`
            <h1>Opps!</h1>
            <p>No pges found.</p>
            <a href = "/">go back home</a>
        `)
    }
    
});

server.listen(5000);