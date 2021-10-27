import "./App.css";

import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

// Paginas:
import { Dashboard, Login, Profile } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Redirect exact from="/" to="/login" />

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/dashboard/profile">
            <Profile />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
