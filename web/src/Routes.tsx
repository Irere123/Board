import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/App.css";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Trending } from "./pages/Trending";
import { Tips } from "./pages/Tips";
import { Messages } from "./pages/Messages";
import { About } from "./pages/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={Trending} path="/trending" />
        <Route exact component={Tips} path="/tips" />
        <Route exact component={Messages} path="/messages" />
        <Route exact component={About} path="/about" />
      </Switch>
    </Router>
  );
}

export default App;
