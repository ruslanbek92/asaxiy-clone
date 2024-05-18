import { getCategories } from '../../util/category';
import useReactQuery from '../../hooks/useReactQuery';

function CategoriesSideBar({ onMouseEnter, onMouseLeave }) {
    const content = useReactQuery(
        {
            queryKey: ['categories'],
            queryFn: getCategories,
        },
        'getCategories',
        null,
        [onMouseEnter, onMouseLeave]
    );
    return (
        <aside
            className="p-4 w-4/12 border-2
         border-r-gray-300 text-gray-500 text-xl 
         overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
        >
            {content}
        </aside>
    );
}

export default CategoriesSideBar;
