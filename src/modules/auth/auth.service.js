import bcrypt from 'bcrypt'
import prisma from '../../prisma/prismaClient.js';

const registarUser=async(userData)=>{
   try{
     const hashPassword=await bcrypt.hash(userData.password,10);
    const isExist=await prisma.user.findUnique({
        where:{email:userData.email},
    });

    if(isExist){
        throw new Error(400, " user Already Exissts");
    };

    const CretaeUser=await prisma.user.create({
        data :{
            name:userData.name,
            email:userData.email,
            password:hashPassword
        }
    })

    return CretaeUser

   }
   catch(err){
    throw new Error("failed to create user ");

   }

}


export const AuthService={registarUser};