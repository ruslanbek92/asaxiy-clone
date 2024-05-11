import { useState } from 'react';
import { useParams } from 'react-router';
import PersonalProper from './PersonalProper';
import PersonalEdit from './PersonalEdit';

const Personal = () => {
    const { userId } = useParams();

    const [mode, setMode] = useState('edited');

    let content = '';
    if (mode === 'edited') {
        content = <PersonalProper onModeChange={setMode} id={userId} />;
    } else {
        content = <PersonalEdit id={userId} onModeChange={setMode} />;
    }

    return content;
};
export default Personal;
