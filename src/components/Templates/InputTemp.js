import React from 'react';

const InputTemp = ({func, label, name, type, className, placeholder}) => (
    <div className={`InputTemp${className ? " " + className : ""}`}>
        {
            label ?
                <div>
                    <label className="mar-0 c-strong s-16" htmlFor={label}>{label}</label>
                </div>
            :
                <div></div>
        }
        <input
            onChange={func} 
            type={type ? type : "text"} 
            name={name}
            placeholder={placeholder}
            className={`input-temp cw-fill no-outline bs-light br-circle pad-h-18 c-strong ${label ? "mar-t-10": ""}`}
        />
    </div>
)

export default InputTemp;