import prisma from "../../prisma/prismaClient.js"


const CreateHeroDataIntoDb=async(payLoad)=>{
    const result =await prisma.hero.create({data:payLoad});
     return result;
}

//  get hero data 

const GetHeroDataFromDb=async()=>{
    const result= await prisma.hero.findMany();
    return result;
}

export const HeroService={CreateHeroDataIntoDb ,GetHeroDataFromDb}