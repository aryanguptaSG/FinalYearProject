import React from "react";

const CartIcon = props => {
    const { height = "18", width = "18", color = "white" } = props;
    return (
        <svg width={width} height={height} fill={color} viewBox='0 0 26 26'>
            <g transform='translate(2 2)' fill='none' fillRule='evenodd'>
                <path
                    d='M3.312 3.115h19.244a1 1 0 0 1 .936 1.352l-3.93 10.462a1 1 0 0 1-.937.648H5.52L3.312 3.115z'
                    fill={color}
                />
                <ellipse
                    stroke={color}
                    fill={color}
                    cx='17.938'
                    cy='21'
                    rx='2.157'
                    ry='2.5'
                />
                <ellipse
                    stroke={color}
                    fill={color}
                    cx='8.969'
                    cy='21'
                    rx='2.157'
                    ry='2.5'
                />
                <path
                    stroke={color}
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M0 0h2.76l2.76 15.577-2.312 3.388H18.11'
                />
            </g>
        </svg>
    );
};

export default CartIcon;
