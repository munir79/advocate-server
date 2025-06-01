import bcrypt from 'bcrypt';
import prisma from '../../prisma/prismaClient.js';
import jwt from 'jsonwebtoken';

const JWT_SECRECTKEY = process.env.JWT_SECRET;
const registarUser = async (userData) => {
  try {
    const hashPassword = await bcrypt.hash(userData.password, 10);
    const isExist = await prisma.user.findUnique({
      where: { email: userData.email },
    });

    if (isExist) {
      throw new Error(400, 'user Already Exissts');
    }



    console.log("new ",userData)
    const CretaeUser = await prisma.user.create({
      data: {
        // name: userData.name,
        email: userData.email,
        password: hashPassword,
      },
    });

    return CretaeUser;
  } catch (err) {
    throw new Error('failed to create user ');
  }
};

// log in user

const loginUser = async (userData) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: userData.email },
    });
    if (!user) {
      throw new Error(404, ' user not found');
    }
    console.log("userdata from login user",userData);
    const isMatch = await bcrypt.compare(userData.password, user.password);
    if (!isMatch) {
      throw new Error(' incorrect password');
    }

    // create jwt token

    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
      },
      JWT_SECRECTKEY,
      {
        expiresIn: '7d',
      }
    );

    //remove password before returning
    const { password: _, ...userWithoutPassword } = user;

    return {
      token,
      user: userWithoutPassword,
    };
  } catch (err) {
    throw new Error('No User ');
  }
};

export const AuthService = { registarUser, loginUser };
