import "./SignNav.css";
import { NavLink } from "react-router-dom";

function SignNav({ text, to, link }) {
  return (
    <nav className="sign-nav">
      <p className="sign-nav__text">
        {text}
        <NavLink className="sign-nav__link" to={to}>
          {link}
        </NavLink>
      </p>
    </nav>
  );
}

export default SignNav;
