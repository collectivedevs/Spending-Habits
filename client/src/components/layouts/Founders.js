import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import $ from 'jquery'
import { Fab } from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import foun_1 from '../../images/founders-images/foun_1.jpg'
import foun_2 from '../../images/founders-images/foun_2.jpg'
import foun_3 from '../../images/founders-images/foun_3.jpg'


const useStyles = makeStyles(theme => ({
    founders_container: {
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: 'calc(100% + 437.19px)',
        minHeight: '100%',
        background: '#EEE',
        fontFamily: '"Lato", sans-serif',
        zIndex: 2,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
        overflow: 'hidden',
    },
    the_founders_wrapper: {
        backgroundColor: '#152433',
        width: '100%',
        height: '100px',
        position: 'absolute',
    },
    the_founders: {
        textAlign: 'center',
        letterSpacing: '6.25px',
        textTransform: 'uppercase',
        fontSize: '25px',
        fontWeight: 'normal',
        color: '#EEE',
        transform: 'translateY(37.5%)',
    },
    founders_images: {
        position: 'absolute',
        width: '100%',
        top: '100px',
        minHeight: 'calc(100% - 178px)',
        backgroundColor: '#CCC',
        pointerEvents: 'none',
        transitionDuration: '0.5s',
        transitionTimingFunction: 'linear',
    },
    foun_1: {
        left: '0%',
        background: `url(${foun_1})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    foun_2: {
        left: '100%',
        background: `url(${foun_2})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    foun_3: {
        left: '200%',
        background: `url(${foun_3})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    display_none: {
        display: 'none',
    },
    seek_bar: {
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: 'calc(100% - 78px)',
        height: '3px',
        backgroundColor: '#F00',
        "&:hover": {
            cursor: 'pointer',
        },
    },
    seek: {
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: 'calc(100% - 84px)',
        height: '15px',
        width: '15px',
        borderRadius: '50%',
        backgroundColor: '#F00',
        zIndex: 3,
        "&:hover": {
            cursor: 'pointer',
        },
    },
    prev_next: {
        position: 'absolute',
        top: 'calc(50% - 30px)',
        backgroundColor: 'rgba(220, 0, 78, 0.7)',
        color: '#FFF',
        transition: '0.3s',
        "&:hover": {
            backgroundColor: 'rgba(171, 0, 60, 0.8)',
        }
    },
    prev: {
        left: theme.spacing(2),
    },
    next: {
        right: theme.spacing(2),
    },
    dots_wrapper: {
        backgroundColor: '#152433',
        width: '100%',
        height: '75px',
        position: 'absolute',
        top: 'calc(100% - 75px)',
        textAlign: 'center',
    },
    dots: {
        cursor: 'pointer',
        height: '16px',
        width: '16px',
        margin: '29.5px 1.5%',
        backgroundColor: '#FFF',
        borderRadius: '50%',
        display: 'inline-block',
        "&:hover": {
            backgroundColor: '#832bff',
            animation: '$pulsePurple 1.5s 0s ease-out infinite',
        },
    },
    dots_active: {
        backgroundColor: '#F00',
        animation: '$pulseRed 1.5s 0s ease-out infinite',
    },
    "@keyframes pulseRed": {
        '0%': {
            boxShadow: '0 0 4px 3px rgba(255, 0, 0, 0), 0 0 0px 0px #152433, 0 0 0px 0px rgba(255, 0, 0, 0)'
        },
        '10%': {
            boxShadow: '0 0 4px 3px #F00, 0 0 6px 5px #152433, 0 0 6px 7px #F00'
        },
        '100%': {
            boxShadow: '0 0 4px 3px rgba(255, 0, 0, 0), 0 0 0px 20px #152433, 0 0 0px 20px rgba(255, 0, 0, 0)'
        },
    },
    "@keyframes pulsePurple": {
        '0%': {
            boxShadow: '0 0 4px 3px rgba(0, 0, 0, 0), 0 0 0px 0px #152433, 0 0 0px 0px rgba(0, 0, 0, 0)'
        },
        '10%': {
            boxShadow: '0 0 4px 3px #832bff, 0 0 6px 5px #152433, 0 0 6px 7px #832bff'
        },
        '100%': {
            boxShadow: '0 0 4px 3px rgba(0, 0, 0, 0), 0 0 0px 20px #152433, 0 0 0px 20px rgba(0, 0, 0, 0)'
        },
    },
}))

function Founders() {
    const classes = useStyles()
    const len = (3 - 1)
    const imgsLeft = [0, 100, 200]
    const [index, setIndex] = React.useState(0)

    useEffect(() => {
        if (index > 0) $(`.${classes.prev}`).removeClass(classes.display_none)
        else $(`.${classes.prev}`).addClass(classes.display_none)

        if (index < len) $(`.${classes.next}`).removeClass(classes.display_none)
        else $(`.${classes.next}`).addClass(classes.display_none)

        // Change Active Dot
        let dots = document.getElementsByClassName(classes.dots)
        for (let i = 0; i < dots.length; i++) {
            if (index === i) dots[i].classList.add(classes.dots_active)
            else dots[i].classList.remove(classes.dots_active)
        }

        // Change Image
        let images = document.getElementsByClassName(classes.founders_images)
        for (let i = 0; i < images.length; i++) {
            images[i].style.left = (imgsLeft[i] - (index * 100)) + '%'
        }
    },
    [index] // Only re-run the effect if index changes
    )

    return (
        <div id="founders" className={classes.founders_container}>
            <div className={classes.the_founders_wrapper}>
                <h3 className={classes.the_founders}>The Founders</h3>
            </div>
            <div className={`${classes.founders_images} ${classes.foun_1}`}></div>
            <div className={`${classes.founders_images} ${classes.foun_2}`}></div>
            <div className={`${classes.founders_images} ${classes.foun_3}`}></div>
            <Fab
                size="small"
                aria-label="prev"
                className={`${classes.prev_next} ${classes.prev} ${classes.display_none}`}
                onClick={() => {setIndex(index - 1)}}
            >
                <ChevronLeftIcon />
            </Fab>
            <Fab
                size="small"
                aria-label="next"
                className={`${classes.prev_next} ${classes.next}`}
                onClick={() => {setIndex(index + 1)}}
            >
                <ChevronRightIcon />
            </Fab>
            <div className={classes.seek_bar}></div>
            <div className={classes.seek}></div>
            <div className={classes.dots_wrapper}>
                <div className={classes.dots} onClick={() => {setIndex(0)}}></div>
                <div className={classes.dots} onClick={() => {setIndex(1)}}></div>
                <div className={classes.dots} onClick={() => {setIndex(2)}}></div>
            </div>
        </div>
    )
}

export default Founders
