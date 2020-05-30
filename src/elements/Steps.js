import React from 'react'

const Steps = (props) => {
	const { currentStep } = props
	return (
		<div className="steps mt-4 mb-4">
			<div
				className={`step ${currentStep === 1 ? 'is-active' : ''} ${
					currentStep > 1 ? 'is-completed' : ''
				}`}
			>
				<div className="step__marker">1</div>
				<div className="step__title mt-1">Basic</div>
			</div>
			<div
				className={`step ${currentStep === 2 ? 'is-active' : ''} ${
					currentStep > 2 ? 'is-completed' : ''
				}`}
			>
				<div className="step__marker">2</div>
				<div className="step__title">Contacts</div>
			</div>
			<div
				className={`step ${currentStep === 3 ? 'is-active' : ''} ${
					currentStep > 3 ? 'is-completed' : ''
				}`}
			>
				<div className="step__marker">3</div>
				<div className="step__title">Avatar</div>
			</div>
			<div
				className={`step ${currentStep === 4 ? 'is-active' : ''} ${
					currentStep > 4 ? 'is-completed' : ''
				}`}
			>
				<div className="step__marker">4</div>
				<div className="step__title">Finish</div>
			</div>
		</div>
	)
}

export default Steps
