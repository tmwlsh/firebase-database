import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import firebase from '@firebase/app';
import '@firebase/firestore'

const IndexPage = () => {

  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: "AIzaSyCZBPVuD2SSsRITgSW3VEUGxKgCSlGUXB4",
      authDomain: "db-test-82d41.firebaseapp.com",
      databaseURL: "https://db-test-82d41.firebaseio.com",
      projectId: "db-test-82d41",
      storageBucket: "db-test-82d41.appspot.com",
      messagingSenderId: "986979902729",
      appId: "1:986979902729:web:d924aeb00c8ef9225e1fd8"
    });
  }

  const db = firebase.firestore();

  const addName = (name) => {
    db.collection("names").add({
      name: name
    })
    .then(() => {
      console.log("Name Added");
    })
    .then(() => {
      console.log("Error adding name");
    });
  }

  const [inputText, setInputText] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    addName(inputText);
  }

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Homepage</h1>
      <form onSubmit={onSubmit}>
        <input onChange={(e) => setInputText(e.target.value)} type="text" />
        <input type="submit" value="submit" />
      </form>
    </Layout>
  )
}

export default IndexPage
