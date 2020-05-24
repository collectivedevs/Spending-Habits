import React, { Fragment, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import financial from '../../images/landing-page-images/financial.jpg'
import notebook from '../../images/landing-page-images/notebook.jpg'
import sackcloth from '../../images/landing-page-images/sackcloth.jpg'
import business from '../../images/landing-page-images/business.jpg'
import chart from '../../images/landing-page-images/chart.jpg'
import DFContent from './DFContent'

const useStyles = makeStyles(theme => ({
    description_features: {
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: '60px',
        minHeight: 'calc(100% - 60px)',
        zIndex: 4,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
        background: '#101010',
        pointerEvents: 'none',
        transition: '2.5s',
    },
    img_1: {
        background: `url(${financial})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    img_2: {
        background: `url(${notebook})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    img_3: {
        background: `url(${sackcloth})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    img_4: {
        background: `url(${business})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    img_5: {
        background: `url(${chart})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    opacity_zero: {
        opacity: 0,
    },
}))

function DescriptionFeatures() {
    const classes = useStyles()

    useEffect(() => {
        let images = [classes.img_1, classes.img_2, classes.img_3, classes.img_4, classes.img_5]
        let i = 1
        let j = 0
        let interval = 0
            
        setInterval(() => {
            // Stop errors from appearing on other pages
            if (!document.getElementsByClassName(images[j])[0]) return clearInterval(interval)
            
            document.getElementsByClassName(images[j])[0].classList.toggle(classes.opacity_zero)
            document.getElementsByClassName(images[i])[0].classList.toggle(classes.opacity_zero)
            
            j = i
            i === (images.length - 1) ? i = 0 : i++
        }, 10500)
    })

    return (
        <Fragment>
            <div className={`${classes.description_features} ${classes.img_1}`}></div>
            <div className={`${classes.description_features} ${classes.img_2} ${classes.opacity_zero}`}></div>
            <div className={`${classes.description_features} ${classes.img_3} ${classes.opacity_zero}`}></div>
            <div className={`${classes.description_features} ${classes.img_4} ${classes.opacity_zero}`}></div>
            <div className={`${classes.description_features} ${classes.img_5} ${classes.opacity_zero}`}></div>
            <DFContent />
        </Fragment>
    )
}

export default DescriptionFeatures
