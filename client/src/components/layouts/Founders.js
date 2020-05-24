import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    founders: {
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: 'calc(100% + 437.19px)',
        minHeight: '300px',
        background: '#19D25A',
        zIndex: 2,
    },
}))

function Founders() {
    const classes = useStyles();
    return (
        <div id="founders" className={classes.founders}>
        </div>
    )
}

export default Founders
