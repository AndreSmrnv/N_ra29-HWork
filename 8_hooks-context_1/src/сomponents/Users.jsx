import React, { useState, useEffect } from "react";
import UsersList from "./UsersList";
import UsersCard from "./UsersCard";
import { INIT_DATA, INIT_ERROR } from '../utils/initData';
import {  TryAgain } from '../utils/shared/Components';




export default function Users() {
  const [users, setUsers] = useState(INIT_DATA);
  const [userId, setUserId] = useState(0);
  const [userDetails, setUserDetails] = useState({});
  const [apiError, setApiError] = useState(INIT_ERROR);

  useEffect(() => {
    getData()
  }, []);

  useEffect(() => {
    getUserDetails(userId)
  }, [userId]);

  const getData = async () => {
    setApiError(INIT_ERROR);
    await fetch(`${process.env.REACT_APP_URL}/users.json`)
      .then(
        (response) => (response.ok)
           ? response.json()
           : Promise.reject(`api err: ${response.status}`)
      )
      .then((result) => {
        setUsers([...result]);
      })
      .catch(e => {
        console.log(e);
        setApiError(prev=> ({...prev, getUserFailed: true, errorMsg: e  }));
      }) ;

      
  }
  const getUserDetails = async (id) => {
    setApiError(INIT_ERROR);
    id && await fetch(`${process.env.REACT_APP_URL}/${id}.json`)
      .then(
        (response) => (response.ok)
        ? response.json()
        : Promise.reject(`api err: ${response.status}`)
      )
      .then((result) => {
        setUserDetails({ ...result });
      })
      .catch(e => {
        console.log(e);
        setApiError(prev=> ({...prev, getUserDetailsFailed: true, errorMsg: e  }));
      }) ;
  }
  const changeUser = (id) => {
    setUserId(id);

  };
  
  console.log(users);
  console.log(userId);
  console.log(userDetails);

  if (apiError.getUserFailed || apiError.getUserDetailsFailed) {
    return <TryAgain error={ apiError.errorMsg}/>
  }

  return (
    <>
      <div className="row" >
            <div className="col-4">
          <UsersList users={users} changeUser={changeUser} userId={ userId} />
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
