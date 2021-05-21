import "./Register.css";
import FormHeader from "../FormHeader/FormHeader";
import FormInput from "../FormInput/FormInput";
import AuthForm from "../AuthForm/AuthForm";

import useFormWithValidation from "../../utils/useFormValidation";

function Register({ onSubmitRegister }) {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation({});

  function handleOnSubmit(evt) {
    evt.preventDefault();
    onSubmitRegister(values);
    resetForm();
  }

  return (
    <section className="register">
      <FormHeader text="Добро пожаловать!" />
      <AuthForm
        name="register"
        submitBtnText="Зарегистрироваться"
        linkSubmitText="Уже зарегистрированы?"
        isSubmitDisabled={isValid}
        link="/signin"
        linkText="Регистрация"
        handleOnSubmit={handleOnSubmit}
      >
        <FormInput
          label="Имя"
          name="name"
          type="text"
          errorText={errors.name}
          minLength="2"
          maxLength="30"
          onChange={handleChange}
          value={values.name || ""}
        />
        <FormInput
          label="E-mail"
          name="email"
          type="email"
          errorText={errors.email}
          minLength="4"
          maxLength="40"
          onChange={handleChange}
          value={values.email || ""}
        />
        <FormInput
          label="Пароль"
          name="password"
          type="password"
          errorText={errors.password}
          minLength="4"
          maxLength="40"
          onChange={handleChange}
          value={values.password || ""}
        />
      </AuthForm>
    </section>
  );
}

export default Register;
