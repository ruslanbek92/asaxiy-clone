import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import reviews from '../data/reviews';
import { firestore, storage } from '../firebase';

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

async function saveImages(images) {
    const downloadUrls = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const element of images) {
        const imagesRef = ref(storage, `reviews/${element.name}`);
        // eslint-disable-next-line no-await-in-loop
        const snapshot = await uploadBytesResumable(imagesRef, element);
        // eslint-disable-next-line no-await-in-loop
        const url = await getDownloadURL(snapshot.ref);
        downloadUrls.push(url);
    }
    return downloadUrls;
}
export async function addReview({ title, formData, imageFiles }) {
    const images = await saveImages(imageFiles);
    const docRef = doc(firestore, 'reviews', title);
    const document = await getDoc(docRef);
    const currentReviewsSet = document.data().reviewSet || [];
    const now = new Date();
    const dateStr = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}: ${now.getSeconds()}`;
    const newReview = {
        author: 'User',
        date: dateStr,
        rating: formData.rating,
        review: formData.comment,
        replies: [],
        images,
    };
    const updatedReviewSet = [...currentReviewsSet, newReview];
    await updateDoc(docRef, { reviewSet: updatedReviewSet });
}
