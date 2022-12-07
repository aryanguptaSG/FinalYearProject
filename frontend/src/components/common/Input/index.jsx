import React from 'react'

function Input(props) {
    const { label = "", value = "", onChange = () => { }, required = false, className = "", placeholder = "", type = "text" } = props;
    return (
        <div className={`space-y-2 text-xl ${className}`}>
            {label.length > 0 &&
                <label >{label}{required && "*"}</label>
            }
            <br />
            <input className={`outline-none shadow-dark-input bg-transparent px-5 py-2 rounded-lg`} value={value} type={type} onChange={(e) => {
                onChange(e.target.value);
            }} placeholder={placeholder} />

        </div>
    )
}

export default Input;
