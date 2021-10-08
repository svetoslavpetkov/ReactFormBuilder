import React from "react";

type TextInputVariant = "filled" | "outlined" | "standard";

export interface ITextInputProps {
  id?: string;
  value?: string;
  variant?: TextInputVariant;
  helpText?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  errorText?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>) => void;
}

export interface IBaseTextInputProps extends ITextInputProps {
  multiline?: boolean;
  type: React.InputHTMLAttributes<unknown>['type'];
  rows?: number;
}
