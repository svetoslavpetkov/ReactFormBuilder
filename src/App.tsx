import logo from './logo.svg';
import './App.css';
import { AppBar, Container, CssBaseline, Paper, Toolbar } from '@mui/material';
import NavOption from './components/shared/NavOption/NavOption';
import { withRouter } from 'react-router-dom';

function App() {
  return (<>
    <CssBaseline />
    <AppBar position="static" elevation={0} className="app-nav-bar">
      <Toolbar>
        <NavOption text="Home" to="/" path="/" />
      </Toolbar>
      <Toolbar>
        <NavOption text="Demo 1" to="/demo1" path="/" />
      </Toolbar>
      <Toolbar>
        <NavOption text="Demo 2" to="/demo2" path="/" />
      </Toolbar>
    </AppBar>
    <Container maxWidth="lg" className="view-container">
      <Paper className="view-paper">
        Here is the content
      </Paper>
    </Container>
  </>
  );
}

export default withRouter(App);
