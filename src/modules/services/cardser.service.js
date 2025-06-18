import prisma from '../../prisma/prismaClient.js';

// create service
const createServiceIntoDb = async (Payload) => {
  const result = await prisma.service.create({ data: Payload });
  return result;
};

//  get service

const getAllServicefromDb = async () => {
  const result = await prisma.service.findMany();
  return result;
};

// get single card service

const getSingelCardService = async (id) => {
  const result = await prisma.service.findUnique({ where: { id } });
  return result;
};

// update service

const UpdateCardService = async (id, payLoad) => {
  const result = await prisma.service.update({
    where: { id },
    data: payLoad,
  });
  return result;
};

export const CardService = {
  createServiceIntoDb,
  getAllServicefromDb,
  getSingelCardService,
  UpdateCardService,
};
