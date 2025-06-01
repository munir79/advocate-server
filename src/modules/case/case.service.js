import prisma from "../../prisma/prismaClient.js"

const createCaseIntoDb=async(payLoad)=>{
    const result = await prisma.legalcase.create({data:payLoad});
    return result;
}

const getAllCaseFromDb=async()=>{
    const result =await prisma.legalcase.findMany();
    return result;
}


export const LegalCaseService={
    createCaseIntoDb,
    getAllCaseFromDb
}