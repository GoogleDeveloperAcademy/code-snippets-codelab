// [START import_methods]
// Import methods for Cloud Firestore
import { collection, addDoc, getDocs } from 'firebase/firestore';
// [END import_methods]

// [START add_doc_ada_lovelace]
// Create a new collection and a new document in that collection
try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
// [END add_doc_ada_lovelace]

// [START add_doc_alan_turing]
// Add a second document to the same collection
try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912
  });

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
// [END add_doc_alan_turing]

// [START read_entire_collection]
// Read data from the entire collection
const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
// [END read_entire_collection]
