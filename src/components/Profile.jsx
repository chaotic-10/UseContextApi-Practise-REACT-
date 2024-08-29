import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <h1>NOT LOGGED IN</h1>;
  }

  return (
    <div>
      <div>Profile: {user.userName}</div> {/* Correctly access the userName property */}
      <h1>Logged In</h1>
    </div>
  );
};

export default Profile;
