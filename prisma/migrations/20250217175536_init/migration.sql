/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'USER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'USER',
ALTER COLUMN "linkedin_id" DROP NOT NULL,
ALTER COLUMN "twitter_id" DROP NOT NULL,
ALTER COLUMN "github_id" DROP NOT NULL,
ALTER COLUMN "leetcode_id" DROP NOT NULL,
ALTER COLUMN "email_id" DROP NOT NULL,
ALTER COLUMN "bio" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
