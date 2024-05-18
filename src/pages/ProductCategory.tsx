import { useParams } from 'react-router';
import ProductCategorySideBar from '../components/product-components/ProductCategorySideBar';
import { getDocument } from '../util/products';
import useReactQuery from '../hooks/useReactQuery';

function ProductCategory() {
    console.log('ProductCategory');
    const { productCategory } = useParams();
    const content = useReactQuery(
        {
            queryKey: ['categories', 'details', productCategory],
            queryFn: () => getDocument(productCategory),
        },
        'getDocument'
    );
    return (
        <div className="flex justify-between">
            <ProductCategorySideBar />
            <section className="w-9/12">
                <p className="font-bold mb-4">{productCategory}</p>
                {content}
            </section>
        </div>
    );
}

export default ProductCategory;
