import React from 'react';

import './custombutton.styles.scss';

const CustomButton = ({children,isGoogleSignIn,handleClick}) => (
    <button className={`${isGoogleSignIn? 'google-sign-in':''} custom-button`} 
        onClick={handleClick}>
        {children}
    </button>
)

export default CustomButton;