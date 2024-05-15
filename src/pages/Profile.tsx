import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import { useParams } from 'react-router';
import { auth } from '../firebase';
import ProfileComponent from '../components/profile-components/ProfileComponent';

const Profile = () => {
    console.log('Profile');
    const [isLogged, setIsLogged] = useState();
    const params = useParams();
    onAuthStateChanged(auth, (currentUser) => {
        if (!currentUser) {
            setIsLogged(false);
        } else {
            setIsLogged(true);
        }
    });

    let content = '';
    if (isLogged) {
        content = <ProfileComponent id={params.userId} />;
    } else {
        content = <p>You are not logged in </p>;
    }
    return content;
};
export default Profile;
