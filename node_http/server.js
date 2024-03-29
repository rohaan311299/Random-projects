const http=require("http");

const todos=[
    {
        id:1,
        text:"Todo 1"
    },
    {
        id:2,
        text:"Todo 2"
    },
    {
        id:3,
        text:"Todo 3"
    },
];

const server=http.createServer((req, res)=>{

    const {method, url}=req;

    // sending body data
    let body=[];

    req.on("data",chunk=>{
        body.push(chunk);
    }).on("end",()=>{
        body=Buffer.concat(body).toString();

        let status=404;
        const response={
            success:false,
            data:null
        }

        if(method==='GET' && url==="/todos"){
            status=200;
            response.success=true;
            response.data=todos;
        } else if(method==='POST' && url==='/todos'){
            const {id, text}=JSON.parse(body);

            if(!id || !text){
                status=400;
                response.error="Please add ID and Text"
            }else{
                todos.push({id, text});
                status=201;
                response.success=true;
                response.data=todos;
            }
        }

        res.writeHead(status,{
        "Content-Type":"application/json",
        "X-Powered-By":"Node.JS"
        });

        res.end(JSON.stringify(response));
    })

    
});

const PORT=5000;

server.listen(PORT, ()=>{
    console.log(`Server running on Port ${PORT}`);
});