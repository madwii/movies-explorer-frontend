import "./App.css";
import React from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { IMGURL, IMGDEFAULT } from "../../utils/constants";

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const location = useLocation();
  const history = useHistory();

  React.useEffect(() => {
    const path = location.pathname;
    const token = localStorage.getItem("token");
    if (token) {
      mainApi
        .checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            getCurrentUser();
            history.push(path);
          }
        })
        .catch((err) => {
          localStorage.removeItem("token");
          history.push("/");
          console.log(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleRegister({ name, email, password }) {
    mainApi
      .register(name, email, password)
      .then((res) => {
        if (res) {
          handleLogin({email, password});
        }
      })
      .catch((err) => {
        if (err.status === 409) {
          setPopupContent("Пользователь с такой почтой уже зарегистрирован");
          setIsOpenInfoPopup(true);
        } else {
          setPopupContent("Ошибка регистрации пользователя");
          setIsOpenInfoPopup(true);
        }
      });
  };

  function handleLogin({ email, password }){
    mainApi
      .login(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("token", res.token);
          setLoggedIn(true);
          getCurrentUser();
          history.push("/movies");
        }
      })
      .catch((err) => {
        if (err.status === 400) {
          setPopupContent("Неверная почта или пароль");
          setIsOpenInfoPopup(true);
        } else {
          setPopupContent("Ошибка авторизации");
          setIsOpenInfoPopup(true);
        }
      });
  };

  function getCurrentUser() {
    const token = localStorage.getItem("token");
    mainApi
      .getCurrentUser(token)
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          localStorage.setItem("currentUser", JSON.stringify(res));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateProfile(data) {
    mainApi
      .saveProfile(data)
      .then((newUser) => {
        setCurrentUser(newUser);
        setPopupContent("Успешное обновление профиля");
        setIsOpenInfoPopup(true);
      })
      .catch((err) => {
        if (err.status === 409) {
          setPopupContent("Пользователь с такой почтой уже существует");
        } else {
          setPopupContent("Ошибка при обновлении профиля");
        }
        setIsOpenInfoPopup(true);
      });
  }

  function handleSignOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("allMovies");
    localStorage.removeItem("savedMovies");
    setLoggedIn(false);
    setAllMovies([]);
    setSavedMovies([]);
    setCountSavedMovies([]);
    setCountMovies([]);
    setFilterMovies([]);
    setFilterSavedMovies([]);
    setCurrentUser({});
    history.push("/");
  }

  const [allMovies, setAllMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [filterMovies, setFilterMovies] = React.useState([]);
  const [filterSavedMovies, setFilterSavedMovies] = React.useState([]);
  const [countMovies, setCountMovies] = React.useState([]);
  const [countSavedMovies, setCountSavedMovies] = React.useState([]);

  function getAllMovies() {
    moviesApi
      .getMovies()
      .then((data) => {
        const мoviesArray = data.map((item) => {
          const imageURL = item?.image
            ? `${IMGURL}${item?.image?.url}`
            : IMGDEFAULT;
          return {
            ...item,
            image: imageURL,
            trailer: item.trailerLink,
          };
        });

        localStorage.setItem("allMovies", JSON.stringify(мoviesArray));
        setAllMovies(мoviesArray);
      })
      .catch((err) => {
        localStorage.removeItem("allMovies");
        setPopupContent("Ошибка при выполнении запроса. Попробуйте еще раз");
        setIsOpenInfoPopup(true);
        console.log(err);
      });
  }

  function getSavedMovies() {
    mainApi
      .getMoveis()
      .then((data) => {
        const savedArray = data.map((item) => {
          return {
            ...item,
            id: item.movieId,
          };
        });
        localStorage.setItem("savedMovies", JSON.stringify(savedArray));
        setSavedMovies(savedArray);
      })
      .catch((err) => {
        localStorage.removeItem("savedMovies");
        setPopupContent("Ошибка при выполнении запроса. Попробуйте еще раз");
        setIsOpenInfoPopup(true);
        console.log(err);
      });
  }

  function handleAddLike(movie) {
    mainApi
      .createMovie(movie)
      .then((res) => {
        setSavedMovies([...savedMovies, { ...res, id: res.movieId }]);
      })
      .catch((err) => {
        setPopupContent("Ошибка сервера");
        setIsOpenInfoPopup(true);
        console.log(err);
      });
  }

  function handleRemoveLike(movie) {
    const movieId = savedMovies.find((item) => item.id === movie.id)._id;
    mainApi
      .removeMovie(movieId)
      .then(() => {
        const newArray = savedMovies.filter((c) => !(c._id === movieId));
        setSavedMovies(newArray);
        setCountSavedMovies(newArray);
        localStorage.setItem("savedMovies", JSON.stringify(newArray));
      })
      .catch((err) => {
        setPopupContent("Ошибка сервера");
        setIsOpenInfoPopup(true);
        console.log(err);
      });
  }

  function isMovieSaved(movie) {
    return savedMovies.some((item) => item.id === movie.id);
  }

  React.useEffect(() => {
    const initialAllMovies = JSON.parse(localStorage.getItem("allMovies"));
    if (initialAllMovies) {
      setAllMovies(initialAllMovies);
    } else {
      getAllMovies();
    }

    const initialSavedMovies = JSON.parse(localStorage.getItem("savedMovies"));
    if (initialSavedMovies) {
      setSavedMovies(initialSavedMovies);
    } else {
      getSavedMovies();
    }
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      getAllMovies();
      getSavedMovies();
    }
  }, [loggedIn]);

  //infoToolTip
  const [isOpenInfoPopup, setIsOpenInfoPopup] = React.useState(false);
  const [PopupContent, setPopupContent] = React.useState("");

  function onClosePopup() {
    setIsOpenInfoPopup(false);
    setPopupContent("");
  }

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Header loggedIn={loggedIn} />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/signup">
            <Register onRegister={handleRegister} />
          </Route>
          <Route path="/signin">
            <Login onLogin={handleLogin} />
          </Route>
          <ProtectedRoute
            exact
            path="/movies"
            component={Movies}
            loggedIn={loggedIn}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            allMovies={allMovies}
            setAllMovies={setAllMovies}
            getAllMovies={getAllMovies}
            onAddLike={handleAddLike}
            onRemoveLike={handleRemoveLike}
            isMovieSaved={isMovieSaved}
            filterMovies={filterMovies}
            setFilterMovies={setFilterMovies}
            countMovies={countMovies}
            setCountMovies={setCountMovies}
          />
          <ProtectedRoute
            exact
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}
            getSavedMovies={getSavedMovies}
            onAddLike={handleAddLike}
            onRemoveLike={handleRemoveLike}
            isMovieSaved={isMovieSaved}
            filterSavedMovies={filterSavedMovies}
            setFilterSavedMovies={setFilterSavedMovies}
            countSavedMovies={countSavedMovies}
            setCountSavedMovies={setCountSavedMovies}
          />
          <ProtectedRoute
            exact
            path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            onUpdateProfile={handleUpdateProfile}
            onSignOut={handleSignOut}
          />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
        <InfoTooltip
          title={PopupContent}
          isOpenPopup={isOpenInfoPopup}
          onClosePopup={onClosePopup}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
