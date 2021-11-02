import Basket from "./components/Basket/Basket"

import { basketItemListState,getBasketTotalAmount } from "../../states/BasketStates"

import { useRecoilValue,useRecoilState } from "recoil"


export default function BasketPage(){

    const [basketItemList,setBasketItemList]=useRecoilState(basketItemListState);

    const basketTotalAmount=useRecoilValue(getBasketTotalAmount);

    const updateLineQuantity=(id_,quantity_)=>{

        let newBasketItemList=[];
  
        for(let i in basketItemList){
            if(basketItemList[i].id===id_){
                if(quantity_===0){
                  continue;
                }
  
                let itemToUpdate={...basketItemList[i]};
                itemToUpdate.volume=quantity_;
                newBasketItemList.push(itemToUpdate);
            }
        }
  
        setBasketItemList(newBasketItemList);
  
      }

    return <Basket rows={basketItemList} totalAmount={basketTotalAmount} updateLineQuantityHandle={updateLineQuantity} />
    
}
