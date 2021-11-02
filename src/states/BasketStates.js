import {atom, DefaultValue, selector} from 'recoil';

const localStorageEffect = key => ({setSelf, onSet}) => {  
    const savedValue = localStorage.getItem(key)  
    if (savedValue != null) {    
        setSelf(JSON.parse(savedValue));  
    }
    onSet(newValue => {    
        if (newValue instanceof DefaultValue) {      
            localStorage.removeItem(key);    
        } else {      
            localStorage.setItem(key, JSON.stringify(newValue));    
        }  
    });
};


const basketItemListState= atom({
    key: 'basketItemList',
    default: [],
    effects_UNSTABLE: [    
        localStorageEffect('basketItemList') ,
    ]
})
/*
const updateLineQuantityState=selectorFamily({
    key: 'updateLineQuantityState',
    set:(get,set,productId,quantity) => () => {    
        
        let itemList=get(basketItemListState);

        let newItemList=[...itemList];

        for(let i in itemList){
            if(itemList[i].id===productId){
                let itemToUpdate={...itemList[i]};
                itemToUpdate.volume=quantity;

                newItemList[i]=itemToUpdate;
            }
        }

        set(basketItemListState,newItemList);
        
    },
})*/


const getBasketCount = selector({  
    key: 'getBasketCount', 
    get:({get}) => {    
        let total=0;
        const itemList = get(basketItemListState);
        for(let itemKey in itemList){
            total+=itemList[itemKey].volume;
        }
        return total;  
    },
     
});

const getBasketTotalAmount=selector({

    key: 'getBasketTotalAmount', 
    get:({get}) => {    
        let totalAmount=0;
        const itemList = get(basketItemListState);
        for(let itemKey in itemList){
            totalAmount+=itemList[itemKey].volume*itemList[itemKey].price;
        }
        return totalAmount;  
    },
});



export {basketItemListState,getBasketCount,getBasketTotalAmount};
