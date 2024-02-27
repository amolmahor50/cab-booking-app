import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import { useState } from 'react';
import './Header.css'
import { NavLink } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Header(props) {

  const navigate = useNavigate();

  const userid = sessionStorage.getItem("email");

  const [showModel, setShowModel] = useState(false);

  //logout code
  const handleLogOut = () => {
    sessionStorage.removeItem("isAuth");
    sessionStorage.removeItem("email");
    navigate("/");
    props.setIsAuth(false);
  }

  return (
    <div className='head'>
      <div className='header'>
        <div className="navbar">
          <LocalTaxiIcon className='logo' />
          <h2>Cab Service</h2>
        </div>
        <div className='user'>
          <p>{userid}</p>
          <i className="fa-regular fa-user own-user" onClick={() => setShowModel((toggle) => !toggle)}></i>
        </div>
      </div>
      {
        showModel ? <div className='account-popup'>
          <div className="account-wrapper">
            <NavLink className="username-wrapper">
              <h4>John Mehata</h4>
              <p>Head</p>
            </NavLink>
            <NavLink className="profile-wrapper">
              <i className="fa-regular fa-user"></i>
              <h5>My Profile</h5>
            </NavLink>
            <NavLink className="profile-wrapper">
            <i className="fa-regular fa-pen-to-square"></i>
              <h5>Edit Profile</h5>
            </NavLink>
            <NavLink className="profile-wrapper">
              <i className="fa-regular fa-envelope"></i>
              <h5>Inbox</h5>
            </NavLink>
            <NavLink className="profile-wrapper">
              <i className="fa-solid fa-gear"></i>
              <h5>Setting</h5>
            </NavLink>
            <NavLink className="profile-wrapper">
            <i className="fa-regular fa-circle-question"></i>
              <h5>Help</h5>
            </NavLink>
            <NavLink className="profile-wrapper" onClick={handleLogOut}>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
              <h5>Logout</h5>
            </NavLink>
          </div>
        </div>
          : ""
      }
    </div>
  )
}

export default Header