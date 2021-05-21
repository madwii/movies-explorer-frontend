import './FormHeader.css';
import logo from "../../images/logo.svg";
import {Link} from 'react-router-dom';

function FormHeader({ text }) {
    return (
      <header className='form-header'>
      <Link to="/">
        <img src={logo} alt="Логотип" className="form-header__logo"/>
      </Link>
        <h2 className='form-header__title'>{text}</h2>
      </header>
    );
  }
  
  export default FormHeader;