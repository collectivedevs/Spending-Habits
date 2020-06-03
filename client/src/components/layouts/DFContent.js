import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    content: {
        zIndex: 5,
        position: 'absolute',
        top: '60px',
        left: 0,
        right: '50%',
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.75)',
        padding: '20px',
    },
    features_title: {
        letterSpacing: '1.5vw',
        fontSize: '6vw',
        fontWeight: 'bold',
        color: '#f0f0f0',
        textShadow: '0px 1.2px 2.4px #19D25A',
    },
    features: {
        letterSpacing: '0.5vw',
        fontSize: '2vw',
        fontWeight: 'bold',
        color: '#f0f0f0',
        textShadow: '0vw 0.0625vw 0.125vw #FFF',
        margin: '4vh 0',
    },
    tick: {
        color: '#F0F0F0',
        textShadow: '0vw 0vw 0.25vw #FFF, 0vw 0vw 0.5vw #FFF, 0vw 0vw 0.75vw #19D25A, 0vw 0vw 1vw #19D25A, 0vw 0vw 1.25vw #19D25A, 0vw 0vw 1.5vw #19D25A,  0vw 0vw 1.75vw #19D25A',
    }
}))

function DFContent() {
    const classes = useStyles()
    return (
        <div id="features-content" className={classes.content}>
            <div className={classes.features_title}>FEATURES</div>
            <div className={classes.features}>
                <span className={classes.tick}>&#10004;</span> Log Day to Day Expenses
            </div>
            <div className={classes.features}>
                <span className={classes.tick}>&#10004;</span> View all Past Expenses
            </div>
            <div className={classes.features}>
                <span className={classes.tick}>&#10004;</span> Easy Budgeting
            </div>
            <div className={classes.features}>
                <span className={classes.tick}>&#10004;</span> Generate Analytics
            </div>
        </div>
    )
}

export default DFContent
