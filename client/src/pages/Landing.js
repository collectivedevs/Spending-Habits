import React, { Fragment } from 'react'
import TopNav from '../components/layouts/TopNav'
import DescriptionFeatures from '../components/layouts/DescriptionFeatures'
import Developers from '../components/layouts/Developers'

function Landing() {
    return (
        <Fragment>
            <TopNav />
            <DescriptionFeatures />
            <Developers />
        </Fragment>
    )
}

export default Landing
