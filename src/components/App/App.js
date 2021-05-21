import "./App.css";
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import { cards } from "../../utils/cards";

// import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

function App() {
  const [currentUser, setCurrentUser] = React.useState({});

  const [loggedIn, setLoggedIn] = useState(false);

  function login(email, password) {}

  function onSubmitLogin({ email, password }) {
    if (!email || !password) {
      return;
    }
    login(email, password);
  }

  return (
    <div className="app">
      <CurrentUserContext.Provider value={{...currentUser}}>
        <Header loggedIn={loggedIn} />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/signin">
            <Login onSubmitLogin={onSubmitLogin} />
          </Route>

          <Route path="/signup">
            <Register />
          </Route>

          <Route path="/movies">
            <Movies cards={cards} />
          </Route>

          <Route path="/saved-movies">
            <Movies cards={cards.filter((movie) => movie.saved)} />
          </Route>

          <Route path="/profile">
            <Profile />
            {/* handleUpdate={handleUpdate} */}
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
