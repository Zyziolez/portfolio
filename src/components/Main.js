import React, { useEffect, useRef, useState } from 'react'
import {Link} from 'react-router-dom'
import icon from './../images/icon.svg'
import fb from './../images/fb.svg'
import film from './../images/film.mp4'

export default function Main() {
    const link = window.location.href.split('/')[3]
    const [active, setActive] = useState( false )
    const onas = useRef()
    const oferta = useRef()
    const projekty = useRef()
    const kontakt = useRef()
    const video = useRef()

    useEffect(() => {
        switch (link) {
            case '':
                onas.current.style.borderBottom = '1px solid white'
                break;
            case 'oferta':
                oferta.current.style.borderBottom = '1px solid white'
            break;
            case 'projekty':
                projekty.current.style.borderBottom = '1px solid white'
            break;
            case 'kontakt':
                kontakt.current.style.borderBottom = '1px solid white'
            break;
        
            default:
                break;
        }
        return() => {
            kontakt.current.style.borderBottom = 'none'
            projekty.current.style.borderBottom = 'none'
            oferta.current.style.borderBottom = 'none'
            onas.current.style.borderBottom = 'none'
        }
    }, [window.location.href])

    return (
        <div id='main' >
            <div id='up-content' >
            <video src={ film } autoPlay id='video' ref={video}  muted loop />
                <h1> Itinit </h1>
                <div id='menu-down' >
                <section>
                    <Link to='/' ref={onas} > <p> O nas </p> </Link>
                    <Link to='/oferta' ref={oferta} > <p> Oferta </p> </Link>
                    <Link to='/projekty' ref={projekty} > <p> Projekty </p> </Link>
                    <Link to='/kontakt' ref={ kontakt } > <p> Kontakt </p> </Link>
                </section>
                <div>
                <img src={icon} className='media' />
                <img src={fb} className='media' />
                </div>
                </div>
                {/* <div id='circle-one' ></div>
                <div id='circle-two' ></div> */}
            </div>
    </div>
    )
}
