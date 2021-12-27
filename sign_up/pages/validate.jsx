import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
function Validate() {
    return (
        <div className="row mt-5">
            <div className="col-md-4 card m-auto shadow-lg">
                <div className="card-body">
                    <div className="form-group p-2">
                        <label htmlFor="fullname">Full Name</label>
                        <input className='form-control' />
                    </div>
                    <div className="form-group p-2">
                        <label htmlFor="email">Email Address</label>
                        <input className='form-control' />
                    </div>
                    <div className="form-group p-2">
                        <label htmlFor="password">Password</label>
                        <input className='form-control' />
                    </div>
                    <div className="form-group p-2">
                        <input type="submit" className='btn btn-warning' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Validate
