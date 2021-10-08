import React from "react";
import BaseTextInput from "./BaseTextInput";

import { ITextInputProps } from "./model";

interface ITextMultilineInputProps extends ITextInputProps {
  rows?: number;
}

type FC = React.FC<ITextInputProps>;

export const TextInput: FC = (props: ITextInputProps) => (<BaseTextInput type="text" {...props} />);

export const TextMultilineInput: React.FC<ITextMultilineInputProps> = (props: ITextMultilineInputProps) => (<BaseTextInput type="text" rows={props.rows} {...props} />);

export const PasswordInput: FC = (props: ITextInputProps) => (<BaseTextInput type="password" {...props} />);

export const NumberInput: FC = (props: ITextInputProps) => (<BaseTextInput type="number" {...props} />);
