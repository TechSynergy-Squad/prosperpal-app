import { z } from "zod";
import { supabase } from "./supabase";

const loginSchema = z.object({
  email: z.string().email(),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export async function signInWithEmail(formData: LoginFormValues) {
  return supabase.auth
    .signInWithOtp({
      email: formData.email,
      options: {
        shouldCreateUser: true,
        emailRedirectTo: "http://localhost:3000/home",
      },
    })
    .then((res) => {
      console.log(res);
    });
}

export function signOut() {
  return supabase.auth.signOut();
}

export default {
  signInWithEmail,
  signOut,
};
