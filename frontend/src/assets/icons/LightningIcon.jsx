import React from "react";

const LightningIcon = props => {
    const { height = "25", width = "24", color = "#EEE" } = props;

    return (
        <svg width={width} height={height} viewBox='0 0 24 25'>
            <g fill='none' fillRule='evenodd'>
                <path d='M0 .77h24v24H0z' />
                <path
                    d='M13.733.831c.556.175.934.69.934 1.272V8.77H20a1.333 1.333 0 0 1 1.093 2.097L11.76 24.2a1.333 1.333 0 0 1-2.427-.764V16.77H4a1.333 1.333 0 0 1-1.093-2.098L12.24 1.34a1.333 1.333 0 0 1 1.493-.506V.83z'
                    fill={color}
                    fillRule='nonzero'
                />
            </g>
        </svg>
    );
};

export default LightningIcon;
