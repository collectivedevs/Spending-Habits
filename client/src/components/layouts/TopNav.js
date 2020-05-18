import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuButton from '../buttons/MenuButton'
import signinicon from '../../media/signinicon.svg'
import { Popover, Typography } from '@material-ui/core'

const Link = require("react-router-dom").Link

const useStyles = makeStyles(theme => ({
    top_nav: {
        position: 'absolute',
        height: '60px',
        left: '0px',
        right: '0px',
        top: '0px',
        background: 'linear-gradient(90deg, #00DB70 0%, #00A3FF 100%)',
        zIndex: 3,
        boxShadow: '0px 3.78333px 3.78333px rgba(0, 0, 0, 0.25)',
    },
    top_nav_wrapper: {
        maxWidth: '97.22%',
        margin: '0 auto',
    },
    title: {
        position: 'absolute',
        left: '69.05px',
        top: '9.52px',
        fontFamily: 'Roboto, Verdana, Geneva, Tahoma, sans-serif',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '34px',
        color: '#FFFFFF',
        textShadow: '0px 1px 2px #000000',
    },
    sign_in_icon: {
        position: 'absolute',
        width: '35.94px',
        height: '36.19px',
        right: '170px',
        top: '11.43px',
    },
    sign_in_up: {
        position: 'absolute',
        width: '165px',
        height: '25.71px',
        right: '0px',
        top: '16.5px',
        fontFamily: 'Roboto, Verdana, Geneva, Tahoma, sans-serif',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        color: '#FFFFFF',
    },
    sign_in_up_text: {
        "&:hover": {
            cursor: 'pointer',
            borderBottom: '2px solid #FFFFFF',
            transition: '0.2s',
        },
        color: '#FFFFFF',
    },
    popover_text: {
        padding: theme.spacing(2),
    },
}))

function TopNav() {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null)

    const toggleDropdown = e => {
        if (open) {
            setOpen(false)
        }
        else {
            setOpen(true)
        }
    }

    return (
        <div className={classes.top_nav}>
            <div className={classes.top_nav_wrapper}>
                <MenuButton toggleDropdown={toggleDropdown} open={open} />
                <Popover
                    open={open} anchorEl={anchorEl} onClose={toggleDropdown}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <Typography className={classes.popover_text}>La de da de da</Typography>
                </Popover>
                <div className={classes.title}>Spending Habits</div>
                <div className={classes.sign_in_icon}><img src={signinicon} alt="Sign-in Icon" /></div>
                <div className={classes.sign_in_up}>
                    <Link className={classes.sign_in_up_text} to="/login">Log In</Link>
                    &nbsp;|&nbsp;
                    <Link className={classes.sign_in_up_text} to="/signup">Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default TopNav
