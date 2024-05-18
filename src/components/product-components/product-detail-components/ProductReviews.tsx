/* eslint-disable import/no-cycle */
import { useRef } from 'react';
import { collection, doc, getDoc } from 'firebase/firestore';
import Modal from '../../Modal';
import { firestore } from '../../../firebase';
import ReviewForm from './ReviewForm';
import useReactQuery from '../../../hooks/useReactQuery';

function ProductReviews({ item }) {
    const dialogRef = useRef();
    function handleAddReview() {
        dialogRef.current.openDialog();
    }

    async function getProductReview() {
        const categoryDetailCollectionRef = collection(firestore, 'reviews');
        const docRef = doc(categoryDetailCollectionRef, item.title);
        const productReview = await getDoc(docRef);
        return productReview.data();
    }
    const content = useReactQuery(
        {
            queryKey: ['reviews'],
            queryFn: getProductReview,
        },
        'getProductReview'
    );
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
            <Modal ref={dialogRef}>
                <ReviewForm item={item} />
            </Modal>
        </div>
    );
}
export default ProductReviews;
