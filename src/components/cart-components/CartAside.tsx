import Button from '../Button';

function CartAside({ total }) {
    return (
        <div className="flex flex-col gap-3 items-center font-bold  bg-white rounded-xl  w-1/5 p-6 text-center self-start">
            <p>Thre are items in the card</p>
            <p>Total payment amount is </p>
            <p className="">{total} soums</p>
            <Button>make a payment</Button>
        </div>
    );
}
export default CartAside;
