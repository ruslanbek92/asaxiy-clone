import { useParams } from 'react-router';
import { doc, getDoc } from 'firebase/firestore';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import ProductCategorySideBar from '../components/product-components/ProductCategorySideBar';
import { firestore } from '../firebase';
import ProductCard from '../components/product-components/ProductCard';

function ProductCategory() {
    const { productCategory } = useParams();
    async function getDocument() {
        const docRef = doc(firestore, 'products', productCategory);
        const document = await getDoc(docRef);
        // console.log("get doc data",document.data());
        return document.data();
    }
    const { data, isPending, isError, error } = useQuery({
        queryKey: ['categories', 'details', productCategory],
        queryFn: getDocument,
    });
    let content;
    if (isPending) {
        content = <p>Loading...</p>;
    }
    if (isError) {
        content = <p>Error: {error.message}</p>;
    }
    if (data) {
        // console.log("data", data)
        content = (
            <ul className="flex flex-wrap justify-between gap-y-6">
                {data.items.map((item) => {
                    // console.log("item", item)
                    return (
                        <li key={item.title} className="w-[23%] h-48">
                            <Link to={`/product/detail/${item.title}`}>
                                <ProductCard item={item} />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        );
    }
    return (
        <div className="flex justify-between">
            <ProductCategorySideBar />
            <section className="border-2 border-green-600 w-9/12">
                <p className="font-bold mb-4">{productCategory}</p>
                {content}
            </section>
        </div>
    );
}

export default ProductCategory;
