import { LoginValuesProps } from "../components";
import { supabase } from "./supabase";

export async function signInWithEmail(formData: LoginValuesProps) {
  return supabase.auth
    .signInWithOtp({
      email: formData.email,
      options: {
        shouldCreateUser: true,
        emailRedirectTo: "http://localhost:5173/home",
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
