import "./SignBtn.css";
import { NavLink } from "react-router-dom";

function SignBtns() {
  function handleSignin() {
    console.log("click");
  }

  function handleSignup() {
    console.log("click");
  }
  return (
    <div className="sign-btn">
      <NavLink className="sign-btn__signup" to="/signup" onClick={handleSignin}>
        Регистрация
      </NavLink>
      <NavLink className="sign-btn__signin" to="/signin" onClick={handleSignup}>
        Войти
      </NavLink>
    </div>
  );
}

export default SignBtns;
