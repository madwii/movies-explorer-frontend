import "./Login.css";
import FormHeader from "../FormHeader/FormHeader";
import FormInput from "../FormInput/FormInput";
import AuthForm from '../AuthForm/AuthForm'

import useFormWithValidation from '../../utils/useFormValidation'

function Login({ onSubmitLogin }) {

  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  } = useFormWithValidation({})

  function handleOnSubmit(evt) {
    evt.preventDefault()
    onSubmitLogin(values)
    resetForm()
  }

  return (
    <section className="login">
      <FormHeader text="Рады видеть!" />
      <AuthForm
      name="login"
      submitBtnText="Войти" 
      linkSubmitText="Еще зарегистрированы?"
      isSubmitDisabled={isValid}
      link="/signup"
      linkText="Регистрация"
      handleOnSubmit={handleOnSubmit}
      >

        <FormInput
          label="E-mail"
          name="email"
          type="email"
          minLength="4"
          maxLength="40"
          onChange={handleChange}
          value={values.email || ''}
          errorText={errors.email}
        />
        <FormInput
          label="Пароль"
          name="password"
          type="password"
          minLength="4"
          maxLength="40"
          errorText={errors.password}
          onChange={handleChange}
          value={values.password || ''}
        />
      </AuthForm>
    </section>
  );
}

export default Login;
