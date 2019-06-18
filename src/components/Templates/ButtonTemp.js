import React from 'react';

const ButtonTemp = ({text, func, color, className}) => (
    <div onClick={func} className={`button-temp w-medium clickable cw-fit no-select br-circle ${color ? color : "gray"} ${className}`}>{text}</div>
)

export default ButtonTemp;