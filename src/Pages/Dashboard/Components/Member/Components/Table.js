import React from 'react'
import { Link } from 'react-router-dom';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
export const Table = () => {
  return (
    <>
      <div className='container'>
        <div className="row">
          <div className="col-md-12">
            <table className="table">
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
                  <td><Link to='/dashboard/members/profile'><button className='btn btn-info text-light'>View<KeyboardDoubleArrowRightIcon /></button></Link></td>
                </tr>
                <tr>
                  <td>UL7620002</td>
                  <td>Jacob</td>
                  <td>demo@gmail.com</td>
                  <td><button className='btn btn-info text-light'>View<KeyboardDoubleArrowRightIcon /></button></td>
                </tr>
                <tr>
                  <td>UL7620003</td>
                  <td>Jacob</td>
                  <td>demo@gmail.com</td>
                  <td><button className='btn btn-info text-light'>View<KeyboardDoubleArrowRightIcon /></button></td>
                </tr>
                <tr>
                  <td>UL7620003</td>
                  <td>Jacob</td>
                  <td>demo@gmail.com</td>
                  <td><button className='btn btn-info text-light'>View<KeyboardDoubleArrowRightIcon /></button></td>
                </tr>
                <tr>
                  <td>UL7620003</td>
                  <td>Jacob</td>
                  <td>demo@gmail.com</td>
                  <td><button className='btn btn-info text-light'>View<KeyboardDoubleArrowRightIcon /></button></td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </div>
    </>
  )
}
