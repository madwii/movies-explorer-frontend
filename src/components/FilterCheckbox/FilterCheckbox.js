import React from 'react'
import './FilterCheckbox.css'

function FilterCheckbox({ onFilter }) {
  function handleOnChange(evt) {
    onFilter(evt.target.checked)
  }

  return (
<label className="switch">
<input className="switch__default" type="checkbox" onChange={handleOnChange}/>
<span
  className="switch__slider"
/>
<span className="switch__label">Короткометражки</span>
</label>
  )
}

export default FilterCheckbox;

