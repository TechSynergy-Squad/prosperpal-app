import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().email(),
  password: z.string().min(8).regex(/[A-Z]/g).regex(/[\W_]/),
});

export const registerSchema = z
  .object({
    username: z.string().email(),
    password: z
      .string()
      .min(8)
      .regex(/[A-Z]/g, "Must contain an uppercase letter")
      .regex(/[\W_]/g, "Must contain a special character"),
    confirmPassword: z
      .string()
      .min(8)
      .regex(/[A-Z]/g, "Must contain an uppercase letter")
      .regex(/[\W_]/g, "Must contain a special character"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
