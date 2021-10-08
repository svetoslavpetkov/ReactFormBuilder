import logo from './logo.svg';
import './App.css';
import { AppBar, Container, CssBaseline, Paper, Toolbar } from '@mui/material';
import NavOption from './components/shared/NavOption/NavOption';
import { Route, Switch, withRouter } from 'react-router-dom';
import HomeView from './views/HomeView';
import AllInputs from './views/AllInputs';

function App() {
  return (<>
    <CssBaseline />
    <AppBar position="static" elevation={0} className="app-nav-bar">
      <Toolbar>
        <NavOption text="Home" to="/" path="/" />
      </Toolbar>
      <Toolbar>
        <NavOption text="All inputs" to="/all-inputs" path="/" />
      </Toolbar>
      <Toolbar>
        <NavOption text="Demo 2" to="/demo2" path="/" />
      </Toolbar>
    </AppBar>
    <Container maxWidth="lg" className="view-container">
      <Paper className="view-paper">
        <Switch>
          <Route exact path="/" >
            <HomeView />
          </Route>
          <Route exact path="/all-inputs" >
            <AllInputs />
          </Route>          
        </Switch>
      </Paper>
    </Container>
  </>
  );
}

export default withRouter(App);
