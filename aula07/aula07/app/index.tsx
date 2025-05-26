import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCqlXHasmoV4-ODB6opw7LKMgOGH-xxhzw",
  authDomain: "meu-primeiro-firebase-e26e8.firebaseapp.com",
  projectId: "meu-primeiro-firebase-e26e8",
  storageBucket: "meu-primeiro-firebase-e26e8.firebasestorage.app",
  messagingSenderId: "389479830213",
  appId: "1:389479830213:web:3940d3570ef8a25b7756ac"
};

firebase.initializeApp(firebaseConfig);


import React, {useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default function App() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const nomeCollection = firebase.firestore().collection('Nomes');
      const snapshot = await nomeCollection.get();

      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setNomes(data);
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista de Nomes:</Text>
      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.Nome} {item.Sobrenome}</Text>
          </View>
        )}
      />
    </View>
  );
}

