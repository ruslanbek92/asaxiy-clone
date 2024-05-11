import Address from './Address';
import Chat from './Chat';
import Elyurt from './Elyurt';
import Installments from './Installments';
import Orders from './Orders';
import Personal from './personal/Personal';
import Status from './Status';
import Transactions from './Transactions';

function ProfileMain({ link }) {
    let content = '';
    if (link === 'personal') {
        content = <Personal />;
    }
    if (link === 'address') {
        content = <Address />;
    }
    if (link === 'elyurt') {
        content = <Elyurt />;
    }
    if (link === 'orders') {
        content = <Orders />;
    }
    if (link === 'status') {
        content = <Status />;
    }
    if (link === 'transactions') {
        content = <Transactions />;
    }
    if (link === 'installments') {
        content = <Installments />;
    }
    if (link === 'chat') {
        content = <Chat />;
    }
    return <div className="p-4 bg-white basis-3/5">{content}</div>;
}
export default ProfileMain;
