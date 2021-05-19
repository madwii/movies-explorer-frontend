import "./App.css";
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

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const initValues = {
    email: "helloman@ya.ru",
    password: "qwerty123",
  };

  const handleSignIn = () => {
    setLoggedIn(true);
  };

  const handleSignOut = () => {
    setLoggedIn(false);
  };

  return (
    <div className="app">
    <Header loggedIn={loggedIn} />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/signin">
          <Login onSignIn={handleSignIn} initialValues={initValues} />
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
          <Profile onSignOut={handleSignOut} />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
