import "./AuthForm.css";
import { NavLink } from "react-router-dom";

function AuthForm({
  name,
  handleOnSubmit,
  linkSubmitText,
  isSubmitDisabled,
  submitBtnText,
  link,
  linkText,
  ...props
}) {
  return (
    <form
      className="form"
      name={name}
      onSubmit={handleOnSubmit}
      noValidate
    >
      {props.children}
      <div className="form__navigation">
        <button
          className={`form__submit-button ${
            !isSubmitDisabled && "form__submit-button_disabled"
          }`}
          disabled={!isSubmitDisabled}
        >
          {submitBtnText}
        </button>

        <p className="form__text">
          {linkSubmitText}
          <NavLink className="form__link" to={link}>
            {linkText}
          </NavLink>
        </p>
      </div>
    </form>
  );
}

export default AuthForm;
