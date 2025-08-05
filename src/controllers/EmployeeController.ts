import  express  from "express"
import {User} from '../db/Model'
class EmployeeController{

    getAllEmployee=async(request:express.Request, response:express.Response)=>{
        try{
            const data=await User.find();
              response.render("index", { data });

        }catch(err){
            return response.send("not found data").status(400);
        }
    }

    getEmployee=async(request:express.Request, response:express.Response)=>{
        try{
            const {id}=request.params;
            const data=await User.findById(id);
              response.render("edit", { data });

        }catch(err){
            return response.send("not found data").status(400);
        }
    }

     CreateEmployee=async(request:express.Request, response:express.Response)=>{
        try{
            const {name,email,mobile,data}=request.body;
            const datas=new User({
                name,
                email,
                mobile,
                data
            });
            await datas.save();
            // return response.status(200).json({data:"created",msg:datas});
            response.redirect("/employee");

        }catch(err){
            return response.send("not found data").status(400);
        }
    }


      updateEmployee=async(request:express.Request, response:express.Response)=>{
        try{
            const {id}=request.params;
            const {name,email,mobile,data}=request.body;
            const update=await User.findById(id);
            if(update){
                update.name=name;
                update.email=email;
                update.mobile=mobile;
                update.data=data;
                await update.save();
                // return response.status(200).json({data:"created"});
                response.redirect("/employee");
            }
            // return response.status(200).json({data:"created",data:datas});
        }catch(err){
            return response.send("not found data").status(400);
        }
    }

      deleteEmployee=async(request:express.Request, response:express.Response)=>{
        try{
            const {id}=request.params;
            await User.findByIdAndDelete(id);
            // return response.status(200).json({data:"delete data"});
            response.redirect("/employee");

        }catch(err){
            return response.send("not found data").status(400);
        }
    }    
}

export default new EmployeeController();