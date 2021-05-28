
import ProductsContainer from "../containers/ProductsContainer";
import CartContainer from "../containers/CartContainer"

export const routes= [ 
    {
        path : "/" ,
        component : ProductsContainer,
        exact : true 
    },
    {
        path:"/home",
        component: ProductsContainer,
        exact : true
    },
    {
        path:"/cart",
        component: CartContainer,
        exact : true
    }
]