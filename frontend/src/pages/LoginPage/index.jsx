import React, { useState, useEffect } from 'react'
import loginImg from "../../assets/images/signin.jpg";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { Link } from 'react-router-dom';
import DropDown from "../../components/common/Dropdown";
import Text from '../../components/common/Text';
import { logIn as getAuth } from '../../api/account';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");
    const [type, settype] = useState("Customer");
    const navigate = useNavigate();



    useEffect(() => {
        document.title = "Log In - A Home Maintenance Web App";
    }, [])

    const navigateToHomePage = () => {
        navigate("/");
    }

    const logIn = () => {
        const e = email.trim();
        const pass = passWord.trim();
        if (!e || !pass) {
            alert("All fields are required !");
            return;
        }
        getAuth(e, pass, type, navigateToHomePage);
        setEmail("");
        setPassWord("");
    }

    return (
        <div className='flex flex-wrap justify-around items-center min-h-screen'>
            <div className='flex items-center justify-center md:w-[45%] sm:w-[100%] p-5'>
                <img src={loginImg} alt="Login" className='rounded-full shadow-dark-box' />
            </div>
            <div className='md:w-[45%] sm:w-[100%] space-y-8  flex flex-col items-center justify-center'>
                <Input required={true} label="Email" placeholder="aryan@gmail.com" value={email} onChange={setEmail} type="email" />
                <Input required={true} label="Password" placeholder="1234" value={passWord} onChange={setPassWord} type="password" />

                <div className='pl-5 space-y-2'>
                    <Text as="p">Choose Type</Text>
                    <DropDown current={type} setCurrent={settype} options={["Customer", "Worker"]} className="w-[270px]" />
                </div>

                <div className='space-y-6 flex flex-col justify-center items-end'>
                    <Button text="Log In" className="text-white font-semibold px-14" onClick={logIn} />
                    <Link to="/signup">Don't Have an Account? Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
