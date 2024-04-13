import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import CategoriesSideBar from './CategoriesSideBar';
import { getCategoryDetails } from '../../util';

function Categories() {
    const [content, setContent] = useState('books');
    const handleMouseEnter = (title) => {
        setContent(title);
    };

    const handleMouseLeave = (title) => {
        setContent(title);
    };

    const { data, isPending, isError, error } = useQuery({
        queryKey: ['details'],
        queryFn: getCategoryDetails,
    });
    let detailsContent;
    if (isPending) {
        detailsContent = 'Loading...';
    }
    if (isError) {
        detailsContent = `Error${error.message}`;
    }
    if (data) {
        detailsContent = data[content].map((item) => {
            return (
                <ul key={item.name} className="lg:basis-1/5 basis-1/3">
                    <Link to={item.link} className="hover:text-sky-400">
                        <h3 className="font-bold mb-1">{item.name}</h3>
                    </Link>
                    {item.subCategories &&
                        item.subCategories.map((category) => {
                            return (
                                <li className="mb-1" key={category.name}>
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
        });
    }
    return (
        <div className="position: absolute top-0 bottom-0 right-0 left-0 flex h-full  bg-white">
            <CategoriesSideBar
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
            <div className="flex gap-4 justify-between p-6 w-9/12 flex-wrap overflow-y-scroll">
                {detailsContent}
            </div>
        </div>
    );
}
export default Categories;
