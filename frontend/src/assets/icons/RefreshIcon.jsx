import React from "react";

const RefreshIcon = props => {
    const {
        height = "16",
        width = "16",
        color = "#EEE",
        bg = "none",
        className = "",
    } = props;
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox='0 0 14 14'
        >
            <g fill={bg} fillRule='evenodd'>
                <path d='M0 0h14v14H0z' />
                <path
                    d='M1.75 0c.483 0 .875.392.875.875v1.838a6.127 6.127 0 0 1 10.15 2.246.875.875 0 1 1-1.649.582A4.377 4.377 0 0 0 3.5 4.375h2.626a.875.875 0 1 1 0 1.75H1.75a.875.875 0 0 1-.875-.875V.875C.875.392 1.267 0 1.75 0zm.007 7.925a.875.875 0 0 1 1.117.534A4.377 4.377 0 0 0 10.5 9.625H7.875a.875.875 0 1 1 0-1.75h4.375c.483 0 .875.392.875.875v4.375a.875.875 0 1 1-1.75 0v-1.838A6.127 6.127 0 0 1 1.225 9.04a.875.875 0 0 1 .533-1.116h-.001z'
                    fill={color}
                    fillRule='nonzero'
                />
            </g>
        </svg>
    );
};

export default RefreshIcon;
