import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { authService } from './firebase';
import Header from './components/Header';

function Root() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
    // 로그인 확인
    useEffect(() => {
      authService.onAuthStateChanged((user) => {
        if (user) {
          setUserObj(user);
          setLoggedIn(true);
        }
        setInit(true);
      })
    }, []);

  return (
    <div>
      {init && (
      <>
        <Header loggedIn={loggedIn}/>
        <Outlet context={{
          loggedIn: loggedIn,
          userObj: userObj,
        }}/>
      </>
      )}

    </div>
  );
}

export default Root;