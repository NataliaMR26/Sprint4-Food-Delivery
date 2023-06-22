import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { auth, google } from "../../firebase/FirebaseConfig";
import {
  loginUserAsync,
  loginUser,
  userLoginProviderAsync
} from "../../redux/actions/loginActions";
import logo from '../../images/logoSignIn.png'
import googleIcon from '../../images/google.svg'
import '../../components/login/loginEmail/Validation.scss'

function Validation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, user, loading, isLogged } = useSelector((store) => store.login);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitForm = (data) => {
    dispatch(loginUserAsync(data));
  };

  useEffect(()=>{
    if(error.status){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message
      })
      const err = { status: false, message: ''}
      dispatch(loginUser({}, err))
    }
    if (isLogged && loading=== false && error.status === false){
      if (user.name &&  user.photo) {
        navigate("/home");
      } else{
        navigate("/register", { state: {
          "email": auth.currentUser.email,
          // "phone": auth.currentUser.phoneNumber
        }})
      }
    }
    
  },[error, loading, isLogged])

  const sesionProvider = (provider) => {
    dispatch(userLoginProviderAsync(provider));
  };

  return (
    <section className="login-page">
      <figure>
          <img src={logo} alt="logo" />
      </figure>
          <p className="title">Sing in</p>
          <p className="description">Login or create an account with your
            email to start ordering
          </p>
          <form className="formLogin"  onSubmit={handleSubmit(onSubmitForm)}>
            <input
              type="text"
              placeholder="email"
              {...register("email", { required: "Ingresa un email" })}
            />
            {errors.email && <span className='error'>{errors.email.message}</span>}
            <input
              type="password"
              placeholder="password"
              {...register("password", { required: "Ingresa una contraseña" })}
            />
            {errors.password && <span  className='error'>{errors.password.message}</span>}
            <Link className="button-register"
              to="/register"
            >Register new user</Link>
            <div className="providers">
              <figure
                onClick={() => {
                  sesionProvider(google);
                }}
              >
                <img src={googleIcon} alt="google"/>
              </figure>
            </div>
            <button className="login-button" type="submit">Login</button>
          </form>

    </section>
  )
}

export default Validation
