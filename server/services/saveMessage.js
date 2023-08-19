import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const saveMessage = async (message, username, room) => {
  return await prisma.chat.create({
    data: {
      message,
      username,
      room,
    },
  });
};
