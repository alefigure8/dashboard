import { useEffect, useState } from 'react'
import Clients from '../components/Clients'
import Spinner from '../components/Spinner'


const Init = () => {

    const [clients, setClients] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const clients = async () => {
            try {
                const url = 'http://localhost:4000/clientes'
                const response = await fetch(url)
                const result = await response.json()
            setClients(result)
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        clients()
    }, [])

    return (
        <>
            {loading ? <Spinner /> : 
                <>
                    <h1 className='text-gray-50 text-3xl font-bold'>Clients</h1>
                    <p className='text-gray-300 mt-3'> List of clients</p> 
                    <table className='w-full mt-5 table-auto shadow-md rounded-xl'>
                        <thead
                            className='bg-zinc-700 text-zinc-100'
                        >
                            <tr>
                                <th className='p-2'>
                                    Name
                                </th>
                                <th className='p-2'>
                                    Info
                                </th>
                                <th className='p-2'>
                                    Business
                                </th>
                                <th className='p-2'>
                                    Actions
                                </th>
                            </tr>
                        </thead>    
                        <tbody>
                        {clients.map(client => (<Clients
                                                    key={client.id}
                                                    client={client}
                                                />))}
                        </tbody>        
                    </table>
                    
                </>
            }
        </>
    )
}

export default Init
