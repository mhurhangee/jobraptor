ALTER TABLE "jobs" ALTER COLUMN "status" SET DEFAULT 'interested';--> statement-breakpoint
ALTER TABLE "jobs" ALTER COLUMN "priority" SET DEFAULT 0;--> statement-breakpoint
ALTER TABLE "companies" ADD COLUMN "notes" text;--> statement-breakpoint
ALTER TABLE "companies" ADD COLUMN "contact_name" text;--> statement-breakpoint
ALTER TABLE "companies" ADD COLUMN "contact_email" text;--> statement-breakpoint
ALTER TABLE "companies" ADD COLUMN "linkedin_url" text;--> statement-breakpoint
ALTER TABLE "companies" ADD COLUMN "tags" text[];--> statement-breakpoint
ALTER TABLE "companies" ADD COLUMN "ai_metadata" jsonb;--> statement-breakpoint
ALTER TABLE "jobs" ADD COLUMN "salary_currency" text DEFAULT 'GBP' NOT NULL;--> statement-breakpoint
ALTER TABLE "jobs" ADD COLUMN "cv" text;--> statement-breakpoint
ALTER TABLE "jobs" ADD COLUMN "cv_text" text;--> statement-breakpoint
ALTER TABLE "jobs" ADD COLUMN "cover_letter" text;--> statement-breakpoint
ALTER TABLE "jobs" ADD COLUMN "cover_letter_text" text;--> statement-breakpoint
ALTER TABLE "jobs" ADD COLUMN "deadline" timestamp;--> statement-breakpoint
ALTER TABLE "jobs" ADD COLUMN "source" text;--> statement-breakpoint
ALTER TABLE "jobs" ADD COLUMN "tags" text[];--> statement-breakpoint
ALTER TABLE "jobs" ADD COLUMN "ai_metadata" jsonb;