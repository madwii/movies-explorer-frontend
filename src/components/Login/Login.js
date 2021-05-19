import "./Login.css";
import FormHeader from "../FormHeader/FormHeader";
import FormInput from "../FormInput/FormInput";
import SubmitBtn from "../SubmitBtn/SubmitBtn"
import SignNav from '../SignNav/SignNav';
import { useState } from 'react';
import { useHistory } from "react-router";

function Login({ onSignIn, initialValues }) {

  const history = useHistory();
  const handleSignIn = () => {
    onSignIn();
    history.push("/");
  };

    const [values, setValues] = useState(initialValues);
    const [tap, setTap] = useState({});
  
    function handleChange(e) {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
      setTap({
        ...tap,
        [name]: true,
      });
    }

  return (
    <section className="login">
      <FormHeader text="Рады видеть!" />
      <form className="login__form">
        <FormInput
          label="E-mail"
          name="email"
          type="email"
          minLength="2"
          maxLength="40"
          value={values.email}
          onChange={handleChange}
          placeholder="name@mail.com"
        />
        <FormInput
          label="Пароль"
          name="password"
          type="password"
          minLength="2"
          maxLength="200"
          value={values.password}
          onChange={handleChange}
          placeholder=""
        />
        <div className="login__navigation">
        <SubmitBtn text="Войти" onSubmit={handleSignIn} />
        <SignNav
        text='Ещё не зарегистрированы?'
        link='Регистрация'
        to='/signup'
      />
      </div>
      </form>
    </section>
  );
}

export default Login;
