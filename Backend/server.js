const http = require("http");
const app = require("./index");
const port = process.env.PORT || 3300
const server = http.createServer(app);

server.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}` )
})