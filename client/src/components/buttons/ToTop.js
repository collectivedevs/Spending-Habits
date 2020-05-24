import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import $ from 'jquery'
import { Tooltip, Fab } from '@material-ui/core'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

const useStyles = makeStyles(theme => ({
    button: {
        zIndex: 10,
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        backgroundColor: '#DC004E',
        color: '#FFF',
        transition: '0.3s',
        "&:hover": {
            backgroundColor: '#AB003C',
        }
    },
    display_none: {
        display: 'none',
    }
}))

function ToTop() {
    const classes = useStyles()

    const toTop = () => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }

    const onScroll = () => {
        if (document.body.scrollTop >= 60 || document.documentElement.scrollTop >= 60) {
            $(`.${classes.button}`).removeClass(classes.display_none)
        }
        else {
            $(`.${classes.button}`).addClass(classes.display_none)
        }
    }

    useEffect(() => {
        // Add when mounted
        document.addEventListener('scroll', onScroll);
        // Return function to be called when unmounted
        return () => {
            document.removeEventListener('scroll', onScroll);
        }
    }, []) // Pass empty array to 2nd arguments for optimisation

    return (
        <Tooltip title="Top">
            <Fab
                size="small"
                aria-label="back-to-top"
                className={`${classes.button} ${classes.display_none}`}
                onClick={toTop}
            >
                <KeyboardArrowUpIcon />
            </Fab>
        </Tooltip>
    )
}

export default ToTop
