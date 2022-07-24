import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import './Dashboard.css';
import download from '../../Assets/Images/abc.png';
import CircleIcon from '@mui/icons-material/Circle';
export const Dashboard = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    {/* ---------First column--------- */}
                    <div className="col-md-2" style={{ height: '100vh', borderRight: '2px solid black' }}>
                        <div className="row block">
                            {/* -------logo----- */}
                            <div className="col-md-12 leftHead">
                                <a className="navbar-brand" href="#" style={{ fontSize: '30pt' }}><span style={{ fontWeight: '700' }}>U-L</span><span style={{ fontSize: '18pt', fontWeight: '600' }}>ibrary</span></a><h1></h1>

                            </div>

                            {/* ------profile section------ */}
                            <div className="col profile d-flex">
                                <div className="dp">
                                    <img src={download} width="100%" />
                                </div>
                                <div className="name">
                                    <p><b>Homen Nath</b> </p>
                                    <p className='Online'> <CircleIcon fontSize='small' style={{ color: 'green' }} /> Online</p>
                                </div>
                            </div>
                            <div className="col handler">

                            </div>

                        </div>
                    </div>
                    {/* -------------Second Column-------------- */}
                    <div className="col-md-10" style={{ height: '100vh' }}>
                        <div className="row">
                            <div className="col nav">
                                <MenuIcon fontSize='large' style={{ color: '#fff' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
