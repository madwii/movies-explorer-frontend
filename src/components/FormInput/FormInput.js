import './FormInput.css';

function FormInput({  label,
    type,
    value,
    onChange,
    name,
    errors,
    placeholder,}) {
    return (
        <label className='input__info'>
        {label}
        <input
          className={`input__name ${errors ? 'input__name__error' : ''}`}
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
        />
        {errors && <p className='input__error'>{errors}</p>}
      </label>
    )
}

export default FormInput;