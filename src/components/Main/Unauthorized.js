import React from 'react';

const Unauthorized = () => (
    <div className='Unauthorized d-flex a-center'>
        <span className="c-black s-16">You need to be logged to view this page. <a href="/login" className="c-blue w-medium s-16">Log In</a></span>
    </div>
)

export default Unauthorized;