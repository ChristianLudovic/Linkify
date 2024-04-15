-- CreateTable
CREATE TABLE "Link" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "imageReference" TEXT NOT NULL,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);
