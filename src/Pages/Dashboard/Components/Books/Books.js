import React from 'react'
import '../Member/Member.css';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
export const Books = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 displayArea">
            <h2>Books</h2>
            <div className="container">
              <div className="row ">
                <div className="col-md-12">
                  <form className="d-flex searchBar" role="search">
                    <button className='btn btn-info mx-4'>Details</button>
                    <button className='btn btn-info mx-4'>Add</button>
                    <button className='btn btn-info mx-4'>Update</button>
                    <button className='btn btn-info mx-4'>Records</button>
                    <input className="form-control me-2" type="search" placeholder="Enter book name" aria-label="Search" />
                    <button className="btn btn-info " type="submit">Search</button>
                  </form>
                </div>
                <div className="col-md-12">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Book ID</th>
                        <th scope="col">Book Name</th>
                        <th scope="col">Author</th>
                        <th scope="col">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>780195696561</td>
                        <td>Software Engineering</td>
                        <td>Subhajit Datta</td>
                        <td><button className='btn btn-info text-light'>View<KeyboardDoubleArrowRightIcon /></button></td>
                      </tr>
                      <tr>
                        <td>788193245279</td>
                        <td>Data Struture and algorithm made easy</td>
                        <td>Narasimha Karumanchi</td>
                        <td><button className='btn btn-info text-light'>View<KeyboardDoubleArrowRightIcon /></button></td>
                      </tr>
                      <tr>
                        <td>788193245279</td>
                        <td>Java for everybody</td>
                        <td>James Gosling</td>
                        <td><button className='btn btn-info text-light'>View<KeyboardDoubleArrowRightIcon /></button></td>
                      </tr>
                      <tr>
                        <td>788193245279</td>
                        <td>Namaste JavaScript</td>
                        <td>Akshay Saini</td>
                        <td><button className='btn btn-info text-light'>View<KeyboardDoubleArrowRightIcon /></button></td>
                      </tr>
                      <tr>
                        <td>788193245279</td>
                        <td>Demo Book</td>
                        <td>Homen Nath</td>
                        <td><button className='btn btn-info text-light'>View<KeyboardDoubleArrowRightIcon /></button></td>
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
