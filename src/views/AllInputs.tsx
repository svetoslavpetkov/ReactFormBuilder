import React from "react";

import { Divider, Grid } from "@mui/material";
import { PasswordInput, TextInput, NumberInput } from "../components/shared/Inputs/Text/TextInputs";

export default class AllInputs extends React.Component {
  render() {
    return (<>
      <h1>All inputs</h1>
      <Divider />
      <h2>Text inputs</h2>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextInput label="Single line text" />
        </Grid>
        <Grid item xs={4}>
          <TextInput label="Field is required" required />
        </Grid>
        <Grid item xs={4}>
          <TextInput label="required with error" required errorText="there is an error"  />
        </Grid>
        <Grid item xs={4}>
          <PasswordInput label="Password" value="goshko" />
        </Grid>
        <Grid item xs={4}>
          <PasswordInput label="Password is required" value="goshko" required />
        </Grid>
        <Grid item xs={4}>
          <PasswordInput label="Password with error" value="goshko" required errorText="Password dows not match requirements"  />
        </Grid>    
        <Grid item xs={4}>
          <NumberInput label="Number" value="5" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput label="Age" value="" required />
        </Grid>
        <Grid item xs={4}>
          <NumberInput label="Age max 50" value="100" required errorText="Invalid"  />
        </Grid>  
      </Grid>
    </>);
  }
}