import {useNavigate} from 'react-router-dom'

const Clients = ({client, handleDelete}) => {
    const {name, business, email, phone, observation, id} = client
    const navigate = useNavigate()

    const handleClick = ()=> {
       navigate(`/clients/${id}`)
    }

    const handleEdit = ()=> {
        navigate(`/clients/edit/${id}`)
    }

    return (
        <tr
            className='text-zinc-100 bg-zinc-600 border-b border-zinc-500 hover:bg-zinc-500'
        >
            <td 
            className='py-2 px-4 cursor-pointer'
            onClick={handleClick}
            >
                {name}
            </td>
            <td className='py-2 px-4 '>
                <p><span className='text-zinc-400 font-bold uppercase'>Phone:</span> {phone}</p>
                <p><span className='text-zinc-400 font-bold uppercase'>E-mail:</span> {email}</p>
            </td>
            <td className='py-2 px-4 '>
                {business}
            </td>
            <td className='py-2 px-4 '>
               <button
                type='button'
                className='bg-cyan-800 block w-full py-2 px-4  uppercase font-bold text-xs mb-2 opacity-80 rounded-md'
                onClick={handleEdit}
               >Edit</button>
               <button
                type='button'
                className='bg-red-900 block w-full py-2 px-4  uppercase font-bold text-xs opacity-80 rounded-md'
                onClick={() => handleDelete(id)}
                >Delete</button>
            </td>
        </tr>
    )
}

export default Clients
