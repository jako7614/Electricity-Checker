/*
  Warnings:

  - Added the required column `relays` to the `setting` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `setting` ADD COLUMN `relays` INTEGER NOT NULL;
