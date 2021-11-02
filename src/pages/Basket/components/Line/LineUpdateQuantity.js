import React from 'react'


export default function LineUpdateQuantity(props) {

    const addQuantity=()=>{
      props.updateLineQuantityHandle(props.row.id,props.row.volume+1);
    }
    const subQuantity=()=>{
      props.updateLineQuantityHandle(props.row.id,props.row.volume-1);
    }

    return (
        <>
          <button onClick={subQuantity}>-</button>
            {props.row.volume}
          <button onClick={addQuantity}>+</button>  
        </>
    )
}
