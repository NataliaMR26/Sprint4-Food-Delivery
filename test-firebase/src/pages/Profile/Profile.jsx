import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import userIcon from '../../images/userIcon.png';
import next from '../../images/next.png';
import paymentIcon from '../../images/payment.png';
import location from '../../images/locationGray.png';
import vector from '../../images/Vector.png';
import faq from '../../images/FAQ.png';
import phone from '../../images/phone.png'
import Footer from '../../components/commons/footer/Footer'
import '../../components/profile/Profile.scss'

function Profile() {
    const { user } = useSelector((store) => store.login);
  return (
    <>
    <section className="profile-page">
            <>
                <figure>
                    <img src={user.photo} alt="profile" />
                    <p className="user-name">{user.name}</p>
                </figure>
                <NavLink className="button-item"
                    to="/editProfile"
                >
                    <div>
                        <img src={userIcon} alt="icon" />
                        <span>Account edit</span>
                    </div>
                    <img src={next} alt="next-arrow" />
                </NavLink>
                <NavLink className="button-item"
                    to="/Payment"
                >
                    <div>
                        <img src={paymentIcon} alt="icon" />
                        <span>Payment</span>
                    </div>
                    <img src={next} alt="next-arrow" />
                </NavLink>
                <NavLink className="button-item"
                    to="/Location"
                >
                    <div>
                        <img src={location} alt="icon" />
                        <span>Location</span>
                    </div>
                    <img src={next} alt="next-arrow" />
                </NavLink>
                <NavLink className="button-item"
                    to="/Lenguage"
                >
                    <div>
                        <img src={vector} alt="icon" />
                        <span>Language</span>
                    </div>
                    <img src={next} alt="next-arrow" />
                </NavLink>
                <NavLink className="button-item"
                    to="/FAQ"
                >
                    <div>
                        <img src={faq} alt="icon" />
                        <span>FAQ</span>
                    </div>
                    <img src={next} alt="next-arrow" />
                </NavLink>
                <NavLink className="button-item"
                    to="/Support"
                >
                    <div>
                        <img src={phone} alt="icon" />
                        <span>Support</span>
                    </div>
                    <img src={next} alt="next-arrow" />
                </NavLink>
            </>
    </section>
  <Footer/>
</>
  )
}

export default Profile
