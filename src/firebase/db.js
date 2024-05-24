import { getFirestore,collection, getDocs, query, where,doc, getDoc, addDoc  } from "firebase/firestore";

import { app } from "./config";


const db = getFirestore(app);
let pagoExitosoVariable=false;

export const getPagoExitoso = () =>{
  return pagoExitosoVariable;
};

export const getItems = async () =>{
    const querySnapshot = await getDocs(collection(db, "items"));

    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
}

export const getItemFromCategory = async (category) =>{

    const q = category ? query(collection(db, "items"), where("category", "==", category)): collection(db,"items");
    const querySnapshot = await getDocs(q)
    const items = []

    querySnapshot.forEach((doc) =>  {
        items.push({...doc.data(), id: doc.id})
    })

    return items;
}

export const getItem = async(id) =>{
    const docRef = doc(db, "items", id);
    const docSnap = await getDoc(docRef);
    let item = null

    if (docSnap.exists()) {
      item = {...docSnap.data(), id: docSnap.id}
    } else {
      console.log("No such document!");
    }
    return item;
}


export const createOrder = async (order) =>{
  try{
    const docRef = await addDoc(collection(db, "orders"),order)
    console.log("Document written with ID: ", docRef.id);
    tempAlert("Operación exitosa, número: "+ docRef.id,7000);
  } catch (e){
    
    console.error("Error adding document: ", e)
  }

}

function tempAlert(msg,duration)
{
 var el = document.createElement("div");
 el.setAttribute("style","position:absolute;top:40%;left:70%;background-color:black;color:white;padding:10px;");
 el.innerHTML = msg;
 setTimeout(function(){
  el.parentNode.removeChild(el);
 },duration);
 document.body.appendChild(el);
}