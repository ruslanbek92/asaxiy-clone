import { auth } from '../firebase';
import { getCart } from '../util/cart';
import useReactQuery from '../hooks/useReactQuery';

function Cart() {
    console.log('Cart');
    const content = useReactQuery(
        {
            queryKey: ['cart'],
            queryFn: () => getCart(auth.currentUser.uid),
        },
        'getCart'
    );
    return (
        <div>
            <h3 className="font-bold">Cart</h3>
            {content}
        </div>
    );
}

export default Cart;
