import React from 'react'
import wallet from './../images/wallet.svg'
import creIcon from './../images/creat.svg'
import trophy from './../images/trophy.svg'

class Card {
    constructor( title, text, icon ){
        this.title = title;
        this.text = text;
        this.icon = icon;
    }
}

export default function ThreeCards() {

    const arr = [
        new Card( 'Kratywność', 'Single site Use for personal or a client Use in a free end product (Can have multiple users) Use in an end product that is “sold"', creIcon ),
        new Card( 'Dobra jakość wykonania', 'Single site Use for personal or a client Use in a free end product (Can have multiple users) Use in an end product that is “sold"', trophy ),
        new Card( 'Niska cena', 'Single site Use for personal or a client Use in a free end product (Can have multiple users) Use in an end product that is “sold"', wallet )
    ]

    return (
        <div id='three-cards' >
            <h1> Co nas wyróżnia </h1>
            <p> i mniejszy tekst pod spodem </p>
            <div id='three-arr' >
            { arr.map( (ele, i) =>
            <div className='examples-card' key={i} >
                <img src={ele.icon} />
                <h2> {ele.title} </h2>
                <p> { ele.text } </p>
            </div>
            ) }
            </div>
        </div>
    )
}
