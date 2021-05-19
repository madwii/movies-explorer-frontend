import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/logo.svg";
import SignBtns from "../SignBtn/SignBtn";
import Navigation from "../Navigation/Navigation";

import "./Header.css";

function Header() {
  return (
    <Switch>

      <Route exact path="/">
        <header className="header">
          <NavLink to="/" className="header__logo-link">
            <Logo className="header__logo" />
          </NavLink>
          <SignBtns />
        </header>
      </Route>

      <Route path={["/movies", "/saved-movies", "/profile"]}>
        <header className="header">
          <NavLink to="/" className="header__logo-link">
            <Logo className="header__logo" />
          </NavLink>
          <Navigation />
        </header>
      </Route>

    </Switch>
  );
}
export default Header;
