
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBMvztJm_tb3RwjQwbvXZLoticg74_Jf14",
  authDomain: "meu-primeiro-firebase-46c59.firebaseapp.com",
  projectId: "meu-primeiro-firebase-46c59",
  storageBucket: "meu-primeiro-firebase-46c59.firebasestorage.app",
  messagingSenderId: "385090128425",
  appId: "1:385090128425:web:36f46a3827c32229542a38"
};

firebase.initializeApp(firebaseConfig);

import React, { useEffect, useState }  from 'react';
import { View, Text, FlatList } from 'react-native';

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
    <View style={{ flex: 1, justifyContent: 'center',
    alignItems: 'center'}}>
      <Text>Lista de Nomes:</Text>
      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.Nome} {item.Sobrenome}</Text>
          </View>
        )}
    </View>
  )
}