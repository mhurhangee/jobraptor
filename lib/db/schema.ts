import { pgTable, text, integer, timestamp, uuid, decimal, jsonb } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

export const companies = pgTable("companies", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull(),
  name: text("name").notNull(),
  website: text("website"),
  industry: text("industry"),
  notes: text("notes"),
  contactName: text("contact_name"),
  contactEmail: text("contact_email"),
  linkedinUrl: text("linkedin_url"),
  size: text("size"),
  location: text("location"),
  description: text("description"),
  tags: text("tags").array(),
  aiMetadata: jsonb("ai_metadata"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

export const jobs = pgTable("jobs", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull(),
  companyId: uuid("company_id")
    .references(() => companies.id)
    .notNull(),
  title: text("title").notNull(),
  description: text("description"),
  salary: decimal("salary", { precision: 10, scale: 2 }),
  salaryMax: decimal("salary_max", { precision: 10, scale: 2 }),
  salaryCurrency: text("salary_currency").notNull().default("GBP"),
  location: text("location"),
  remote: text("remote"), // "remote", "hybrid", "onsite"
  status: text("status").notNull().default("interested"), // interested, applied, interviewing, offer, rejected, withdrawn
  priority: integer("priority").default(0), // 0-3 scale (0 - none, 1 - low, 2 - medium, 3 - high)
  cv: text("cv"), // CV URL (store as blob)
  cvText: text("cv_text"), // CV text
  coverLetter: text("cover_letter"), // Cover letter URL (store as blob)
  coverLetterText: text("cover_letter_text"), // Cover letter text
  url: text("url"),
  notes: text("notes"),
  deadline: timestamp("deadline"),
  source: text("source"),
  tags: text("tags").array(),
  aiMetadata: jsonb("ai_metadata"),
  appliedAt: timestamp("applied_at").defaultNow().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

// Relations
export const companiesRelations = relations(companies, ({ many }) => ({
  jobs: many(jobs),
}))

export const jobsRelations = relations(jobs, ({ one }) => ({
  company: one(companies, {
    fields: [jobs.companyId],
    references: [companies.id],
  }),
}))

export type Company = typeof companies.$inferSelect
export type NewCompany = typeof companies.$inferInsert
export type Job = typeof jobs.$inferSelect & { company: Company | null}
export type NewJob = typeof jobs.$inferInsert
