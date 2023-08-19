import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const register = async (data) => {
  return await prisma.user.create({
    data: data,
  });
};

export const findUserByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
};

export const updateRefreshToken = async (id, token) => {
  return await prisma.user.update({
    where: {
      id,
    },
    data: {
      refreshToken: token,
    },
  });
};

export const getUserByToken = async (token) => {
  return await prisma.user.findFirst({
    where: {
      refreshToken: token,
    },
  });
};
