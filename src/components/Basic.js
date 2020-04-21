import React from 'react'
import Input from './Input'

const Basic = props => {
  const { values, onChange, errors } = props
  return (
    <div>
      <Input
        label="Firstname"
        type="text"
        error={errors.firstname}
        placeholder="Enter firstname"
        name="firstname"
        value={values.firstname}
        onChange={onChange}
      />
      <Input
        label="Lastname"
        type="text"
        error={errors.lastname}
        placeholder="Enter lastname"
        name="lastname"
        value={values.lastname}
        onChange={onChange}
      />
      <Input
        label="Password"
        type="password"
        error={errors.password}
        placeholder="Enter password"
        name="password"
        value={values.password}
        onChange={onChange}
      />
      <Input
        label="RepeatPassword"
        type="password"
        error={errors.repeatPassword}
        placeholder="Enter repeatPassword"
        name="repeatPassword"
        value={values.repeatPassword}
        onChange={onChange}
      />
      <fieldset>
        <div>Gender</div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="male"
            onChange={onChange}
            value="male"
            checked={values.gender === 'male'}
          />
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="female"
            onChange={onChange}
            value="female"
            checked={values.gender === 'female'}
          />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>
      </fieldset>
    </div>
  )
}

export default Basic
