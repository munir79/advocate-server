import bcrypt from 'bcrypt';
import prisma from '../../prisma/prismaClient.js';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import sendEmail from '../../utils/sendEmail.js';
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

    console.log('new ', userData);
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
    console.log('userdata from login user', userData);
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

// forget password

const forgetPassword = async (email) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error('User not Found ');
  }

  const resetToken = crypto.randomBytes(32).toString('hex');
  const expiry = new Date(Date.now() + 15 * 60 * 1000); // 15 min

  await prisma.user.update({
    where: { email },
    data: {
      resetToken,
      resetTokenExpiry: expiry,
    },
  });

  // send token via email
  const resetLink = `http://localhost:5000/reset-password?token=${resetToken}`;

  await sendEmail({
    to: email,
    subject: 'password reset Link',
    textL: `use this link to reset :${resetLink}`,
  });
  return { message: ' Reset email sent' };
};

// reset password

const resetPassword = async (token, newPassword) => {
  const user = await prisma.user.findFirst({
    where: {
      resetToken: token,
      resetTokenExpiry: {
        gte: new Date(),
      },
    },
  });

  if (!user) {
    throw new Error(' Token invalid or expired');
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  await prisma.user.update({
    where: {
      email: user.email,
    },
    data: {
      password: hashedPassword,
      resetToken: null,
      resetTokenExpiry: null,
    },
  });

  return { message: 'password reset sucessfully' };
};

export const AuthService = { registarUser, loginUser, forgetPassword, resetPassword };
