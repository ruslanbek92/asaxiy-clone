import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { deleteDoc, doc } from 'firebase/firestore';
import Button from '../Button';
import queryClient from '../../util/query';
import { auth, firestore } from '../../firebase';

function CartProductCard({ item, onTotalPriceChange }) {
    console.log('CartProductCard');
    const [itemQuantity, setItemQuantity] = useState(1);
    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: async ({ title }) => {
            await deleteDoc(
                doc(
                    firestore,
                    'carts',
                    auth.currentUser?.uid,
                    'products',
                    title
                )
            );
        },
        onSuccess: () => {
            onTotalPriceChange((prev) => prev - item.price);
            queryClient.invalidateQueries({ queryKey: ['cart'] });
        },
    });
    function increaseQuantity() {
        setItemQuantity((prev) => prev + 1);
        onTotalPriceChange((prev) => prev + item.price);
    }
    function decreaseQuantity() {
        if (itemQuantity === 0) return;
        setItemQuantity((prev) => prev - 1);
        onTotalPriceChange((prev) => prev - item.price);
    }
    function handleDelete(title) {
        console.log('handle delete');
        mutate({ title });
    }
    const installmentPrice = item.price / 12;
    return (
        <div className="p-10 bg-white rounded-xl mb-2">
            <div className="flex justify-between mb-2">
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
                    <p className="font-bold text-blue-500">
                        {item.price} soums
                    </p>
                    <p className="border-2 border-orange-500 rounded-md mt-2 p-1 text-orange-500 font-bold w-fit">
                        {installmentPrice} soums x 12 month
                    </p>
                </div>
            </div>
            {isError && `ERROR${error.message}`}
            <Button
                onClick={() => handleDelete(item.title)}
                disabled={isPending}
            >
                {isPending ? 'deleting' : 'Delete'}
            </Button>
        </div>
    );
}
export default CartProductCard;
