import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./components/Details";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

function App() {
  const [{ user }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Router>
          <Header />
          <div className="app">
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/details/:id">
                <Details />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
