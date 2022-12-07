import React from "react";

const ColouredBulletIcon = props => {
    const {
        height = "13",
        width = "13",
        color = "#8E5DE4",
        lastbullet = false,
        pluscolor = "#EEE",
        className = "",
    } = props;
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox='0 0 14 14'
            xmlns='http://www.w3.org/2000/svg'
        >
            <g fill='none' fillRule='evenodd'>
                <path
                    d='M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14z'
                    fill={color}
                    fillRule='nonzero'
                />
                {lastbullet && (
                    <path
                        d='M7.875 4.375a.875.875 0 1 0-1.75 0v1.75h-1.75a.875.875 0 1 0 0 1.75h1.75v1.75a.875.875 0 1 0 1.75 0v-1.75h1.75a.875.875 0 1 0 0-1.75h-1.75v-1.75z'
                        fill={pluscolor}
                    />
                )}
            </g>
        </svg>
    );
};

export default ColouredBulletIcon;
