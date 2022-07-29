import React from 'react'
import './Sidebar.css';

import download from '../../../../Assets/Images/abc.png';
import CircleIcon from '@mui/icons-material/Circle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SettingsIcon from '@mui/icons-material/Settings';

export const Sidebar = () => {
  return (
    <div className='container-fluid'>
      <div className="row block">
                            {/* -------logo----- */}
                            <div className="col-md-12 leftHead">
                                <a className="navbar-brand" href="#" style={{ fontSize: '30pt' }}><span style={{ fontWeight: '700' }}>U-L</span><span style={{ fontSize: '18pt', fontWeight: '600' }}>ibrary</span></a>

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
                                <div className="first" style={{ backgroundColor: '#fff' }}>
                                    <h6 style={{ color: '#D23535' }} ><DashboardIcon fontSize='small' /> Dashboard</h6>
                                </div>
                                <div className="first">
                                    <h6><PeopleOutlineIcon fontSize='small' /> Members</h6>
                                </div>
                                <div className="first">
                                    <h6><LibraryBooksIcon fontSize='small' /> Books</h6>
                                </div>
                                <div className="first">
                                    <h6><MenuBookIcon fontSize='small' /> Megazine</h6>
                                </div>
                                <div className="first">
                                    <h6><NewspaperIcon fontSize='small' /> News Paper</h6>
                                </div>
                                <div className="first">
                                    <h6><ArrowCircleRightOutlinedIcon fontSize='small' /> Issued</h6>
                                </div>
                                <div className="first">
                                    <h6><ReplyOutlinedIcon fontSize='small' /> Returned</h6>
                                </div>
                                <div className="first">
                                    <h6><AccessTimeIcon fontSize='small' /> Not Return</h6>
                                </div>
                                <div className="first">
                                    <h6><SettingsIcon fontSize='small' /> Settings</h6>
                                </div>

                            </div>

                        </div>

    </div>
  )
}
