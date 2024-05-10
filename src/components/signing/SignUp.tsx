import { useRef, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { Input } from './Input';
import { auth } from '../../firebase';
import SignBtn from './SignBtn';

function SignUp() {
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isNameValid, setIsNameValid] = useState(true);
    const [isSurnameValid, setIsSurnameValid] = useState(true);
    const formRef = useRef();
    const navigate = useNavigate();
    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: async ({ authObj, email, password, name, surname }) => {
            const { user } = await createUserWithEmailAndPassword(
                authObj,
                email,
                password
            );
            await addUser(user.uid, name, surname, email);
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
        function checkFormValidity() {
            if (name === '') {
                setIsNameValid(false);
                return false;
            }
            setIsNameValid(true);
            if (surname === '') {
                setIsSurnameValid(false);
                return false;
            }
            setIsSurnameValid(true);
            if (email === '' || !email.includes('@')) {
                setIsEmailValid(false);
                return false;
            }
            setIsEmailValid(true);
            if (password === '' || !(password.length > 7)) {
                setIsPasswordValid(false);
                return false;
            }
            setIsPasswordValid(true);
            return true;
        }
        const isFormValid = checkFormValidity();
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
                    required
                />
                {!isNameValid && (
                    <p className="text-red-500">Fill the name field</p>
                )}
                <Input
                    type="text"
                    id="surname"
                    label="Your surname"
                    disabled={isPending}
                    required
                />
                {!isSurnameValid && (
                    <p className="text-red-500">Fill the surname field</p>
                )}
                <Input
                    type="email"
                    id="email"
                    label="Your email"
                    disabled={isPending}
                    required
                />
                {!isEmailValid && (
                    <p className="text-red-500">
                        {' '}
                        email field empty or doesnt include @
                    </p>
                )}
                <Input
                    type="password"
                    id="password"
                    label="Your password"
                    disabled={isPending}
                    required
                />
                {!isPasswordValid && (
                    <p className="text-red-500">
                        {' '}
                        password field empty or too short
                    </p>
                )}
                <SignBtn disabled={isPending}>
                    {isPending ? 'signing up' : 'Sign up'}
                </SignBtn>
            </form>
        </>
    );
}
export default SignUp;
