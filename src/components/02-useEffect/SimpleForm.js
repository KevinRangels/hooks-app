import React, { useState, useEffect } from 'react'
import { Message } from './Message'
import './effects.css'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const {name, email} = formState

    useEffect( () => {
        // console.log('hey')
    }, [])

    useEffect( () => {
        // console.log('formState Cambio')
    }, [formState])

    useEffect( () => {
        // console.log('Email Cambio')
    }, [email])

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value
            
        })
    }
    return (
        <>
            <h1>UseEffect</h1>
            <hr/>
            <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Tu nombre"
                  autoComplete="off"
                  value={ name }
                  onChange={ handleInputChange }
                />

                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  autoComplete="off"
                  value={ email }
                  onChange={ handleInputChange }
                />
            </div>
            { (name === '123') && <Message/>}
        </>
    )
}
