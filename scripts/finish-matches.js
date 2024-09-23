/* eslint-disable */

const { initializeApp } = require('firebase/app');

const {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyDpe5HP9koGAwH_a_uIkba0tnsCN2PWLTI",
  authDomain: "cah-mechamogeo.firebaseapp.com",
  projectId: "cah-mechamogeo",
  storageBucket: "cah-mechamogeo.appspot.com",
  messagingSenderId: "822829307439",
  appId: "1:822829307439:web:a1b4fd912fd6ae1e5c98da",
  measurementId: "G-0VY46RJM55"
};

const app = initializeApp(firebaseConfig);

const matchesCollection = collection(getFirestore(app), 'matches');

const q = query(matchesCollection, where('status', '!=', 'FINISHED'));

const finishMatches = async () => {
  try {
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (doc) => {
      try {
        await updateDoc(doc.ref, {
          status: 'FINISHED',
        });

        console.log(`Partida ${doc.id} finalizada com sucesso.`);
      } catch (error) {
        console.error(`Erro ao finalizar partida ${doc.id}:`, error);
      }
    });

    console.log(`${querySnapshot.size} Partida(s) finalizadas com sucesso.`);
  } catch (error) {
    console.error('Erro ao finalizar partidas:', error);
  }
};

finishMatches();
