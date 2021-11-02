import Product from '../Product/Product'

export default function ProductList(props){

    return <div className="Products">

        <h2 >Liste des produits</h2>

        {props.rows.map( (product)=>
            <Product product={product} key={product.id} />
        )}

        
    </div>

}