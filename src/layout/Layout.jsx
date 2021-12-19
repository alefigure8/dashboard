import {Outlet, Link, useLocation} from 'react-router-dom'
import useLayoutButton from '../components/useLayoutButton'

const Layout = () => {

    // custom hooks button
    const [SelectUserBtn] = useLayoutButton('Client', '/clients', 'fas fa-user' )
    const [SelectNewBtn] = useLayoutButton('New Client', '/clients/new', 'fas fa-pen' )

    return (
        <div className='md:flex md:min-h-screen'>
            <div 
                className='md:w-2/12 bg-neutral-900  py-10 drop-shadow-xl'
            >
                <h2
                    className='text-gray-50 font-bold text-center text-2xl'
                >Dashboard</h2>
                <nav
                    className='mt-10 '
                >
                   <SelectUserBtn />
                   <SelectNewBtn />
                </nav>
            </div>
            <div className='md:w-10/12 p-10 bg-zinc-800 h-screen md:overflow-y-scroll'>
            <Outlet />
            </div>
            
        </div>
    )
}

export default Layout
