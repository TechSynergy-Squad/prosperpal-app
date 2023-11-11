import { Field, Formik } from "formik";
import { Button } from "..";
import { userService } from "../../services";
import { z } from "zod";
import toast from "react-hot-toast";

const loginSchema = z.object({
  email: z.string().email(),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const submit = async ({ email }: { email: string }) => {
    userService.signInWithEmail({ email }).then((res) => {
      if (Boolean(res)) {
        toast.error("Email not found", {
          duration: 4000,
        });
      } else {
        toast.success("Email sent, please check your inbox", {
          duration: 4000,
        });
      }
    });
  };

  const initialValues = {
    email: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submit}
      validationSchema={loginSchema}
    >
      {({ errors }) => (
        <form className="text-black flex flex-col items-center justify-center gap-8">
          <Field
            className="bg-[#E9E4E4] px-5 py-2 rounded-xl w-96"
            name="email"
            color="text-black"
            placeholder="Email"
            hasError={!!errors.email}
            errorMsg={errors.email}
          />
          <Button
            className="loginBtn w-80 text-3xl"
            onClick={() => submit}
            shape="rounded"
          >
            Login
          </Button>
        </form>
      )}
    </Formik>
  );
};
