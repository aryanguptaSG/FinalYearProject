import React from "react";

const PrintIcon = props => {
    const { height = "16", width = "16", color = "white" } = props;
    return (
        <svg
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill={color}
            height={height}
            width={width}
        >
            <path
                fillRule='evenodd'
                d='M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z'
                clip-rule='evenodd'
            />
        </svg>
    );
};

export default PrintIcon;
