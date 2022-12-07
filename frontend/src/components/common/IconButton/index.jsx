import React from "react";

function IconButton(props) {
    const { className = "", disabled = false, onClick, children } = props;
    return (
        <button
            className={` shadow-button shadow-button rounded-lg px-3 py-2.5 bg-transparent ${className}`}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default IconButton;
