import React from 'react'
import { Navbar } from '../../Components/Navbar';
import './Login.css';
const Login = () => {
    return (
        <div>
        <Navbar />
            <div className="container">
                <div className='form-main' >
                    <div className="row">
                        <h1>Login</h1>
                    </div>
                    <div className="mb-3 row my-5">
                        <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="staticEmail" placeholder='Enter email ' />
                        </div>
                    </div>
                    <div className="mb-3 row my-5">
                        <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword" placeholder='Enter password' />
                        </div>
                    </div>
                    <div className='text-center button1'>
                        <button className="btn btn-primary my-5 text-center" type="submit">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login