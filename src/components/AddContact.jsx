import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = ({ addContact }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  let myFormRef = useRef("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if ((!data.email == "", !data.name == "")) {
      addContact(data);
    } else {
      alert("Please fill all fields");
    }
    myFormRef.reset();
    navigate("/list");
  };
  return (
    <div className='ui form'>
      <form action='' onSubmit={handleSubmit} ref={(el) => (myFormRef = el)}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id=''
          placeholder='Enter Name'
          style={{ marginBottom: "10px" }}
          onChange={handleChange}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='email'
          id=''
          placeholder='Enter Email'
          onChange={handleChange}
        />
        <br />
        <br />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};
export default AddContact;
