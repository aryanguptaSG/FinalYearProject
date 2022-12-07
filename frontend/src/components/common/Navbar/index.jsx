import React from 'react';
import Text from '../Text';
import UserIcon from '../../../assets/icons/UserIcon';
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo_house.png";

function Navbar({ userName = "" }) {
    const navigate = useNavigate();
    return (
        <div className='shadow-dark-box h-14 flex justify-between items-center'>
            <div className='px-5'>
                <img className='cursor-pointer' src={logo} alt="Logo" width={70} onClick={() => {
                    navigate("/");
                }} />
            </div>
            <div className='h-14  flex justify-end items-center px-5 text-xl'>
                <Text as="p" className="mx-5">{userName}</Text>
                <UserIcon className="cursor-pointer" width={24} height={24} onClick={() => {
                    navigate("/profile");
                }} />
            </div>
        </div>
    )
}

export default Navbar;
