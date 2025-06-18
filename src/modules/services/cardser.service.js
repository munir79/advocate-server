import prisma from '../../prisma/prismaClient.js';

//1. create service
const createServiceIntoDb = async (Payload) => {
  const result = await prisma.service.create({ data: Payload });
  return result;
};

// 2. get service

const getAllServicefromDb = async () => {
  const result = await prisma.service.findMany();
  return result;
};

// 3.get single card service

const getSingelCardService = async (id) => {
  const result = await prisma.service.findUnique({ where: { id } });
  return result;
};

// 4.update service

const UpdateCardService = async (id, payLoad) => {
  const result = await prisma.service.update({
    where: { id },
    data: payLoad,
  });
  return result;
};


//5. delete card service 
const deletdCardSevice=async(id)=>{
    const result=await prisma.service.delete({where:{id}});
    return result ;
}

export const CardService = {
  createServiceIntoDb,
  getAllServicefromDb,
  getSingelCardService,
  UpdateCardService,
  deletdCardSevice
};
