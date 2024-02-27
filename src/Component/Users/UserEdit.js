import { useState } from 'react';
import './User.css'

function UserEdit(props) {

    let setShowModel = props.closeModel;

    //throw the error in form submited
    const [error, setError] = useState('');

    //save the data in local storage
    const [data, setData] = useState([]);

    //initilize the form properties
    const [formValues, setFormValues] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        Address: '',
        Contact: '',
        Status: '',
        Role: ''
    })

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }

    //get all value in your form
    const handleSubmit = (e) => {
        e.preventDefault();
        let ObjData = {
            FirstName: formValues.FirstName,
            LastName: formValues.LastName,
            Email: formValues.Email,
            Address: formValues.Address,
            Contact: formValues.Contact,
            Status: formValues.Status,
            Role: formValues.Role,
        }
        
        const validationError = {}
        if (!formValues.FirstName.trim()) {
            validationError.FirstName = 'First Name is required!'
        }
        if (!formValues.LastName.trim()) {
            validationError.LastName = 'Last Name is required!';
        }
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEmail.test(formValues.Email)) {
            validationError.Email = 'Email is not Valid!';
        }
        if (!formValues.Address.trim()) {
            validationError.Address = 'Address is required!';
        }
        if (!formValues.Contact.trim()) {
            validationError.Contact = 'Contact is required!';
        }
        if (!formValues.Status.trim()) {
            validationError.Status = 'Status is required!';
        }
        if (!formValues.Role.trim()) {
            validationError.Role = 'Role is required!';
        }
        setError(validationError);

        if (Object.keys(validationError).length === 0) {
            alert('add user Successfully....!');
            setData([...data, ObjData]);
            setFormValues("");
        }
    }
    return (
        <div>
            <div className='model-overlay'>
                <div className="open-model">
                    <form onSubmit={handleSubmit}>
                        <div className="input-groop">
                            <div className="input-wrapper">
                                <label>First Name:  </label>
                                <input type="text" name='FirstName' placeholder='FirstName' onChange={handleInput} value={formValues.FirstName} />
                                {error.FirstName && <p className='error'>{error.FirstName}</p>}
                            </div>
                            <div className="input-wrapper">
                                <label>Last Name:</label>
                                <input type="text" name='LastName' placeholder='LastName' onChange={handleInput} value={formValues.LastName} />
                                {error.LastName && <p className='error'>{error.LastName}</p>}
                            </div>
                        </div>
                        <div className="input-groop">
                            <div className="input-wrapper">
                                <label>Email: </label>
                                <input type="text" name='Email' placeholder='Email' onChange={handleInput} value={formValues.Email} />
                                {error.Email && <p className='error'>{error.Email}</p>}
                            </div>
                            <div className="input-wrapper">
                                <label>Address:</label>
                                <input type="text" name='Address' placeholder='Address' onChange={handleInput} value={formValues.Address} />
                                {error.Address && <p className='error'>{error.Address}</p>}
                            </div>
                        </div>
                        <div className="input-groop">
                            <div className="input-wrapper">
                                <label>Contact: </label>
                                <input type="text" name='Contact' placeholder='Contact Number' onChange={handleInput} value={formValues.Contact} />
                                {error.Contact && <p className='error'>{error.Contact}</p>}
                            </div>
                            <div className="input-wrapper">
                                <label>Status:</label>
                                <select name="Status" onChange={handleInput} value={formValues.Status} >
                                    <option value="">--Select Status--</option>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                                {error.Status && <p className='error'>{error.Status}</p>}
                            </div>
                        </div>
                        <div className="input-groop">
                            <div className="input-wrapper">
                                <label>Role: </label>
                                <select name="Role" onChange={handleInput} value={formValues.Role} >
                                    <option value="">--Select User--</option>
                                    <option value="admin">Admin</option>
                                    <option value="employee">Employee</option>
                                    <option value="driver">Driver</option>
                                </select>
                                {error.Role && <p className='error'>{error.Role}</p>}
                            </div>
                        </div>
                        <div className="open-model-btn">
                            <button style={{ backgroundColor: 'black', color: '#fff' }} className='btn' onClick={() => setShowModel(false)}>close</button>
                            <button type='submit' className='btn'>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserEdit;