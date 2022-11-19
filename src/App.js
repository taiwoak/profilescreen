import React from 'react'
import ProfileNav from './Components/ProfileScreen/ProfileNav';
import ProfileScreen from './Components/ProfileScreen/ProfileScreen';
import ProfileSideBar from './Components/ProfileScreen/ProfileSideBar';

function App() {
  return (
    <div>
      <ProfileSideBar />
      <ProfileNav />
      <ProfileScreen />
    </div>
  );
}

export default App;
