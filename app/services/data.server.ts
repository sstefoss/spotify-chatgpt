import { json } from "@remix-run/node";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function like(id: number) {
  // like song
  await prisma.recommendation.update({
    where: {
      id,
    },
    data: {
      liked: true,
      disliked: false,
    },
  });
}

export async function dislike(id: number) {
  // dislike song
  await prisma.recommendation.update({
    where: {
      id,
    },
    data: {
      liked: false,
      disliked: true,
    },
  });
}

export async function getAllRecommendations() {
  // get all recommendations
  const recommendations = await prisma.recommendation.findMany({
    include: {
      song: true,
    },
  });
  return json(recommendations);
}
