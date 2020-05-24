import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    vision_mission_wrapper: {
        backgroundColor: '#282E34',
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: '100%',
        height: '320px',
        fontFamily: '"Lato", sans-serif',
        padding: '58.608px 6.6335%',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
        zIndex: 3,
    },
    vision_mission_title: {
        textAlign: 'center',
        letterSpacing: '6.25px',
        textTransform: 'uppercase',
        fontSize: '25px',
        fontWeight: 'normal',
        color: '#EEE',
    },
    vision_mission_sub_titles: {
        letterSpacing: '5px',
        textTransform: 'uppercase',
        fontSize: '20px',
        fontWeight: 'normal',
        color: '#EEE',
    },
    vision_mission_vm: {
        textAlign: 'justify',
        color: '#999',
        letterSpacing: '3.75px',
        wordSpacing: '5px',
    },
}))

function VisionMission() {
    const classes = useStyles()
    return (
        <div id="vision-mission" className={classes.vision_mission_wrapper}>
            <h3 className={classes.vision_mission_title}>Vision & Mission</h3>
            <h3 className={classes.vision_mission_sub_titles}>Vision</h3>
            <p className={classes.vision_mission_vm}>
                To provide a seamless, easy to use expense tracking platform that inculcates smart budgeting and
                increases the quality of life of our users.
            </p>
            <h3 className={classes.vision_mission_sub_titles}>Mission</h3>
            <p className={classes.vision_mission_vm}>
                To empower every person and organization to effectively manage their spending and expenses so they can
                achieve more in their lives.
            </p>
        </div>
    )
}

export default VisionMission
