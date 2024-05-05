import { doc, getDoc, setDoc } from 'firebase/firestore';
import reviews from '../data/reviews';
import { firestore } from '../firebase';

async function setNewDoc(item, review) {
    await setDoc(
        doc(firestore, 'reviews', item),
        { reviewSet: review },
        { merge: true }
    );
}
export default async function addReviews() {
    const reviewKeys = Object.keys(reviews);
    /* eslint-disable no-await-in-loop */
    // eslint-disable-next-line no-restricted-syntax
    for (const key of reviewKeys) {
        const docRef = doc(firestore, 'reviews', key);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            await setNewDoc(key, reviews[key]);
        }
    }
}
