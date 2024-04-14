import { useParams } from 'react-router';
import { doc, getDoc } from 'firebase/firestore';
import { useQuery } from '@tanstack/react-query';
import ProductCategorySideBar from '../components/ProductCategorySideBar';
import { firestore } from '../firebase';

function ProductCategory() {
    const { productCategory } = useParams();
    // const productType = productCategory;
    async function getDocuement() {
        const docRef = doc(firestore, 'products', productCategory);
        const document = await getDoc(docRef);
        console.log('Product data', document.data());
        return document.data();
    }
    const { data, isPending, isError, error } = useQuery({
        queryKey: ['categories', 'details', productCategory],
        queryFn: getDocuement,
    });
    let content;
    if (isPending) {
        content = <p>Loading...</p>;
    }
    if (isError) {
        content = <p>Error: {error.message}</p>;
    }
    if (data) {
        content = data.items.map((item) => {
            return (
                <ul>
                    <li key={item.title}>
                        Item:{item.title}, description: {item.description},
                        price:{item.price}, quantity:{item.quantity}
                    </li>
                </ul>
            );
        });
    }
    return (
        <div className="flex justify-between">
            <ProductCategorySideBar />
            <section className="border-2 border-green-600 w-9/12">
                {content}
            </section>
        </div>
    );
}

export default ProductCategory;
