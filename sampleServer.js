//creating a sample server
//1. http npm module use chyunnu
var http=require('http')
var fs=require('fs')
var url=require('url')

//sample serverinte 7000 nu parayunna portill run chyan
/*http.createServer(server).listen(7000)

// here server is the callback funtion which run whenever there is a request from client
function server(req,res){
    //req ill request varunna deviceliil ninnula pala pala details
    //res ill enth response aa vendath ennula detail
    res.write("Hello")
    res.end()//it tells browser that it completed the response
}
//but a lot of time the callback function is written as argument in the create server function
http.createServer(function(req,res){
    res.write("heyy")
    res.end()
}).listen(7000)*/
//you need to restart server if you make any changes her . to stop use ctrl+c

//serving an html file and setting route



http.createServer(function(req,res){
    var q=url.parse(req.url,true)
    console.log(q.pathname)

    if(q.pathname==='/'){


    fs.readFile('ilearn.html',function(err,data){
        res.writeHead(200,{"content-type":'text/html'})
        res.write(data)
        res.end()
    })
    
}else if(q.pathname==='/signup'){
    fs.readFile('signup.html',(err,data)=>{
        res.write(data)
        res.end() 
    })
}else if(q.pathname==='/signupaction'){
    console.log(q.query)
    console.log(q.query.fname)
    res.writeHead(200,{"content-type":'text/html'})
    res.write("<h1>helloo "+q.query.fname+"</h1>")
    res.end()


}else{
    res.writeHead(404,{"content-type":"text/html"})
    res.write('error')
    res.end()
}
}).listen(7000,()=>console.log("server running..."))