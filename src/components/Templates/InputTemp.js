import React from 'react';

const InputTemp = ({func, label, name, type, className}) => (
    <div className={`InputTemp${className ? " " + className : ""}`}>
        <div>
            <label className="mar-0 c-strong s-16" htmlFor={label}>{label}</label>
        </div>
        <input
            onChange={func} 
            type={type ? type : "text"} 
            name={name}
            className="input-temp cw-fill no-outline bs-light br-circle mar-t-10 pad-h-18 c-strong"
        />
    </div>
)

export default InputTemp;