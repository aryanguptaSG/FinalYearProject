import React from "react";

const PlusIcon = props => {
    const { fill = "#EEE", width = "34", height = "34" } = props;
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 34 34'
            xmlns='http://www.w3.org/2000/svg'
        >
            <g fill='none' fillRule='evenodd'>
                <path d='M17 .03 33.97 17 17 33.97.03 17z' />
                <path
                    d='M16.974.883c1.103 0 1.997.894 1.997 1.998v12.13h12.13a1.998 1.998 0 1 1 0 3.995h-12.13v12.13a1.998 1.998 0 0 1-3.995 0v-12.13H2.846a1.998 1.998 0 0 1 0-3.995h12.13V2.88c0-1.104.895-1.998 1.998-1.998z'
                    fill={fill}
                    fillRule='nonzero'
                />
            </g>
        </svg>
    );
};

export default PlusIcon;
