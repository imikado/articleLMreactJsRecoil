import React from 'react'


export default function ButtonAdd(props) {


    return (
        <button onClick={()=> props.onClickHandle()}>
            Ajouter au panier
        </button>
    )
}
