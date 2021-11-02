import {atom} from 'recoil';



const productsListState= atom({
    key: 'productsListState',
    default: []
})

const currentProductState= atom({
    key: 'currentProductsState',
    default: []
})



export {productsListState,currentProductState};
