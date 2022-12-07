import React, { useEffect } from 'react'

function Page404() {
    useEffect(() => {
        document.title = "404 - A Home Maintenance Web App";
    }, [])
    return (
        <div className='flex justify-center items-center text-3xl font-extrabold text-gray min-h-screen'>
            Error 404 , Page does not exists.
        </div>
    )
}

export default Page404;
