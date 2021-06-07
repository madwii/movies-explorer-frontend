import './InfoTooltip.css';

function InfoTooltip({ title, isOpenPopup, onClosePopup }) {
    return (
        <section className={`popup ${isOpenPopup && 'popup_opened'}`}>
        <div
          className="popup__box"
          noValidate
        >
          <button
            type="button"
            className="popup__close"
            onClick={onClosePopup}
          ></button>
          <h2 className="popup__title">{title}</h2>

        </div>
      </section>
    )
}

export default InfoTooltip;