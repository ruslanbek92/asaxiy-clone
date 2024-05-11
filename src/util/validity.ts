export default function checkFormValidity(
    { email, name, surname, password, date, address, telephone },
    {
        changeNameValidity,
        changeSurnameValidity,
        changeEmailValidity,
        changePassValidity,
        changeDateValidity,
        changeAddressValidity,
        changePhoneValidity,
    }
) {
    if (name !== undefined) {
        if (name === '') {
            changeNameValidity(false);
            return false;
        }
        changeNameValidity(true);
    }

    if (surname !== undefined) {
        if (surname === '') {
            changeSurnameValidity(false);
            return false;
        }
        changeSurnameValidity(true);
    }
    if (email !== undefined) {
        if (email === '' || !email.includes('@')) {
            changeEmailValidity(false);
            return false;
        }
        changeEmailValidity(true);
    }
    if (date !== undefined) {
        if (date === '') {
            changeDateValidity(false);
            return false;
        }
        changeDateValidity(true);
    }
    if (telephone !== undefined) {
        if (telephone === '') {
            changePhoneValidity(false);
            return false;
        }
        changePhoneValidity(true);
    }
    if (address !== undefined) {
        if (address === '') {
            changeAddressValidity(false);
            return false;
        }
        changeAddressValidity(true);
    }
    if (password !== undefined) {
        if (password === '' || !(password.length > 7)) {
            changePassValidity(false);
            return false;
        }
        changePassValidity(true);
    }

    return true;
}
