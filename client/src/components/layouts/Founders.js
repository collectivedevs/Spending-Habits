import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
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
    },
    the_founders_wrapper: {
        backgroundColor: '#152433',
        width: '100%',
        height: '100px',
        position: 'absolute'
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
        left: '0%',
        right: '0%',
        top: '100px',
        minHeight: 'calc(100% - 203px)',
        backgroundColor: '#CCC',
        pointerEvents: 'none',
    },
    foun_1: {
        background: `url(${foun_1})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    foun_2: {
        background: `url(${foun_2})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    foun_3: {
        background: `url(${foun_3})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    display_none: {
        display: 'none',
    },
    divider: {
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: 'calc(100% - 103px)',
        height: '3px',
        backgroundColor: '#DC004E',
    },
    seek: {
        display: 'none',
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: 'calc(100% - 109px)',
        height: '15px',
        width: '15px',
        borderRadius: '50%',
        backgroundColor: '#DC004E',
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
    slides_wrapper: {

    },
    slides: {

    },
    slides_active: {

    },
}))

function Founders() {
    const classes = useStyles()
    const [index, setIndex] = React.useState(0)
    const images = [classes.foun_1, classes.foun_2, classes.foun_3]
    const len = images.length

    const changeImage = change => {
        if ((index + change) > (len - 1)) {
            document.getElementsByClassName(images[len - 1])[0].classList.toggle(classes.display_none)
            document.getElementsByClassName(images[0])[0].classList.toggle(classes.display_none)
            setIndex(0)
        }
        else if ((index + change) < 0) {
            document.getElementsByClassName(images[1])[0].classList.toggle(classes.display_none)
            document.getElementsByClassName(images[len - 1])[0].classList.toggle(classes.display_none)
            setIndex(len - 1)
        }
        else {
            document.getElementsByClassName(images[index])[0].classList.toggle(classes.display_none)
            document.getElementsByClassName(images[index + change])[0].classList.toggle(classes.display_none)
            setIndex(index + change)
        }
        console.log(index)
    }

    return (
        <div id="founders" className={classes.founders_container}>
            <div className={classes.the_founders_wrapper}>
                <h3 className={classes.the_founders}>The Founders</h3>
            </div>
            <div className={`${classes.founders_images} ${classes.foun_1}`}></div>
            <div className={`${classes.founders_images} ${classes.foun_2} ${classes.display_none}`}></div>
            <div className={`${classes.founders_images} ${classes.foun_3} ${classes.display_none}`}></div>
            <Fab
                size="small"
                aria-label="prev"
                className={`${classes.prev_next} ${classes.prev}`}
                onClick={() => {changeImage(-1)}}
            >
                <ChevronLeftIcon />
            </Fab>
            <Fab
                size="small"
                aria-label="next"
                className={`${classes.prev_next} ${classes.next}`}
                onClick={() => {changeImage(1)}}
            >
                <ChevronRightIcon />
            </Fab>
            <div className={classes.divider}></div>
            <div className={classes.seek}></div>
            <div className={classes.slides_wrapper}>
                <div className={classes.slides}></div>
                <div className={classes.slides}></div>
                <div className={classes.slides}></div>
            </div>
        </div>
    )
}

export default Founders
