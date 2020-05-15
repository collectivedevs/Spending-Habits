import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    description_features: {
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: '60px',
        /* 60px is the height of the TopNav. So (100% - 60px) / 2 = 50% - 30px */
        bottom: 'calc(50% - 30px)',
        background: 'linear-gradient(71.49deg, #008FEB 0%, #BE006C 100%)',
        zIndex: 2,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    df_title: {
        textAlign: 'center',
        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '48px',
        color: '#FFFCFC',
    },
}))

function DescriptionFeatures() {
    const classes = useStyles();
    return (
        <div className={classes.description_features}>
            <div className={classes.df_title}>Description & Features</div>
        </div>
    )
}

export default DescriptionFeatures
