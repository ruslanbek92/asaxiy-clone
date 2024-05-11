import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import ImagePicker from '../../product-components/product-detail-components/ImagePicker';
import Input from '../../signing/Input';
import checkFormValidity from '../../../util/validity';
import SignBtn from '../../signing/SignBtn';
import { updateUser } from '../../../util/user';

function PersonalEdit({ id, onModeChange }) {
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isDateValid, setIsDateValid] = useState(true);
    const [isNameValid, setIsNameValid] = useState(true);
    const [isPhoneValid, setIsPhoneValid] = useState(true);
    const [isAddressValid, setIsAddressValid] = useState(true);
    const [isGenderValid, setIsGenderValid] = useState(true);
    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: async ({ id: userId, userObj }) => {
            await updateUser(userId, userObj);
        },
        onSuccess: () => {
            alert('succes');
            onModeChange('edited');
        },
    });

    function handleSubmit(e) {
        e.preventDefault();
        const fd = new FormData(e.target);
        const { image, name, email, date, telephone, address, gender } =
            Object.fromEntries(fd.entries());
        const isFormValid = checkFormValidity(
            { name, email, date, telephone, address },
            {
                changeNameValidity: setIsNameValid,
                changeEmailValidity: setIsEmailValid,
                changeDateValidity: setIsDateValid,
                changePhoneValidity: setIsPhoneValid,
                changeAddressValidity: setIsAddressValid,
            }
        );

        if (isFormValid) {
            if (gender === undefined) {
                setIsGenderValid(false);
                return;
            }
            setIsGenderValid(true);

            mutate({
                id,
                userObj: {
                    image,
                    name,
                    email,
                    date,
                    telephone,
                    address,
                    gender,
                },
            });
        }
    }
    return (
        <div>
            <h3 className="font-bold">Personal Data</h3>
            {isError && `Error:${error.message}`}
            {isPending && 'Updating'}
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
                    <Input
                        type="text"
                        id="name"
                        label="Name"
                        validityState={isNameValid}
                        errorTxt="fill the name"
                    />
                    <Input
                        type="email"
                        id="email"
                        label="Email"
                        validityState={isEmailValid}
                        errorTxt="fill the email"
                    />
                    <Input
                        type="date"
                        id="date"
                        label="DOB"
                        validityState={isDateValid}
                        errorTxt="fill the date"
                    />
                </fieldset>
                <fieldset>
                    <legend className="hidden">Contact</legend>
                    <Input
                        type="number"
                        id="telephone"
                        label="Phone number"
                        validityState={isPhoneValid}
                        errorTxt="fill the phone"
                    />
                    <Input
                        type="text"
                        id="address"
                        label="Address"
                        validityState={isAddressValid}
                        errorTxt="fill the address"
                    />
                </fieldset>
                <fieldset>
                    <legend className="">Gender</legend>
                    {!isGenderValid && (
                        <p className="text-red-500">Check the gender</p>
                    )}
                    <Input
                        type="checkbox"
                        id="gender"
                        label="Male"
                        value="male"
                    />
                    <Input
                        type="checkbox"
                        id="gender"
                        label="Female"
                        value="female"
                    />
                </fieldset>
                <SignBtn disabled={isPending}>
                    {isPending ? 'Saving...' : 'Save'}
                </SignBtn>
            </form>
        </div>
    );
}
export default PersonalEdit;
