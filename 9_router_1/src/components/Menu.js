import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Menu() {
    return (
        <nav class="menu">
            <NavLink to="/" className="menu__item" activeClassName="menu__item-active" exact>Главная</NavLink>
            <NavLink to="/drift" className="menu__item" activeClassName="menu__item-active" >Дрифт-такси</NavLink>
            <NavLink to="/timeattack" className="menu__item" activeClassName="menu__item-active" >Time Attack</NavLink>
            <NavLink to="/forza" className="menu__item" activeClassName="menu__item-active" >Forza Karting</NavLink>            
        </nav>
    )
}