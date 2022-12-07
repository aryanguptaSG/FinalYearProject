import React from "react";

const CircledClose = props => {
    const { fill = "#EEE", width = "16", height = "16" } = props;
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 16 17'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M8 .5a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm1.293 5.293L8 7.086 6.707 5.793a1 1 0 0 0-1.414 1.414L6.586 8.5 5.293 9.793a1 1 0 1 0 1.414 1.414L8 9.914l1.293 1.293a1 1 0 0 0 1.414-1.414L9.414 8.5l1.293-1.293a1 1 0 0 0-1.414-1.414z'
                fill={fill}
                fillRule='nonzero'
            />
        </svg>
    );
};

export default CircledClose;
