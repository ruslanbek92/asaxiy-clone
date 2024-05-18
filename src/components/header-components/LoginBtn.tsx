import { useEffect, useRef, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { auth } from '../../firebase';

function LoginBtn() {
    const [user, setUser] = useState(null);
    const dialogRef = useRef();
    const navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                dialogRef.current.closeDialog();
            }

            if (!currentUser) {
                setUser(null);
            }
        });
    }, []);
    function handleClick() {
        if (user) {
            signOut(auth);
            return;
        }
        navigate('/registration');
    }

    return (
        <button
            className=" flex-col items-center hidden xl:flex"
            type="button"
            onClick={handleClick}
        >
            <CgProfile className="w-6 h-auto" />
            {user && 'Log out'}
            {!user && 'Log in'}
        </button>
    );
}

export default LoginBtn;
