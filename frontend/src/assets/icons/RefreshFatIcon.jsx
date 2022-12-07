import React from "react";

const RefreshFatIcon = props => {
    const { height = "25", width = "24", color = "#EEE" } = props;
    return (
        <svg width={width} height={height} viewBox='0 0 24 25'>
            <g fill='none' fillRule='evenodd'>
                <path d='M0 .77h24v24H0z' />
                <path
                    d='M3 .77a1.5 1.5 0 0 1 1.5 1.5v3.152a10.503 10.503 0 0 1 17.401 3.85 1.5 1.5 0 1 1-2.827.998 7.503 7.503 0 0 0-13.076-2H10.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1-1.5-1.5v-7.5A1.5 1.5 0 0 1 3 .77zm.012 13.586a1.5 1.5 0 0 1 1.914.915 7.503 7.503 0 0 0 13.075 2H13.5a1.5 1.5 0 0 1 0-3H21a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-3 0v-3.152A10.503 10.503 0 0 1 2.099 16.27a1.5 1.5 0 0 1 .914-1.914h-.001z'
                    fill={color}
                    fillRule='nonzero'
                />
            </g>
        </svg>
    );
};

export default RefreshFatIcon;
