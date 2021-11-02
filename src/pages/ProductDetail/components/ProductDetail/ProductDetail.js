import React from 'react'

import ButtonAdd from './../ButtonAdd/ButtonAdd'

import "./ProductDetail.css"

export default function ProductDetail(props) {

    return ( props.row ? <div className="ProductDetail">

        <h2>{props.row.name} </h2>

        <h3>{props.row.brand}</h3>

        <p>{props.row.description}</p>

        <p className="price">{props.row.price} &euro;</p>

        <p className="basketButton"><ButtonAdd onClickHandle={props.addToBasketHandle} /></p>
         
    </div>
    :
    <div>Loading...</div>)
}
