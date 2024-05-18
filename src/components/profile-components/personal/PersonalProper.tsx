import { getUser } from '../../../util/user';
import useReactQuery from '../../../hooks/useReactQuery';

function PersonalProper({ onModeChange, id }) {
    function handleEditClick() {
        onModeChange('edit');
    }
    const content = useReactQuery(
        {
            queryKey: ['users'],
            queryFn: () => getUser(id),
        },
        'getUser',
        null,
        [handleEditClick]
    );
    return (
        <div>
            <h3 className="font-bold">Personal Data</h3>
            {content}
        </div>
    );
}
export default PersonalProper;
