import React from 'react';


export default function UsersCard({ user }) {

  // const user 
  return (

    <div className="card">
      <img src={user.avatar} className="card-img-top" style={{ height: '22rem', width: 'auto' }} />
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>

      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{user.details.city}</li>
        <li className="list-group-item">{user.details.company}</li>
        <li className="list-group-item">{user.details.position}</li>
      </ul>
    </div>

  );
}
