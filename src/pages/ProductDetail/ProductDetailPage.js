import { useState,useEffect } from 'react';
import { useParams } from 'react-router';

import { useRecoilState } from 'recoil';

import { basketItemListState } from '../../states/BasketStates';

import ProductDetail from './components/ProductDetail/ProductDetail';

export default function ProductDetailPage(){

    const [currentProduct,setCurrentProduct] = useState();

    const [basketItemList,setBasketItemList]=useRecoilState(basketItemListState);


    const {id}=useParams();

    const addToBasket=()=>{
        const newBasketItemList=[...basketItemList];

        let isStillInBasket=false;

        for(let basketItemKey in newBasketItemList){
            if(newBasketItemList[basketItemKey].id===currentProduct.id){

                let productToUpdate={...newBasketItemList[basketItemKey]};
                productToUpdate.volume+=1;

                newBasketItemList[basketItemKey]=productToUpdate;

                isStillInBasket=true;
            }
        }

        if(!isStillInBasket){
            let productToAdd=currentProduct;
            productToAdd.volume=1;

            newBasketItemList.push(productToAdd);
        }

        setBasketItemList(newBasketItemList);

    }

    useEffect( ()=>{

        fetch('/API/product/'+id+'.json')
        .then(response=>response.json())
        .then( row=>{
            setCurrentProduct(row);
        })

    },[id]);
 
    return <ProductDetail row={currentProduct} addToBasketHandle={addToBasket}/>
    
}