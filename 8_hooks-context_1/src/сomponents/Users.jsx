import React, { useState, useEffect } from "react";
import UsersList from "./UsersList";
import UsersCard from "./UsersCard";
import { INIT_DATA } from '../utils/initData';




export default function Users() {
  const [users, setUsers] = useState(INIT_DATA);
  const [userId, setUserId] = useState(0);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    getData()
  }, []);

  useEffect(() => {
    getUserDetails(userId)
  }, [userId]);

  const getData = async () => {
    await fetch(`${process.env.REACT_APP_URL}/users.json`)
      .then((response) => response.json())
      .then((result) => {
        setUsers([...result]);
      });
  }
  const getUserDetails = async (id) => {
    await fetch(`${process.env.REACT_APP_URL}/${id}.json`)
      .then((response) => response.json())
      .then((result) => {
        setUserDetails({ ...result });
      });
  }
  const changeUser = (id) => {
    setUserId(id);

  };
  
  console.log(users);
  console.log(userId);
  console.log(userDetails);
  return (
    <>
      <div className="row" >
            <div className="col-4">
          <UsersList users={users} changeUser={changeUser} userId={ userId}/>
            </div>  
            <div className="col-4">
          {userId &&
            (userDetails.id === userId) &&
              <UsersCard user={ userDetails}/>
            }
            </div>    
      </div>
    </>
  );
}
