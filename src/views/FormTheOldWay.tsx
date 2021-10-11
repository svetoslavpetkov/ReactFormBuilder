import React from "react";

import { Button, Divider, Grid } from "@mui/material";
import { PasswordInput, TextInput, NumberInput } from "../components/shared/Inputs/Text/TextInputs";

interface IState {
  email: string;
  fullName: string;
  address: string;  
}

export default class FormTheOldWay extends React.Component<{}, IState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      email: "",
      fullName: "",
      address: "",
    };
  }

  render(): JSX.Element {
    return <>
      <h1>Form the old way</h1>
      <Divider />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextInput label="E-mail" value={this.state.email} />
        </Grid>
        <Grid item xs={12}>
          <TextInput label="Full name" value={this.state.fullName} />
        </Grid>
        <Grid item xs={12}>
          <TextInput label="Address" value={this.state.address} />
        </Grid>
        <Grid item xs={12}>
          <Button color="error">Cancel</Button>
          <Button variant="contained">Save</Button>
        </Grid>
      </Grid>
    </>;
  }
}
