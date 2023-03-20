import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function Root() {
  const [loginChack, setLoginChack] = useState(false);

  const onclick = () => {
    setLoginChack(!loginChack)
  }

  return (
    <div>
      <Header loginChack={loginChack}/>
      <Outlet />
      <button onClick={onclick}>{loginChack ? "로그아웃" : "로그인"}</button>
    </div>
  );
}

export default Root;