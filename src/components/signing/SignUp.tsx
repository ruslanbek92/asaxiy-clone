import { useRef, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router';
import Input from './Input';
import { auth } from '../../firebase';
import SignBtn from './SignBtn';
import checkFormValidity from '../../util/validity';
import addUser from '../../util/user';
import addUserCart from '../../util/cart';

function SignUp() {
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isNameValid, setIsNameValid] = useState(true);
    const [isSurnameValid, setIsSurnameValid] = useState(true);
    const formRef = useRef();
    const navigate = useNavigate();
    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: async ({
            auth: authObj,
            email,
            password,
            name,
            surname,
        }) => {
            const { user } = await createUserWithEmailAndPassword(
                authObj,
                email,
                password
            );
            await addUser(user.uid, name, surname, email);
            await addUserCart(user.uid);
            navigate(`/profile/${user.uid}`);
        },
        onSuccess: () => {
            alert('Succes');
            formRef.current.reset();
        },
    });
    function handleSubmit(e) {
        e.preventDefault();
        const fd = new FormData(e.target);
        const { name, email, password, surname } = Object.fromEntries(
            fd.entries()
        );
        const isFormValid = checkFormValidity(
            { email, name, surname, password },
            {
                changeEmailValidity: setIsEmailValid,
                changeNameValidity: setIsNameValid,
                changePassValidity: setIsPasswordValid,
                changeSurnameValidity: setIsSurnameValid,
            }
        );
        if (isFormValid) {
            mutate({ auth, email, password, name, surname });
        }
    }
    return (
        <>
            <h3 className="font-bold text-center">Sign Up form</h3>
            <p className="italic text-center">
                {isPending && 'Signing up and creating a user'}
                {isError && error.message}
            </p>
            <form
                className="p-5  bg-sky-50 rounded-md text-center"
                ref={formRef}
                noValidate
                onSubmit={handleSubmit}
            >
                <Input
                    type="text"
                    id="name"
                    label="Your name"
                    disabled={isPending}
                    validityState={isNameValid}
                    errorTxt="Fill the name field"
                    required
                />
                <Input
                    type="text"
                    id="surname"
                    label="Your surname"
                    disabled={isPending}
                    validityState={isSurnameValid}
                    errorTxt="Fill the surname field"
                    required
                />
                <Input
                    type="email"
                    id="email"
                    label="Your email"
                    disabled={isPending}
                    validityState={isEmailValid}
                    errorTxt="email field empty or doesnt include @"
                    required
                />
                <Input
                    type="password"
                    id="password"
                    label="Your password"
                    disabled={isPending}
                    validityState={isPasswordValid}
                    errorTxt="password field empty or too short"
                    required
                />
                <SignBtn disabled={isPending}>
                    {isPending ? 'signing up' : 'Sign up'}
                </SignBtn>
            </form>
        </>
    );
}
export default SignUp;
