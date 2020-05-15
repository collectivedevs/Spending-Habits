import React, { Component, Fragment } from 'react'
import TopNav from '../components/layouts/TopNav'
import DescriptionFeatures from '../components/layouts/DescriptionFeatures'
import Developers from '../components/layouts/Developers'
import MouseCircle from '../components/layouts/MouseCircle'


class Landing extends Component {
    componentDidMount() {
        document.addEventListener("mousemove", e => {
            let x = e.clientX - 10;
            let y = e.clientY - 6;
            let circle = document.getElementsByClassName('makeStyles-mouse_circle-15')[0];

            if ((x + 30) <= window.innerWidth && (y + 30) <= window.innerHeight) circle.style.opacity = 100;
            else circle.style.opacity = 0;

            if ((x + 30) <= window.innerWidth) circle.style.left = x + "px";
            if ((y + 30) <= window.innerHeight) circle.style.top = y + "px";
        })
    }

    render() {
        return (
            <Fragment>
                <TopNav />
                <DescriptionFeatures />
                <Developers />
                <MouseCircle />
            </Fragment>
        )
    }
}

export default Landing