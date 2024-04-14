import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import { firestore, storage } from '../firebase';
import products from '../data/products';

export default async function addProducts() {
    const productsRef = collection(firestore, 'products');
    const productKeys = Object.keys(products);
    /* eslint-disable-next-line */
    for (const product of productKeys) {
        // console.log("product", product)
        const docRef = doc(productsRef, product);
        // eslint-disable-next-line no-await-in-loop
        const existingDoc = await getDoc(docRef);

        if (existingDoc.exists()) {
            // console.log("if working")
            return;
        }
        const prods = { items: products[product] };

        console.log('PRODS', prods.items);
        /* eslint-disable-next-line */
        for (const element of prods.items) {
            // console.log("outer element", element);
            const images = [];
            /* eslint-disable-next-line */
            for (const image of element.images) {
                // console.log("image", image)
                // eslint-disable-next-line no-await-in-loop
                const imgUrl = await getDownloadURL(ref(storage, image));
                // console.log("imgURL", imgUrl)
                images.push(imgUrl);
                // console.log("images", images);
            }

            element.images = images;
            // console.log("element images", element.images);
        }
        // eslint-disable-next-line no-await-in-loop
        await setDoc(docRef, prods);
    }
}
