import React from "react";

function Text(props) {
    const { as = "span", className, capitalize } = props;
    const Ele = as;
    return (
        <Ele
            className={`dark:text-light-gray ${className}`}
            style={{ textTransform: capitalize ? "uppercase" : "none" }}
        >
            {props.children}
        </Ele>
    );
}

export default Text;
