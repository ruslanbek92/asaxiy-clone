import { useMutation } from '@tanstack/react-query';
import ProductIcons from './ProductIcons';
import { addProductToCart } from '../../util/cart';
import { auth } from '../../firebase';

function ProductCard({ item }) {
    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: ({ productItem }) =>
            addProductToCart(productItem, auth.currentUser.uid),
        onSuccess: () => {
            alert('added');
        },
    });
    async function handleAddToCart() {
        mutate({ item: productItem });
    }
    return (
        <div className="flex flex-col gap-3  bg-white p-2 rounded-3xl overflow-hidden position: relative">
            <ProductIcons item={item} />
            <div className="h-20">
                <img src={item.images[0]} alt="" className="h-full w-full" />
            </div>
            <div>
                <h4 className="hover:text-sky-400 font-bold">{item.title} </h4>
                <p className="font-bold text-sky-600">{item.price} sum</p>
                <div className="flex justify-between">
                    <button
                        type="button"
                        className="bg-sky-400 py-1 px-3 rounded"
                    >
                        Buy now
                    </button>
                    <button
                        onClick={handleAddToCart}
                        type="button"
                        className="bg-green-300 py-1 px-3 rounded"
                    >
                        {isPending ? 'Adding' : 'Add'}
                        {isError && error.message}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
