import { useState } from 'react';
import { Link } from 'react-router-dom';
import  CategoriesSideBar  from './CategoriesSideBar';
import CATEGORY_DETAILS from '../data/category-details';

function Categories() {
    const [content, setContent] = useState('Books');
    const handleMouseEnter = (title) => {
        setContent(title);
    };

    const handleMouseLeave = (title) => {
        setContent(title);
    };

    return (
        <div className="position: absolute top-0 bottom-0 right-0 left-0 flex h-full  bg-white">
            <CategoriesSideBar
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
            <div className="flex gap-4 justify-between p-6 w-9/12 flex-wrap overflow-y-scroll">
                {CATEGORY_DETAILS[content].map((item) => {
                    return (
                        <ul key={item.name} className="lg:basis-1/5 basis-1/3">
                            <Link to={item.link} className="hover:text-sky-400">
                                <h3 className="font-bold mb-1">{item.name}</h3>
                            </Link>
                            {item.subCategories &&
                                item.subCategories.map((category) => {
                                    return (
                                        <li
                                            className="mb-1"
                                            key={category.name}
                                        >
                                            <Link
                                                to={category.link}
                                                className="hover:text-sky-400"
                                            >
                                                {category.name}
                                            </Link>
                                        </li>
                                    );
                                })}
                        </ul>
                    );
                })}
            </div>
        </div>
    );
}
export default Categories;
