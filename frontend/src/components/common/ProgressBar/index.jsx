import React from "react";

const ProgressBar = props => {
    const { percent, size = "small", color = "#a64492", width80 } = props;

    return (
        <div className='relative flex items-center w-full'>
            <div
                className={`w-full relative overflow-hidden min-h-[1px] rounded-xl ${
                    size === "small" ? "h-3px" : "h-6px"
                }`}
                style={{ width: width80 ? "86%" : "100%",
                borderRadius: '4px',
                boxShadow: 'inset 4px 4px 10px 0 rgba(0, 0, 0, 0.93), inset -4px -4px 10px 0 rgba(58, 58, 58, 0.5)',
            }}
            >
                <div
                    className={`h-full absolute left-0`}
                    style={{ width: percent + "%", backgroundColor: color }}
                ></div>
            </div>
            <span
                style={{ color: color }}
                className={`absolute pl-1 w-30px text-${color} right-0 -top-7`}
            >
                {percent}%
            </span>
        </div>
    );
};

export default ProgressBar;
