import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HomePage from "./components/HomePage";
import SuccessPage from "./components/SuccessPage";


function App() {
  const [signedUp, setSignedUp] = useState(false);
  const [email, setEmail] = useState('');
  
  function logIn(){
    setSignedUp(true);
  }

  function logOut(){
    setSignedUp(false);
  }

  function captureEmail(mail){
    setEmail(mail);
  }

  return (
    <div className="bg-charcoalGray min-h-screen flex lg:justify-center lg:items-center">
      {!signedUp ? <HomePage  logIn={logIn} captureEmail={captureEmail} /> : <SuccessPage logOut={logOut} email={email} />}
      <ToastContainer />
    </div>
  )
}

export default App
