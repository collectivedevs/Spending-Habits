import React, { Fragment, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import $ from 'jquery'
import MenuButton from '../buttons/MenuButton'
import signinicon from '../../media/signinicon.svg'
import { List, ListItemIcon, ListItemText, Divider, ListItem } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCentercode } from '@fortawesome/free-brands-svg-icons'
import VisibilityIcon from '@material-ui/icons/Visibility'
import PersonIcon from '@material-ui/icons/Person'
import PhoneIcon from '@material-ui/icons/Phone'

const Link = require("react-router-dom").Link

const useStyles = makeStyles(theme => ({
    top_nav: {
        position: 'absolute',
        height: '60px',
        left: '0px',
        right: '0px',
        top: '0px',
        background: 'linear-gradient(90deg, #19D25A 0%, #1976D2 100%)',
        zIndex: 5,
        boxShadow: '0px 3.78333px 3.78333px rgba(0, 0, 0, 0.5)',
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
        textShadow: '0px 1px 2px #000000',
    },
    sign_in_up_text: {
        color: '#FFFFFF',
        borderBottom: '2px solid #1976D2',
        "&:hover": {
            cursor: 'pointer',
            borderBottomColor: '#FFF',
            transition: '0.2s',
        },
    },
    list: {
        width: '100%',
        maxWidth: 270,
        backgroundColor: '#F5F5F5',
        position: 'absolute',
        top: '60px',
        left: -270,
        opacity: 0,
        transition: '0.4s',
        zIndex: 6,
    },
    list_appear: {
        left: 0,
        opacity: 1,
    },
}))

function TopNav() {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const openRef = React.useRef(open)

    // Opens or Closes the dropdown
    const toggleDropdown = () => {
        openRef.current = !openRef.current
        setOpen(openRef.current)
        $(`.${classes.list}`).toggleClass(classes.list_appear)
    }

    /*
        This function closes the dropdown on click away
        @param e - Holds the mouse click event
    */
    const closeOnClick = e => {
        let position = document.getElementsByClassName(classes.list)[0].offsetLeft
        let id = e.target.id

        // If click is inside dropdown area do nothing
        if (e.clientY >= 59 && e.clientY <= 286 && e.clientX >= 0 && e.clientX <= 271) {
            return
        }
        else {
            // If click is not on the menubutton and the dropdown is open, close it
            if (position > -270 && id !== "menubutton" && id !== "tp-ln" && id !== "mid-ln" && id !== "btm-ln") {
                toggleDropdown()
            }
        }
    }

    useEffect(() => {
        // Add when mounted
        document.addEventListener('mousedown', closeOnClick);
        // Return function to be called when unmounted
        return () => {
            document.removeEventListener('mousedown', closeOnClick);
        }
    }, []) // Pass empty array to 2nd arguments for optimisation

    return (
        <Fragment>
            <div className={classes.top_nav}>
                <div className={classes.top_nav_wrapper}>
                    <MenuButton toggleDropdown={toggleDropdown} open={open} />
                    <div className={classes.title}>Spending Habits</div>
                    <div className={classes.sign_in_icon}><img src={signinicon} alt="Sign-in Icon" /></div>
                    <div className={classes.sign_in_up}>
                        <Link className={classes.sign_in_up_text} to="/login">Log In</Link>
                        &nbsp;|&nbsp;
                        <Link className={classes.sign_in_up_text} to="/signup">Sign Up</Link>
                    </div>
                </div>
            </div>
            <div className={classes.list}>
                <List component="nav">
                    <ListItem
                        button
                        onClick={() => {toggleDropdown(); window.location.href = "#features-content";}}
                    >
                        <ListItemIcon><FontAwesomeIcon icon={faCentercode} style={{fontSize: 20.5}} /></ListItemIcon>
                        <ListItemText primary="Features" />
                    </ListItem>
                    <ListItem 
                        button
                        onClick={() => {toggleDropdown(); window.location.href = "#vision-mission";}}
                    >
                        <ListItemIcon><VisibilityIcon /></ListItemIcon>
                        <ListItemText primary="Vision & Mission" />
                    </ListItem>
                </List>
                <Divider />
                <List component="nav">
                    <ListItem
                        button
                        onClick={() => {toggleDropdown(); window.location.href = "#founders";}}
                    >
                        <ListItemIcon><PersonIcon /></ListItemIcon>
                        <ListItemText primary="The Founders" />
                    </ListItem>
                    <ListItem
                        button
                        onClick={() => {toggleDropdown(); window.location.href = "#contact-us";}}
                    >
                        <ListItemIcon><PhoneIcon /></ListItemIcon>
                        <ListItemText primary="Contact Us" />
                    </ListItem>
                </List>
            </div>
        </Fragment>
    )
}

export default TopNav
