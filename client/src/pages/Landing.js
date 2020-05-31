import React, { Fragment } from 'react'
import TopNav from '../components/layouts/TopNav'
import Features from '../components/layouts/Features'
import VisionMission from '../components/layouts/VisionMission'
import Founders from '../components/layouts/Founders'
import ToTop from '../components/buttons/ToTop'

function Landing() {
    return (
        <Fragment>
            <TopNav />
            <Features />
            <VisionMission />
            <Founders />
            <ToTop />
        </Fragment>
    )
}

export default Landing
