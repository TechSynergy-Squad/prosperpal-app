import { ReactNode } from "react";
import { FormikHelpers } from "formik";
import { FormikProps } from "formik/dist/types";
import { z } from "zod";

export type PieChartProps = {
  transactions: Spending[];
  colors: string[];
};

export type Spending = {
  category: string;
  percentage: number;
};

export type TooltipProps = {
  payload?: {
    payload: Spending;
  }[];
};

export type ErrorObject<Value> = {
  errors: unknown | Value;
  statusCode: number;
  message: string;
};
export type FormProps<Value> = {
  initialValues: Value;
  onSubmitForm: (
    formData: Value,
    actions?: FormikHelpers<Value>
  ) => Promise<unknown>;
  onSuccess?: (actions: FormikHelpers<Value>) => void;
  onFailure?: (
    error: ErrorObject<Value>,
    actions: FormikHelpers<Value>
  ) => void;
  validationSchema: z.ZodSchema<Value>;
  render: (props: FormikProps<Value>) => ReactNode;
  className?: string;
} & Partial<Omit<FormikProps<Value>, "onSubmit">>;

export declare const Form: <T extends Record<string, unknown>>({
  initialValues,
  onSubmitForm,
  onSuccess,
  onFailure,
  validationSchema,
  render,
  className,
  ...rest
}: FormProps<T>) => JSX.Element;
