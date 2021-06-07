import "./Register.css";
import FormHeader from "../FormHeader/FormHeader";
import FormInput from "../FormInput/FormInput";
import AuthForm from "../AuthForm/AuthForm";

import useFormWithValidation from "../../hook/useFormValidation";

function Register({ onRegister }) {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation({});

  function handleOnSubmit(evt) {
    evt.preventDefault();
    onRegister(values);
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
        linkText="Войти"
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
          pattern="[A-Za-zА-Яа-яЁё -]{2,30}"
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
