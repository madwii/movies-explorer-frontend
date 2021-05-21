import './FormInput.css';

function FormInput({  label,
  name,
  type,
  minLength,
  maxLength,
  onChange,
  value,
  errorText,
}) {
    return (
        <label className='input__info'>
        {label}
        <input
          className={`input__name ${errorText && 'input__name_error'}`}
          name={name}
          type={type}
          minLength={minLength}
          maxLength={maxLength}
          onChange={onChange}
          value={value}
          required
        />
        <span className={`input__error ${errorText && 'input__error_visible'}`}>
        {errorText}
      </span>
      </label>
    )
}

export default FormInput;