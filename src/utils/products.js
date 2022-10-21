import { getFirestore, doc, getDoc, collection, getDocs,query, where } from "firebase/firestore";

export const getAllProducts = () => {

    const database = getFirestore();
    const collectionReference = collection(database, 'items');
    return getDocs(collectionReference)
        .then((snapshot) => {
            const list = snapshot
                .docs
                .map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
            return list;
        })
        .catch(error => console.warn(error))


};

export const getProduct = (id) => {

    const database = getFirestore();

    const itemReference = doc(database, 'items', 'yADp0ha9MCDQcJsU6hya');

    return getDoc(itemReference)
        .then((snapshot) => {
            if (snapshot.exists()) {
                const item = {
                    id: snapshot.id,
                    ...snapshot.data()
                };
                return item;
            }
        })
        .catch(error => console.warn(error))

};

export const getCategoryProducts = (categoryId) => {

    const database = getFirestore();
    const collectionReference = collection(database, 'items');
    const collectionQuery = query(collectionReference, where('category', '==', categoryId));
    return getDocs(collectionQuery)
        .then((snapshot) => {
            const list = snapshot
                .docs
                .map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
            return list;
        })
        .catch(error => console.warn(error))


};