import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='ui center fixed menu'>
      <div className='ui header' style={{ margin: "0 auto" }}>
        <Link to='/' style={{ marginRight: "10px" }}>
          Contact Manager
        </Link>
        <Link to='/list'>Contact List</Link>
      </div>
    </div>
  );
};
export default Navbar;
