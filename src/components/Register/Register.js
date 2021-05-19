import "./Register.css";
import FormHeader from "../FormHeader/FormHeader";
import FormInput from "../FormInput/FormInput";
import SubmitBtn from "../SubmitBtn/SubmitBtn";
import SignNav from "../SignNav/SignNav";
import { useState } from "react";
import { useHistory } from "react-router";

function Register() {

  const history = useHistory();
  const handleRegistration = () => {
    history.push("/signin");
  };
  
  const [values, setValues] = useState({});
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
    <section className="register">
      <FormHeader text="Добро пожаловать!" />
      <form className="register__form">
        <FormInput
          label="Имя"
          name="name"
          type="text"
          minLength="2"
          maxLength="40"
          value={values.name}
          onChange={handleChange}
          placeholder="Имя"
        />
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
        <div className="register__navigation">
          <SubmitBtn text="Зарегистрироваться" onSubmit={handleRegistration}/>
          <SignNav
            text="Уже зарегистрированы?"
            link="Войти"
            to="/signin"
          />
        </div>
      </form>
    </section>
  );
}

export default Register;
