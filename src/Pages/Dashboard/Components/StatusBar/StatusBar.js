import React from 'react'
import './Statusbar.css';
import book from '../../../../Assets/Icons/book.png';
import member from '../../../../Assets/Icons/students-cap.png';
import back from '../../../../Assets/Icons/back.png';
import share from '../../../../Assets/Icons/share.png';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

export const Statusbar = () => {
  return (
    <div>
        <div className="container">
        <div className="row my-4 statusRow" style={{ justifyContent: 'space-between', padding: '0 30px' }}>
          {/* ------------first card--- */}

          <div className="col-md-3">
            <div class="card bg-info">
              <div class="card-body">
                <h3 class="card-title">Total Books</h3>
                <img src={book} alt="Book" />
                <h1>2730</h1>
                <button class="btn btn-primary" type="button"> <ArrowCircleRightOutlinedIcon /> More Info</button>
                
                
               
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card bg-success">
              <div class="card-body">
                <h3 class="card-title">Members</h3>
                <img src={member} alt="Book" />
                <h1>3434</h1>
                <button class="btn btn-primary" type="button"> <ArrowCircleRightOutlinedIcon />  More Info</button>
                
                
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card bg-warning">
              <div class="card-body">
                <h3 class="card-title">Return Book</h3>
                <img src={back} alt="Book" />
                <h1>89</h1>
                <button class="btn btn-primary" type="button"> <ArrowCircleRightOutlinedIcon /> More Info</button>
               
                
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card bg-danger">
              <div class="card-body">
                <h3 class="card-title">Borrowed</h3>
                <img src={share} alt="Book" />
                <h1>54</h1>
                <button class="btn btn-primary" type="button"> <ArrowCircleRightOutlinedIcon />  More Info</button>
               
                
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
