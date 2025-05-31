import prisma from '../../prisma/prismaClient.js';

const CreateAdvocateService = async (advocateData) => {
  try {
    const advocate = await prisma.advocate.create({
      data: advocateData,
    });
    return advocate;
  } catch (err) {
    console.log(err);
    throw new Error(' Failed to create Advocate ');
  }
};

// get all advocate Service

const getAllAdvocateServices = async () => {
  try {
    const advocates = await prisma.advocate.findMany();
    return advocates;
  } catch (err) {
    throw new Error(' failed to fetched advocate ');
  }
};

//  get single advocate data

const getSingleAdvocateServices = async (id) => {
  try {
    const advocate = await prisma.advocate.findUnique({
      where: { id: id },
    });
    return advocate;
  } catch (err) {
    throw new Error('Failed to fetched Advocate ');
  }
};

export const AdvocateService = {
  CreateAdvocateService,
  getAllAdvocateServices,
  getSingleAdvocateServices,
};
