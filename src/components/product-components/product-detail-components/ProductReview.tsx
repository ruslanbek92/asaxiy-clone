import { FaStar } from 'react-icons/fa6';

function ProductReview({ review }) {
    let { rating } = review;
    const stars = [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />];
    return (
        <div className=" border-b-2 border-red-600">
            <p className="font-bold text-gray-500">{review.author}</p>
            <div className="flex gap-2 items-center">
                <div className="flex">
                    {stars.map((star) => {
                        if (rating) {
                            rating -= 1;
                            return <FaStar style={{ fill: 'red' }} />;
                        }
                        return star;
                    })}
                </div>
                <p>{review.date}</p>
            </div>
            <p>
                {review.review}
                {review.replies.map((item) => (
                    <div className="ml-5">
                        <p>{item.author}</p>
                        <p>{item.reply}</p>
                    </div>
                ))}
            </p>
        </div>
    );
}

export default ProductReview;
