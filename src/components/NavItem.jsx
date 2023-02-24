import { NavLink } from "react-router-dom"

export const NavItem = ({ to, text }) => {
    const activeClassName = 'font-bold text-secondary-700 border-b-2 border-transparent hover:border-neutral-700 leading-tight'
    const inActiveClassName = 'text-secondary-700 border-b-2 border-transparent hover:border-neutral-700 leading-tight'
    return (
        <li>
            <NavLink className={({ isActive }) =>
                (isActive ? activeClassName : inActiveClassName)} to={to}>
                {text}
            </NavLink>
        </li>
    )
}
