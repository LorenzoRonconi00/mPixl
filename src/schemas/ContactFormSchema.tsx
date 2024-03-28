"use client"

import { z } from "zod"

export const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z
    .string()
    .email()
    .min(2)
    .max(50),
  message: z.string().min(2).max(1000),
})
