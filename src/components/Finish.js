import React from 'react'
import countries from '../data/countries'
import cities from '../data/cities'

const Finish = (props) => {
  const { values } = props

  return (
    <div className="container-fluid">
      <div className="row mb-4">
        <div className="col-4">
          <img width="100%" src={values.avatar} alt="avatar" />
        </div>
        <div className="col-8 d-flex align-items-center">
          <h4>{`${values.firstname}  ${values.lastname}`}</h4>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12">
          <p>
            <strong>Email:</strong> {values.email}
          </p>
          <p>
            <strong>Mobile:</strong> {values.mobile}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Finish
