import React from 'react'

import Line from './../Line/Line'

import "./Basket.css"

export default function BasketView(props) {
    return (
        <div className="basketPage">
        <h1>Votre panier total: {props.totalAmount} &euro;</h1>
        
        <table>
            <thead>
                <tr>
                <th>Product</th>
                <th>Volume</th>
                <th>Price</th>
                <th>Total</th>
                </tr>
            </thead>
            <tbody>
           { 
            props.rows.length > 0 ?
                props.rows.map( 
                    row => 
                        <Line updateLineQuantityHandle={props.updateLineQuantityHandle} key={"basket_"+row.id} row={row} />
                )
            :
                <tr><td>Panier vide :(</td></tr>
            }
           </tbody> 
        </table>
        </div>
    )
}
