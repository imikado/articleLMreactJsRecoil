import React from "react";
import {NavLink} from "react-router-dom";

import "./Menu.css"

export default function Menu(){
    return <nav>
        <NavLink exact to="/">Accueil</NavLink>
        <NavLink to="/products">Produits</NavLink>
        <NavLink to="/basket">Panier</NavLink>
     </nav>;
}
