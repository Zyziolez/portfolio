import React, {useRef} from 'react'
import image from './../images/long-example-two.PNG'
import { Link } from 'react-router-dom'
import VisibilitySensor from 'react-visibility-sensor';

export default function OneImage() {
    const sectionRef = useRef()

    const playAnimation = (isVisible) => {
        if( isVisible ){
            sectionRef.current.className = 'animate'
        }else{
            sectionRef.current.className = ''
        }
    }

    return (
        <div id='one-image' >
            <img src={ image } />
           <VisibilitySensor onChange={ playAnimation } >
           <section ref={ sectionRef } >
                <p>some small text</p>
                <h1> Some really big text </h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Link to='/' > See more </Link>
            </section>
           </VisibilitySensor>
        </div>
    )
}
