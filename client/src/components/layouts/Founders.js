import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import $ from 'jquery'
import { Fab } from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { Foun_1 } from '../../images/founders-images/Foun_1'
import { Foun_2 } from '../../images/founders-images/Foun_2'
import { Foun_3 } from '../../images/founders-images/Foun_3'

const useStyles = makeStyles(theme => ({
    founders_container: {
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: 'calc(100% + 437.19px)',
        minHeight: '100%',
        backgroundColor: '#152433',
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
    Foun_1: {
        left: '0%',
        background: `url(${Foun_1})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    Foun_2: {
        left: '100%',
        background: `url(${Foun_2})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    Foun_3: {
        left: '200%',
        background: `url(${Foun_3})`,
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
    hover_name: {
        position: 'absolute',
        top: 'calc(100% - 130px)',
        padding: '5px',
        fontSize: '8px',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        color: '#EEE',
        backgroundColor: '#282E34',
        border: '1px solid #FAFAFA',
        borderRadius: '5px',
        boxShadow: '0px 0px 1px #FFF, 0px 0px 2px #FFF',
    },
    bottom_zero: {
        bottom: '0%',
    },
    display_none: {
        display: 'none',
    },
    transition: {
        transition: '0.4s ease-in',
    },
    seek_bar: {
        position: 'absolute',
        left: '18px',
        width: 'calc(100% - 36px)',
        top: 'calc(100% - 80px)',
        height: '5px',
        backgroundColor: '#FFC0C0',
    },
    seek_hover: {
        position: 'absolute',
        left: '18px',
        width: 0,
        top: 'calc(100% - 80px)',
        height: '5px',
        backgroundColor: '#FF7F7F',
    },
    seek_progress: {
        position: 'absolute',
        left: '18px',
        width: 0,
        top: 'calc(100% - 80px)',
        height: '5px',
        backgroundColor: '#F00',
    },
    seek_point: {
        position: 'absolute',
        left: '10px',
        top: 'calc(100% - 85.5px)',
        height: '16px',
        width: '16px',
        borderRadius: '50%',
        backgroundColor: '#F00',
        zIndex: 3,
        "&:hover": {
            cursor: 'pointer',
        },
    },
    seek_bar_padding: {
        position: 'absolute',
        left: '18px',
        width: 'calc(100% - 35px)',
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
        left: '18px',
        width: 'calc(100% - 35px)',
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

    /*
        This function switches the images in the slideshow
        @param value - Holds the index of the image to switch to
    */
    const switchImage = value => {
        // Change Image
        $('#founders-images').css({left: (0 - (value * 100)) + '%'})

        // Raise content; Change active dot, prev & next buttons
        let contents = document.getElementsByClassName(classes.content)
        let dots = document.getElementsByClassName(classes.dots)
        let prevs = document.getElementsByClassName(classes.prev)
        let nexts = document.getElementsByClassName(classes.next)

        for (let i = 0; i < dots.length; i++) {
            if (value === i) {
                contents[i].classList.add(classes.bottom_zero)
                dots[i].classList.add(classes.dots_active)
                prevs[i].classList.remove(classes.display_none)
                nexts[i].classList.remove(classes.display_none)
            }
            else {
                contents[i].classList.remove(classes.bottom_zero)
                dots[i].classList.remove(classes.dots_active)
                prevs[i].classList.add(classes.display_none)
                nexts[i].classList.add(classes.display_none)
            }
        }

        //Move seek point and seek progress
        if (value === 0) {
            $(`.${classes.seek_point}`).css({left: '10px'})
            $(`.${classes.seek_progress}`).css({width: '0px'})
        }
        else if (value === 1) {
            $(`.${classes.seek_point}`).css({left: (((window.innerWidth - 46) / 2) + 10) + 'px'})
            $(`.${classes.seek_progress}`).css({width: ((window.innerWidth - 46) / 2) + 'px'})
        }
        else {
            $(`.${classes.seek_point}`).css({left: (window.innerWidth - 36) + 'px'})
            $(`.${classes.seek_progress}`).css({width: (window.innerWidth - 46) + 'px'})
        }
    }
    
    // This function unhides the seek point
    const mouseEnter = () => {
        $(`.${classes.seek_point}`).removeClass(classes.display_none)
    }

    // This function hides the seek point, seek hover bar and founder's hover name
    const mouseLeave = () => {
        $(`.${classes.seek_point}`).addClass(classes.display_none)
        $(`.${classes.seek_hover}`).css({width: 0})
        $(`.${classes.hover_name}`).addClass(classes.display_none)
    }

    /*
        This function unhides the founder's hover name and moves it
        @param e - Holds the mouse move event
    */
    const moveHoverName = e => {
        $(`.${classes.hover_name}`).removeClass(classes.display_none)

        let hoverName = document.getElementsByClassName(classes.hover_name)[0]
        if ( (e.clientX - 18) < ((window.innerWidth - 47) / 2) ) {
            hoverName.innerHTML = 'Joel Moore'
        }
        else if ( (e.clientX - 18) < (window.innerWidth - 47) ) {
            hoverName.innerHTML = 'Rich Prosper'
        }
        else {
            hoverName.innerHTML = 'Paula Ramírez'
        }

        let width = hoverName.scrollWidth / 3
        let left = e.clientX - 18 - width
        let right = window.innerWidth - 47 - (hoverName.scrollWidth * 2 / 3)

        if (left < 0) left = 0
        else if (left > right) left = right
        $(`.${classes.hover_name}`).css({left: left + 'px'})
    }

    /*
        This function moves the seek hover bar
        @param e - Holds the mouse move event
    */
    const mouseMoveA = e => {
        $(`.${classes.seek_hover}`).css({width: (e.clientX - 18) + 'px'})
        moveHoverName(e)
    }

    /*
        This function switches the images in the slideshow
        @param e - Holds the mouse moe event
    */
    const slideShow = e => {
        let x = e.clientX - 18

        // Move seek point and seek progress
        $(`.${classes.seek_point}`).css({left: (x + 10) + 'px'})
        $(`.${classes.seek_progress}`).css({width: x + 'px'})

        // Move images and content
        $('#founders-images').css({left: (-(x / (window.innerWidth - 46)) * 100 * numImgs) + '%'})

        // Change active dot, prev & next buttons
        let dots = document.getElementsByClassName(classes.dots)
        let prevs = document.getElementsByClassName(classes.prev)
        let nexts = document.getElementsByClassName(classes.next)

        if (x < ((window.innerWidth - 47) / 2)) {
            for (let i = 0; i < dots.length; i++) {
                if (i === 0) {
                    dots[i].classList.add(classes.dots_active)
                    prevs[i].classList.remove(classes.display_none)
                    nexts[i].classList.remove(classes.display_none)
                }
                else {
                    dots[i].classList.remove(classes.dots_active)
                    prevs[i].classList.add(classes.display_none)
                    nexts[i].classList.add(classes.display_none)
                }
            }
        }
        else if (x < (window.innerWidth - 47)) {
            for (let i = 0; i < dots.length; i++) {
                if (i === 1) {
                    dots[i].classList.add(classes.dots_active)
                    prevs[i].classList.remove(classes.display_none)
                    nexts[i].classList.remove(classes.display_none)
                }
                else {
                    dots[i].classList.remove(classes.dots_active)
                    prevs[i].classList.add(classes.display_none)
                    nexts[i].classList.add(classes.display_none)
                }
            }
        }
        else {
            for (let i = 0; i < dots.length; i++) {
                if (i === 2) {
                    dots[i].classList.add(classes.dots_active)
                    prevs[i].classList.remove(classes.display_none)
                    nexts[i].classList.remove(classes.display_none)
                }
                else {
                    dots[i].classList.remove(classes.dots_active)
                    prevs[i].classList.add(classes.display_none)
                    nexts[i].classList.add(classes.display_none)
                }
            }
        }
    }

    /*
        This function adds mouse move event listeners to the for seeking bar and seek bar padding
        It also removes the transition animations from the images, seek progess and seek point
        @param e - Holds the mouse down event
    */
    const mouseDown = e => {
        document.getElementsByClassName(classes.for_seeking)[0].addEventListener('mousemove', mouseMoveB)
        document.getElementsByClassName(classes.seek_bar_padding)[0].addEventListener('mousemove', mouseMoveB)
        $('#founders-images').removeClass(classes.transition)
        $(`.${classes.seek_progress}`).removeClass(classes.transition)
        $(`.${classes.seek_point}`).removeClass(classes.transition)
        $(`.${classes.content}`).addClass(classes.bottom_zero)

        slideShow(e)
    }

    /*
        This function unhides the seek point
        @param e - Holds the mouse move event
    */
    const mouseMoveB = e => {
        $(`.${classes.seek_point}`).removeClass(classes.display_none)
        moveHoverName(e)
        slideShow(e)
    }

    /*
        This function removes the mouse move event listeners from the for seeking bar and seek bar padding;
        it also adds back the transition animations to the images, seek progess and seek point;
        it also hides the seek point and hover name; When the mouse (while down) is moved out of the seek padding area
        @param e - Holds the mouse down event
    */
    const reset = e => {
        if ((e.clientX > (window.innerWidth - 11)) || (e.clientY < (window.innerHeight - 105))) {
            document.getElementsByClassName(classes.for_seeking)[0].removeEventListener('mousemove', mouseMoveB)
            document.getElementsByClassName(classes.seek_bar_padding)[0].removeEventListener('mousemove', mouseMoveB)

            $('#founders-images').addClass(classes.transition)
            $(`.${classes.seek_progress}`).addClass(classes.transition)
            $(`.${classes.seek_point}`).addClass(classes.transition)
            $(`.${classes.seek_point}`).addClass(classes.display_none)
            $(`.${classes.hover_name}`).addClass(classes.display_none)
        }
    }

    // This function does the same thing as reset() when the mouse up event is fired
    const mouseUp = () => {
        document.getElementsByClassName(classes.for_seeking)[0].removeEventListener('mousemove', mouseMoveB)
        document.getElementsByClassName(classes.seek_bar_padding)[0].removeEventListener('mousemove', mouseMoveB)

        $('#founders-images').addClass(classes.transition)
        $(`.${classes.seek_progress}`).addClass(classes.transition)
        $(`.${classes.seek_point}`).addClass(classes.transition)
        $(`.${classes.hover_name}`).addClass(classes.display_none)
    }

    // This function hides the seek point
    const hideSeekPoint = () => {
        $(`.${classes.seek_point}`).addClass(classes.display_none)
    }
 
    return (
        <div id="founders" className={classes.founders_container} onMouseUp={mouseUp}>
            <div className={classes.the_founders_wrapper}>
                <h3 className={classes.the_founders}>The Founders</h3>
            </div>

            {/* FOUNDERS IMAGES */}
            <div id="founders-images" className={`${classes.founders_images} ${classes.transition}`}>
                <div className={`${classes.images} ${classes.Foun_1}`}>
                    <div className={`${classes.content} ${classes.bottom_zero}`}>
                        <h3 className={classes.name}>Joel Moore</h3>
                        <small className={classes.job_role}>Lead Back End Developer</small>
                        <p className={classes.about}>
                            Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu
                            recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum
                            tractatos ei.
                        </p>
                    </div>
                </div>
                <div className={`${classes.images} ${classes.Foun_2}`}>
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
                <div className={`${classes.images} ${classes.Foun_3}`}>
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

            <div className={`${classes.hover_name} ${classes.display_none}`}>Joel Moore</div>

            {/* PREV BUTTONS */}
            <Fab
                size="small"
                aria-label="prev"
                className={`${classes.prev_next} ${classes.prev}`}
                onClick={() => {setIndex(numImgs); switchImage(numImgs);}}
            >
                <ChevronLeftIcon />
            </Fab>
            <Fab
                size="small"
                aria-label="prev"
                className={`${classes.prev_next} ${classes.prev} ${classes.display_none}`}
                onClick={() => {setIndex(0); switchImage(0);}}
            >
                <ChevronLeftIcon />
            </Fab>
            <Fab
                size="small"
                aria-label="prev"
                className={`${classes.prev_next} ${classes.prev} ${classes.display_none}`}
                onClick={() => {setIndex(1); switchImage(1);}}
            >
                <ChevronLeftIcon />
            </Fab>
            {/* NEXT BUTTONS */}
            <Fab
                size="small"
                aria-label="next"
                className={`${classes.prev_next} ${classes.next}`}
                onClick={() => {setIndex(1); switchImage(1);}}
            >
                <ChevronRightIcon />
            </Fab>
            <Fab
                size="small"
                aria-label="next"
                className={`${classes.prev_next} ${classes.next} ${classes.display_none}`}
                onClick={() => {setIndex(2); switchImage(2);}}
            >
                <ChevronRightIcon />
            </Fab>
            <Fab
                size="small"
                aria-label="next"
                className={`${classes.prev_next} ${classes.next} ${classes.display_none}`}
                onClick={() => {setIndex(0); switchImage(0);}}
            >
                <ChevronRightIcon />
            </Fab>

            {/* SEEKING */}
            <div className={classes.seek_bar}></div>
            <div className={classes.seek_hover}></div>
            <div className={`${classes.seek_progress} ${classes.transition}`}></div>
            <div
                className={`${classes.seek_point} ${classes.transition} ${classes.display_none}`}
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

            {/* DOTS */}
            <div className={classes.dots_wrapper}>
                <div className={`${classes.dots} ${classes.dots_active}`} onClick={() => {setIndex(0); switchImage(0);}}></div>
                <div className={classes.dots} onClick={() => {setIndex(1); switchImage(1);}}></div>
                <div className={classes.dots} onClick={() => {setIndex(2); switchImage(2);}}></div>
            </div>
        </div>
    )
}

export default Founders
