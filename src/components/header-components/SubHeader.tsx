import { Link } from 'react-router-dom';

function SubHeader() {
    console.log('Subheader');
    return (
        <nav className="border-y-2 border-solid  bg-white">
            <ul className="flex flex-col gap-2 md:flex-row md:gap-0 justify-between items-center p-5 font-bold">
                <li className="hover:text-sky-400">
                    <Link to="/">Telefon va gadjetlar</Link>
                </li>
                <li className="hover:text-sky-400">
                    <Link to="/">Maishiy texnika</Link>
                </li>
                <li className="hover:text-sky-400">
                    <Link to="/">Kitoblar</Link>
                </li>
                <li className="hover:text-sky-400">
                    <Link to="/">Televizorlar</Link>
                </li>
                <li className="hover:text-sky-400">
                    <Link to="/">Yangi kelganlar</Link>
                </li>
                <li className="hover:text-sky-400">
                    <Link to="/">Noutbuklar</Link>
                </li>
            </ul>
        </nav>
    );
}
export default SubHeader;
