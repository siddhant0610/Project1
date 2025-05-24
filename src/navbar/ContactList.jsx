   import React, { useEffect, useState } from 'react';
   import axios from 'axios';

   const ContactList = () => {
     const [contacts, setContacts] = useState([]);

     useEffect(() => {
       const fetchContacts = async () => {
         try {
           const response = await axios.get('http://localhost:5000/api/contact');
           setContacts(response.data);
         } catch (error) {
           console.error('Error fetching contacts:', error);
         }
       };

       fetchContacts();
     }, []);

     return (
       <div>
         <h1>Contact List</h1>
         <ul>
           {contacts.map(contact => (
             <li key={contact._id}>{contact.name} - {contact.email}</li>
           ))}
         </ul>
       </div>
     );
   };

   export default ContactList;
   