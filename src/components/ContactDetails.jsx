import { useLocation } from "react-router-dom";
import logo from "../assets/react.svg";
const ContactDetails = () => {
  const location = useLocation();
  const state = location.state;
  return (
    <div className='main'>
      <div className='ui card centered'>
        <div className='image'>
          <img src={logo} alt='' />
        </div>
      </div>
      <div className='content'>
        {state && (
          <>
            <div className='header'>{state.name}</div>
            <div className='descriptioned'>{state.email}</div>
          </>
        )}
      </div>
    </div>
  );
};
export default ContactDetails;
