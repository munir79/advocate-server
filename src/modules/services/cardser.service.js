import prisma from "../../prisma/prismaClient.js"


// create service 
const createServiceIntoDb =async(Payload)=>{
    const result =await prisma.service.create({data:Payload});
    return result;
}

//  get service 

const getAllServicefromDb=async()=>{
    const result= await prisma.service.findMany();
    return result;


}


export const CardService={createServiceIntoDb,getAllServicefromDb}