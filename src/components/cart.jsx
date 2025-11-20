import { useSelector } from "react-redux"
import { getItemsSelector } from "../redux/slices/cart-slice"

function Cart() {
    const items = useSelector(getItemsSelector)
    const totalPrice = items.reduce((a, b) => a + b.price, 0)

    return (
        <div style={{ width: "100%", backgroundColor: "black", color: "white", padding: "1px 10px" }}>
            <h2>Total Items: {items.length}, Bill: ${totalPrice}</h2>
        </div>
    )
}

export default Cart