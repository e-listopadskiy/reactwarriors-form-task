import React from 'react'
import avatar from '../image/avatar-image.png'

const Avatar = (props) => {
	const { values, errors, onChange } = props

	const onChangeAvatar = (event) => {
		const reader = new FileReader()
		reader.onload = (event) => {
			onChange({
				target: {
					value: event.target.result,
					name: 'avatar',
				},
			})
		}
		reader.readAsDataURL(event.target.files[0])
	}

	return (
		<div>
			<img
				className="mb-4"
				width="100%"
				src={values.avatar || avatar}
				alt="avatar"
			/>
			<div className="mb-4">
				<div className="custom-file">
					<input
						type="file"
						name="avatar"
						className="custom-file-input"
						id="customFile"
						onChange={onChangeAvatar}
					/>
					<label
						className={
							errors.avatar ? 'custom-file-label invalid' : 'custom-file-label'
						}
						htmlFor="customFile"
					>
						Choose avatar
					</label>
				</div>
				{errors.avatar ? (
					<div className="invalid-feedback">{errors.avatar}</div>
				) : null}
			</div>
		</div>
	)
}

export default Avatar
