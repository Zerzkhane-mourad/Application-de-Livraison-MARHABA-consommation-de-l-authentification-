import React, { Fragment, useState } from 'react';
import { useNavigate } from "react-router-dom";
import {API_URL} from './../config';
import axios from 'axios';
import toastr from 'toastr';
import "toastr/build/toastr.css";


const Signup = () => {
    
    const navigate = useNavigate();
    
    const [user, setUser] = useState({
        username: '',
        email:'',
        password:''
    })
    
    const handleChange = (e) =>{
    
        setUser({...user, [e.target.id]: e.target.value})
        
    }
    
    
    const submiSignup = e => {
        e.preventDefault();

        axios.post(`${API_URL}/signup` , user)

        .then(()=> {
            toastr.success('Creteded succefully !',{
                positionClass: "toastr-bottom-left",
            })
            navigate('/signin')
        })
        .catch((error)=>{
            if(error.response){
                toastr.warning(error.response.data.error, 'Please chek Form !',{
                    positionClass: "toastr-bottom-left",
                })
            }
            
        })
        
    }

    return (
        <Fragment>
            <div className="container h-100">
                <div className="row justify-content-sm-center h-100">
                    <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                        <div className="text-center  my-2  fonts">
                            <h3>Create Acount</h3>
                        </div>
                        <div className="card shadow-lg border-0">
                            <div className="card-body px-5 py-3">
                                <form onSubmit={submiSignup} className="needs-validation">
                                    <div className="mb-3 font-weight-bold pt-2">
                                        <label className="mb-2 fonts font-weight-bold" ><b>Username</b></label>
                                        <input onChange={handleChange} id="username" type="text" className="form-control rounded-0 border-dark" name="username" />
                                        <div className="invalid-feedback">
                                            Username is invalid
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <div className="mb-2 w-100">
                                            <label className="fonts"><b>Email</b></label>
                                        </div>
                                        <input onChange={handleChange} id="email" type="email" className="form-control rounded-0 border-dark" name="email" />
                                        <div className="invalid-feedback">
                                            Email is Invalid
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <div className="mb-2 w-100">
                                            <label className="fonts"><b>Password</b></label>
                                        </div>
                                        <input onChange={handleChange} id="password" type="password" className="form-control rounded-0 border-dark" name="password" />
                                    </div>

                                    <div className="mb-3">
                                        <div className="mb-2 w-100">
                                            <label className="fonts"><b>CONFIRM Password</b></label>
                                        </div>
                                        <input  type="password" className="form-control rounded-0 border-dark" name="password" />
                                    </div>

                                    <div className="d-flex align-items-center fonts pb-3">
                                        <button  className=" w-100 bg-black text-light b  py-2 px-4 rounded-0   ms-auto fonts  border-0 ">
                                            <b>CREER UN COMPTE</b>
                                        </button>
                                    </div>
                                    {/* { JSON.stringify(user) } */}
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}

export default Signup