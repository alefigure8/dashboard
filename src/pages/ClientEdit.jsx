import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import FormAdd from '../components/Form'
import Spinner from '../components/Spinner'

const ClientEdit = () => {
    const {id} = useParams()
    const [client, setClient] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        // EDIT
        const clients = async () => {
            try {
                const url = `${import.meta.env.VITE_API_URL}/${id}`
                const response = await fetch(url)
                const result = await response.json()
            setClient(result)
            } catch (error) {
                console.log(error)
            }
            setLoading(!loading)
        }
        clients()
    }, [])

    return (
        
        <>
            {loading && <Spinner />}
            {client?.id ?  
                <>
                    <h1 className='text-gray-50 text-3xl font-bold'>Edit Client</h1>
                    <p className='text-gray-300 mt-3'> Fill in all the fields to register a client</p>
                    
                    <FormAdd 
                        client={client}
                        id={id}
                    /> 
                </>
            : 
            <>
                <p className='text-zinc-400 font-bold text-2xl text-center mt-20 flex flex-col h-48 justify-between'><i class="fas fa-sad-cry text-8xl"></i> Error 404: Client not found!</p>
            </>
            }
           
         </>
    )
}

export default ClientEdit
