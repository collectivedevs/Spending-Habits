import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    developers: {
        position: 'absolute',
        left: '0%',
        right: '0%',
        /* We calculate TopNav Height (60px) + Description & Features Height (50% - 30px) = 50% + 30px */
        top: 'calc(50% + 30px)',
        bottom: '0%',
        background: 'linear-gradient(71.49deg, #AA0058 0%, #007BD7 100%)',
        zIndex: 1,
    },
    developers_wrapper: {
        width: 'calc(100% - 40px)',
        height: 'calc(100% - 40px)',
        margin: '20px auto',
        display: 'flex',
        flexWrap: 'wrap',
    },
    dev_1: {
        width: 'calc((100% - 40px) / 3)',
        marginRight: '10px',
        background: '#F4F4F4',
        boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)',
    },
    dev_2: {
        width: 'calc((100% - 40px) / 3)',
        marginRight: '10px',
        marginLeft: '10px',
        background: '#F4F4F4',
        boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)',
    },
    dev_3: {
        width: 'calc((100% - 40px) / 3)',
        marginLeft: '10px',
        background: '#F4F4F4',
        boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)',
    },
}))

function Developers() {
    const classes = useStyles();
    return (
        <div className={classes.developers}>
            <div className={classes.developers_wrapper}>
                <div className={classes.dev_1}></div>
                <div className={classes.dev_2}></div>
                <div className={classes.dev_3}></div>
            </div>
        </div>
    )
}

export default Developers
