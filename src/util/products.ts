import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import { firestore, storage } from '../firebase';
import products from '../data/products';

export default async function addProducts() {
    const productsRef = collection(firestore, 'products');
    const productKeys = Object.keys(products);
    /* eslint-disable-next-line */
    for (const product of productKeys) {
        const docRef = doc(productsRef, product);
        // eslint-disable-next-line no-await-in-loop
        const existingDoc = await getDoc(docRef);

        if (existingDoc.exists()) {
            return;
        }
        const prods = { items: products[product] };
        /* eslint-disable-next-line */
        for (const element of prods.items) {
            const images = [];
            /* eslint-disable-next-line */
            for (const image of element.images) {
                // eslint-disable-next-line no-await-in-loop
                const imgUrl = await getDownloadURL(ref(storage, image));
                images.push(imgUrl);
            }
            element.images = images;
        }
        // eslint-disable-next-line no-await-in-loop
        await setDoc(docRef, prods);
    }
}
export async function getDocument(productCategory) {
    const docRef = doc(firestore, 'products', productCategory);
    const document = await getDoc(docRef);
    return document.data();
}
