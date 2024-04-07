  import { useState, useEffect } from 'react'
  import { initialContacts } from './components/const'
  import { nanoid } from 'nanoid'

  import './App.css'
  import ContactList from './components/contactList/contactList'
  import SearchBox from './components/searchBox/searchBox'
  import ContactForm from './components/contactForm/contactForm'


  function App() {
    const [contacts, setContacts] = useState(() => {
      const strignifiedCont = localStorage.getItem("contacts");
      
      return strignifiedCont ? JSON.parse(strignifiedCont) : initialContacts;
  })

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

    const [values, setValues] = useState('');

    const onChange = (event) =>{
      setValues(event.target.value);
    }

    const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(values.toLowerCase())
  );

  const onAddContact = (formData) =>{
    const finalContact ={
      ...formData,
      id: nanoid()
    };
    setContacts([...contacts, finalContact])
  };
  const onDeleteContact = (id) =>{
    setContacts((prevContacts)=>{
      return prevContacts.filter((contact)=>(contact.id !== id))
    })
  }


  return (
      <div>
        <h1>Phonebook</h1>

        <ContactForm onAddContact={onAddContact} />
        <SearchBox value ={values} onChange ={onChange} />
        <ContactList onDeleteContact={onDeleteContact} contacts = {filterContacts}/>
        
      </div>
    )
  }

  export default App
