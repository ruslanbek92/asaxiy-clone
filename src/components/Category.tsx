import { Link } from 'react-router-dom';
import CATEGORY_DETAILS from '../data/category-details';

function Category({ image, category }) {
    return (
        <div className="flex justify-between items-center m-4 p-4 rounded bg-white">
            <div className="flex justify-between gap-2 flex-wrap lg:basis-6/12 basis-full">
                {CATEGORY_DETAILS[category.name].map((item) => {
                    return (
                        <li
                            className="w-full text-center sm:text-left sm:w-5/12 md:w-3/12"
                            key={item.name}
                        >
                            <Link to={item.link}>{item.name}</Link>
                        </li>
                    );
                })}
            </div>
            <img
                src={image}
                alt=""
                className="hidden lg:block w-3/12 h-auto "
            />
        </div>
    );
}
export default Category;
