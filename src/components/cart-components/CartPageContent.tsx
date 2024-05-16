import { useEffect, useState } from 'react';
import CartProductCard from './CartProductCard';
import CartAside from './CartAside';
import InstallmentCard from '../product-components/InstallmentCard';

function CartPageContent({ products }) {
    const [paymentMode, setPaymentMode] = useState('standard');
    const [totalPrice, setTotalPrice] = useState(0);
    const activeBtn = 'p-3 bg-sky-400 rounded-xl text-white';

    function handlePaymentBtnClick(mode) {
        setPaymentMode(mode);
    }
    useEffect(() => {
        const priceSum = products.reduce(
            (accumulator, item) => item.price + accumulator,
            0
        );
        setTotalPrice(priceSum);
    }, []);
    return (
        <>
            <div className="flex gap-2 ml-2 mb-2">
                <button
                    type="button"
                    className={`${paymentMode === 'standard' && activeBtn}`}
                    onClick={() => handlePaymentBtnClick('standard')}
                >
                    Standard Shopping
                </button>
                <button
                    type="button"
                    className={`${paymentMode === 'installment' && activeBtn}`}
                    onClick={() => handlePaymentBtnClick('installment')}
                >
                    Installment
                </button>
            </div>
            <div className="flex justify-around rounded-xl ">
                <div className="w-3/4">
                    {products.map((item) => (
                        <li className="list-none" key={item.title}>
                            <CartProductCard
                                item={item}
                                onTotalPriceChange={setTotalPrice}
                            />
                        </li>
                    ))}
                </div>
                {paymentMode === 'standard' && <CartAside total={totalPrice} />}
                {paymentMode === 'installment' && (
                    <InstallmentCard price={totalPrice} />
                )}
            </div>
        </>
    );
}
export default CartPageContent;
