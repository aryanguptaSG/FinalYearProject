import React, { useState, useEffect } from 'react'
import Navbar from "../../components/common/Navbar";
import { useNavigate, Link } from "react-router-dom";
import Button from '../../components/common/Button';
import heroImg from "../../assets/images/Hero.jpeg";
import plumberImg from "../../assets/images/plu.jpg";
import painterImg from "../../assets/images/pai.jpg";
import eleImg from "../../assets/images/ele.jpg";


function HomePage() {
    const [auth, setAuth] = useState(null);
    const [type, settype] = useState("c");
    const navigate = useNavigate();
    useEffect(() => {
        settype(localStorage.getItem("type"));
        const userInfo = localStorage.getItem("user");
        if (!userInfo) {
            navigate("/login");
            return;
        }
        const myauth = JSON.parse(userInfo);
        if (!myauth.user.Name.length || !myauth.user.Phone.length || !myauth.user.Location.length) {
            console.log(myauth);
            console.log("Not complete");
            navigate("/profile");
            return;
        }
        setAuth(myauth);
    }, [navigate])

    const dummyText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde accusantium, magni laboriosam temporibus vel rerum sapiente consequatur doloremque nulla! Nulla est deleniti architecto exercitationem sit? Ipsa consequatur qui enim quae!";

    const servicesList = [
        {
            "text": dummyText + dummyText,
            "btn": "Book Your Electrician",
            "to": "/search/electrician",
            "img": eleImg
        },
        {
            "text": dummyText + dummyText,
            "btn": "Book Your Plumber",
            "to": "/search/plumber",
            "img": plumberImg
        },
        {
            "text": dummyText + dummyText,
            "btn": "Book Your Painter",
            "to": "/search/painter",
            "img": painterImg
        }

    ]



    return (
        <div className='min-h-screen'>
            {auth &&
                <div>
                    <Navbar userName='' />
                    <div className='flex justify-center items-center flex-wrap'>
                        <div className='flex items-center justify-center md:w-[45%] sm:w-[100%] p-5'>
                            <img src={heroImg} width={500} alt="hero" className='rounded-full shadow-dark-box' />
                        </div>
                        <div className='md:w-[45%] sm:w-[100%] flex justify-center'>
                            <div>
                                <p className='text-4xl text-left font-thin tracking-widest'><span className='font-bold'>We</span> are Here <br /> to <br /> Help <span className='font-bold'>You !</span></p>

                                <a href="#services"><Button text={"Get Started"} className="mt-10 py-[0px]" /></a>
                            </div>
                        </div>
                    </div>

                    <div className='mt-10 text-center px-5 lg:px-50 md:px-10 space-y-3'>
                        <h1 className='text-xl font-bold'>About</h1>
                        <p className='text-justify lg:px-50 md:px-10 text-lg'>{dummyText + dummyText + dummyText + dummyText}</p>
                    </div>


                    {type === "c" && <div id="services" className='mt-10 text-center px-5 lg:px-50 md:px-10 space-y-3 mb-10'>
                        <h1 className='text-xl font-bold'>Services</h1>
                        <div className='space-y-14'>
                            {
                                servicesList.map((item, id) => {
                                    return (
                                        <div key={id} className="flex justify-center flex-wrap space-x-5">
                                            <div className='md:w-[45%] sm:w-[100%] flex justify-center items-center'>
                                                <div>
                                                    <p className='text-justify'>{item.text}</p>
                                                    <Link to={item.to}><Button text={item.btn} className="mt-10 py-[0px]" /></Link>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-center md:w-[45%] sm:w-[100%]'>
                                                <img src={item.img} alt="item" width={300} className="rounded-full shadow-dark-box" />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>}

                </div>
            }
        </div>
    )
}

export default HomePage;
