import React from "react";
import { useNavigate } from "react-router-dom";
import back from '../../../images/back.png'
import '../header-back/header-back.scss'

const HeaderBack = ({text}) => {
    const navigate = useNavigate();
    const returnPage=()=>{
        navigate(-1)
    }
    return (
        <header className="header-back">
            <img src={back} alt="arrow" onClick={returnPage} />
            <p className="title">{text}</p>
        </header>
    );
};

export default HeaderBack;
