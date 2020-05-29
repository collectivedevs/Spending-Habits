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
        userSelect: 'none',
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
        minHeight: 'calc(100% - 180px)',
        backgroundColor: '#CCC',
        pointerEvents: 'none',
    },
    images: {
        position: 'absolute',
        width: '100%',
        height: '100%',
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
    content: {
        position: 'absolute',
        bottom: '-40%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: '#f0f0f0',
        fontFamily: '"Lato", sans-serif',
        userSelect: 'none',
        transition: '0.4s 0.4s ease-in',
    },
    name: {
        letterSpacing: '6.25px',
        textTransform: 'uppercase',
        fontSize: '25px',
        fontWeight: 'normal',
        margin: '10px',
        marginTop: '15px',
    },
    job_role: {
        letterSpacing: '3px',
        textTransform: 'uppercase',
        fontSize: '12px',
        margin: '0px 10px',
    },
    about: {
        letterSpacing: '4px',
        wordSpacing: '5.3333px',
        fontSize: '16px',
        marginLeft: '10px',
        marginRight: '10px',
        marginTop: '20px',
        marginBottom: '15px',
    },
    bottom_zero: {
        bottom: '0%',
    },
    display_none: {
        display: 'none',
    },
    transition_image: {
        transition: '0.4s ease-in',
    },
    seek_bar: {
        position: 'absolute',
        left: '0%',
        width: '100%',
        top: 'calc(100% - 80px)',
        height: '5px',
        backgroundColor: '#FFC0C0',
    },
    seek_hover: {
        position: 'absolute',
        left: 0,
        width: 0,
        top: 'calc(100% - 80px)',
        height: '5px',
        backgroundColor: '#FF7F7F',
    },
    seek_progress: {
        position: 'absolute',
        left: 0,
        width: 0,
        top: 'calc(100% - 80px)',
        height: '5px',
        backgroundColor: '#F00',
    },
    seek_point: {
        position: 'absolute',
        left: 0,
        top: 'calc(100% - 86px)',
        height: '17px',
        width: '17px',
        borderRadius: '50%',
        backgroundColor: '#F00',
        zIndex: 3,
        "&:hover": {
            cursor: 'pointer',
        },
    },
    seek_bar_padding: {
        position: 'absolute',
        left: '0%',
        width: '100%',
        top: 'calc(100% - 100px)',
        height: '35px',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        zIndex: 3,
        "&:hover": {
            cursor: 'pointer',
        },
    },
    for_seeking: {
        position: 'absolute',
        top: 'calc(100% - 200px)',
        left: 0,
        width: '100%',
        height: '100px',
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
            boxShadow: '0 0 4px 3px #152433, 0 0 0px 0px #152433, 0 0 0px 0px #152433'
        },
        '10%': {
            boxShadow: '0 0 4px 3px #832bff, 0 0 6px 5px #152433, 0 0 6px 7px #832bff'
        },
        '100%': {
            boxShadow: '0 0 4px 3px #152433, 0 0 0px 20px #152433, 0 0 0px 20px #152433'
        },
    },
}))

