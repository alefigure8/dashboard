import {Outlet, Link, useLocation} from 'react-router-dom'


const useLayoutButton = (label, link, icon) => {
    const location = useLocation()

    const LayoutButton = ()=> (
        <Link
            to={link}
            className={ `text-gray-50 flex items-center mt-2 py-1 px-5 text-base hover:bg-neutral-800 hover:rounded-r-3xl hover:md:w-4/5 hover:w-2/5 duration-300 transition-all ${location.pathname === link ? 'bg-neutral-800 rounded-r-3xl md:w-4/5 w-2/5' : 'w-40 bg-transparent'}`}
        >
            <i className={`${icon} text-lg mx-2`}></i> 
            {label}
        </Link>
    )

    return [LayoutButton]
}

export default useLayoutButton
