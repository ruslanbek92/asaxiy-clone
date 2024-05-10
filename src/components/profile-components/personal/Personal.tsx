import { useState } from 'react';
import { PersonalProper } from './PersonalProper';
import { PersonalEdit } from './PersonalEdit';

const Personal = () => {
    const [mode, setMode] = useState('edited');

    let content = '';
    if (mode === 'edited') {
        content = <PersonalProper onModeChange={setMode} />;
    } else {
        content = <PersonalEdit />;
    }

    return content;
};
export default Personal;