function Founders() {
    const classes = useStyles()
    const numImgs = (3 - 1)
    const [index, setIndex] = React.useState(0)

    useEffect(() => {
        if (index > 0) $(`.${classes.prev}`).removeClass(classes.display_none)
        else $(`.${classes.prev}`).addClass(classes.display_none)

        if (index < numImgs) $(`.${classes.next}`).removeClass(classes.display_none)
        else $(`.${classes.next}`).addClass(classes.display_none)

        // Change Image
        $('#founders-images').css({left: (0 - (index * 100)) + '%'})

        // Raise content
        let contents = document.getElementsByClassName(classes.content)
        for (let i = 0; i < contents.length; i++) {
            if (index === i) contents[i].classList.add(classes.bottom_zero)
            else contents[i].classList.remove(classes.bottom_zero)
        }

        // Change Active Dot
        let dots = document.getElementsByClassName(classes.dots)
        for (let i = 0; i < dots.length; i++) {
            if (index === i) dots[i].classList.add(classes.dots_active)
            else dots[i].classList.remove(classes.dots_active)
        }
    },
    [index] // Only re-run the effect if index changes
    )

    const mouseEnter = () => {
        $(`.${classes.seek_point}`).removeClass(classes.display_none)
    }

    const mouseLeave = () => {
        $(`.${classes.seek_point}`).addClass(classes.display_none)
        $(`.${classes.seek_hover}`).css({width: 0})
    }

    const mouseMoveA = e => {
        $(`.${classes.seek_hover}`).css({width: e.clientX + 'px'})
    }

    const slideShow = e => {
        // Move seek point and seek progress
        let left = e.clientX

        if ((left - 8.5) < 0) left = 0
        else if (left > (window.innerWidth - 27)) left = window.innerWidth - 27
        else left -= 8.5

        $(`.${classes.seek_point}`).css({left: left + 'px'})
        $(`.${classes.seek_progress}`).css({width: e.clientX + 'px'})

        // Move images and content
        $('#founders-images').css({left: (-(e.clientX / (window.innerWidth - 11)) * 100 * numImgs) + '%'})

        // Move dots and left right arrows
        let dots = document.getElementsByClassName(classes.dots)
        if (e.clientX < ((window.innerWidth - 11) / 2)) {
            for (let i = 0; i < dots.length; i++) {
                if (i === 0) dots[i].classList.add(classes.dots_active)
                else dots[i].classList.remove(classes.dots_active)
            }
        }
        else if (e.clientX < (window.innerWidth - 16)) {
            for (let i = 0; i < dots.length; i++) {
                if (i === 1) dots[i].classList.add(classes.dots_active)
                else dots[i].classList.remove(classes.dots_active)
            }
        }
        else {
            for (let i = 0; i < dots.length; i++) {
                if (i === 2) dots[i].classList.add(classes.dots_active)
                else dots[i].classList.remove(classes.dots_active)
            }
        }
    }

    const mouseDown = e => {
        document.getElementsByClassName(classes.for_seeking)[0].addEventListener('mousemove', mouseMoveB)
        document.getElementsByClassName(classes.seek_bar_padding)[0].addEventListener('mousemove', mouseMoveB)
        $('#founders-images').removeClass(classes.transition_image)
        $(`.${classes.content}`).addClass(classes.bottom_zero)

        slideShow(e)
    }

    const mouseMoveB = e => {
        if ( $(`.${classes.seek_point}`).hasClass(classes.display_none) )
            $(`.${classes.seek_point}`).removeClass(classes.display_none)

        slideShow(e)
    }

    const reset = e => {
        if ((e.clientX > (window.innerWidth - 11)) || (e.clientY < (window.innerHeight - 80)) || (e.clientY > (window.innerHeight - 105))) {
            document.getElementsByClassName(classes.for_seeking)[0].removeEventListener('mousemove', mouseMoveB)
            document.getElementsByClassName(classes.seek_bar_padding)[0].removeEventListener('mousemove', mouseMoveB)
            $('#founders-images').addClass(classes.transition_image)
        }
    }

    const mouseUp = () => {
        document.getElementsByClassName(classes.for_seeking)[0].removeEventListener('mousemove', mouseMoveB)
        document.getElementsByClassName(classes.seek_bar_padding)[0].removeEventListener('mousemove', mouseMoveB)
        $('#founders-images').addClass(classes.transition_image)
    }

    const hideSeekPoint = () => {
        $(`.${classes.seek_point}`).addClass(classes.display_none)
    }

    return (
        <div id="founders" className={classes.founders_container} onMouseUp={mouseUp}>
            <div className={classes.the_founders_wrapper}>
                <h3 className={classes.the_founders}>The Founders</h3>
            </div>

            <div id="founders-images" className={`${classes.founders_images} ${classes.transition_image}`}>
                <div className={`${classes.images} ${classes.foun_1}`}>
                    <div className={classes.content}>
                        <h3 className={classes.name}>Joel Moore</h3>
                        <small className={classes.job_role}>Lead Back End Developer</small>
                        <p className={classes.about}>
                            Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu
                            recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum
                            tractatos ei.
                        </p>
                    </div>
                </div>
                <div className={`${classes.images} ${classes.foun_2}`}>
                    <div className={classes.content}>
                        <h3 className={classes.name}>Rich Prosper</h3>
                        <small className={classes.job_role}>Lead Front End Developer</small>
                        <p className={classes.about}>
                            Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu
                            recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum
                            tractatos ei.
                        </p>
                    </div>
                </div>
                <div className={`${classes.images} ${classes.foun_3}`}>
                    <div className={classes.content}>
                        <h3 className={classes.name}>Paula Ramírez</h3>
                        <small className={classes.job_role}>Full Stack Developer</small>
                        <p className={classes.about}>
                            Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu
                            recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum
                            tractatos ei.
                        </p>
                    </div>
                </div>
            </div>

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
            <div className={classes.seek_hover}></div>
            <div className={classes.seek_progress}></div>
            <div
                className={`${classes.seek_point} ${classes.display_none}`}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
            >
            </div>
            <div
                className={classes.seek_bar_padding}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                onMouseMove={mouseMoveA}
                onMouseDown={mouseDown}
                onMouseUp={mouseUp}
            >
            </div>
            <div className={classes.for_seeking} onMouseUp={hideSeekPoint} onMouseLeave={reset}></div>

            <div className={classes.dots_wrapper}>
                <div className={classes.dots} onClick={() => {setIndex(0)}}></div>
                <div className={classes.dots} onClick={() => {setIndex(1)}}></div>
                <div className={classes.dots} onClick={() => {setIndex(2)}}></div>
            </div>
        </div>
    )
}

export default Founders
