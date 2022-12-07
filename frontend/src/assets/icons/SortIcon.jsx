import React from "react";

const SortIcon = props => {
    return (
        <svg
            width='14'
            height='14'
            viewBox='0 0 14 14'
            xmlns='http://www.w3.org/2000/svg'
        >
            <g fill='none' fillRule='evenodd'>
                <path d='M0 0h14v14H0z' />
                <path
                    d='M2.618 8.753a.876.876 0 0 0 1.753 0V3.857l1.133 1.134a.876.876 0 0 0 1.24-1.24l-2.63-2.629a.876.876 0 0 0-1.239 0L.246 3.752a.876.876 0 0 0 1.24 1.239l1.132-1.134v4.896zm8.764-3.506a.876.876 0 1 0-1.753 0v4.896L8.496 9.009a.876.876 0 0 0-1.24 1.24l2.63 2.629a.876.876 0 0 0 1.239 0l2.629-2.63a.876.876 0 0 0-1.24-1.239l-1.132 1.134V5.247z'
                    fill='#EEE'
                    fillRule='nonzero'
                />
            </g>
        </svg>
    );
};

export default SortIcon;
