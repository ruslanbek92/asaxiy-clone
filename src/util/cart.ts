import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { firestore } from '../firebase';

export default async function addUserCart(userId) {
    await setDoc(doc(firestore, 'carts', userId, 'products', 'newproduct'), {
        title: 'title',
        price: 0,
        quantity: 1,
        image: '',
    });
}
export async function addProductToCart(item, userId) {
    await setDoc(doc(firestore, 'carts', userId, 'products', item.title), {
        title: item.title,
        price: item.price,
        quantity: item.quantity,
        image: item.images[0],
    });
}
export async function getCart(userId) {
    const products = [];
    const querySnap = await getDocs(
        collection(firestore, 'carts', userId, 'products')
    );

    querySnap.forEach((document) => {
        products.push(document.data());
    });
    return products;
}
