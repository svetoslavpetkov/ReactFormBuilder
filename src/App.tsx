import logo from './logo.svg';
import './App.css';
import { AppBar, Container, CssBaseline, Paper, Toolbar } from '@mui/material';
import NavOption from './components/shared/NavOption/NavOption';
import { Route, Switch, withRouter } from 'react-router-dom';
import HomeView from './views/HomeView';
import AllInputs from './views/AllInputs';
import FormTheOldWay from './views/FormTheOldWay';
import { siteMap } from './navigation';

function App() {
  return (<>
    <CssBaseline />
    <AppBar position="static" elevation={0} className="app-nav-bar">
      <Toolbar>
        {
          siteMap.map(i => (<NavOption key={i.title} text={i.title} to={i.path} path={i.path} />))
        }
      </Toolbar>
    </AppBar>
    <Container maxWidth="lg" className="view-container">
      <Paper className="view-paper">
        <Switch>
          {
            siteMap.map(i => (
              <Route exact path={i.path} >
                <i.Component />
              </Route>)
            )
          }      
        </Switch>
      </Paper>
    </Container>
  </>
  );
}

export default withRouter(App);
