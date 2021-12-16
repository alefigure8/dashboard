import React from 'react'
import FormAdd from '../components/Form'

const ClientNew = () => {
    return (
        <>
            <h1 className='text-gray-50 text-3xl font-bold'>New Client</h1>
            <p className='text-gray-300 mt-3'> Fill in all the fields to register a client</p>
            <FormAdd />
        </>
    )
}

export default ClientNew
