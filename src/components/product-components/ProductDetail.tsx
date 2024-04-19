import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';

import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../firebase';
import ProductTopInfo from './ProductTopInfo';

function ProductDetail() {
    const { productDetail } = useParams();
    async function getProductItem() {
        const productsCollectionRef = collection(firestore, 'products');
        const data = await getDocs(productsCollectionRef);
        const filteredData = data.docs.map((category) => category.data());
        let productItem;

        // eslint-disable-next-line no-restricted-syntax
        for (const obj of filteredData) {
            const category = obj.items;
            const item = category.find(
                (element) => element.title === productDetail
            );
            if (item) {
                productItem = item;
            }
        }
        return productItem;
    }
    const { data, isPending, isError, error } = useQuery({
        queryKey: [productDetail],
        queryFn: getProductItem,
    });
    let content;
    if (isPending) {
        content = <p>Loading...</p>;
    }
    if (isError) {
        content = <p>Error: {error.message}</p>;
    }
    if (data) {
        content = <ProductTopInfo item={data} />;
    }
    return <div>{content}</div>;
}
export default ProductDetail;
