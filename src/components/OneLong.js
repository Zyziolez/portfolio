import React from 'react'
import { Link } from 'react-router-dom'

export default function OneLong() {
    return (
        <div id='one-long' >
            <section>
            <h2> Czym się zajmujemy? </h2>
            <p> Z pasją tworzymy spersonalizowane strony internetowe dla naszych klientów. Z wykorzystaniem technologii takich jak ReactJS oraz Node.js jesteśmy w stanie tworzyć cuda! Zobacz naszą ofertę aby dowiedzieć się więcej </p>
            </section>
            <Link to='/oferta' > <button> Sprawdź tutaj </button> </Link>
        </div>
    )
}
