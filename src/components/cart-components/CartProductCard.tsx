import { useState } from 'react';

function CartProductCard({ item, onTotalPriceChange }) {
    console.log('CartProductCard');
    const [itemQuantity, setItemQuantity] = useState(1);
    function increaseQuantity() {
        setItemQuantity((prev) => prev + 1);
        onTotalPriceChange((prev) => prev + item.price);
    }
    function decreaseQuantity() {
        if (itemQuantity === 0) return;
        setItemQuantity((prev) => prev - 1);
        onTotalPriceChange((prev) => prev - item.price);
    }
    const installmentPrice = item.price / 12;
    return (
        <div className="flex justify-between p-10 bg-white rounded-xl mb-2">
            <img src={item.image} alt="" className="w-1/5 h-auto" />
            <div className="w-1/5">
                <h3 className="font-bold">{item.title}</h3>
            </div>
            <div className="w-1/5 flex justify-between items-start">
                <button
                    type="button"
                    onClick={decreaseQuantity}
                    className="py-2 px-4 border-2 border-blue-400 rounded-full"
                >
                    -
                </button>
                <p className="mt-3">{itemQuantity}</p>
                <button
                    onClick={increaseQuantity}
                    className="py-2 px-4 border-2 border-blue-400 rounded-full"
                    type="button"
                >
                    +
                </button>
            </div>
            <div className="w-1/5">
                <p className="font-bold text-blue-500">{item.price} soums</p>
                <p className="border-2 border-orange-500 rounded-md mt-2 p-1 text-orange-500 font-bold w-fit">
                    {installmentPrice} soums x 12 month
                </p>
            </div>
        </div>
    );
}
export default CartProductCard;
