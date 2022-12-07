import React from "react";

const CircledPause = props => {
    const { fill = "#EEE", width = "16", height = "16" } = props;
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 16 17'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M8 .5a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm-2 5a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1z'
                fill={fill}
                fillRule='nonzero'
            />
        </svg>
    );
};

export default CircledPause;
