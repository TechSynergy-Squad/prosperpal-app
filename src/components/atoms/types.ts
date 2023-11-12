import { ReactNode } from "react";

export type PanelProps = {
  children: React.ReactNode;
  title?: string;
  className?: string;
};

export type AvatarProps = {
  imgSrc: string;
  onlineStatus?: "Online" | "Offline" | "Hidden";
  className?: string;
};

export type ErrorTextProps = { message: string };

export type HeaderProps = {
  title: string;
  className: string;
};

export type ButtonProps = {
  text: string;
  className?: string;
  icon?: ReactNode | string;
  variant?: "container" | "outline" | "text";
  func?: "edit" | "delete" | "add";
  onClick?: (T: any) => void;
};

export type InputProps = {
  label?: string;
  color: string;
  placeholder: string;
  className?: string;
  hasError?: boolean;
  type?: string;
  name: string;
  errorMsg?: string;
};

export type AuthPanelProps = {
  children: ReactNode;
  className?: string;
};

export type ListGraphInputProps = {
  startDate : string;
  endDate: string;
  title: string;
  cost: string;
  description: string;
  model: string;
  yearOfManufacture: string;
  maintenance: string;
  insurance: string;
  repairs: string;
}

