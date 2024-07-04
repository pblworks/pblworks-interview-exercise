-- CreateTable
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL DEFAULT '',
    "subhead" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT ''
);
