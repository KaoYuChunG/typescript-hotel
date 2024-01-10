import { Outlet } from 'react-router-dom'
import NavBar from './views/nav/Navbar.tsx'

function App() {
    return (
        <>
            <NavBar />
            < Outlet />
        </>
    )
}

export default App

