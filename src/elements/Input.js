import React from 'react'

const Input = props => {
	const { type, label, id, name, placeholder, value, onChange, error } = props
	return (
		<div className="form-group">
			<label htmlFor={id}>{label}</label>
			<input
				type={type}
				className={error ? 'form-control invalid' : 'form-control'}
				id={id}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			{error ? <div className="invalid-feedback">{error}</div> : null}
		</div>
	)
}

export default Input
