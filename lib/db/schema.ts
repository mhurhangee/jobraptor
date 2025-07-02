import { jsonb, pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core'

export const jobs = pgTable('jobs', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id').notNull(),

  title: varchar('title', { length: 255 }).notNull(),
  company: varchar('company', { length: 255 }).notNull(),
  status: varchar('status', { length: 32 }).notNull(), // e.g. Applied, Interview, etc.
  location: varchar('location', { length: 128 }).notNull(),
  postingUrl: text('posting_url'),

  appliedAt: timestamp('applied_at', { withTimezone: true }),
  nextAction: varchar('next_action', { length: 255 }),
  nextActionDeadline: timestamp('next_action_deadline', { withTimezone: true }),

  description: text('description'),
  salary: varchar('salary', { length: 64 }),
  contact: varchar('contact', { length: 256 }),
  notes: text('notes'),

  aiMetadata: jsonb('ai_metadata'),

  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
})

export type DbJob = typeof jobs.$inferSelect
