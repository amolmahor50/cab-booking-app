
import './User.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import UserAdd from './UserAdd';
import { useEffect, useState } from 'react';
import axios from 'axios';

function User() {

  const [userData, setUserData] = useState([])

  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    getData();
  },[])

  const getData = () => {
    axios.get("http://localhost:8000/users")
    .then((res) => {
        setUserData(res.data)
    })
    .catch((error) => {
      setUserData(error);
    });
   
  }
  

  return (
    <div className='containt-main-section'>
      <h1>User Managment</h1>
      <div className="btn-div">
        <button type='add' className='btn' onClick={() => setShowModel(true)}>Add User</button>
        <button type='remove' className='btn'>Remove All User</button>
      </div>
      <div className='user-data'>
        <table>
          <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Status</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
          {
            userData.map((ele) => {
              return(
              <tr>
                <td>{ele.id}</td>
                <td>{ele.firstName}</td>
                <td>{ele.lastName}</td>
                <td>{ele.email}</td>
                <td>{ele.address}</td>
                <td>{ele.contact}</td>
                <td>{ele.status}</td>
                <td>{ele.role}</td>
                <td className='user-data-update'>
                  <span className='edit'><EditIcon /></span>
                  <span className='delete'><DeleteIcon /></span>
                </td>
              </tr>
             ) })

          }
        </table>
      </div>
      {showModel &&
        <UserAdd closeModel={setShowModel} />
      }
    </div>
  )
}

export default User