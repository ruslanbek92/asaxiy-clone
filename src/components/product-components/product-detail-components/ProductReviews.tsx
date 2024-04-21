import { useRef, useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import ProductReview from './ProductReview';

function ProductReviews({ reviews, item }) {
    const [ratingStars, setRatingStars] = useState(5);
    let rating = ratingStars;
    const stars = [
        <FaStar style={{ width: '50px', height: 'auto' }} />,
        <FaStar style={{ width: '50px', height: 'auto' }} />,
        <FaStar style={{ width: '50px', height: 'auto' }} />,
        <FaStar style={{ width: '50px', height: 'auto' }} />,
        <FaStar style={{ width: '50px', height: 'auto' }} />,
    ];
    const dialoRef = useRef();

    function handleAddReview() {
        dialoRef.current.showModal();
    }
    function handleCloseClick() {
        dialoRef.current.close();
    }
    function handleStarClick(index) {
        setRatingStars(index);
    }
    return (
        <div className="p-4 bg-white rounded-2xl mt-11">
            <h3 className="font-bold text-5xl">Reviews</h3>
            {reviews.map((review) => (
                <ProductReview review={review} />
            ))}
            <button
                type="button"
                className="block p-4 bg-orange-500 rounded m-auto mt-4 text-white"
                onClick={handleAddReview}
            >
                Leave a review
            </button>
            <dialog ref={dialoRef} className="p-3">
                <h3 className="font-bold text-2xl text-center">
                    Leave a review about {item.title}{' '}
                </h3>
                <div className="flex justify-center gap-2">
                    {stars.map((star, index) => {
                        if (rating) {
                            rating -= 1;
                            return (
                                <button
                                    type="button"
                                    onClick={() => handleStarClick(index + 1)}
                                >
                                    <FaStar
                                        style={{
                                            fill: 'orange',
                                            width: '50px',
                                            height: 'auto',
                                        }}
                                    />
                                </button>
                            );
                        }
                        return (
                            <button
                                type="button"
                                onClick={() => handleStarClick(index + 1)}
                            >
                                {star}
                            </button>
                        );
                    })}
                </div>
                <form action="">
                    {/* <label htmlFor="comment">Comment</label> */}
                    <textarea
                        name=""
                        id="comment"
                        required
                        className="block w-full border border-gray-400 resize-none"
                    />
                    <label htmlFor="img1">
                        <input type="file" name="" id="img1" />
                    </label>
                    <label htmlFor="img2">
                        <input type="file" name="" id="img2" />
                    </label>

                    <label htmlFor="img3">
                        <input type="file" name="" id="img3" />
                    </label>
                    <label htmlFor="img4">
                        <input type="file" name="" id="img4" />
                    </label>

                    <label htmlFor="img5">
                        <input type="file" name="" id="img5" />
                    </label>
                </form>

                <button type="button" onClick={handleCloseClick}>
                    close
                </button>
            </dialog>
        </div>
    );
}
export default ProductReviews;
