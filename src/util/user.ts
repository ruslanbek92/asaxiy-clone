import { doc, getDoc, setDoc } from 'firebase/firestore';
import { firestore } from '../firebase';

async function addUser(userId, name, surname, email) {
    console.log('Add user');
    try {
        await setDoc(doc(firestore, 'users', userId), {
            name,
            surname,
            email,
        });
    } catch (error) {
        throw new Error(error);
    }
}

export async function getUser(userId) {
    const docSnap = await getDoc(doc(firestore, 'users', userId));
    return docSnap.data();
}
export default addUser;
