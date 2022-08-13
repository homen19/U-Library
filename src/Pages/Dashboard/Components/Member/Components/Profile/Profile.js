import React from 'react'
import './Profile.css'
import ppic from '../../../../../../Assets/Images/profiles.png';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HistoryIcon from '@mui/icons-material/History';
export const Profile = () => {
  return (
    <>
      <div className="container">
        <div className="row main3 my-4">
          <div className="col-md-12 header">
            <h3>Member Profile</h3>
          </div>
          {/* -------left side part------- */}
          <div className="col-md-5 pic1">
                <div className="image-part">
                  <img src={ppic}/>
                </div>
                <div className="names">
                  <h5>Homen Nath</h5>
                  <h6>UL22MJ3452001</h6>
                  <p style={{fontWeight:'600', color:'green'}}>48 books issued</p>
                  <p style={{fontWeight:'600', color:'red', position:'relative', top:'-17px'}}>2 books pending</p>
                </div>
          </div>
          {/* ----------right side part-------- */}
          <div className="col-md-6 pic2">
            <div className='btn2'>
              <button className="btn btn-danger"> <DeleteIcon/> Delete</button>
            </div>
            <div className="data">
                <div>
                  <label >Adhar No :</label>
                  8758 8758 6954
                </div>
                <div>
                  <label >Address </label>
                  <ul>
                    <li>Vill : Demo Village</li>
                    <li>PO : Demo Post Office</li>
                    <li>PIN : 784587</li>
                    <li>Dist : Demo District</li>
                    <li>State : Assam</li>
                  </ul>
                </div>
            </div>
          </div>
          <div className="col-md-12 buttom text-center">
              <button className="btn btn-info mx-2"> <ArrowBackIosIcon /> Previous </button>
              <button className="btn btn-info"> <HistoryIcon /> View history </button>
          </div>
        </div>
      </div>
    </>
  )
}
