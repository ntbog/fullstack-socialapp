import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1', 
      name: 'Filo Tan', 
      image: 'https://vignette.wikia.nocookie.net/the-rising-of-the-shield-hero/images/9/92/Firo_Light_Novel.png/revision/latest/scale-to-width-down/310?cb=20200202112701',
      places: 3
    }
  ];

  return <UsersList items={USERS}/>;
};

export default Users;
