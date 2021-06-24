import React from 'react'
import img from './../images/small-img.PNG'

class Cards  {
    constructor( title, img ){
        this.title = title;
        this.img = img;
    }
}


export default function TextSmallImgs() {
    const arr = [
        new Cards( 'Title', img ),
        new Cards( 'Title', img ),
        new Cards( 'Title', img )
    ]
    return (
        <div id='text-small-imgs' >
            <h1> Big title </h1>
            <p> Lorem ipsum smaller title raz dwa test 69 jol siema </p>
            <section>
                 { arr.map( (ele, i) => 
                    <div className='image-small-card' key={i} >
                        <h3> {ele.title} </h3>
                        <img src={ele.img} />
                    </div>
                    ) }
            </section>
        </div>
    )
}
