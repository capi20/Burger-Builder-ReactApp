import React from 'react'

import classes from './Logo.css'
import burgerLogo from '../../assets/images/burgerLogo.png'

const logo = (props) => {
    return(
        <div className={classes.Logo} style={{height: props.height}}>
            <img src={burgerLogo} alt="MyBurger"/>
        </div>
    )
}

export default logo