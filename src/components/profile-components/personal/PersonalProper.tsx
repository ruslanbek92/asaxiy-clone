import { FaPen } from 'react-icons/fa';
import Button from '../../Button';

function PersonalProper({ onModeChange }) {
    function handleEditClick() {
        onModeChange('edit');
    }
    return (
        <div>
            <h3 className="font-bold">Personal Data</h3>
            <img alt="profile" />
            <div className="flex justify-between my-3">
                <div className="w-[48%]">
                    <p>Name:{}</p>
                    <p>Surname:{}</p>
                    <p>Date of birth:{}</p>
                    <p>Phone:{}</p>
                    <p>Place of work:{}</p>
                    <p>Gender:{}</p>
                </div>
                <div className="w-[48%]">
                    <p>Passport number:{}</p>
                    <p>Email:{}</p>
                    <p>Address:{}</p>
                    <p>Work address:{}</p>
                </div>
            </div>
            {/* eslint-disable react/jsx-no-bind */}
            <Button icon={<FaPen />} onClick={handleEditClick}>
                Edit
            </Button>
        </div>
    );
}
export default PersonalProper;
