import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DollarSignBg from '../media/darkbg.jpg'

const useStyles = makeStyles({
    homeContent: {
        height: `${window.innerHeight - 64}px`,
        backgroundImage: `url(${DollarSignBg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // backgroundColor: 'green'
    }
})

function Home() {
    const classes = useStyles()

    return (
        <div className={classes.homeContent}>
            
        </div>
    )
}

export default Home
