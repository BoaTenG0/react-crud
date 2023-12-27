import { useRef } from "react";
import { Link } from "react-router-dom";

const ContactList = ({ contacts, handleDelete, handleSearch, term }) => {
  const inputValue = useRef(null);
  //receive searchTerm
  const getKeyword = () => {
    handleSearch(inputValue.current.value);
  };
  //handleDelete
  const DeleteContact = (id) => {
    handleDelete(id);
  };
  const renderList = contacts.map((contact) => {
    const { id, name, email } = contact;
    return (
      <div className='item' key={id}>
        <div className='ui avatar image'></div>
        <div className='content'>
          <Link to={`/details/${id}/`} state={contact}>
            <div className='header'>{name}</div>
            <div>{email}</div>
          </Link>
        </div>
        <i
          className='trash alternate outline icon'
          style={{ color: "red", marginLeft: "7px" }}
          onClick={() => DeleteContact(contact.id)}
        ></i>
      </div>
    );
  });

  return (
    <div className='main'>
      <div className='ui centered'>
        <div className='header'>
          <h2>Contact List</h2>
        </div>
        <div className='ui search'>
          <div className='ui icon input' style={{ marginBottom: "10px" }}>
            <input
              type='text'
              placeholder='Search'
              className='prompt'
              value={term}
              onChange={getKeyword}
              ref={inputValue}
            />
            <i className='search icon' />
          </div>
        </div>
      </div>
      <div className='ui celled list'>
        {renderList.length > 0 ? renderList : "No Contacts Available"}
      </div>
    </div>
  );
};
export default ContactList;
