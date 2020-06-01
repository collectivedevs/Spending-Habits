import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    contact_us_wrapper: {
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: 'calc(200% + 437.19px)',
        minHeight: '100%',
        backgroundColor: '#DDD',
        fontFamily: '"Lato", sans-serif',
        zIndex: 1,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
        overflow: 'hidden',
    },
    form_wrapper: {
        backgroundColor: '#FF5926',
        width: '40%',
        height: '100%',
        position: 'absolute',
    },
    form_title: {
        textAlign: 'center',
        letterSpacing: '8px',
        textTransform: 'uppercase',
        fontSize: '32px',
        color: '#362F2F',
    },
    svg: {
        position: 'absolute',
        left: '40%',
        width: window.innerHeight + 'px',
        transformOrigin: '50% 50%',
        transform: 'rotate(-90deg)',
    }
}))

function ContactUs() {
    const classes = useStyles()

    return (
        <div id="contact-us" className={classes.contact_us_wrapper}>
            <div className={classes.form_wrapper}>
                <h3 className={classes.form_title}>Contact Us</h3>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum sapien vitae enim facilisis, eget
                    vestibulum nulla vehicula. In urna quam, dignissim at enim a, molestie porta dui. Aliquam quam ex, facilisis quis
                    consequat at, semper nec felis. Proin a felis lacinia, faucibus lectus ac, rutrum nibh. Morbi arcu nisi, laoreet
                    nec ante condimentum, commodo convallis augue. Nunc euismod, tellus non fringilla accumsan, erat diam congue ipsum,
                    nec ultrices felis purus sit amet libero. Mauris vestibulum mi eu iaculis iaculis.
                </div>
            </div>
        </div>
    )
}

export default ContactUs
