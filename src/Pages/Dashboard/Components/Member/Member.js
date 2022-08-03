import React from 'react'
import './Member.css';
import { Outlet, Link } from 'react-router-dom';

export const Member = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 displayArea">
            <h2>Members</h2>
            <div className="container">
              <div className="row ">
                <div className="col-md-12">
                  <form className="d-flex searchBar" role="search">
                    <button className='btn btn-info mx-4'><Link className="text-decoration-none text-light" to="/dashboard/members/details">Details</Link></button>
                    <button className='btn btn-info mx-4'><Link className="text-decoration-none text-light" to="/dashboard/members/register-member">Register</Link></button>
                    <button className='btn btn-info mx-4'><Link className="text-decoration-none text-light" to="/dashboard/members/member-update">Update</Link></button>
                    <button className='btn btn-info mx-4'><Link className="text-decoration-none text-light" to="/dashboard/members/member-record">Records</Link></button>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-info " type="submit">Search</button>
                  </form>
                </div>
                <dic className="col-md-12">
                  <Outlet />
                </dic>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
