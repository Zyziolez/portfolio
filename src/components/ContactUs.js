import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import axios from 'axios'

export default function ContactUs() {
    const [name, setName] = useState('')
    const [ title, setTitle ] = useState('')
    const [ mail, setMail ] = useState('')
    const [ text, setText ] = useState('Wiadomość')
    const [err, setErr] = useState(false)
    const [helper, setHelper] = useState('')

    const stringLengthChecker = (string) => {
        if( string.replace(/\s/g, '').length > 0 ){
            return true
        }
        return false
    }
    const checkMail = (mail) => {
        if(mail.includes('@') && mail.includes('.')){
            return true
        }
        return false
    }

    const sendMail = () => {
        if( stringLengthChecker( name ) && stringLengthChecker( title ) && checkMail( mail ) && stringLengthChecker(text) ){
           axios.post( 'http://178.235.196.39:4009/portfolio', { client: name, title: title, mail: mail, text: text } )
            setErr( false )
            setHelper( '' )
            setName('')
            setTitle('')
            setMail('')
            setText('')
        }else{
            setErr( true )
            setHelper( 'Błąd' )
        }
    }

    const disappear = () => {
        if( text == 'Wiadomość' ){
            setText('')
        }
    }

    return (
        <div id='contact-us' >
            <h2> Bądźmy w kontakcie </h2>
            <section>
                <TextField error={err} helperText={helper} label='Imię i nazwisko' value={ name } onChange={ e => setName( e.target.value ) } style={{ gridArea: 'left-top' }} />
                <TextField error={err} helperText={helper} label='Tytuł' value={ title } onChange={ e => setTitle(e.target.value) } style={{ gridArea: 'left-middle' }} />
                <TextField error={err} helperText={helper} label='Mail kontaktowy' value={ mail } onChange={ e => setMail(e.target.value) } style={{ gridArea: 'left-bottom' }} />
                <input type='text' label=' Wiadomość ' value={ text } onChange={ e => setText(e.target.value) } style={{ gridArea: 'right' }} id='wiad' onClick={ disappear } />
                <button onClick={ sendMail } style={{ gridArea: 'button' }} > Wyślij </button>
            </section>
        </div>
    )
}
