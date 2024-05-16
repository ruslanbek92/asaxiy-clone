import { useMutation } from '@tanstack/react-query';
import { addProductToCart } from '../util/cart';
import { auth } from '../firebase';

export default function useAddToCart(item) {
    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: ({ productItem }) =>
            addProductToCart(productItem, auth.currentUser.uid),
        onSuccess: () => {
            alert('added');
        },
    });
    async function handleAddToCart(e) {
        e.preventDefault();
        mutate({ productItem: item });
    }

    return { isPending, isError, error, handleAddToCart };
}
