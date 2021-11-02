import React from 'react'

import LineUpdateQuantity from './LineUpdateQuantity'

export default function Line(props) {
    return (
        <tr>
            <td>{props.row.name}</td> 
            
            <td><LineUpdateQuantity row={props.row} updateLineQuantityHandle={props.updateLineQuantityHandle}/></td> 
            <td>{props.row.price}</td> 

            <td>{props.row.volume*props.row.price}</td>
         
        </tr>
    )
}
