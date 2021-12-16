import {Outlet} from 'react-router-dom'


const InitSession = () => {
    return (
        <div>
            <h1>Desde Inicia Sesión</h1>
            <Outlet />
        </div>
    )
}

export default InitSession
