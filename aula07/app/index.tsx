import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAmd6NJ4lCm_7k48KwN5HsRecFJWp3IH9I",
  authDomain: "meu-primeiro-firebase02.firebaseapp.com",
  projectId: "meu-primeiro-firebase02",
  storageBucket: "meu-primeiro-firebase02.firebasestorage.app",
  messagingSenderId: "343019641182",
  appId: "1:343019641182:web:eb93f0504fcd521d7117cf"
};


firebase.initializeApp(firebaseConfig);

import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default function App() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const nomesCollection = firebase.firestore().collection('Nomes');
      const snapshot = await nomesCollection.get();

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