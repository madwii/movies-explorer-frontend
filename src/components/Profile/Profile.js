import "./Profile.css";

function Profile() {
return (
  <div className="profile">
    <form className="profile__box">
      <h2 className="profile__title">Привет, Григорий!</h2>
      <div className="profile__fieldset">
        <label cclassName="profile__label">Имя</label>
        <input
          className="profile__input"
          type="text"
          name="name"
          id="profile-name"
          value="Григорий"
          required
        />
      </div>

      {/* <span className="profile__error">Что-то пошло не так....</span> */}
      <hr className="profile__line" />

      <div className="profile__fieldset">
        <label cclassName="profile__label">Почта</label>
        <input
          className="profile__input"
          type="email"
          name="email"
          id="profile-email"
          value="pochta@ya.ru"
          required
        />
      </div>

      {/* <span className="profile__error">Что-то пошло не так....</span> */}
    </form>

    <div className="profile__buttons">
      <button type="submit" className="profile__button">
        Редактировать
      </button>
      <button className="profile__button profile__button_logout">
          Выйти из аккаунта</button>
    </div>
  </div>
  );
}

export default Profile;
