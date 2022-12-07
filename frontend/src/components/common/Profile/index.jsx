import React, { useState, useEffect } from 'react'
import EditIcon from '../../../assets/images/Edit-icon.png';
import saveIcon from '../../../assets/images/Checked-icon.png';
import Rating from "../../common/Rating";
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import { logOut, deleteAccount, updateProfile } from '../../../api/account';

function Profile() {
    const [isNameEditable, setisNameEditable] = useState(false);
    const [isPhoneEditable, setisPhoneEditable] = useState(false);
    const [isLocationEditable, setisLocationEditable] = useState(false);
    const [isPinCodeEditable, setisPinCodeEditable] = useState(false);
    const [isProfessionEditable, setisProfessionEditable] = useState(false);
    const [isPriceEditable, setisPriceEditable] = useState(false);

    const [token, setToken] = useState("");
    const [type, setType] = useState("c");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [price, setPrice] = useState("");
    const [profession, setProfession] = useState("");
    const [rating, setRating] = useState(4);


    const [isWarning, setisWarning] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setType(localStorage.getItem("type"));
        const auth = JSON.parse(localStorage.getItem("user"));
        setToken(auth.authToken);
        setName(auth.user.Name);
        setPhone(auth.user.Phone);
        setEmail(auth.user.Email);
        if (auth.user.Location !== "") {
            const locationJson = JSON.parse(auth.user.Location);
            setLocation(locationJson.location);
            setPinCode(locationJson.pinCode);
        }
        else {
            setLocation("");
            setPinCode("");
        }

        if (type === "w") {
            setPrice(auth.user.Price);
            setProfession(auth.user.Profession);
            const average = auth.user.Rating.reduce((a, b) => a + b, 0) / auth.user.Rating.length;
            setRating(average);
        }

        if (!auth.user.Name || !auth.user.Phone || !JSON.parse(auth.user.Location).pinCode) {
            setisWarning(true);
        }
        if (type === "w" && (!auth.user.Price || !auth.user.Profession)) {
            setisWarning(true);
        }

    }, [type])

    const navigateToLoginPage = () => {
        navigate("/login");
    }

    const navigateToHomePage = () => {
        navigate("/");
    }


    const logout = () => {
        logOut(navigateToLoginPage);
    }

    const removeAccount = () => {
        deleteAccount(token, type, navigateToLoginPage);
    }

    const update = () => {
        if (type === "c") {
            const data = {
                "authToken": token,
                "Name": document.getElementById("_name").innerText,
                "Phone": document.getElementById("_phone").innerText,
                "Location": JSON.stringify({ "location": document.getElementById("_location").innerText, "pinCode": document.getElementById("_pincode").innerText })
            }
            console.log(data);
            updateProfile(data, type, navigateToHomePage);
        }
        else {
            const data = {
                "authToken": token,
                "Name": document.getElementById("_name").innerText,
                "Phone": document.getElementById("_phone").innerText,
                "Location": JSON.stringify({ "location": document.getElementById("_location").innerText, "pinCode": document.getElementById("_pincode").innerText }),
                "Profession": document.getElementById("_profession").innerText,
                "Price": document.getElementById("_price").innerText
            }
            console.log(data);
            updateProfile(data, type, navigateToHomePage);
        }
    }

    return (
        <div className='space-y-4'>
            {isWarning &&
                <div className='text-center bg-red-800 border-rose-900 border-2 rounded-2xl'>
                    Please Complete Your Profile To Visit HomePage !
                </div>
            }
            <div className='flex justify-start flex-wrap items-center space-x-5 px-5 rounded-lg shadow-dark-box py-2'>
                <p className='text-xl   text-gray'>Name</p>
                <div id="_name" suppressContentEditableWarning={true} contentEditable={isNameEditable} className={`text-lg font-semibold ${isNameEditable && "outline px-2"}`}
                >{name}</div>
                <div className="pl-10">
                    <img src={EditIcon} width={15} onClick={() => { setisNameEditable(!isNameEditable) }
                    } alt="edit" />
                </div>
                {
                    isNameEditable && <div className="pl-5">
                        <img src={saveIcon} width={15} onClick={() => { setisNameEditable(!isNameEditable) }} alt="save" />
                    </div>
                }
            </div>


            <div className='flex justify-start flex-wrap items-center space-x-5 px-5 rounded-lg shadow-dark-box py-2'>
                <p className='text-xl  text-gray'>Email</p>
                <div className='text-lg font-semibold '>{email}</div>
            </div>


            <div className='flex justify-start flex-wrap items-center space-x-5 px-5 rounded-lg shadow-dark-box py-2'>
                <p className='text-xl  text-gray'>Phone</p>
                <div id="_phone" suppressContentEditableWarning={true} contentEditable={isPhoneEditable} className={`text-lg font-semibold ${isPhoneEditable && "outline px-2"}`}
                >{phone}</div>
                <div className="pl-10">
                    <img src={EditIcon} width={15} onClick={() => { setisPhoneEditable(!isPhoneEditable) }} alt="edit" />
                </div>
                {
                    isPhoneEditable && <div className="pl-5">
                        <img src={saveIcon} width={15} onClick={() => { setisPhoneEditable(!isPhoneEditable) }} alt="save" />
                    </div>
                }
            </div>

            <div className='flex justify-start flex-wrap items-center space-x-5 px-5 rounded-lg shadow-dark-box py-2'>
                <p className='text-xl  text-gray'>Location</p>
                <div id="_location" suppressContentEditableWarning={true} contentEditable={isLocationEditable} className={`text-lg font-semibold ${isLocationEditable && "outline px-2"}`}
                >{location}</div>
                <div className="pl-10">
                    <img src={EditIcon} width={15} onClick={() => { setisLocationEditable(!isLocationEditable) }} alt="edit" />
                </div>
                {
                    isLocationEditable && <div className="pl-5">
                        <img src={saveIcon} width={15} onClick={() => { setisLocationEditable(!isLocationEditable) }} alt="save" />
                    </div>
                }
            </div>

            <div className='flex justify-start flex-wrap items-center space-x-5 px-5 rounded-lg shadow-dark-box py-2'>
                <p className='text-xl  text-gray'>Pin Code</p>
                <div id="_pincode" suppressContentEditableWarning={true} contentEditable={isPinCodeEditable} className={`text-lg font-semibold ${isPinCodeEditable && "outline px-2"}`}
                >{pinCode}</div>
                <div className="pl-10">
                    <img src={EditIcon} width={15} onClick={() => { setisPinCodeEditable(!isPinCodeEditable) }} alt="edit" />
                </div>
                {
                    isPinCodeEditable && <div className="pl-5">
                        <img src={saveIcon} width={15} onClick={() => { setisPinCodeEditable(!isPinCodeEditable) }} alt="save" />
                    </div>
                }
            </div>


            {
                type === "w" &&
                <div className='space-y-4'>
                    <div className='flex justify-start flex-wrap items-center space-x-5 px-5 rounded-lg shadow-dark-box py-2'>
                        <p className='text-xl  text-gray'>Proffesion</p>
                        <div id="_profession" suppressContentEditableWarning={true} contentEditable={isProfessionEditable} className={`text-lg font-semibold ${isProfessionEditable && "outline px-2"}`}
                        >{profession}</div>
                        <div className="pl-10">
                            <img src={EditIcon} width={15} onClick={() => { setisProfessionEditable(!isProfessionEditable) }} alt="edit" />
                        </div>
                        {
                            isProfessionEditable && <div className="pl-5">
                                <img src={saveIcon} width={15} onClick={() => { setisProfessionEditable(!isProfessionEditable) }} alt="save" />
                            </div>
                        }
                    </div>

                    <div className='flex justify-start flex-wrap items-center space-x-5 px-5 rounded-lg shadow-dark-box py-2'>
                        <p className='text-xl  text-gray'>Price</p>
                        <div id="_price" suppressContentEditableWarning={true} contentEditable={isPriceEditable} className={`text-lg font-semibold ${isPriceEditable && "outline px-2"}`}
                        >{price}</div>
                        <div className="pl-10">
                            <img src={EditIcon} width={15} onClick={() => { setisPriceEditable(!isPriceEditable) }} alt="edit" />
                        </div>
                        {
                            isPriceEditable && <div className="pl-5">
                                <img src={saveIcon} width={15} onClick={() => { setisPriceEditable(!isPriceEditable) }} alt="save" />
                            </div>
                        }
                    </div>

                    <div className='flex justify-start flex-wrap items-center space-x-5 px-5 rounded-lg shadow-dark-box py-2'>
                        <p className='text-xl  text-gray'>Rating</p>
                        <Rating rate={rating} />
                    </div>

                </div>
            }
            <div className='flex justify-between items-center flex-wrap'>
                <Button text="Save Changes" onClick={update} />
                <button onClick={logout} className='bg-red-500 border-red-900  border-2 rounded-lg shadow-button py-9px px-16px font-semibold w-11rem'>Log Out</button>
            </div>
            <div>
                <button onClick={removeAccount} className='bg-red-500 border-red-900  border-2 rounded-lg shadow-button py-9px px-16px font-semibold w-11rem'>Delete My Account</button>
            </div>
        </div>
    )
}

export default Profile;
