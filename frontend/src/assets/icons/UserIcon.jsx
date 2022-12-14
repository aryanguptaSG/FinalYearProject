import React from "react";

const UserIcon = props => {
    const { height = "18", width = "18", color = "white", onClick = () => { }, className = "" } = props;
    return (
        <svg
            height={height}
            width={width}
            fill={color}
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            onClick={onClick}
            className={className}
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
            ></path>
        </svg>
    );
};

export default UserIcon;
