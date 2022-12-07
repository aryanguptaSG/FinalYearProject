import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import dp from "../../assets/images/avtar.jpg";
import Profile from '../../components/common/Profile';
import Orders from '../../components/common/Orders';
import EditIcon from "../../assets/icons/EditIcon";
import Navbar from "../../components/common/Navbar";


function ProfilePage() {
    const [view, setView] = useState("profile");
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Profile - A Home Maintenance Web App";
        const userInfo = localStorage.getItem("user");
        if (!userInfo) {
            navigate("/login");
            return;
        }
    }, [navigate])

    const setViewProfile = () => {
        setView("profile");
    }

    const setViewOrders = () => {
        setView("orders");
    }



    return (
        <div>
            <Navbar userName={""} />
            <div className='flex justify-center items-start p-10 flex-wrap lg:space-x-8 min-h-screen'>
                <div className='w-[100%] lg:w-[28%] mb-10 flex justify-center flex-col items-center'>
                    <div className='relative'>
                        <img src={dp} className="shadow-dark-box rounded-full p-[1px]" width={250} height={250} alt="profile" />
                        <div className="absolute bottom-2 right-6 cursor-pointer">
                            <EditIcon />
                        </div>
                    </div>
                    <div className='flex justify-center items-center w-full lg:flex-col mt-5 space-x-2 lg:space-y-2 lg:space-x-0 '>
                        <div
                            onClick={setViewProfile}
                            className={`w-[50%] text-center py-2 px-10 outline cursor-pointer ${view === "profile" && "bg-black-gray text-white font-bold"}`}>Profile</div>
                        <div
                            onClick={setViewOrders}
                            className={`w-[50%] text-center py-2 px-10 outline cursor-pointer ${view === "orders" && "bg-black-gray text-white font-bold"}`}>Orders</div>
                    </div>
                </div>
                <div className='w-[100%] lg:w-[68%]'>
                    {
                        view === "profile" ?
                            <Profile />
                            :
                            <Orders />
                    }
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;