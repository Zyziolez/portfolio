import React from 'react'
import exampleImage from './../images/example.PNG'

class Card {
    constructor( title, img ){
        this.title = title;
        this.img = img;
    }
}

export default function ImageExamples() {
    const arr = [
        new Card( 'Rooms', exampleImage ),
        new Card( 'Dream Extreme', exampleImage ),
        new Card( 'Example', exampleImage ),
        new Card( 'Example', exampleImage )
    ]
    return (
        <div id='image-examples' >
            <h2> Ostatnio wykonane projekty </h2>
            <section>
            { arr.map( (ele, i) =>
            <div className='examples-card' key={i} >
                <img src={ ele.img } />
                <h3> { ele.title } </h3>
            </div>
            ) }
            </section>
        </div>
    )
}
