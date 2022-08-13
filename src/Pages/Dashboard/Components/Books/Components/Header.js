import React from 'react'
import '../../Member/Member.css';
import { Link } from 'react-router-dom';
export const Header = () => {
    return (
        <div>
            <div className="container">
                <div className="row ">
                    <div className="col-md-12">
                        <form className="d-flex searchBar" role="search">
                            <button className='btn btn-info mx-4'><Link className='text-decoration-none text-light' to='/dashboard/books/details'>Details</Link></button>
                            <button className='btn btn-info mx-4'><Link className='text-decoration-none text-light' to='/dashboard/books/add'>Add</Link></button>
                            <button className='btn btn-info mx-4'><Link className='text-decoration-none text-light' to='/dashboard/books/book-update'>Update</Link></button>
                            <button className='btn btn-info mx-4'><Link className='text-decoration-none text-light' to='/dashboard/books/book-records'>Records</Link></button>
                            <input className="form-control me-2" type="search" placeholder="Enter book name" aria-label="Search" />
                            <button className="btn btn-info " type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
