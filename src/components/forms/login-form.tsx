import { useNavigate } from "react-router-dom";
import { Field, Formik } from "formik";
import { Button, FormContainer } from "..";
import { userService } from "../../services";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const submit = async ({ email }: { email: string }) => {
    userService.signInWithEmail({ email });
  };

  const initialValues = {
    username: "",
  };

  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={submit}
        validationSchema={loginSchema}
      >
        {({ values, errors }) => (
          <form className="text-black flex flex-col items-center justify-center gap-8">
            <Field
              name="email"
              color="text-black"
              placeholder="Email"
              hasError={!!errors.email}
              errorMsg={errors.email}
            />
            <Button
              className="loginBtn w-60 text-3xl"
              onClick={submit}
              shape="rounded"
            >
              Login
            </Button>
          </form>
        )}
      </Formik>
    </FormContainer>
  );
};
