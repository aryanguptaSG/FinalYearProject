import React from "react";

const VideoPlayIcon = props => {
    const { height = "48", width = "50", color = "#EEE" } = props;
    return (
        <svg width={width} height={height} viewBox='0 0 25 24'>
            <path
                d='M12.5 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0-12-12zM8.43 6.627a.33.33 0 0 1 .169-.291c.102-.06.23-.06.333 0l9.307 5.376a.33.33 0 0 1 0 .576l-9.307 5.376a.336.336 0 0 1-.333 0 .33.33 0 0 1-.168-.29V6.626z'
                fill={color}
                fillRule='nonzero'
            />
        </svg>
    );
};

export default VideoPlayIcon;
