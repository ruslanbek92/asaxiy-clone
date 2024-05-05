import { useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { collection, doc, getDoc } from 'firebase/firestore';
import ProductReview from './ProductReview';
import Modal from './Modal';
import { firestore } from '../../../firebase';

function ProductReviews({ item }) {
    const dialogRef = useRef();
    function handleAddReview() {
        dialogRef.current.openDialog();
    }

    async function getProductReview() {
        console.log('getProductREview');
        const categoryDetailCollectionRef = collection(firestore, 'reviews');
        const docRef = doc(categoryDetailCollectionRef, item.title);
        const productReview = await getDoc(docRef);
        return productReview.data();
    }
    const { data, isPending, isError, error } = useQuery({
        queryKey: ['reviews'],
        queryFn: getProductReview,
    });
    let content;
    if (isPending) {
        content = 'Loading reviews...';
    }
    if (isError) {
        content = `Error in loading reviews${error.message}`;
    }
    if (data) {
        content = data.reviewSet.map((review) => (
            <ProductReview review={review} />
        ));
    }
    return (
        <div className="p-4 bg-white rounded-2xl mt-11">
            <h3 className="font-bold text-5xl">Reviews</h3>
            {content}
            <button
                type="button"
                className="block p-4 bg-orange-500 rounded m-auto mt-4 text-white"
                onClick={handleAddReview}
            >
                Leave a review
            </button>
            <Modal item={item} ref={dialogRef} />
        </div>
    );
}
export default ProductReviews;
