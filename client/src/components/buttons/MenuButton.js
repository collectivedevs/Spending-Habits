import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import $ from 'jquery'

const useStyles = makeStyles(theme => ({
    menu: {
        position: 'absolute',
        width: '50px',
        height: '50px',
        left: '16px',
        top: '5px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        "&:hover": {
            backgroundColor: 'rgba(0, 0, 0, 0.07)',
            cursor: 'pointer',
            transition: '0.2s',
        },
    },
    tp_ln: {
        position: 'absolute',
        width: '30px',
        height: '3px',
        top: '15px',
        backgroundColor: '#fafafa',
        boxShadow: '0px 0.5px 1px #000000',
        transition: '0.3s',
    },
    mid_ln: {
        position: 'absolute',
        width: '30px',
        height: '3px',
        top: '24px',
        backgroundColor: '#fafafa',
        boxShadow: '0px 0.5px 1px #000000',
        transition: '0.3s',
    },
    btm_ln: {
        position: 'absolute',
        width: '30px',
        height: '3px',
        top: '33px',
        backgroundColor: '#fafafa',
        boxShadow: '0px 0.5px 1px #000000',
        transition: '0.3s',
    },
    tp_ln_change: {
        transform: 'rotate(-45deg) translate(-6px, 6px)',
    },
    mid_ln_change: {
        opacity: 0,
    },
    btm_ln_change: {
        transform: 'rotate(45deg) translate(-6px, -6px)',
    },
    ripple: {
        width: 0,
        height: 0,
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        transform: 'scale(0)',
        position: 'absolute',
        opacity: 1,
    },
    ripple_effect: {
        animation: '$rippleDrop 0.3s linear',
    },
    "@keyframes rippleDrop": {
        '100%': {
            transform: 'scale(2)',
            opacity: 0,
        }
    },
}))

function MenuButton({ toggleDropdown, open }) {
    const classes = useStyles()

    /*
        This function creates a ripple efect when the button is clicked
        @param e - Holds the mouse click event
    */
    const ripple = e => {
        // Setup
        let posX = $('#menubutton').offset().left
        let posY = $('#menubutton').offset().top
        let buttonWidth = $('#menubutton').width()
        let buttonHeight =  $('#menubutton').height()
        
        // Add the element
        $('#menubutton').prepend(`<span class='${classes.ripple}'></span>`)
        
        // Make it round!
        if(buttonWidth >= buttonHeight) buttonHeight = buttonWidth
        else buttonWidth = buttonHeight
        
        // Get the center of the element
        let x = e.pageX - posX - buttonWidth / 2
        let y = e.pageY - posY - buttonHeight / 2
        
        // Add the ripples CSS and start the animation
        $(`.${classes.ripple}`).css({
            width: buttonWidth,
            height: buttonHeight,
            top: y + 'px',
            left: x + 'px'
        }).addClass(classes.ripple_effect)

        //Remove span after ripple effect is done
        setTimeout(() => {$(`.${classes.ripple}`).remove()}, 305)
    }

    return (
        <div
            id="menubutton"
            onClick={e => {toggleDropdown(); ripple(e);}}
            className={classes.menu}
        >
            <div id="tp-ln" className={`${classes.tp_ln} ${open ? classes.tp_ln_change : ''}`}></div>
            <div id="mid-ln" className={`${classes.mid_ln} ${open ? classes.mid_ln_change : ''}`}></div>
            <div id="btm-ln" className={`${classes.btm_ln} ${open ? classes.btm_ln_change : ''}`}></div>
        </div>
    )
}

export default MenuButton
