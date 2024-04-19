import { useState } from 'react';
import ProductIcons from './ProductIcons';

function SliderComponent({ item }) {
    const [imageState, setImageState] = useState(item.images[0]);
    function handleimgClick(img) {
        setImageState(img);
    }
    return (
        <div className="flex flex-col-reverse items-center md:flex-row gap-14 p-3 w-full md:w-2/5 border-2 border-blue-500 position: relative">
            <ProductIcons item={item} />
            <div className="w-3/12  md:w-1/12 flex flex-row items-center md:flex-col gap-6">
                {item.images.map((image) => (
                    <button type="button" onClick={() => handleimgClick(image)}>
                        <img
                            className="w-4/12 md:w-full rounded-xl cursor-pointer"
                            alt=""
                            src={image}
                        />
                    </button>
                ))}
            </div>
            <div className="w-3/5 rounded-2xl overflow-hidden">
                <img src={imageState} alt="" className="w-full " />
            </div>
        </div>
    );
}

export default SliderComponent;
