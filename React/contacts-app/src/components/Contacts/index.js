import React, { useEffect } from 'react'
import { useState } from "react";

import List from "./List";
import Form from "./Form";
import './styles.css';

function Contacts() {

  const [contacts, setContacts] = useState([
    {
      fullname: "Fatime Nur asd",
      phone_number:"555 555 55 55"
    },
    {
      fullname: "Hatice asd",
      phone_number:"555 666 66 55"
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts])

  return (
    <div id='container'>
      <h1>Contacts</h1>
      <List contacts =  {contacts} />
      <Form addContact={setContacts} contacts = {contacts}/>
    </div>
  )
}

export default Contacts;