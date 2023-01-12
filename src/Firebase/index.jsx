import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, setDoc, query, limit, getDocs } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyCpr4VzqjRgU7w8l4GPouCZiSBK4LOmgWM",
    authDomain: "foodie-fb2c7.firebaseapp.com",
    projectId: "foodie-fb2c7",
    storageBucket: "foodie-fb2c7.appspot.com",
    messagingSenderId: "682667864999",
    appId: "1:682667864999:web:20eb1bc9ebf72f8456fc82",
    measurementId: "G-680T44RM7Q",
    storageBucket: 'gs://foodie-fb2c7.appspot.com'
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
const storage = getStorage(firebaseApp);
export const auth = getAuth();

export const SignUp = async (password, data, add, cartFunction = null) => {

    createUserWithEmailAndPassword(auth, data.email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            if(cartFunction != null){
                cartFunction().then((id)=>{
                    add({...data, cartId: id}, userCredential.user.uid)
                })
            } else {
                add(data, userCredential.user.uid)
            }
                
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage)
    });
}

export const SignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
}

export const addCustomer = async (data, id) => {
    await setDoc(doc(db, "customers", id), data);
}

export const SignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('signed out')
    }).catch((error) => {
        // An error happened.
        console.log(error)
    });
}

export const createCart = async () => {
    const docRef = await addDoc(collection(db, 'carts'),{})
    return docRef.id;
}

export const uploadImage = async (imageFile, productId) => {

    // Create a child reference with a unique name
    const imageRef = ref(storage,`productImages/${productId}/${imageFile.name}`);
    // Upload the file to the storage reference
    const snapshot = await uploadBytes(imageRef, imageFile);
    // Get the download URL for the image
    const url = await getDownloadURL(snapshot.ref)
    return url;
}

export const addNewProduct = async (formData) => {

    const newProduct = {
        productName: formData.productName,
        type: formData.type,
        category: formData.category,
        price: formData.price,
        description: formData.description
    };

    console.log(newProduct);

    const docRef = await addDoc(collection(db, "items"), newProduct);
    
    const url = await uploadImage(formData.imageFile, docRef.id);

    await setDoc(docRef, {
       imageUrl: url
    }, { merge: true });
}

export const loadPopular = async () => {
    const q = query(collection(db, items), limit(3));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc)=>{ return {
        id: doc.id,
        ...doc.data()
    }})
}