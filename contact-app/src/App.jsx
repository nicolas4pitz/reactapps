import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'

function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([])

  let ids = 0;

  function id() {
    ids++;
    return ids;
  }

  const addContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, {id: id(), ...contact}])
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })

    setContacts(newContactList)
  }

  useEffect( () => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retriveContacts){
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setContacts(retriveContacts)
    } 
  }, [])

  useEffect( () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  return (
    <>
      <p>Hello World</p>
      <div className='ui container'>
        <Header />
        <AddContact addContactHandler={addContactHandler}/>
        <ContactList contacts={contacts} getContactId={removeContactHandler}/>
      </div>
    </>
  )
}

export default App
