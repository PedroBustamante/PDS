import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.scss';
import Home from './views/Home'
import SignUp from './views/SignUp'
import Login from './views/Login'

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}
export default App;
