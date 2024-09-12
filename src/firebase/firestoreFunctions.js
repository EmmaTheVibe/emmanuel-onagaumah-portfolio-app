import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

// Function to add form data to a Firestore collection
export const submitFormData = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, "Messages"), formData);
    console.log("Document written with ID: ", docRef.id);
    return docRef;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};
