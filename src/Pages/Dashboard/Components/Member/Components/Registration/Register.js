import React from 'react'
import './Register.css';
export const Register = () => {
  return (
    <div>
      <h3 className='my-2'>Register Member</h3>
      <div className="container main1">
        <div className="row">
          <form >
            <div className="col-md-12 f-row d-flex my-2">
              <div className="mb-3 text-start">
                <label for="name" className="form-label">Name <span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" placeholder='Enter name' id="exampleInputEmail1" aria-describedby="emailHelp" />

              </div>
              <div className="mb-3 text-start">
                <label for="exampleInputEmail1" className="form-label">Email address <span style={{ color: 'red' }}>*</span></label>
                <input type="email" className="form-control" placeholder='Enter email address' id="exampleInputEmail1" aria-describedby="emailHelp" />

              </div>
              <div className="mb-3 text-start">
                <label for="phone" className="form-label">Phone Number <span style={{ color: 'red' }}>*</span></label>
                <input type="email" className="form-control" placeholder='Enter phone number' id="exampleInputEmail1" aria-describedby="emailHelp" />

              </div>

            </div>
            <div className="col-md-12 f-row d-flex">
              <div className="mb-3 text-start">
                <label for="exampleInputEmail1" className="form-label">Adhar number <span style={{ color: 'red' }}>*</span></label>
                <input type="email" className="form-control" placeholder='Enter adhar number' id="exampleInputEmail1" aria-describedby="emailHelp" />

              </div>
              <div className="mb-3 text-start">
                <label for="exampleInputEmail1" className="form-label">Upload photo <span style={{ color: 'red' }}>*</span></label>
                <input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

              </div>
              <div className="mb-3 text-start">
                <label for="exampleInputEmail1" className="form-label">Upload adhar card <span style={{ color: 'red' }}>*</span></label>
                <input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

              </div>

            </div>
            <div className="col">
              <button className='btn btn-info my-4 text-light'>Submit</button>
            </div>
          </form>
        </div>

      </div>

    </div>
  )
}
