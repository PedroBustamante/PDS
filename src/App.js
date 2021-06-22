import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.scss';
import Search from './views/Search'
import SignUp from './views/SignUp'
import Home from './views/Home'
import Login from './views/Login'
import Profile from './views/Profile'
import ArtistPage from './views/ArtistPage'

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/artist-page/:id">
              <ArtistPage />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}
export default App;
