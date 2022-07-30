import React from 'react'
import './Member.css';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
export const Member = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 displayArea">
            <h1>Members</h1>
            <div className="container">
              <div className="row ">
                <div className="col-md-12">
                  <form className="d-flex searchBar" role="search">
                    <button className='btn btn-info mx-4'>Details</button>
                    <button className='btn btn-info mx-4'>Register</button>
                    <button className='btn btn-info mx-4'>Update</button>
                    <button className='btn btn-info mx-4'>Records</button>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-info " type="submit">Search</button>
                  </form>
                </div>
                <div className="col-md-12">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Member ID</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email Id</th>
                        <th scope="col">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>UL7620001</td>
                        <td>Homen Nath</td>
                        <td>demo@gmail.com</td>
                        <td><button className='btn btn-info text-light'>View<KeyboardDoubleArrowRightIcon/></button></td>
                      </tr>
                      <tr>
                        <td>UL7620002</td>
                        <td>Jacob</td>
                        <td>demo@gmail.com</td>
                        <td><button className='btn btn-info text-light'>View<KeyboardDoubleArrowRightIcon/></button></td>
                      </tr>
                      <tr>
                        <td>UL7620003</td>
                        <td>Jacob</td>
                        <td>demo@gmail.com</td>
                        <td><button className='btn btn-info text-light'>View<KeyboardDoubleArrowRightIcon/></button></td>
                      </tr>
                      <tr>
                        <td>UL7620003</td>
                        <td>Jacob</td>
                        <td>demo@gmail.com</td>
                        <td><button className='btn btn-info text-light'>View<KeyboardDoubleArrowRightIcon/></button></td>
                      </tr>
                      <tr>
                        <td>UL7620003</td>
                        <td>Jacob</td>
                        <td>demo@gmail.com</td>
                        <td><button className='btn btn-info text-light'>View<KeyboardDoubleArrowRightIcon/></button></td>
                      </tr>
                     
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
