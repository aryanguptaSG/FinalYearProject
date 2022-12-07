import React from "react";

function Button(props) {
    const { className = "", text = "", disabled = false, onClick, style = {} } = props;
    const btnColor = disabled
        ? "bg-light-disabled-button dark:bg-dark-disabled-button text-gray"
        : "bg-button text-light-gray";
    return (
        <button
            style={style}
            className={`rounded-lg shadow-button py-9px px-16px font-semibold w-11rem ${btnColor} ${className}`}
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;
