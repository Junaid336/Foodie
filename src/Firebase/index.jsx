import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { 
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
  query,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp
} from "firebase/firestore";
import {
   getAuth,
   onAuthStateChanged,
   GoogleAuthProvider,
   signInWithPopup,
   signOut,
 } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDSeeasHQVX641bD53MNpcYcEkeiF8QGJo",
  authDomain: "fire-chat-7.firebaseapp.com",
  projectId: "fire-chat-7",
  storageBucket: "fire-chat-7.appspot.com",
  messagingSenderId: "506301287580",
  appId: "1:506301287580:web:459638bcdc90455c73f159",
  measurementId: "G-PYWWVD11MZ"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();

export const  signIn = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
  //console.log(getAuth().currentUser);
  await setDoc(doc(db, 'users', auth.currentUser.uid),{
    name: auth.currentUser.displayName,
    photoUrl: `${addSizeToGoogleProfilePic(auth.currentUser.photoURL)}`,
    lowercaseName: auth.currentUser.displayName.toLowerCase()
   }, {merge: true} );
}

export const signOutUser = () =>{
  signOut(auth);
}

export const  isSignedIn = () => {
  return !!auth.currentUser;
}

export const addSizeToGoogleProfilePic = url => {
   if (url.indexOf('googleusercontent.com') !== -1 && url.indexOf('?') === -1) {
     return url + '?sz=150';
   }
   return url;
 }


 export const searchUser = async (searchTerm, setResults) => {
  searchTerm = searchTerm.toLowerCase();
  let strlength = searchTerm.length;
  let strFrontCode = searchTerm.slice(0, strlength-1);
  let strEndCode = searchTerm.slice(strlength-1, searchTerm.length);
  
  let endCode = strFrontCode + String.fromCharCode(strEndCode.charCodeAt(0) + 1)
  const usersRef = collection(db, 'users');
  let q = query(usersRef, where('lowercaseName', '>=', searchTerm), where('lowercaseName', '<', endCode) );

  const querySnapshot = await getDocs(q);
  
  setResults(querySnapshot.docs.map(doc => ({ uid:doc.id, ...doc.data() })));
 }

 export const createNewChat = async (user) => {
  const chatRefsRef = collection(db, 'users', auth.currentUser.uid, 'chatRefs');
  const q = query(chatRefsRef, where('uid', '==' , `${user.uid}`));

  const snapshot = await getDocs(q);
  if(!snapshot.exist){
    const newChatId = `chat-${auth.currentUser.uid}-${user.uid}`;
    const otherChatRefsRef = collection(db, 'users', `${user.uid}`, 'chatRefs');
    await Promise.all([
      addDoc(chatRefsRef, {
        uid: `${user.uid}`,
        photoUrl: `${user.photoUrl}`,
        chatId: newChatId,
        name: `${user.name}`,
        lowercaseName: `${user.lowercaseName}`
      }),
      addDoc(otherChatRefsRef, {
        uid: `${auth.currentUser.uid}`,
        photoUrl: `${addSizeToGoogleProfilePic(auth.currentUser.photoURL)}`,
        chatId: newChatId,
        name: `${auth.currentUser.displayName}`,
        lowercaseName: `${auth.currentUser.displayName.toLowerCase()}`
      })
  ]);
    return newChatId;
  } else {
    return snapshot.docx[0].id;
  }

 }

export const loadContacts = async (setResults) => {
  const snapshot = await getDocs(collection(db, 'users', auth.currentUser.uid, 'chatRefs'));
  snapshot.forEach((doc)=>console.log(doc.data()))

  setResults(snapshot.docs.map(doc => doc.data()));
  console.log(snapshot);
}

export const writeMessage = async (messageText, chatId) => {
  await addDoc(collection(db, 'chats', chatId, 'messages'), {
    text: `${messageText}`,
    uid: `${auth.currentUser.uid}`,
    timestamp: serverTimestamp()
  })
}

export const loadMessages = (chatId, setMessages, messages) => {
  const messagesRef = collection(db, 'chats', chatId, 'messages');
  const messagesQuery = query(messagesRef, orderBy('timestamp', 'desc'));
  onSnapshot(messagesQuery, (snapshot)=>{
     console.log(snapshot);
     setMessages( snapshot.docs.map((doc)=>{
      return doc.data();
     }) );
  });
}

export const loadContactByChatId = async (chatId, setContact) => {
 const chatRefsRef = collection(db, 'users', auth.currentUser.uid, 'chatRefs');
 const q = query(chatRefsRef, where('chatId', '==' , `${chatId}`));

 const snapshot = await getDocs(q);
 
 setContact(snapshot.docs[0].data());
}