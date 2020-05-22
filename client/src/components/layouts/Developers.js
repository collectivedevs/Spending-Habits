import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    developers: {
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: '100%',
        minHeight: 'calc(100% - 60px)',
        background: 'linear-gradient(71.49deg, #AA0058 0%, #007BD7 100%)',
        zIndex: 1,
    },
}))

function Developers() {
    const classes = useStyles();
    return (
        <div className={classes.developers}>
        </div>
    )
}

export default Developers
