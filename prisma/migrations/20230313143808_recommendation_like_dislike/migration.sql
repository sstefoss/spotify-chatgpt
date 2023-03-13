-- AlterTable
ALTER TABLE "Recommendation" ADD COLUMN     "disliked" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "liked" BOOLEAN NOT NULL DEFAULT false;
