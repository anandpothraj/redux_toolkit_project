import React, { useEffect } from 'react';
import { fetchUsers } from './userSlice';
import { useSelector, useDispatch } from 'react-redux';

export const UserView = () => {
  
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  },[]);
  
  return (
    <div>
      <h2>List of users</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error : {user.error}</div> : null}
      {
        !user.loading && user.users.length > 0 ? (
          <ul>
            {user.users.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        ) : null
      }
    </div>
  )
}