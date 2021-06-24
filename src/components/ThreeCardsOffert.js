import React from 'react'
import heart from './../images/heart.svg'
import star from './../images/star.svg'
import crown from './../images/crown.svg'

class Card  {
    constructor( title, text, bottom, icon ){
        this.title = title;
        this.text = text;
        this.bottom = bottom;
        this.icon = icon;
    }
}


export default function ThreeCardsOffert() {

    const arr = [
        new Card ( 'Title', [ 'Impress potential customers', 'introduce your product using Wingman’s diverse', 'purpose-built landing pages' ], 39.99, heart ),
        new Card ( 'Title', [ 'Impress potential customers', 'introduce your product using Wingman’s diverse', 'purpose-built landing pages' ], 39.99, star ),
        new Card ( 'Title', [ 'Impress potential customers', 'introduce your product using Wingman’s diverse', 'purpose-built landing pages' ], 39.99, crown )
    ]

    return (
        <div id='three-cards-offert' >
            <h1> Some title </h1>
            <section>
            { arr.map( (ele, i) => 
            <div className='offert-card' key={i} >
                <img src={ ele.icon } />
                <h3> {ele.title} </h3>
                <h4> {ele.bottom} </h4>
                <button> Kontakt </button>
                <ul>
                    {ele.text.map( (element, j) =>
                        <li key={ j } > {element} </li>
                        ) }
                </ul>
               
            </div>
            ) }
            </section>
        </div>
    )
}
