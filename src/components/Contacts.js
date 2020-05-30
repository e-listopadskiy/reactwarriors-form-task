import React from 'react'
import Input from '../elements/Input'
import countries from '../data/countries'
import cities from '../data/cities'

const Contacts = props => {
	const { values, errors, onChange } = props
	const getOptionsItems = item => {
		return item.map(item => (
			<option key={item.id} value={item.id}>
				{item.name}
			</option>
		))
	}
	const getOptionsCities = values => {
		const filterArray = Object.entries(cities)
			.reduce((total, current) => {
				if (current[1].country === Number(values)) {
					total.push({
						id: current[0],
						name: current[1].name,
					})
				}
				return total
			}, [])
			.map(item => (
				<option key={item.id} value={item.id}>
					{item.name}
				</option>
			))
		return filterArray
	}

	return (
		<div>
			<Input
				label="Email"
				type="text"
				error={errors.email}
				placeholder="Enter email"
				name="email"
				value={values.email}
				onChange={onChange}
			/>
			<Input
				label="Mobile"
				type="tel"
				placeholder="Enter mobile"
				name="mobile"
				value={values.mobile}
				onChange={onChange}
				error={errors.mobile}
			/>

			<div className="form-group">
				<label htmlFor="country">Select country</label>
				<select
					className={errors.country ? 'form-control invalid' : 'form-control'}
					id="country"
					name="country"
					onChange={onChange}
					value={values.country}
				>
					{getOptionsItems(countries)}
				</select>
				{errors.country ? (
					<div className="invalid-feedback">{errors.country}</div>
				) : null}
			</div>
			<div className="form-group">
				<label htmlFor="country">Select city</label>
				<select
					className={errors.city ? 'form-control invalid' : 'form-control'}
					id="city"
					value={values.city}
					name="city"
					onChange={onChange}
				>
					<option key="0" value="">
						Select city
					</option>
					,{getOptionsCities(values.country)}
				</select>
				{errors.city ? (
					<div className="invalid-feedback">{errors.city}</div>
				) : null}
			</div>
		</div>
	)
}
export default Contacts
