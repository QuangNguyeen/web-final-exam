import React from 'react';
import '../css/table.css';

export default function Table({ prod, onEdit, onDelete }) {
  return (
    <div className='container-fluid'>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Date of birth</th>
            <th>Position</th>
            <th>status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {prod.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.birth}</td>
              <td>{user.position}</td>
              <td>
                <i className='fa-solid fa-dot-circle'></i>{user.status}</td>
              <td>
                <i className="fa-solid fa-gear" ></i>
                <i className="fa-solid fa-xmark-circle"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
