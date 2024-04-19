import InstallmentCard from './InstallmentCard';
import SliderComponent from './SliderComponent';

function ProductTopInfo({ item }) {
    return (
        <div className="flex flex-col items-center md:flex-row  border-1 border-transparent my-44 border-2 border-red-500">
            <SliderComponent item={item} />
            <div className="p-4 w-full md:w-2/5 border-2 border-green-500 text-center md:text-left">
                <h3 className="font-bold">{item.title}</h3>
                <p className="font-bold text-4xl text-orange-500">
                    {item.price} soums
                </p>
                <p>Brand:</p>
                <p>Model:</p>
                <p>Quantity:{item.quantity}</p>
                <div className="flex justify-center md:justify-start gap-3">
                    <button
                        type="button"
                        className="py-2 px-6 bg-emerald-300 rounded"
                    >
                        Add to cart
                    </button>
                    <button
                        type="button"
                        className="py-2 px-6 rounded border-2 border-sky-400"
                    >
                        Buy now
                    </button>
                </div>
            </div>
            <InstallmentCard price={12567435} />
        </div>
    );
}

export default ProductTopInfo;
