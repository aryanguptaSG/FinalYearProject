import React from "react";

const CopyIcon = props => {
    const {
        height = "16",
        width = "16",
        color = "#EEE",
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
            <g fill={color} fillRule='nonzero'>
                <path d='M6.125 0a1.75 1.75 0 0 0-1.75 1.75v7c0 .966.784 1.75 1.75 1.75h5.25a1.75 1.75 0 0 0 1.75-1.75V3.862c0-.464-.185-.909-.513-1.237L10.5.513A1.75 1.75 0 0 0 9.263 0H6.125z' />
                <path d='M.875 5.25c0-.966.784-1.75 1.75-1.75v8.75h7A1.75 1.75 0 0 1 7.875 14h-5.25a1.75 1.75 0 0 1-1.75-1.75v-7z' />
            </g>
        </svg>
    );
};

export default CopyIcon;
