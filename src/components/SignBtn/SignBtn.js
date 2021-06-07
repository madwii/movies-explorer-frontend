import "./SignBtn.css";
import { NavLink } from "react-router-dom";

function SignBtns() {
  return (
    <div className="sign-btn">
      <NavLink className="sign-btn__signup" to="/signup">
        Регистрация
      </NavLink>
      <NavLink className="sign-btn__signin" to="/signin">
        Войти
      </NavLink>
    </div>
  );
}

export default SignBtns;
