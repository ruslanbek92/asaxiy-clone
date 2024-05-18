import { getCategories } from '../util/category';
import useReactQuery from '../hooks/useReactQuery';

function Products() {
    console.log('Products');
    const content = useReactQuery(
        {
            queryKey: ['categories'],
            queryFn: getCategories,
        },
        'getProductsCategories'
    );
    return content;
}
export default Products;
