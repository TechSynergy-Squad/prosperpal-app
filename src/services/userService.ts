import toast from "react-hot-toast";
import { supabase } from "./supabase";

export async function signInWithEmail({ email }: { email: string }) {
  const { data, error } = await supabase.auth.signInWithOtp({
    email: email,
    options: {
      shouldCreateUser: true,
      emailRedirectTo: "http://localhost:5173",
    },
  });
  error
    ? toast.error(error.message)
    : toast.success("Email sent, please check your inbox");
  if (data?.user) localStorage.setItem("token", data?.user ?? "");
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    toast.error("Failed to sign out");
  }
}

export default {
  signInWithEmail,
  signOut,
};
