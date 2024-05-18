import { useState } from 'react';
import CategoriesSideBar from './CategoriesSideBar';
import { getCategoryDetails } from '../../util/category';
import useReactQuery from '../../hooks/useReactQuery';

function Categories() {
    console.log('Categories');
    const [content, setContent] = useState('books');
    const handleMouseEnter = (title) => {
        setContent(title);
    };

    const handleMouseLeave = (title) => {
        setContent(title);
    };
    const detailsContent = useReactQuery(
        {
            queryKey: ['details'],
            queryFn: getCategoryDetails,
        },
        'getCategoryDetails',
        content
    );
    return (
        <div
            className="position: absolute 
        top-0 bottom-0 right-0 left-0 flex h-full  bg-white"
        >
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
