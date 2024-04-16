import { Link } from 'react-router-dom';

function Subcategories({ categoryArray }) {
    return (
        <ul>
            <h2 className="font-bold uppercase border-b-2 border-gray-500 pb-5">
                Subcategories
            </h2>
            {categoryArray.map((item) => {
                return (
                    <li key={item.name} className="mt-3">
                        <Link to={`${item.link}`}>{item.name}</Link>
                    </li>
                );
            })}
        </ul>
    );
}
export default Subcategories;
