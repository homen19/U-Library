import React from 'react'
import '../../Member/Member.css';

import { Outlet } from 'react-router-dom';
import { Header } from './Header';
export const Books = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 displayArea">
            <h2>Books</h2>
            <div className="container">
              <div className="row ">
              <Header />
              <Outlet />
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
