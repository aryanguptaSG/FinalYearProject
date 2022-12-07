import React, { useState, useEffect } from 'react'
import signupImg from "../../assets/images/register.jpg";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import DropDown from "../../components/common/Dropdown";
import { Link } from 'react-router-dom';
import Text from '../../components/common/Text';
import { signUp as createAccont } from '../../api/account';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");
    const [passWord1, setPassWord1] = useState("");
    const [type, settype] = useState("Customer");

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Sign Up - A Home Maintenance Web App";
    }, [])

    const navigateToHomePage = () => {
        navigate("/");
    }

    const signUp = () => {
        const e = email.trim();
        const pass = passWord.trim();
        const pass1 = passWord1.trim();
        if (!e || !pass || !pass1) {
            alert("All fields are required !");
            return;
        }
        if (pass !== pass1) {
            alert("Please fill same password !");
            return;
        }
        createAccont(e, pass, type, navigateToHomePage);
        setEmail("");
        setPassWord("");
        setPassWord1("");
    }


    return (
        <div className='flex flex-wrap justify-around items-center min-h-screen'>
            <div className='md:w-[45%] sm:w-[100%] space-y-8  flex flex-col items-center justify-center'>
                <Input required={true} label="Email" placeholder="aryan@gmail.com" value={email} onChange={setEmail} type="email" />
                <Input required={true} label="Password" placeholder="1234" value={passWord} onChange={setPassWord} type="password" />
                <Input required={true} label="Confirm Password" placeholder="1234" value={passWord1} onChange={setPassWord1} type="password" />
                <div className='pl-5 space-y-2'>
                    <Text as="p">Choose Type</Text>
                    <DropDown current={type} setCurrent={settype} options={["Customer", "Worker"]} className="w-[270px]" />
                </div>
                <div className='space-y-6 flex flex-col justify-center items-end'>
                    <Button text="Sign up" className="text-white font-semibold px-14" onClick={signUp} />
                    <Link to="/login">Already Have an Account? Log In</Link>
                </div>
            </div>
            <div className='flex items-center justify-center md:w-[45%] sm:w-[100%] p-5'>
                <img src={signupImg} alt="Sign up" className='rounded-full shadow-dark-box' />
            </div>
        </div>
    )
}

export default SignUpPage;
