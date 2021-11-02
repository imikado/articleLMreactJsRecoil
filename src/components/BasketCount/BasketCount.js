import {useRecoilValue} from 'recoil';

import {getBasketCount}  from "../../states/BasketStates";

import "./BasketCount.css"

export default function BasketCount(){

    const basketCountValue = useRecoilValue(getBasketCount);

    return <div className="basketCount">

        Panier <sup>({basketCountValue})</sup>
    </div>
}