import "./Profile.css";
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useFormWithValidation from "../../hook/useFormValidation";

function Profile({ onUpdateProfile, onSignOut }) {
  const user = React.useContext(CurrentUserContext);

  const { values, errors, isValid, handleChange } = useFormWithValidation({});

  function handleOnSubmit(evt) {
    evt.preventDefault();
    onUpdateProfile({
      name: values.name || user.name,
      email: values.email || user.email,
    });
  }

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, {user.name}!</h2>
      <form
        className="profile__box"
        name="profile"
        onSubmit={handleOnSubmit}
        noValidate
      >
        <article className="profile__fieldset">
          <label className="profile__label">Имя</label>
          <input
            className="profile__input"
            type="text"
            name="name"
            id="profile-name"
            defaultValue={user.name}
            onChange={handleChange}
            required
            pattern="[A-Za-zА-Яа-яЁё -]{2,30}" /*Любая буква русского и латинского алфавита. От 2 до 3 символов */
          />
        </article>
        <span
          className={`profile__input-error ${
            !isValid && "profile__input-error_visible"
          }`}
        >
          {errors.name}
        </span>

        <hr className="profile__line" />

        <article className="profile__fieldset">
          <label className="profile__label">Почта</label>
          <input
            className="profile__input"
            id="profile-email"
            type="email"
            name="email"
            minLength="4"
            maxLength="40"
            defaultValue={user.email}
            onChange={handleChange}
            required
          />
        </article>
        <span
          className={`profile__input-error ${
            !isValid && "profile__input-error_visible"
          }`}
        >
          {errors.email}
        </span>

        <div className="profile__buttons">
          <button
            type="submit"
            className={`profile__button ${
              !isValid && "profile__button_disabled"
            }`}
            disabled={!isValid}
          >
            Редактировать
          </button>
          <button
            className="profile__button profile__button_logout"
            onClick={onSignOut}
          >
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </section>
  );
}

export default Profile;
