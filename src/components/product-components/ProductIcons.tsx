import { useContext } from 'react';
import { FaBalanceScale, FaRegHeart } from 'react-icons/fa';
import { HeaderContext } from '../../header-context';

function ProductIcons({ item }) {
    console.log('HeaderContextProvider');
    const { favorites } = useContext(HeaderContext);
    const isFavorite = !!favorites.items.find(
        (element) => element.title === item.title
    );
    const handleFavroiteClick = (e) => {
        e.preventDefault();
        favorites.addItem(item);
    };
    return (
        <div className="position: absolute top-2 right-2">
            <FaRegHeart
                style={{ fill: isFavorite ? 'red' : 'gray', cursor: 'pointer' }}
                onClick={handleFavroiteClick}
            />
            <FaBalanceScale style={{ color: 'gray', cursor: 'pointer' }} />
        </div>
    );
}
export default ProductIcons;
