import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'

const ClientPage = () => {

    const [client, setClient] = useState({})
    const [loading, setLoading] = useState(true)
    let {id} = useParams();

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
            {loading 
                ? 
                    <Spinner />
                :  
                    Object.keys(client).length === 0 
                        ?
                            <p className='text-zinc-400 font-bold text-2xl text-center'>Client with id: {id} not found!</p>
                        :
                            ( 
                                <div className='text-zinc-100 p-4 bg-zinc-700 rounded-md shadow-md w-full md:w-2/4 mx-auto md:mt-10'>
                                    <p>
                                        <span className='font-bold text-orange-300 text-2xl uppercase'>{client.name}</span> 
                                    
                                    </p>
                                    <p>
                                        <span className='font-bold text-zinc-400'>Business: </span> 
                                        {client.business}
                                    </p>
                                    <p>
                                        <span className='font-bold text-zinc-400'>E-mail: </span> 
                                        {client.email}
                                    </p>
                                    <p>
                                        <span className='font-bold text-zinc-400'>Phone: </span> 
                                        {client.phone}
                                    </p>
                                    <p>
                                        <span className='font-bold text-zinc-400'>Obervation: </span>  
                                        {client.observation}
                                    </p>
                                </div>
                            )
            }
        </>
    )
}

export default ClientPage
