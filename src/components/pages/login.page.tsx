import { LoginForm } from "../organisms";

export const LoginPage = () => {
  return (
    <section className="rounded-xl border  min-h-[35%] bg-white text-black px-8 py-4 w-[45%]">
      <h1 className="font-bold text-5xl py-10 text-center">Login</h1>
      <LoginForm />
    </section>
  );
};
