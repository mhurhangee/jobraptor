ALTER TABLE "jobs" ALTER COLUMN "salary" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "jobs" ADD COLUMN "requirements" text[];--> statement-breakpoint
ALTER TABLE "jobs" ADD COLUMN "benefits" text[];--> statement-breakpoint
ALTER TABLE "companies" DROP COLUMN "linkedin_url";--> statement-breakpoint
ALTER TABLE "companies" DROP COLUMN "location";--> statement-breakpoint
ALTER TABLE "jobs" DROP COLUMN "salary_max";--> statement-breakpoint
ALTER TABLE "jobs" DROP COLUMN "salary_currency";