import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";



const SignUp = () => {
    const { createuser, updateUserProfile } = useContext(AuthContext);
   const navigate = useNavigate();
   const axiosPublic = useAxiosPublic();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log(data);
        createuser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
            .then(()=>{console.log('user profile updated')})
            .catch(error =>console.log(error))
          
            // create user in database
            const userInfo= {
                name: data.name,
                email:data.email
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                if(res.data.insertedId){
                    console.log('user added in the database')
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "User created Successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            }) 
        
           
              navigate('/')
        })
    }


    return (
        <>
        <Helmet>
                <title>Bistro Boss | Sign Up</title>
                
            </Helmet>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-400">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoUrl</span>
                            </label>
                            <input type="text" {...register("photoURL", { required: true })} name="photoURL" placeholder="Photo Url" className="input input-bordered" />
                            {errors.photoURL && <span className="text-red-400">PhotoUrl is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-400">Email is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 30,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} name="password" placeholder="password" className="input input-bordered" />

                            {errors.password?.type === "required" && (
                                <p className="text-red-400">Password is required</p>)}
                            {errors.password?.type === "minLength" && (
                                <p className="text-red-400"> password must be 6 chararecters</p>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <p className="text-red-400"> password must be less then 30 chararecters</p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className="text-red-400"> password must have one uppercase, one lowercase, one number, one special character needed</p>
                            )}

                        </div>

                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value='Sign Up' />
                        </div>
                    </form>

                    <p className="px-6"><small>Alreadey have a Account ?</small><Link to='/login'>Login</Link></p>
                    <div className='w-full '>
                    <SocialLogin></SocialLogin>
                    </div>
                
                </div>
            </div>
        </div>
        </>
    );
};

export default SignUp;