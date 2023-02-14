const express = require('express')
const bcrypt = require('bcrypt')
const {initializeApp} = require('firebase/app')
const {getFirestore} = require('firebase/firestore')
require('dotenv/config')

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC75mRxzWXO8z9l95ie4cKvnA4ur9Pucqg",
    authDomain: "back-firebase-90715.firebaseapp.com",
    projectId: "back-firebase-90715",
    storageBucket: "back-firebase-90715.appspot.com",
    messagingSenderId: "219360545940",
    appId: "1:219360545940:web:376856ce901a70b1c7f881"
  };

// Inicializar BD con Firebase
const firebase = initializeApp(firebaseConfig)
const db = getFirestore()

// Inicializar el servidor
const app = express()

const PORT = process.env.PORT || 19000

// Ejecutamos el servidor
app.listen(PORT, () => {
    console.log(`Escuchando en el puerto: ${PORT}`)
})