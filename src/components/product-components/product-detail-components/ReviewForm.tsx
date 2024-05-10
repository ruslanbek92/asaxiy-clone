import { useMutation } from '@tanstack/react-query';
import { FaStar } from 'react-icons/fa6';
import { useRef, useState } from 'react';
import queryClient from '../../../util/query';
import { addReview } from '../../../util/reviews';
import ImagePicker from './ImagePicker';

function ReviewForm({ item }) {
    const [ratingStars, setRatingStars] = useState(5);
    const [isTextValid, setIsTextValid] = useState(true);
    const textarea = useRef();

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: addReview,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['reviews'] });
            dialog.current.close();
        },
    });

    let rating = ratingStars;

    const stars = [
        <FaStar style={{ width: '50px', height: 'auto' }} />,
        <FaStar style={{ width: '50px', height: 'auto' }} />,
        <FaStar style={{ width: '50px', height: 'auto' }} />,
        <FaStar style={{ width: '50px', height: 'auto' }} />,
        <FaStar style={{ width: '50px', height: 'auto' }} />,
    ];
    function handleStarClick(index) {
        setRatingStars(index);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (textarea.current.value === '') {
            setIsTextValid(false);
        } else {
            setIsTextValid(true);
            const fd = new FormData(e.target);
            const data = Object.fromEntries(fd.entries());
            const imageFiles = fd
                .getAll('image')
                .filter((el) => el.name !== '');
            data.rating = ratingStars;
            mutate({
                title: item.title,
                formData: data,
                imageFiles,
            });
            e.target.reset();
        }
    }
    return (
        <div>
            <h3 className="font-bold text-2xl text-center mb-2">
                Leave a review about {item.title}{' '}
            </h3>
            {isPending && 'Sending...'}
            {isError && `Error: ${error.message}`}
            <div className="flex justify-center gap-2 py-1">
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
            <form
                method=""
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}
                noValidate
            >
                <label htmlFor="comment">
                    Comment
                    <textarea
                        name="comment"
                        id="comment"
                        required
                        ref={textarea}
                        className="block w-full border border-gray-400 resize-none mt-1"
                    />
                    {!isTextValid && (
                        <p className="text-red-500">
                            Text area shoould be filled!
                        </p>
                    )}
                </label>
                <fieldset>
                    <legend>Upload photos</legend>
                    <div className="flex justify-between gap-2 mt-1">
                        <ImagePicker id="filepicker1" />
                        <ImagePicker id="filepicker2" />
                        <ImagePicker id="filepicker3" />
                        <ImagePicker id="filepicker4" />
                    </div>
                </fieldset>
                <button
                    type="submit"
                    className="p-4 bg-orange-500 block m-auto rounded text-white"
                >
                    {isPending ? 'Sending...' : 'Send'}
                </button>
            </form>
        </div>
    );
}
export default ReviewForm;
