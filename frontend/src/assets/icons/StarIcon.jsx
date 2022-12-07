import React from "react";

const StarIcon = props => {
    const {
        height = "13",
        width = "13",
        color = "#555",
        className = "",
    } = props;
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox='0 0 14 14'
            xmlns='http://www.w3.org/2000/svg'
        >
            <g fill='none' fillRule='evenodd'>
                <path d='M0 0h14v14H0z' />
                <path
                    d='M6.104.946c.282-.867 1.51-.867 1.79 0l1.008 3.1c.127.387.488.65.895.65h3.26c.912 0 1.29 1.167.553 1.704l-2.636 1.915a.942.942 0 0 0-.343 1.053l1.008 3.1c.282.867-.711 1.589-1.45 1.052l-2.637-1.915a.942.942 0 0 0-1.106 0L3.809 13.52c-.738.537-1.73-.185-1.449-1.053l1.008-3.1a.942.942 0 0 0-.343-1.052L.389 6.4c-.737-.537-.357-1.705.554-1.705h3.259c.408 0 .769-.262.895-.65L6.105.948 6.104.946z'
                    fill={color}
                    fillRule='nonzero'
                />
            </g>
        </svg>
    );
};

export default StarIcon;
