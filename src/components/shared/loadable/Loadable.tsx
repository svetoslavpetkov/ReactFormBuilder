import { Alert, CircularProgress } from "@mui/material";
import React from "react";

interface ILoadableProps {
  isLoading: boolean;
  errorMsg?: string;
}

const Loadable: React.FunctionComponent<ILoadableProps> = (props): JSX.Element => {
  if (props.isLoading) {
    return (<CircularProgress />)
  }
  if (props.errorMsg) {
    return <Alert severity="error">{props.errorMsg}</Alert>
  }

  return <>{props.children}</>;
}

export default Loadable;