import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Category from '../components/Category';
import { getCategories } from '../util/category';

function Products() {
    console.log('Products');
    const { data, isPending, isError, error } = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories,
    });
    let content;
    if (isPending) {
        content = <p>Loading...</p>;
    }
    if (isError) {
        content = <p>Error: {error.message}</p>;
    }
    if (data) {
        content = (
            <ul className="p-4 list-none">
                {data.map((category) => {
                    return (
                        <li key={category.name}>
                            <Link to={`/product/category/${category.name}`}>
                                <h2 className="font-bold">{category.name}</h2>
                            </Link>
                            <Category
                                image={category.image}
                                category={category}
                            />
                        </li>
                    );
                })}
            </ul>
        );
    }

    return content;
}
export default Products;
