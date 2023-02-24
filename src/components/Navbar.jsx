import { NavLink } from "react-router-dom"
import { CtaButton } from "./CtaButton"
import { NavItem } from "./NavItem"

export const Navbar = ({ open }) => {

    return (
        <nav className={`flex-1 border-2 border-primary-900 min-w-[300px] absolute 
          left-[50%] top-16 translate-x-[-50%] bg-white shadow-lg rounded-md transition-all duration-300
            ${open ? 'translate-y-0' : 'translate-y-[-150%]'}
            sm:block sm:translate-y-0 sm:translate-x-0 sm:static sm:bg-transparent sm:border-0 sm:shadow-none 
         `}>
            <ul className="flex flex-col items-center gap-8 p-10 sm:flex-row sm:p-0">
                <NavItem to="/" text="Home" />
                <NavItem to="/pricing" text="Pricing" />
                <li className="sm:ml-auto"><CtaButton /></li>
            </ul>

        </nav>
    )
}
