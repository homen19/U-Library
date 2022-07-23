import React from 'react'
import { Navbar } from '../../Components/Navbar'

export const About = () => {
    return (
        <div>
        <Navbar />
            <div className="container my-5">
                <div className="accordion " id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <h5>Easy to use</h5>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body float-start">
                                It is a very user frindly system. User can easily understand every thing present in the webpages and it will be easy to use.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <h5>Secure System</h5>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body float-start">
                                It is very secure system. Authentication needed to enter the system. Only authorized person can enter the system and can use very easily. Unauthorized person can not enter the system and use so it is a very secure system.
                                Users passwords are very strong and here some cryptography algorithms are used for hashing purpose to make the system secure.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <h5>Compatible With Any Devices</h5>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body float-start">
                               <p>This system can use in any devices like Mobile, Tablet, Laptop etc. User need not worry to use the system user have to know only the email id and password then it can be used anywhere.</p>
                            </div>
                        </div>
                    </div>
                    

                </div>

            </div>
        </div>
    )
}
