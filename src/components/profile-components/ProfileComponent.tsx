import { useState } from 'react';
import ProfileMain from './ProfileMain';
import ProfileSide from './ProfileSide';

function ProfileComponent({ id }) {
    const [link, setLink] = useState('personal');
    function handleLinkChange(newLink) {
        setLink(newLink);
    }
    return (
        <div className="flex justify-between py-10">
            {/* eslint-disable  react/jsx-no-bind */}
            <ProfileSide id={id} onLinkChange={handleLinkChange} link={link} />
            <ProfileMain link={link} />
        </div>
    );
}
export default ProfileComponent;
