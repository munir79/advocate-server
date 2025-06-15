import prisma from '../../prisma/prismaClient.js';

const CreateHeroDataIntoDb = async (payLoad) => {
  console.log('her create data ', payLoad);
  const result = await prisma.hero.create({ data: payLoad });
  return result;
};

//  get hero data

const GetHeroDataFromDb = async () => {
  const result = await prisma.hero.findMany();
  return result;
};

//

const UpdateHeroDataIntoDb = async (id, updateData) => {
  console.log(' updated Data', updateData);

  const result = await prisma.hero.update({
    where: { id },
    data: updateData,
  });

  return result;
};
export const HeroService = { CreateHeroDataIntoDb, GetHeroDataFromDb, UpdateHeroDataIntoDb };
