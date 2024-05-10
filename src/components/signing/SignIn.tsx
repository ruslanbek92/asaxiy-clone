import { useRef, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { Input } from './Input';
import SignBtn from './SignBtn';
import { auth } from '../../firebase';

function SignIn() {
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const formRef = useRef();
    const navigate = useNavigate();
    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: async ({ authObj, inemail, inpassword }) => {
            await signInWithEmailAndPassword(authObj, inemail, inpassword);
            navigate(`/profile/${auth.currentUser.uid}`);
        },
        onSuccess: () => {
            alert('Succes');
            formRef.current?.reset();
        },
    });
    function handleSubmit(e) {
        e.preventDefault();
        const fd = new FormData(e.target);
        const { inemail, inpassword } = Object.fromEntries(fd.entries());
        function checkFormValidity() {
            if (inemail === '' || !inemail.includes('@')) {
                setIsEmailValid(false);
                return false;
            }
            setIsEmailValid(true);
            if (inpassword === '' || !(inpassword.length > 7)) {
                setIsPasswordValid(false);
                return false;
            }
            setIsPasswordValid(true);
            return true;
        }
        const isFormValid = checkFormValidity();

        if (isFormValid) {
            mutate({ auth, inemail, inpassword });
        }
    }

    return (
        <>
            <h3 className="font-bold text-center pt-6">
                If you are already signed up
            </h3>
            {isPending && 'Signing in'}
            {isError && error.message}
            <form
                className="bg-sky-50 p-5 rounded-lg mb-3 text-center"
                ref={formRef}
                noValidate
                onSubmit={handleSubmit}
            >
                <Input type="email" id="inemail" label="Your email" required />
                {!isEmailValid && (
                    <p className="text-red-500">
                        {' '}
                        email field empty or doesnt include @
                    </p>
                )}
                <Input
                    type="password"
                    id="inpassword"
                    label="Your password"
                    required
                />
                {!isPasswordValid && (
                    <p className="text-red-500">
                        {' '}
                        password field empty or too short
                    </p>
                )}
                <SignBtn>Sign in</SignBtn>
            </form>
        </>
    );
}
export default SignIn;
