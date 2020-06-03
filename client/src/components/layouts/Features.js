import React, { Fragment, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Business } from '../../images/landing-page-images/Business'
import { Chart } from '../../images/landing-page-images/Chart'
import { Iphone } from '../../images/landing-page-images/Iphone'
import { Notebook } from '../../images/landing-page-images/Notebook'
import { Sackcloth } from '../../images/landing-page-images/Sackcloth'
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
        background: `url(${Business})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    img_2: {
        background: `url(${Chart})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    img_3: {
        background: `url(${Iphone})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    img_4: {
        background: `url(${Notebook})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    img_5: {
        background: `url(${Sackcloth})`,
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
        let interval = setInterval(() => {
            document.getElementsByClassName(images[j])[0].classList.toggle(classes.opacity_zero)
            document.getElementsByClassName(images[i])[0].classList.toggle(classes.opacity_zero)
            
            j = i
            i === (images.length - 1) ? i = 0 : i++
        }, 10500)

        return () => {
            clearInterval(interval)
        }
    }, [])


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
