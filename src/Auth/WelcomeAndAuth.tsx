import FirestoreDB from '../../firebase'

function getDataFromFirebase() {
  FirestoreDB.collection("users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().user_id}`);
      });
  });
}

export default getDataFromFirebase();
