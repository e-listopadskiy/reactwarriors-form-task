import React from 'react'

const Buttons = (props) => {
  const { onPrevious, onNext, onReset, currentStep } = props

  if (currentStep < 4) {
    return (
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-light mr-4"
          onClick={onPrevious}
          disabled={currentStep === 1}
        >
          Previous
        </button>
        <button type="button" className="btn btn-secondary" onClick={onNext}>
          Next
        </button>
      </div>
    )
  }
  if (currentStep === 4) {
    return (
      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-primary" onClick={onReset}>
          Reset
        </button>
      </div>
    )
  }
}

export default Buttons
