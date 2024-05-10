import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { auth } from '../../firebase';

function ProfileSide({ id, onLinkChange, link }) {
    const navigate = useNavigate();
    function handleClick(statusLink) {
        onLinkChange(statusLink);
    }
    async function handleLogout() {
        await signOut(auth);
        navigate('/');
    }
    return (
        <div className="bg-white basis-1/3 ">
            <div className="flex gap-2 border-y-2 border-gray pb-2">
                <img src="" alt="profile" />
                <div>
                    <h4 className="font-bold mb-1">Profile name</h4>
                    <p>ID:{id}</p>
                </div>
            </div>
            <ul className="border-y-2 border-gray pb-2 mb-3">
                <li className={`${link === 'personal' ? 'bg-sky-400' : ''}`}>
                    <button
                        type="button"
                        className="block p-2 w-full text-left"
                        onClick={() => handleClick('personal')}
                    >
                        Personal Data
                    </button>
                </li>
                <li className={`${link === 'elyurt' ? 'bg-sky-400' : ''}`}>
                    <button
                        type="button"
                        className="block p-2 w-full text-left"
                        onClick={() => handleClick('elyurt')}
                    >
                        El yort ishonchi
                    </button>
                </li>
                <li
                    className={`${link === 'transactions' ? 'bg-sky-400' : ''}`}
                >
                    <button
                        type="button"
                        className="block p-2 w-full text-left"
                        onClick={() => handleClick('transactions')}
                    >
                        Transactions
                    </button>
                </li>
                <li className={`${link === 'orders' ? 'bg-sky-400' : ''}`}>
                    <button
                        type="button"
                        className="block p-2 w-full text-left"
                        onClick={() => handleClick('orders')}
                    >
                        Orders
                    </button>
                </li>
                <li
                    className={`${link === 'installments' ? 'bg-sky-400' : ''}`}
                >
                    <button
                        type="button"
                        className="block p-2 w-full text-left"
                        onClick={() => handleClick('installments')}
                    >
                        Installaments
                    </button>
                </li>
                <li className={`${link === 'status' ? 'bg-sky-400' : ''}`}>
                    <button
                        type="button"
                        className="block p-2 w-full text-left"
                        onClick={() => handleClick('status')}
                    >
                        Status
                    </button>
                </li>
                <li className={`${link === 'chat' ? 'bg-sky-400' : ''}`}>
                    <button
                        type="button"
                        className="block p-2 w-full text-left"
                        onClick={() => handleClick('chat')}
                    >
                        Chat
                    </button>
                </li>
                <li className={`${link === 'address' ? 'bg-sky-400' : ''}`}>
                    <button
                        type="button"
                        className={`block p-2 w-full text-left `}
                        onClick={() => handleClick('address')}
                    >
                        My Adress
                    </button>
                </li>
            </ul>
            <button
                type="button"
                className="text-red-500"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
}
export default ProfileSide;
