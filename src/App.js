import './App.css';
import { createMuiTheme, ThemeProvider } from "@material-ui/core"
import Navbar from './Components/Navbar';
import { indigo, teal } from '@material-ui/core/colors';
import Homepage from './Components/HomePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cateogary from './Components/Cateogary';
import Doctors from './Components/Doctors';


let theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: teal,
  },
})



function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>

          <Route exact path='/'>
            <Homepage></Homepage>
          </Route>

          <Route exact path='/city-:city'>
            <Cateogary></Cateogary>
          </Route>

          <Route exact path='/city-:city/cat-:cat'>
            <Doctors></Doctors>
          </Route>


        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
