import { useRef, useState } from 'react';

function ImagePicker({ id }) {
    const [pickedImage, setPickedImage] = useState();
    const pickerRef = useRef();

    function handleClick() {
        pickerRef.current.click();
    }
    function handleChange(e) {
        const file = e.target.files[0];
        if (!file) {
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    }

    function handleCancelClick(e) {
        e.stopPropagation();
        setPickedImage(null);
    }
    return (
        <div className="basis-1/6">
            <label htmlFor={id} className="hidden">
                <input
                    ref={pickerRef}
                    type="file"
                    name="image"
                    id={id}
                    onChange={handleChange}
                    accept="image/png, image/jpeg"
                />
            </label>
            <button
                type="button"
                onClick={handleClick}
                className="border border-dotted rounded border-gray-500 w-full h-30 font-bold text-2xl text-gray-500"
            >
                {pickedImage ? (
                    <div className="position: relative">
                        <img
                            src={pickedImage}
                            className="w-full h-auto"
                            alt=""
                        />
                        <button
                            type="button"
                            onClick={handleCancelClick}
                            className="position: absolute top-1 left-1 text-white px-3  pb-1 bg-red-500 rounded-full"
                        >
                            &times;
                        </button>
                    </div>
                ) : (
                    <span>+</span>
                )}
            </button>
        </div>
    );
}
export default ImagePicker;
