import React from 'react'
import image from './../images/long-example-two.PNG'
import { Link } from 'react-router-dom'

export default function OneImage() {
    return (
        <div id='one-image' >
            <img src={ image } />
            <section>
                <p>some small text</p>
                <h1> Some really big text </h1>
                <p> some extra long p because my pp is very long and its huge and enormous exactly like my brain because im super intelligent and i get all the bitches</p>
                <Link to='/' > See more </Link>
            </section>
        </div>
    )
}
