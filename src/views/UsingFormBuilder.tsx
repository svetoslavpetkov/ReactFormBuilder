import React from "react";

import { Button, Divider, Grid } from "@mui/material";
import { PasswordInput, TextInput, NumberInput } from "../components/shared/Inputs/Text/TextInputs";

interface IState {
  email: string;
  fullName: string;
  address: string;  
}

export default class UsingFormBuilder extends React.Component<{}, IState> {
  render(): JSX.Element {
    return <>
      <h1>Simple form builder</h1>
      <Divider />
    </>;
  }
}
