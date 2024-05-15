import { useQuery } from '@tanstack/react-query';
import { auth } from '../firebase';
import { getCart } from '../util/cart';
import { CartPageContent } from '../components/cart-components/CartPageContent';

function Cart() {
    console.log('Cart');
    const { data, isPending, isError, error } = useQuery({
        queryKey: ['cart'],
        queryFn: () => getCart(auth.currentUser.uid),
    });
    let content = '';
    if (isPending) {
        content = 'Getting cart details';
    }
    if (isError) {
        content = `Error: ${error.message}`;
    }

    if (data) {
        if (data.length !== 0) {
            content = <CartPageContent products={data} />;
        } else content = 'Cart is empty yet';
    }
    return (
        <div>
            <h3 className="font-bold">Cart</h3>
            {content}
        </div>
    );
}

export default Cart;
