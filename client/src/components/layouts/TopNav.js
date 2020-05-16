import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '../svgicons/MenuIcon'
import signinicon from '../../media/signinicon.svg'

const useStyles = makeStyles(theme => ({
    top_nav: {
        position: 'absolute',
        height: '60px',
        left: '0px',
        right: '0px',
        top: '0px',
        background: 'linear-gradient(90deg, #00A3FF 0%, #D20480 100%)',
        zIndex: 3,
        boxShadow: '0px 3.78333px 3.78333px rgba(0, 0, 0, 0.25)',
    },
    top_nav_wrapper: {
        maxWidth: '97.22%',
        margin: '0 auto',
    },
    menu: {
        position: 'absolute',
        width: '50px',
        height: '50px',
        left: '16px',
        top: '6px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        "&:hover": {
            backgroundColor: 'rgba(0, 0, 0, 0.07)',
            cursor: 'pointer',
            transition: '0.2s',
        },
    },
    title: {
        position: 'absolute',
        left: '69.05px',
        top: '9.52px',
        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '32px',
        color: '#FFFFFF',
    },
    sign_in_icon: {
        position: 'absolute',
        width: '35.94px',
        height: '36.19px',
        right: '190px',
        top: '11.43px',
    },
    sign_in_up: {
        position: 'absolute',
        width: '165px',
        height: '25.71px',
        right: '20px',
        top: '17px',
        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '17px',
        lineHeight: '22px',
        color: '#FFFFFF',
    },
    sign_in_up_text: {
        "&:hover": {
            cursor: 'pointer',
            borderBottom: '2px solid #FFFFFF',
            transition: '0.2s',
        }
    },
}))

function TopNav() {
    const classes = useStyles();
    return (
        <div className={classes.top_nav}>
            <div className={classes.top_nav_wrapper}>
                <div className={classes.menu}>
                    <MenuIcon />
                </div>
                <div className={classes.title}>Spending Habits</div>
                <div className={classes.sign_in_icon}><img src={signinicon} alt="Sign-in Icon" /></div>
                <div className={classes.sign_in_up}>
                    <span className={classes.sign_in_up_text}>Sign In</span>
                    &nbsp;|&nbsp;
                    <span className={classes.sign_in_up_text}>Sign Up</span>
                </div>
            </div>
        </div>
    )
}

export default TopNav
