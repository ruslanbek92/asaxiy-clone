import { Link } from 'react-router-dom';
import CATEGORIES from '../data/categories';

function CategoriesSideBar({ onMouseEnter, onMouseLeave }) {
    function handleMouseEnter(name) {
        onMouseEnter(name);
    }
    function handleMouseLeave(name) {
        onMouseLeave(name);
    }
    return (
        <aside
            className="p-4 w-4/12 border-2
         border-r-gray-300 text-gray-500 text-xl 
         overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
        >
            {CATEGORIES.map((item) => {
                return (
                    <li
                        key={item.name}
                        onMouseEnter={() => handleMouseEnter(item.name)}
                        onMouseLeave={() => handleMouseLeave(item.name)}
                        className="py-2 px-4 list-none rounded hover:bg-blue-100 hover:text-sky-400"
                    >
                        <Link
                            to={item.link}
                            className="flex justify-between items-center"
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src={item.icon}
                                    alt=""
                                    className="w-1/12 "
                                />
                                <h3>{item.name}</h3>
                            </div>
                            <span className="font-bold text-2xl">&gt;</span>
                        </Link>
                    </li>
                );
            })}
        </aside>
    );
}

export default CategoriesSideBar;
