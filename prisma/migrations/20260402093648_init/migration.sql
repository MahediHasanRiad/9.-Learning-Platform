-- DropForeignKey
ALTER TABLE "DemoClass" DROP CONSTRAINT "DemoClass_batchId_fkey";

-- AlterTable
ALTER TABLE "DemoClass" ALTER COLUMN "batchId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "DemoClass" ADD CONSTRAINT "DemoClass_batchId_fkey" FOREIGN KEY ("batchId") REFERENCES "Batch"("id") ON DELETE SET NULL ON UPDATE CASCADE;
