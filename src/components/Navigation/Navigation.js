import "./Navigation.css";
import { ReactComponent as NavigationBurger } from "../../images/burger.svg";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 769);

  function openPopup() {
    setIsNavMenuOpen(true);
  }

  function closePopup() {
    setIsNavMenuOpen(false);
  }

  function changeScreenType() {
    setIsDesktop(window.innerWidth >= 769);
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      changeScreenType();
    });
    return () => {
      window.removeEventListener("resize", () => {
        changeScreenType();
      });
    };
  }, []);

  return (
    <>
      {/* template for desktop */}
      {isDesktop && (
        <section className="navigation">
          <div className="navigation__box">
            <NavLink to="/movies" className="navigation__link">
              Фильмы
            </NavLink>
            <NavLink to="/saved-movies" className="navigation__link">
              Сохраненные фильмы
            </NavLink>
          </div>
          <NavLink to="/profile" className="navigation__link-profile">
            Аккаунт
            <div className="navigation__user-img" />
          </NavLink>
        </section>
      )}

      {/* template for tablet & mobile */}
      {!isDesktop && (
        <section className="navigation">
          <NavigationBurger
            className="navigation__burger"
            onClick={openPopup}
          />
          {isNavMenuOpen && (
            <>
              <div className="navigation__overlay" onClick={closePopup} />
              <div className="navigation__popup">
                <div className="navigation__close" onClick={closePopup} />
                <div className="navigation__box">
                  <NavLink
                    to="/"
                    className="navigation__link"
                    activeClassName="navigation__link_actual"
                  >
                    Главная
                  </NavLink>
                  <NavLink
                    to="/movies"
                    className="navigation__link"
                    activeClassName="navigation__link_actual"
                  >
                    Фильмы
                  </NavLink>
                  <NavLink
                    to="/saved-movies"
                    className="navigation__link"
                    activeClassName="navigation__link_actual"
                  >
                    Сохраненные фильмы
                  </NavLink>
                </div>
                <NavLink to="/profile" className="navigation__link-profile">
                  Аккаунт
                  <div className="navigation__user-img" />
                </NavLink>
              </div>
            </>
          )}
        </section>
      )}
    </>
  );
}

export default Navigation;
