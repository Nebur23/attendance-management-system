import User from "../model/User.js";
import bcrypt from 'bcrypt';
import * as validate from '../Utils/validate.js'

export const Register = async (req, res) => {
    try {
      const { error } = validate.register(req.body);
      if (error)
        return res.status(400).json({ message: error.details[0].message});
      const nameExists = await User.findOne({ email: req.body.name });
      if (nameExists) return res.status(400).json({ message: "name exists already" });
      const salt = await bcrypt.genSalt(10);
      const hashedPassword =await bcrypt.hash(req.body.password, salt);
      const user =userModel({
        name:req.body.name,
        password:hashedPassword,
      });
      await user.save();
      res.status(200).json({ message: "user successfully registered" });
    } catch (err) {
      res.status(500).json({ message: "error" });
      console.log(err);
    }
  };
  export const Login=async(req,res)=>{
    try {
    const { error } = validate.login(req.body);
    if (error) return res.status(400).json(error.details[0].message);
    const user = await User.findOne({ name: req.body.name });
    const validPassword = await bcrypt.compare(req.body.password,user.password);
    if (!user || !validPassword ) {
        return res.status(400).json("Invalid credentials")
      }
    else{
      return res.status(200).json("Successfully Login")
    }
  
      
      
    } catch (error) {
        res.status(500).json({ message: "error" });
        console.log(err);
    }





}