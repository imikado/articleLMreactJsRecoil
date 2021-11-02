import { Link } from "react-router-dom";

import "./Product.css"

export default function Product(props){

    return (
        <div className="Product" >
            <h2>{props.product.name}</h2>
            <h3>{props.product.brand}</h3>
            <Link to={'/product/'+props.product.id} >Afficher</Link>
        </div>
    );

}