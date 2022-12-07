import React, { useEffect, useState } from 'react';
import Navbar from '../../components/common/Navbar';
import { useParams, useNavigate } from 'react-router-dom';
import { searchWorker } from '../../api/account';
import avtar from "../../assets/images/avtar.jpg"
import Rating from "../../components/common/Rating";
import Button from '../../components/common/Button';

function SearchPage() {
    const { keyword } = useParams();
    const navigate = useNavigate();
    const [searchResult, setsearchResult] = useState(null);

    useEffect(() => {
        const getResult = async () => {
            if (keyword !== "plumber" && keyword !== "electrician" && keyword !== "painter") {
                navigate("/404");
            }

            const user = JSON.parse(localStorage.getItem("user"));
            const pinCode = JSON.parse(user.user.Location).pinCode;
            const data = {
                "authToken": user.authToken,
                "profession": keyword,
                "pinCode": pinCode
            }
            const result = await searchWorker(data);
            setsearchResult(result);
        }
        getResult();
    }, [keyword, navigate])

    return (
        <div className='min-h-screen'>
            <Navbar />
            {
                searchResult &&
                <div className='mt-5'>
                    <h1 className='text-2xl font-bold text-gray text-center'>Search Results For {keyword}</h1>

                    <div className='grid grid-cols-1 lg:grid-cols-2 p-10 gap-10'>
                        {
                            searchResult.map((item, id) => {
                                return (
                                    <div key={id} className='shadow-dark-box p-5 rounded-lg'>
                                        <div className='flex flex-wrap justify-start space-x-5'>
                                            <img src={avtar} alt="avtar" width={50} className="rounded-full" />
                                            <div>
                                                <p className='text-lg font-bold tracking-widest'>{item.Name}</p>
                                                <p className='tracking-wide'>
                                                    {item.Email}
                                                </p>
                                            </div>
                                        </div>
                                        <div className='pl-[70px] mt-5 flex justify-between items-start flex-wrap'>
                                            <div className='space-y-3'>
                                                <p className='tracking-wide'>
                                                    Phone : {item.Phone}
                                                </p>
                                                <Rating rate={4} />
                                                <div>
                                                    {item.Price} Rs/hour
                                                </div>
                                                <div>
                                                    {
                                                        JSON.parse(item.Location).location + " , " + JSON.parse(item.Location).pinCode
                                                    }
                                                </div>

                                            </div>
                                            <Button className="py-[0px]" text="Book" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default SearchPage;
