import React from 'react'
import './Statusbar.css';
import book from '../../../../Assets/Icons/book.png';
import member from '../../../../Assets/Icons/students-cap.png';
import back from '../../../../Assets/Icons/back.png';
import share from '../../../../Assets/Icons/share.png';
import verify from '../../../../Assets/Icons/verify.png';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

export const Statusbar = () => {
  return (
    <div>
      <div className="container">
        <div className="row my-3 statusRow" style={{ justifyContent: 'space-between', padding: '0 30px' }}>
          {/* ------------first card--- */}

          <div className="col-md-3">
            <div className="card bg-info">
              <div className="card-body">
                <h3 className="card-title">Total Books</h3>
                <div className="d-flex">
                  <h1>2730</h1>
                  <img src={book} alt="Book" />

                </div>




              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-success">
              <div className="card-body">
                <h3 className="card-title">Members</h3>
                <div className="d-flex">
                  <h1>3434</h1>
                  <img src={member} alt="Book" />

                </div>



              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-warning">
              <div className="card-body">
                <h3 className="card-title">Return Book</h3>
                <div className="d-flex">
                  <h1>89</h1>
                  <img src={back} alt="Book" />

                </div>


              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-danger">
              <div className="card-body">
                <h3 className="card-title">Issued Today</h3>
                <div className="d-flex">
                  <h1>54</h1>
                  <img src={verify} alt="Book" />
                </div>




              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
