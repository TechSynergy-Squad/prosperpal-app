import { Field, Formik } from "formik";
import { Button } from "..";
import { userService } from "../../services";
import { z } from "zod";
import { FormBodyContainer } from "../atoms/form-body-component";

const loginSchema = z.object({
  email: z.string().email(),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const submit = async ({ email }: { email: string }) => {
    userService.signInWithEmail({ email });
  };

  const initialValues = {
    email: "",
  };

  return (
    <FormBodyContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={submit}
        validationSchema={loginSchema}
      >
        {({ errors }) => (
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
              onClick={() => submit}
              shape="rounded"
            >
              Login
            </Button>
          </form>
        )}
      </Formik>
    </FormBodyContainer>
  );
};
