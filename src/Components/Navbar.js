import React from 'react'
import { Link } from 'react-router-dom';
export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark navbar-expand-lg" style={{ backgroundColor: '#5A20CB', color: '#fff' }}>
                <div className="container">
                    <a className="navbar-brand" href="#" style={{fontSize: '25pt'}}><span style={{fontWeight: '700'}}>U-L</span><span style={{fontSize: '15pt'}}>ibrary</span></a><h1></h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 my-2">
                            <li className="nav-item mx-5">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-5">
                                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                                
                            </li>
                            <li className="nav-item mx-5">
                                <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item mx-5">
                                <Link className="nav-link active" aria-current="page" to="/faq">FAQ</Link>
                            </li>
                            

                            
                        </ul>
                      
                    </div>
                </div>
            </nav>

        </div>
    )
}
