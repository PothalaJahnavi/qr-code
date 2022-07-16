const express=require("express");
const ejs=require("ejs");
const qrcode=require("qrcode");
const path=require("path");
const app=express();
//middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("view engine","ejs");
  //for style sheet
  app.use(express.static("public"));
app.set("views",path.join(__dirname,"views"));
app.get("/",(req,res,next)=>{
    res.render("index");
});
app.post("/final",(req,res,next)=>{
    const code=req.body.text;
    const url=qrcode.toDataURL(code,(err,src)=>{
        res.render("final",{qr:src,});
    
    });
});






const port=process.env.PORT||5000;
app.listen(port,()=>{
    console.log(`app is running on server ${port}`);
});