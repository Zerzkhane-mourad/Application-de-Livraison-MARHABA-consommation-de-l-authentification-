import React, { useState } from 'react'
import {API_URL} from './../config'
import axios from 'axios';
import toastr from 'toastr';
import "toastr/build/toastr.css"



const Signin = (props) => {

    const [user, setUser] = useState({
        email:'',
        password:''
    })
    
    const handleChange = (e) =>{
    
        setUser({...user, [e.target.id]: e.target.value})
        
    }


    const submiSignin = e => {
        e.preventDefault();

        axios.post(`${API_URL}/signin` , user , {
        })

        .then(()=> {
            toastr.info('Login succefully !',{
                positionClass: "toastr-bottom-left",
            })
            props.history.push('/')
        })
        .catch(error =>{
            if(error.response){
                toastr.warning(error.response.data.error, 'Please chek Form !',{
                    positionClass: "toastr-bottom-left",
                })
            }
            console.log(error)
        })
    }

    return (
        <div>
            <div>
                <div className="container h-100 mt-5">
                    <div className="row justify-content-sm-center h-100">
                        <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                            <div className="text-center  my-2 mt-5  fonts">
                                <h3>Connexion</h3>
                            </div>
                            <div className="card shadow-lg border-0">
                                <div className="card-body px-5 py-3">
                                    <form onSubmit={submiSignin}  className="needs-validation">
                                        <div className="mb-3 font-weight-bold pt-2">
                                            <label className="mb-2 fonts font-weight-bold" for="email"><b>Email</b></label>
                                            <input onChange={handleChange}  id="email" type="email" className="form-control rounded-0 border-dark" name="email" />
                                            <div className="invalid-feedback">
                                                Email is invalid
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <div className="mb-2 w-100">
                                                <label className="fonts" for="password"><b>Password</b></label>
                                            </div>
                                            <input onChange={handleChange} id="password" type="password" className="form-control rounded-0 border-dark" name="password" />
                                            <div className="invalid-feedback">
                                                Password is required
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center fonts pb-3">
                                            <button type="submit"
                                                className=" w-100 bg-black text-light b  py-2 px-4 rounded-0   ms-auto fonts  border-0 ">
                                                <b>Login</b>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin