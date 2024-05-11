import { FaPen } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import Button from '../../Button';
import { getUser } from '../../../util/user';

function PersonalProper({ onModeChange, id }) {
    const { data, isPending, isError, error } = useQuery({
        queryKey: ['users'],
        queryFn: () => getUser(id),
    });
    function handleEditClick() {
        onModeChange('edit');
    }
    let content;
    if (isPending) {
        content = 'Loading...';
    }
    if (isError) {
        content = `Error: ${error.message}`;
    }
    if (data) {
        content = (
            <>
                <img
                    alt="profile"
                    src={data.image}
                    className="w-10 rounded-3xl h-auto border"
                />
                <div className="flex justify-between my-3">
                    <div className="w-[48%]">
                        <p>Name:{data.name}</p>
                        <p>Surname:{data.surname}</p>
                        <p>Date of birth:{data.date}</p>
                        <p>Phone:{data.telephone}</p>
                        <p>Gender:{data.gender}</p>
                    </div>
                    <div className="w-[48%]">
                        <p>Email:{data.email}</p>
                        <p>Address:{data.address}</p>
                    </div>
                </div>
                {/* eslint-disable react/jsx-no-bind */}
                <Button icon={<FaPen />} onClick={handleEditClick}>
                    Edit
                </Button>
            </>
        );
    }

    return (
        <div>
            <h3 className="font-bold">Personal Data</h3>
            {content}
        </div>
    );
}
export default PersonalProper;
