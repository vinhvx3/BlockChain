import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route , Link} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import { CourseProvider } from "./context/CourseContext";
import Sidebar from "./components/Sidebar";

import logo from "./logo.svg";
import { useEffect } from "react";
import CreateWalletScreen from "./screens/CreateWalletScreen";
import ReceiveScreen from "./screens/ReceiveScreen";
import PendingTransactions from "./screens/PendingTransactions";

function App() {
  useEffect(() => {
    if (!localStorage._privateKey && window.location.pathname !== "/create") {
      window.location.replace("/create");
    }
  }, []);
  return (
    <CourseProvider>
      <Router>
        <div className="App">
          <div className="row">
            <div className="col-3">
              {localStorage._privateKey && <Sidebar />}
            </div>
            <div className="col-9 container">
              <div className="card mt-2">
                <div className="card-header d-flex justify-content-between">
                  <div className="d-flex">
                    <img src={logo} style={{ height: "2.4rem" }} alt="" />
                    <h3>MyCoin</h3>
                  </div>

                  <Link
                    className="btn"
                    style={{ background: "#b2bddc" }}
                    to={location => ({ ...location, pathname: "/pending" })}
                    role="button"
                  >
 
                    <i className="fa fa-plus" aria-hidden="true"></i>
                    Pending transactions
                  </Link>
                </div>
              </div>
              <Switch>
              <Route  path="/pending" component={PendingTransactions}>

                </Route>
                <Route  path="/receive">
                  <ReceiveScreen />
                </Route>
                <Route  path="/create">
                  <CreateWalletScreen />
                </Route>
                <Route exact path="/">
                  <HomeScreen />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </CourseProvider>
  );
}

export default App;
