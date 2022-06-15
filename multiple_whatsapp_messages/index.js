const wbm=require("wbm");

wbm.start().then(async()=>{
  const phones=['+91 9820043494'];
  const message="Hello"
  await wbm.send(phones,message);
  await wbm.end();
}).catch(err=>console.log(err));