import React from 'react'
import { Header } from '../Components/Header/Header'
import { Sidebar } from '../Components/Sidebar/Sidebar'
import { Statusbar } from '../Components/StatusBar/Statusbar'

export const Landing = () => {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-2" style={{height: '100vh',  padding:'0'}}>
                <Sidebar />
            </div>
            <div className="col-md-10" style={{height: '100vh', border: '1px solid blue'}}>
                <div className="row">
                    <Header />
                    <Statusbar />
                </div>
            </div>
        </div>
    </div>
  )
}
