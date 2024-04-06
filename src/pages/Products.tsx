import Category from '../components/Category';
import categories from '../data/categories';

function Products() {
    return (
        <ul className="p-4 list-none">
            {categories.map((category) => {
                return (
                    <li key={category.name}>
                        <h2 className="font-bold">{category.name}</h2>
                        <Category image={category.image} category={category} />
                    </li>
                );
            })}
        </ul>
    );
}
export default Products;
