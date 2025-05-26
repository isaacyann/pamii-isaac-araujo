// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDxjpHUZzYpjR5gaIIGPf1yXiO5pYgbQB8",
  authDomain: "meu-primeiro-firebase-b1cb0.firebaseapp.com",
  projectId: "meu-primeiro-firebase-b1cb0",
  storageBucket: "meu-primeiro-firebase-b1cb0.firebasestorage.app",
  messagingSenderId: "46059561627",
  appId: "1:46059561627:web:8c9aab669709832ebd1c3e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

import React, {useEffect, useState } from "react";
import { View, Text, FlatList } from 'react-native';

export default function App() {
  const [ nomes, setNomes] = useState([]);
  
  useEffect (() => {
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
      alignItems: 'center' }}>
        <Text> Lista de Nomes </Text>  
        <FlatList
        data={nomes}
        keyExtractor={(item) => item,id}
        renderItem={({ item }) => (
          <View> 
            <Text>{item.Nome} {item.Sobrenome}</Text>
            </View>
        )
      </View>
  )
}
