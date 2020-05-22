import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import financial from '../../images/landing-page-images/financial.jpg'
import notebook from '../../images/landing-page-images/notebook.jpg'
import sackcloth from '../../images/landing-page-images/sackcloth.jpg'
import business from '../../images/landing-page-images/business.jpg'
import chart from '../../images/landing-page-images/chart.jpg'

const useStyles = makeStyles(theme => ({
    description_features: {
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: '60px',
        minHeight: 'calc(100% - 60px)',
        zIndex: 2,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        background: '#101010',
        background: `url(${financial})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        transition: '0.75s',
    },
}))

function DescriptionFeatures() {
    const classes = useStyles();

    useEffect(() => {
        let images = [financial, notebook, sackcloth, business, chart]
        let i = 0
        let div = document.getElementsByClassName(classes.description_features)[0]
    
        setInterval(() => {
            i == (images.length - 1) ? i = 0 : i++
            div.style.background = `url(${images[i]})`
            div.style.backgroundAttachment = 'fixed'
            div.style.backgroundPosition = 'center'
            div.style.backgroundRepeat = 'no-repeat'
            div.style.backgroundSize = 'cover'
        }, 5750);
    })

    return (
        <div className={classes.description_features}>
        </div>
    )
}

export default DescriptionFeatures
