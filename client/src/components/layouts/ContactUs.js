import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Fab } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles(theme => ({
    contact_us_wrapper: {
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: 'calc(200% + 437.19px)',
        height: '100%',
        backgroundColor: '#F5F5F5',
        fontFamily: '"Lato", sans-serif',
        zIndex: 1,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
    },
    form_wrapper: {
        padding: '80px 0px 0px 25px',
    },
    form_title: {
        letterSpacing: '5px',
        fontSize: '40px',
        color: '#362F2F',
        margin: 0,
    },
    form_field: {
        marginTop: theme.spacing(2),
    },
    text_field: {
        width: '40%',
    },
    submit: {
        marginTop: theme.spacing(4),
        color: '#333',
        fontWeight: 'bold',
        width: '20%',
    },
    icon: {
        marginRight: theme.spacing(1),
    },
    svg: {
        filter: 'drop-shadow(0px 0px 3.7px rgba(0, 0, 0, 0.5))',
        position: 'absolute',
        width: '100%',
    },
    top: {
        top: 0,
        height: '80px',
    },
    bottom: {
        bottom: 0,
        height: '85px',
    },
    blobs: {
        zIndex: -1,
        position: 'absolute',
        right: '10%',
        filter: 'drop-shadow(0px)',
        width: '400px',
    },
    blobA: {
        top: 0,
        fill: '#FF0066',
        filter: 'drop-shadow(0px 0px 4px #FFF) drop-shadow(0px 0px 8px #FFF) drop-shadow(0px 0px 12px #FF0066)',
        animation: '$toRight 10s ease-in infinite',
    },
    blobB: {
        bottom: 0,
        fill: '#0F62FE',
        filter: 'drop-shadow(0px 0px 4px #FFF) drop-shadow(0px 0px 8px #FFF) drop-shadow(0px 0px 12px #0F62FE)',
        animation: '$toLeft 10s ease-out infinite',
    },
    "@keyframes toRight": {
        '0%': {
            transform: 'translateX(-50px)',
        },
        '50%': {
            transform: 'translateX(50px)',
        },
        '100%': {
            transform: 'translateX(-50px)',
        },
    },
    "@keyframes toLeft": {
        '0%': {
            transform: 'translateX(50px)',
        },
        '50%': {
            transform: 'translateX(-50px)',
        },
        '100%': {
            transform: 'translateX(50px)',
        },
    },
}))

function ContactUs() {
    const classes = useStyles()

    return (
        <div id="contact-us" className={classes.contact_us_wrapper}>
            <svg
                className={`${classes.svg} ${classes.top}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <path fill="#00cba9" fill-opacity="1" d="M0,128L48,149.3C96,171,192,213,288,202.7C384,192,480,128,576,90.7C672,53,768,43,864,80C960,117,1056,203,1152,208C1248,213,1344,139,1392,101.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
            <form className={classes.form_wrapper}>
                <h3 className={classes.form_title}>Contact Us</h3>
                <div className={classes.form_field}>
                    <TextField id="first-name" label="First Name" className={classes.text_field} />
                </div>
                <div className={classes.form_field}>
                    <TextField id="last-name" label="Last Name" className={classes.text_field} />
                </div>
                <div className={classes.form_field}>
                    <TextField id="email" label="Email Address" className={classes.text_field} />
                </div>
                <div className={classes.form_field}>
                    <TextField
                        id="message"
                        label="Message"
                        className={classes.text_field}
                        multiline
                        rowsMax={4}
                    />
                </div>
                <Fab variant="extended" color="primary" className={classes.submit}>
                    <FontAwesomeIcon icon={faPaperPlane} className={classes.icon} />
                    Submit
                </Fab>
            </form>
            <svg
                className={`${classes.svg} ${classes.bottom}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <path fill="#00cba9" fillOpacity="1" d="M0,128L48,149.3C96,171,192,213,288,202.7C384,192,480,128,576,90.7C672,53,768,43,864,80C960,117,1056,203,1152,208C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>

            {/* BLOBS */}
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={`${classes.blobs} ${classes.blobA}`}>
                <path d="M36.3,-58.4C40.8,-60.3,34,-38,33.4,-24.2C32.9,-10.5,38.6,-5.2,45.8,4.2C53.1,13.6,61.8,27.2,56.5,30.6C51.1,34.1,31.5,27.4,19.8,33C8,38.5,4,56.2,-2.6,60.7C-9.2,65.2,-18.3,56.4,-18.5,44.2C-18.7,32,-9.8,16.3,-21.6,8.3C-33.4,0.4,-65.7,0.2,-71.2,-3.2C-76.7,-6.5,-55.2,-13,-43.2,-20.4C-31.1,-27.9,-28.4,-36.2,-22.8,-33.7C-17.2,-31.1,-8.6,-17.7,3.7,-24C15.9,-30.4,31.8,-56.5,36.3,-58.4Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={`${classes.blobs} ${classes.blobB}`}>
                <path d="M34.1,-44.9C47.6,-51.2,64.4,-49.1,65.6,-40.2C66.7,-31.3,52.1,-15.6,50.7,-0.8C49.2,13.9,60.8,27.9,58.7,35C56.5,42.1,40.6,42.5,28.5,36.5C16.5,30.4,8.2,18.1,-1.4,20.6C-11.1,23.1,-22.3,40.5,-35.3,47C-48.3,53.6,-63.1,49.3,-60,39.7C-57,30,-35.9,15,-32.2,2.1C-28.5,-10.7,-42.1,-21.5,-42,-25.5C-41.8,-29.5,-27.8,-26.7,-18.5,-22.9C-9.2,-19.1,-4.6,-14.1,2.8,-19C10.3,-23.9,20.5,-38.6,34.1,-44.9Z" transform="translate(100 100)" />
            </svg>
        </div>
    )
}

export default ContactUs
