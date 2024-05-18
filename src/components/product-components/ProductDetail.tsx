import { collection, getDocs } from 'firebase/firestore';
import { useParams } from 'react-router';
import { firestore } from '../../firebase';
import useReactQuery from '../../hooks/useReactQuery';

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
    const content = useReactQuery(
        {
            queryKey: [productDetail],
            queryFn: getProductItem,
        },
        'getProductItem'
    );

    return <div>{content}</div>;
}

export default ProductDetail;
