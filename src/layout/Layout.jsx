import {Outlet, Link, useLocation} from 'react-router-dom'

const Layout = () => {

    const location = useLocation()

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
                    <Link 
                        to="/clients"
                        className={ `text-gray-50 block mt-2 py-2 px-8 text-xl hover:text-gray-300 duration-300 transition-all ${location.pathname === '/clients' ? 'bg-neutral-800 rounded-r-3xl md:w-4/5 w-2/5' : 'w-0 bg-transparent'}`}
                    >Client</Link>
                    <Link 
                        to="/clients/new"
                        className={`text-gray-50 block mt-2 py-2 px-8 text-xl hover:text-gray-300 duration-300 transition-all ${location.pathname === '/clients/new' ? 'bg-neutral-800 rounded-r-3xl w-2/5 md:w-4/5' : 'w-48 bg-transparent'}`}
                    >New Client</Link>
                </nav>
            </div>
            <div className='md:w-10/12 p-10 bg-zinc-800 min-h-screen'>
            <Outlet />
            </div>
            
        </div>
    )
}

export default Layout
