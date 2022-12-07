import React from "react";

const Link = props => {
    const { className, linkName, onClick, fontSize } = props;

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };
    return (
        <a
            href='#'
            className={`text-xs font-semibold underline ${className}`}
            onClick={handleClick}
            style={{ fontSize: fontSize || undefined, color:'#00b7b8' }}
        >
            {linkName}
        </a>
    );
};

export default Link;
