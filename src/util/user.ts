import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { firestore, storage } from '../firebase';

async function addUser(userId, name, surname, email) {
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
async function updateUserImg(image) {
    const imagesRef = ref(storage, `profiles/${image.name}`);
    const snapshot = await uploadBytesResumable(imagesRef, image);
    const url = await getDownloadURL(snapshot.ref);
    return url;
}
export async function updateUser(userId, userObj) {
    const userRef = doc(firestore, 'users', userId);
    const imageUrl = await updateUserImg(userObj.image);

    await updateDoc(userRef, { ...userObj, image: imageUrl });
}
export default addUser;
