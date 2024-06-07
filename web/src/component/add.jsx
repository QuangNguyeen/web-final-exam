import React from 'react';
import '../css/add.css';

export default function Add({onClose, onChange, onAdd}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd();
    };
    return (
        <div className='container-fluid' id='pop'>
            <div className="row" id="block" >

            <div className="add-title" >
                <h2>Add Student</h2>
                <i className="fa-solid fa-xmark" onClick={onClose}></i>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="name">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder='' onChange={onChange}/>
                </div>
                <div className="birth">
                    <label htmlFor="birth">Date of birth</label>
                    <input type="text" name="birth" placeholder='' onChange={onChange}/>
                </div>
                <div className="position">
                    <label htmlFor="position">position</label>
                    <input type="text" name="position" placeholder='' onChange={onChange}/>
                </div>            
                <div className="submit">
                    <button id="cancel">Cancel</button>
                    <button type='submit'>Add</button>
                </div>
            </form>
            </div>
        </div>
    )
}
