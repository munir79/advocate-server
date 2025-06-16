import prisma from "../../prisma/prismaClient.js"


const profileCreateIntoDb=async(payLoad)=>{
    try{
        const existings= await prisma.profile.findFirst();
    if(existings){
        throw new Error ("Profile information already existists")
    }

    const result= await prisma.profile.create({
        data:payLoad
    });
    return result;

    }
    catch (err){
        throw new Error(` filed to create profile . err message ${err.message}`)
    }
    
}



//  updated id 

const UpdatedProfileInDb=async(id ,payLoad)=>{
    try{
      
        const existingsProfile=await prisma.profile.findFirst({
            where:{id:id}
        })

        if(!existingsProfile){
            throw new Error("profile not found");
        }

        const  result=await prisma.profile.update({
            where:{id:id},
            data:payLoad
        })
        return result

    }
    catch(err){
      throw new Error(` Failed to update profile :${err.message}`)  
    }
}


const getSingleProfileFromDb=async(id)=>{
    try{
     const  result=await prisma.profile.findUnique({
        where:{id:id}

     });
     
     if(!result){
        throw new Error(" Profile not found ");
     }

     return result;

    }
    catch(err){
        throw new Error(` Failed do get Profile Data :${err.message} `)
    }
}

 export const ProfileService={profileCreateIntoDb,UpdatedProfileInDb,getSingleProfileFromDb};