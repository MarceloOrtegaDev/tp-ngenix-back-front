import { userModel } from "../models/userModel";
import { Request, Response } from "express";


export const registerUser= async (req:Request, res:Response)=>{
    try {
        const {email, password} = req.body
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.status(400).json({msg:"Error"})
        }
        const crearUsuario = await userModel.create({email, password})
        if(crearUsuario){
            return res.status(200).json({msg:"Usuario creado"})
        }
        return res.status(404).json({msg: "hubo un problema al crear el usuario"})
    } catch (error) {
        console.error(error)
    }
}

export const loginUser= async (req:Request, res:Response)=>{
    try {
        const {email, password} = req.body
        const user = await userModel.findOne({email, password})
        if(user){
            return res.status(200).json({msg:"Login exitoso"})
        }
        return res.status(401).json({msg: "Credenciales inválidas"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({msg: "Error en el servidor"})
    }
}