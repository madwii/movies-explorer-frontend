import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/logo.svg";
import SignBtns from "../SignBtn/SignBtn";
import Navigation from "../Navigation/Navigation";
import { Route, Switch } from "react-router-dom";

import "./Header.css";

function Header({ loggedIn }) {
  return (
    <Switch>
    <Route exact path="/">
    <header className="header">
      <NavLink to="/" className="header__logo-link">
        <Logo className="header__logo" />
      </NavLink>
      <div className="header__container">

        <div className={`header_auth ${loggedIn && "header__auth_hidden"}`}>
          <SignBtns />
        </div>

        <div className={`header__cover ${!loggedIn && "header__cover_hidden"}`}>
          <Navigation />
        </div>
      </div>
    </header>
    </Route>
    <Route path={["/profile", "/movies", "/saved-movies"]}>
    <header className="header">
      <NavLink to="/" className="header__logo-link">
        <Logo className="header__logo" />
      </NavLink>
      <div className="header__container">

        <div className={`header_auth ${loggedIn && "header__auth_hidden"}`}>
          <SignBtns />
        </div>

        <div className={`header__cover ${!loggedIn && "header__cover_hidden"}`}>
          <Navigation />
        </div>
      </div>
    </header>
    </Route>
    </Switch>
    
  );
}

export default Header;
