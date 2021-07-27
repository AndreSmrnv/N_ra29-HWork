import React, { useState } from 'react';
import { INIT_FORM } from '../utils/initData';



export default function UsersList({ users, changeUser, userId }) {

  

  return (
    <>
      
      <ul className="list-group">
        <li  className="list-group-item disabled ">User list</li>
        {users && users.map((user) => (
          <li
            className={ user.id === userId ? "list-group-item active" : "list-group-item "}
            key={user.id}
            onClick={ () => changeUser(user.id)}
          >
            {user.name}
          </li>
        ))}

      </ul>

    </>
  );
}
