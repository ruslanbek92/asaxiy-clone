import { getDownloadURL, ref } from 'firebase/storage';
import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    setDoc,
    where,
} from 'firebase/firestore';
import { storage, firestore } from '../firebase';
import CATEGORY_DETAILS from '../data/category-details';
import CATEGORIES from '../data/categories';

export default function addCategories() {
    CATEGORIES.forEach(async (category) => {
        const categoriesCollectionRef = collection(firestore, 'categories');
        const categoryQuery = query(
            categoriesCollectionRef,
            where('name', '==', category.name)
        );
        const querySnapshot = await getDocs(categoryQuery);
        if (!querySnapshot.empty) {
            return;
        }
        const iconUrl = await getDownloadURL(ref(storage, category.icon));
        const imgUrl = await getDownloadURL(ref(storage, category.image));
        await addDoc(categoriesCollectionRef, {
            ...category,
            icon: iconUrl,
            image: imgUrl,
        });
    });
}

export async function addCategoryDetails() {
    const categoryDetailCollectionRef = collection(
        firestore,
        'category-detail'
    );
    const docRef = doc(categoryDetailCollectionRef, 'details');
    const existingDoc = await getDoc(docRef);
    if (existingDoc.exists()) {
        return;
    }
    await setDoc(docRef, CATEGORY_DETAILS);
}

export async function getCategories() {
    const categoriesCollectionRef = collection(firestore, 'categories');
    const data = await getDocs(categoriesCollectionRef);
    const filteredData = data.docs.map((category) => category.data());
    return filteredData;
}

export async function getCategoryDetails() {
    const docRef = doc(firestore, 'category-detail', 'details');
    const document = await getDoc(docRef);
    return document.data();
}
