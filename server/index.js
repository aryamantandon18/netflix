import express from 'express'
import mongoose from 'mongoose'
import ejs from 'ejs'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'
import path from 'path';            

mongoose.connect("mongodb://127.0.0.1:27017",{
    dbName:"netflix"
}).then(()=>{console.log("Database Connected")})
.catch((e)=>{
    console.error(e);
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});
const User = mongoose.model("users",userSchema);

const app = express();

app.set("view engine","ejs");
app.listen(5000, ()=>{
    console.log("Our server is working")
});

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(path.resolve(),"public")));
app.use(cookieParser());
app.use(express.json())
app.use(cors())

// const isAuthenticated = async(req,res,next)=>{
//    const {token} = req.cookies;
//    if(token){
//     let decoded = jwt.verify(token,"asdfjasskjdn");
//     req.user = await User.findById(decoded._id);
//     next();
//    }
//    else{
//     res.redirect("/login");
//    }
// }
    
// app.get("/",isAuthenticated,(req,res)=>{
//     // console.log(req.user);
//     res.render("logout",{name :req.user.name});
// });

// app.get("/login",(req,res)=>{
//     res.render("login");
// })

// app.get("/register",(req,res)=>{
//    res.render("register");
// });

app.post("/login" , async(req,res)=>{
    const {email,password} = req.body;
    User.findOne({ email })
    .then(user =>{
        if(user){
            if(user.password===password){
                res.json("success")
            }
            else {
                res.json("The passwor is incorrect")
            }
        }
       else{
        res.status(404).json("Not exist");
        // res.redirect("/register")
       }     
    })
    // if(!user) return res.redirect("/register");

    // const isMatch = user.password===password;
    // if(!isMatch) return res.send("Incorrect Password");

    // const token = jwt.sign({_id:user._id}, "asdfjasskjdn");
    // res.cookie("Token",token,{
    // httpOnly:true,
    // expires: new Date(Date.now()+ 60*1000)
    // })
});


app.post("/register", async(req,res)=>{
const {name,email,password}= req.body;

// let user = await User.findOne({email});
// if(user){
//     return res.redirect("/login")
// }

// user = await 
User.create({
    name,
    email,
    password,
}).then(data=>res.json(data))
.catch(err=>res.json(err));
})

// const token = jwt.sign({_id: user._id}, "asdfjasskjdn");
// res.cookie("Token",token,{
//     httpOnly:true,
//     expires: new Date(Date.now()+ 60*1000)
// })
// res.redirect("/");
// });

// app.get("/logout",(req,res)=>{
//     res.cookie("Token",null,{
//         httpOnly:true,
//         expires: new Date(Date.now())
//     })
//     res.redirect("/");
// });
