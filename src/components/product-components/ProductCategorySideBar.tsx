import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getCategoryDetails } from '../../util/category';
import Subcategories from './Subcategories';

function ProductCategorySideBar() {
    const { productCategory, productSubCategory, thirdLevelCategory } =
        useParams();
    const currentParam =
        thirdLevelCategory || productSubCategory || productCategory;
    const { data, isPending, isError, error } = useQuery({
        queryKey: ['categories', 'details'],
        queryFn: getCategoryDetails,
    });
    let categoryContent;
    if (isPending) {
        categoryContent = <p>Loading...</p>;
    }
    if (isError) {
        categoryContent = <p>Error: {error.message}</p>;
    }
    if (data) {
        if (currentParam === productCategory)
            categoryContent = data[productCategory].length ? (
                <Subcategories categoryArray={data[productCategory]} />
            ) : (
                ''
            );
        if (
            currentParam === productSubCategory &&
            data[productCategory].length !== 0
        ) {
            const category = data[productCategory].find(
                (item) => item.name === productSubCategory
            );
            categoryContent = category.subCategories.length ? (
                <Subcategories categoryArray={category.subCategories} />
            ) : (
                ''
            );
        }
    }
    return (
        <aside className="border-2 border-red-600 w-2/12 p-3">
            {' '}
            {categoryContent}
        </aside>
    );
}
export default ProductCategorySideBar;
