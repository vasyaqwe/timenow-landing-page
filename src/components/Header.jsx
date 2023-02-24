import { Navbar } from './Navbar'
import logo from '../assets/logo.svg'
import { useState } from 'react'

export const Header = () => {
    const [navOpen, setNavOpen] = useState(false)

    return (
        <header className="pt-8 md:pt-10">
            <div className="container px-4 mx-auto flex justify-between gap-12">
                <img src={logo} alt="TimeNow logo" />
                <Navbar open={navOpen} />
                <button onClick={() => setNavOpen(prev => !prev)} className="sm:hidden bg-[url('./assets/menu.svg')] bg-no-repeat w-8">
                    <span className="sr-only">Menu</span>
                </button>
            </div>
        </header>
    )
}
