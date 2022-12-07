import React from "react";

const StatsIcon = props => {
    const { height = "25", width = "24", color = "#EEE" } = props;
    return (
        <svg width={width} height={height} viewBox='0 0 24 25'>
            <g fill='none' fillRule='evenodd'>
                <path d='M0 .77h24v24H0z' />
                <path
                    d='M0 14.27a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-7.5zm9-6a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V8.27zm9-4.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v18a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-18z'
                    fill={color}
                    fillRule='nonzero'
                />
            </g>
        </svg>
    );
};

export default StatsIcon;
