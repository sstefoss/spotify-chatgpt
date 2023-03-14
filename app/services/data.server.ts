import { prisma } from "~/lib/prisma";

export async function like(id: number) {
  // like song
  return await prisma.recommendation.update({
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
  return await prisma.recommendation.update({
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
  return await prisma.recommendation.findMany({
    include: {
      song: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}
