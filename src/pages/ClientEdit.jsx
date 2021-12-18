import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import FormAdd from '../components/Form'
import Spinner from '../components/Spinner'

const ClientEdit = () => {
    const {id} = useParams()
    const [client, setClient] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const clients = async () => {
            try {
                const url = `http://localhost:4000/clientes/${id}`
                const response = await fetch(url)
                const result = await response.json()
            setClient(result)
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        clients()
    }, [])

    return (
        
        <>
            <h1 className='text-gray-50 text-3xl font-bold'>Edit Client</h1>
            <p className='text-gray-300 mt-3'> Fill in all the fields to register a client</p>
            {loading && <Spinner />}
            {Object.keys(client).length ?  
            
            <FormAdd 
                client={client}
                id={id}
            /> : 
                <p className='text-zinc-400 font-bold text-2xl text-center mt-20'>Client with id: {id} not found!</p>
            }
           
         </>
    )
}

export default ClientEdit
