import React, { Fragment } from 'react'
import TopNav from '../components/layouts/TopNav'
import DescriptionFeatures from '../components/layouts/DescriptionFeatures'
import VisionMission from '../components/layouts/VisionMission'
import Founders from '../components/layouts/Founders'
import ToTop from '../components/buttons/ToTop'

function Landing() {
    return (
        <Fragment>
            <TopNav />
            <DescriptionFeatures />
            <VisionMission />
            <Founders />
            <ToTop />
        </Fragment>
    )
}

export default Landing
