import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getMessage = async (room) => {
  return await prisma.chat.findMany({
    where: {
      room,
    },
    take: 20,
  });
};
