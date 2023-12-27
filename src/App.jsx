import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactDetails from "./components/ContactDetails";

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermResults, setSearchTermResults] = useState("");
  const addContact = (contact) => {
    const fakeId = Date.now();
    setContacts([...contacts, { id: fakeId, ...contact }]);
  };
  //handle delete
  const handleDelete = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };
  //handle search
  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newSearch = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchTermResults(newSearch);
    } else setSearchTerm(contacts);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<AddContact addContact={addContact} />} />
        <Route
          path='/list'
          element={
            <ContactList
              contacts={searchTerm.length < 1 ? contacts : searchTermResults}
              handleDelete={handleDelete}
              term={searchTerm}
              handleSearch={handleSearch}
            />
          }
        />
        <Route path='/details/:id' element={<ContactDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
