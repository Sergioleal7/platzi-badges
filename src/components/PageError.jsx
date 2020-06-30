import React from 'react';
import '../assets/styles/pageError.css'

const PageError = (props) => {
    return (
    <div className='PageError'>
        {props.error.message}
    </div>
    ) 
};

export default PageError
