import React from "react";

function ThreeDots(props) {
    const {
        className,
        dimension = "medium",
        onMouseClick = () => { },
        color = "white",
    } = props;
    const dimensionClasses = dimension === "small" ? "w-1 h-1" : `${className}`;

    return (
        <span
            className={`flex flex-row items-center cursor-pointer`}
            onClick={onMouseClick}
        >
            <span
                className={`rounded-full ${dimensionClasses} bg-white`}
                style={{ backgroundColor: color }}
            ></span>
            <span
                className={`rounded-full ${dimensionClasses} ml-1 bg-white`}
                style={{ backgroundColor: color }}
            ></span>
            <span
                className={`rounded-full ${dimensionClasses} ml-1 bg-white`}
                style={{ backgroundColor: color }}
            ></span>
        </span>
    );
}

export default ThreeDots;
