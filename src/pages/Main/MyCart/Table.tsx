import { useCart } from "../../../hooks/useCart"

export function Table(){
    const {cart} = useCart()

    if(cart.length >=  0){
        return true
    }
    return<></>
}