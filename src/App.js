import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import {
  Alphanumeric,
  CharactorCounter,
  Counter,
  Darkmode,
  DesignerTool,
  DisableButton,
  LikeInList,
  PasswordValidation,
  Showpassword,
  TabSwitching,
  Toast,
} from "./Components";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/charactorCounter">CharacterCounter</Link>
            </li>
            <li>
              <Link to="/passwordValidation">PasswordValidation</Link>
            </li>
            <li>
              <Link to="/alphanumericpassword">Alphanumeric password</Link>
            </li>
            <li>
              <Link to="/showpassword">Show password</Link>
            </li>
            <li>
              <Link to="/disabledbutton">Disabled button</Link>
            </li>
            <li>
              <Link to="/designertool">Designer tool</Link>
            </li>
            <li>
              <Link to="/tabswitching">Tab switching</Link>
            </li>
            <li>
              <Link to="/toast">Toast</Link>
            </li>
            <li>
              <Link to="/darkmode">Darkmode</Link>
            </li>
            <li>
              <Link to="/like">Like In List</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/charactorCounter">
          <CharactorCounter />
        </Route>
        <Route path="/passwordValidation">
          <PasswordValidation />
        </Route>
        <Route path="/alphanumericpassword">
          <Alphanumeric />
        </Route>

        <Route path="/showpassword">
          <Showpassword />
        </Route>

        <Route path="/disabledbutton">
          <DisableButton />
        </Route>
        <Route path="/designertool">
          <DesignerTool />
        </Route>
        <Route path="/tabswitching">
          <TabSwitching />
        </Route>

        <Route path="/toast">
          <Toast />
        </Route>

        <Route path="/darkmode">
          <Darkmode />
        </Route>

        <Route path="/like">
          <LikeInList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
