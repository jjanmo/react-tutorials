import { z } from 'zod'

const SignupSchema = z.object({
  id: z.string().min(4),
  password1: z.string().min(6),
  password2: z.string().min(6),
  email: z.string().email(),
})

export type SignupSchema = z.infer<typeof SignupSchema>

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export type LoginSchema = z.infer<typeof LoginSchema>
