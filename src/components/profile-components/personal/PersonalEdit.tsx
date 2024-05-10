import Button from '../../Button';
import ImagePicker from '../../product-components/product-detail-components/ImagePicker';
import { Input } from '../../signing/Input';

function PersonalEdit() {
    function handleSubmit(e) {
        e.preventDefault();
        // const fd = new FormData(e.target);
        // const {name,email, date, telephone,address,gender} =  Object.fromEntries(fd.entries());
    }
    return (
        <div>
            <h3 className="font-bold">Personal Data</h3>
            <form
                action=""
                className="bg-sky-100 p-2"
                noValidate
                onSubmit={handleSubmit}
            >
                <div className="w-20 rounded-2xl overflow-hidden border border-sky-800">
                    <ImagePicker id="editpicker" />
                </div>
                <fieldset>
                    <legend className="hidden">Passport details</legend>
                    <Input type="date" id="date" label="DOB" />
                    <Input type="text" id="name" label="Name" />
                    <Input type="email" id="email" label="Email" />
                </fieldset>
                <fieldset>
                    <legend className="hidden">Contact</legend>
                    <Input type="number" id="telephone" label="Phone number" />
                    <Input type="text" id="address" label="Address" />
                </fieldset>
                <fieldset>
                    <legend className="">Gender</legend>
                    <Input type="checkbox" id="gender" label="Male" />
                    <Input type="checkbox" id="gender" label="Female" />
                </fieldset>
                <Button>Save</Button>
            </form>
        </div>
    );
}
export default PersonalEdit;
