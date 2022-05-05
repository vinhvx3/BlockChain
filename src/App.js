import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import { CourseProvider } from "./context/CourseContext";
import Sidebar from "./components/Sidebar";

import { useEffect } from "react";
import CreateWalletScreen from "./screens/CreateWalletScreen";
import ReceiveScreen from "./screens/ReceiveScreen";
import PendingTransactions from "./screens/PendingTransactions";
import Header from "./components/Header";
import SendScreen from "./screens/SendScreen";
import HistoryScreen from "./screens/HistoryScreen";
import DetailBlockScreen from "./screens/DetailBlockScreen";

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
              <Header />
              <Switch>
                <Route exact path="/" component={HomeScreen} />
                <Route path="/pending" component={PendingTransactions}></Route>
                <Route path="/receive" component={ReceiveScreen} />
                <Route path="/create" component={CreateWalletScreen} />
                <Route path="/send" component={SendScreen} />
                <Route path="/history" component={HistoryScreen} />
                <Route path="/detail/:id" component={DetailBlockScreen} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </CourseProvider>
  );
}

export default App;
