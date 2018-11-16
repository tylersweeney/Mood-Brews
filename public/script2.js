app.all('.endpoint2', function (req, res){
    res.header("Access-Control-Allow-Origin", "https://localhost:3000");
    res.header("Access-Control-Allow-Headers");
    res.send('Hello from Endpoint2!')
});