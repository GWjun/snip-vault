import { z } from 'zod'

const snippetBaseSchema = z.object({
  title: z.string().min(1).max(100),
  content: z.string().min(1).max(10000),
  language: z.string().max(50).optional(),
  description: z.string().max(500).optional(),
  tags: z.array(z.string().min(1).max(50)).optional(),
})

export const createSnippetSchema = snippetBaseSchema

export const updateSnippetSchema = snippetBaseSchema.partial()

export const snippetIdParamSchema = z.object({
  id: z.string().min(1),
})

export const getSnippetsQuerySchema = z.object({
  search: z.string().optional(),
  tags: z
    .union([z.string(), z.array(z.string())])
    .transform((val) => (Array.isArray(val) ? val : val ? val.split(',') : []))
    .optional(),
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().min(1).max(100).default(10),
})
