import React from "react";

import { TextField } from "@mui/material";

import { IBaseTextInputProps } from "./model";

const BaseTextInput : React.FC<IBaseTextInputProps> = (props:IBaseTextInputProps) => {
  return (
    <TextField    
      id={props.id}
      error={!!props.errorText}
      type={props.type}
      multiline={props.multiline}
      value={props.value}
      variant={props.variant}
      helperText={props.errorText || props.helpText}
      label={props.label}
      required={props.required}
      disabled={props.disabled}
      rows={props.rows}
      onChange={props.onChange}
      onBlur={props.onBlur}
  />)
}

export default BaseTextInput;
