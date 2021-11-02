import React,{ useState,useEffect } from 'react';

import ProductList from "./components/ProductsList/ProductList";


export default function ProductListPage(){

    const [productList,setProductList]=useState([]);

    useEffect( ()=>{

        fetch('/API/products.json')
        .then((response) => response.json())
        .then((rows) => {
            setProductList(rows);
        })

    },[]);


    return <ProductList rows={productList} />;
}


/* proposition , si vous souhaitez mettre en cache l'appel API

import React,{ useEffect } from 'react';

import ProductList from "./components/ProductsList/ProductList";

import { RecoilState, useRecoilState } from 'recoil';
import { productsListState } from '../../states/ProductsStates';

export default function ProductListPage(){

    const [productList,setProductList]=useRecoilState(productsListState);

    useEffect( ()=>{

        if(productList.length > 0) return;

        fetch('/API/products.json')
        .then((response) => response.json())
        .then((rows) => {
            setProductList(rows);
        })

    },[productList]);


    return <ProductList rows={productList} />;
}


*/
