import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    mouse_circle: {
        position: 'absolute',
        zIndex: 4,
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        backgroundColor: 'rgba(0, 0, 0, 0.07)',
        opacity: 0,
        pointerEvents: 'none',
    },
}))


function MouseCircle() {
    const classes = useStyles();
    return <div className={classes.mouse_circle}></div>
}

export default MouseCircle
