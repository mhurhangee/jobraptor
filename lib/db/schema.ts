import { pgTable, text, integer, timestamp, uuid, decimal } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

export const companies = pgTable("companies", {
  id: uuid("id").defaultRandom().primaryKey(),
  
  name: text("name").notNull(),
  website: text("website"),
  industry: text("industry"),
  size: text("size"),
  location: text("location"),
  description: text("description"),
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
  location: text("location"),
  remote: text("remote"), // "remote", "hybrid", "onsite"
  status: text("status").notNull().default("applied"), // applied, interviewing, offer, rejected, withdrawn
  priority: integer("priority").default(3), // 1-5 scale
  url: text("url"),
  notes: text("notes"),
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
export type Job = typeof jobs.$inferSelect & { company: Company }
export type NewJob = typeof jobs.$inferInsert
