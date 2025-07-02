ALTER TABLE "companies" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "companies" CASCADE;--> statement-breakpoint
ALTER TABLE "jobs" DROP CONSTRAINT "jobs_company_id_companies_id_fk";
--> statement-breakpoint
ALTER TABLE "jobs" ALTER COLUMN "user_id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "jobs" ALTER COLUMN "title" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "jobs" ALTER COLUMN "salary" SET DATA TYPE varchar(64);--> statement-breakpoint
ALTER TABLE "jobs" ALTER COLUMN "location" SET DATA TYPE varchar(128);--> statement-breakpoint
ALTER TABLE "jobs" ALTER COLUMN "location" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "jobs" ALTER COLUMN "status" SET DATA TYPE varchar(32);--> statement-breakpoint
ALTER TABLE "jobs" ALTER COLUMN "status" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "jobs" ALTER COLUMN "applied_at" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "jobs" ALTER COLUMN "applied_at" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "jobs" ALTER COLUMN "applied_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "jobs" ALTER COLUMN "created_at" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "jobs" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "jobs" ALTER COLUMN "updated_at" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "jobs" ALTER COLUMN "updated_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "jobs" ADD COLUMN "company" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "jobs" ADD COLUMN "posting_url" text;--> statement-breakpoint
ALTER TABLE "jobs" ADD COLUMN "next_action" varchar(255);--> statement-breakpoint
ALTER TABLE "jobs" ADD COLUMN "next_action_deadline" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "jobs" ADD COLUMN "contact" varchar(256);--> statement-breakpoint
ALTER TABLE "jobs" DROP COLUMN "company_id";--> statement-breakpoint
ALTER TABLE "jobs" DROP COLUMN "remote";--> statement-breakpoint
ALTER TABLE "jobs" DROP COLUMN "deadline";--> statement-breakpoint
ALTER TABLE "jobs" DROP COLUMN "requirements";--> statement-breakpoint
ALTER TABLE "jobs" DROP COLUMN "benefits";--> statement-breakpoint
ALTER TABLE "jobs" DROP COLUMN "tags";--> statement-breakpoint
ALTER TABLE "jobs" DROP COLUMN "url";--> statement-breakpoint
ALTER TABLE "jobs" DROP COLUMN "source";--> statement-breakpoint
ALTER TABLE "jobs" DROP COLUMN "priority";--> statement-breakpoint
ALTER TABLE "jobs" DROP COLUMN "cv";--> statement-breakpoint
ALTER TABLE "jobs" DROP COLUMN "cv_text";--> statement-breakpoint
ALTER TABLE "jobs" DROP COLUMN "cover_letter";--> statement-breakpoint
ALTER TABLE "jobs" DROP COLUMN "cover_letter_text";