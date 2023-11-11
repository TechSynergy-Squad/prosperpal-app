import { ButtonHTMLAttributes, ReactNode } from "react";

export type ChildrenProps = {
  children: React.ReactNode;
};

export type OptionalChildrenProps = {
  children?: React.ReactNode;
};

export type Shape =
  | "rounded"
  | "square"
  | "none"
  | "outline-rounded"
  | "outline-square";

export type ButtonProps = {
  shape?: Shape;
  isDisabled?: boolean;
  isLoading?: boolean;
  style?: string;
  activeStyle?: string;
  disableStyle?: string;
  activeClassName?: string;
  disabledClassName?: string;
  loader?: ReactNode;
  disableLoader?: boolean;
  onClick: (arg0: unknown) => unknown;
} & Partial<Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">>;
