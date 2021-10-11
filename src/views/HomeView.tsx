import { Box, Button, Card, CardActions, CardContent, CardHeader, Divider, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { siteMap } from "../navigation";

export default class HomeView extends React.Component {
  render() {
    return (<>
      <h1>Welcome to our demo</h1>
      <Divider />
      <Box>
        <Grid container spacing={2}>
        {siteMap.map(i => (
          <Grid item xs={4}>
            <Card sx={{ minWidth: 275 }}>           
              <CardContent component="div" style={{ minHeight: "200px", overflowY: "hidden" }}>
                <h1>{i.title}</h1>
                {i.description}
              </CardContent>
              <CardActions>
                <Button variant="text" component={Link} to={i.path} >
                  Go to page
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        </Grid>
      </Box>
    </>);
  }
}