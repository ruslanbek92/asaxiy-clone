import ProductIcons from './ProductIcons';

function ProductCard({ item }) {
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
                        type="button"
                        className="bg-green-300 py-1 px-3 rounded"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
