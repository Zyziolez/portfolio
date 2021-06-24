import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Footer() {
    return (
        <div id='footer' >
            <h1> Itinit </h1>
            <table>
                <tr>
                    <th> <Link to='/' >  O nas  </Link> </th>
                     <th> <Link to='/oferta' > Oferta </Link> </th>
                     <th> <Link to='/projekty' > Projekty </Link> </th>
                     <th> <Link to='/kontakt' > Kontakt </Link> </th>
                </tr>
                {/* <tr>
                    <td>pierwszy test</td>
                    <td>drugi test</td>
                    <td>trzeci test</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>tu dam wiecej</td>
                </tr> */}
            </table>
        </div>
    )
}
