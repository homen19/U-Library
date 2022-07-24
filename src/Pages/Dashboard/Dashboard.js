import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import './Dashboard.css';
import StatusBar from './Components/StatusBar/StatusBar';
import { Dash } from './Components/Dashboard/Dash';
import { Routes, Route } from "react-router-dom";
import { Members } from './Components/Members/Members';
import { Books } from './Components/Books/Books';

export const Dashboard = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    {/* ---------First column--------- */}
                    <div className="col-md-2" style={{ height: '100vh', borderRight: '2px solid black' }}>
                        <Dash />
                    </div>
                    {/* -------------Second Column-------------- */}
                    <div className="col-md-10" style={{ height: '100vh' }}>
                        <div className="row">
                            {/* --------Dashboard Nav-------- */}
                            <div className="col-md-12 nav">
                                <MenuIcon fontSize='large' style={{ color: '#fff' }} />
                            </div>
                            {/* ----------Dashboard Heading----------- */}
                            <div className="col-md-12 headDashMain">
                                <h4><span className='headDash'>U-L</span>ibrary <span style={{ opacity: '0.9' }}>Control Panel</span></h4>
                            </div>
                            {/* ------Status Bar---- */}

                            <Routes>
                                <Route path="adminPanel" element={<StatusBar />}>
                                    <Route path="adminPanel/books" element={<Books />} />
                                    <Route path="/adminPanel/members" element={ <Members /> } />
                                </Route>
                              



                            </Routes>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
