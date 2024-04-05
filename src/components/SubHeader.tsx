import { Link } from 'react-router-dom';

function SubHeader() {
    return (
        <nav className="border-y-2 border-solid  bg-white">
            <ul className="flex flex-col gap-2 md:flex-row md:gap-0 justify-between items-center p-5 font-bold">
                <li>
                    <Link to="/">Telefon va gadjetlar</Link>
                </li>
                <li>
                    <Link to="/">Maishiy texnika</Link>
                </li>
                <li>
                    <Link to="/">Kitoblar</Link>
                </li>
                <li>
                    <Link to="/">Televizorlar</Link>
                </li>
                <li>
                    <Link to="/">Yangi kelganlar</Link>
                </li>
                <li>
                    <Link to="/">Noutbuklar</Link>
                </li>
            </ul>
        </nav>
    );
}
export default SubHeader;
