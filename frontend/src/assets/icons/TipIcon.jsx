import React from "react";

const TipIcon = props => {
    const { height = "25", width = "24", color = "#EEE" } = props;
    return (
        <svg width={width} height={height} viewBox='0 0 24 25'>
            <g fill='none' fillRule='evenodd'>
                <path d='M0 .77h24v24H0z' />
                <path
                    d='M13.5 2.27a1.5 1.5 0 0 0-3 0v1.5a1.5 1.5 0 0 0 3 0v-1.5zm6.985 4.136a1.5 1.5 0 0 0-2.12-2.12l-1.061 1.06a1.5 1.5 0 0 0 2.121 2.12l1.06-1.06zM24 12.771a1.5 1.5 0 0 1-1.5 1.5H21a1.5 1.5 0 0 1 0-3h1.5a1.5 1.5 0 0 1 1.5 1.5zM4.575 7.467a1.5 1.5 0 1 0 2.121-2.121l-1.06-1.06a1.5 1.5 0 0 0-2.122 2.12l1.061 1.06zM4.5 12.77a1.5 1.5 0 0 1-1.5 1.5H1.5a1.5 1.5 0 0 1 0-3H3a1.5 1.5 0 0 1 1.5 1.5zm4.5 9v-1.5h6v1.5a3 3 0 0 1-6 0zm6-3c.023-.51.312-.97.716-1.289a6 6 0 1 0-7.431 0c.405.32.692.779.713 1.289h6.004H15z'
                    fill={color}
                    fillRule='nonzero'
                />
            </g>
        </svg>
    );
};

export default TipIcon;
