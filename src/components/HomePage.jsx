import { useState } from "react";
import {toast} from "react-toastify";

import mobileBcnd from "../assets/illustration-sign-up-mobile.svg";
import deskBcnd from "../assets/illustration-sign-up-desktop.svg";
import chackSign from "../assets/icon-list.svg";

const screenWidth = window.innerWidth;
const validEmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function HomePage({ logIn, captureEmail }) {
  const [ email, setEmail ] = useState('');
  const [ isValid, setIsValid ] = useState(false);
  const [ fieldInvalid, setFieldInvalid ] = useState(false);
  const [ message, setMessage ] = useState('');

  function submitForm(e){
    e.preventDefault();

    if ( email === '' && email.length === 0 ){
      setIsValid(false);
      setFieldInvalid(true);
      setMessage("Can't be blank");
      toast.error("Please enter your email address.");
    } else if ( email !== '' &&  email.match(validEmail) && email.includes('.')) {
      setIsValid(true);
      setFieldInvalid(false);
      setMessage("");
      toast.success("You've successfully signed up!")
      logIn();
      captureEmail(email);
    } else {
      setIsValid(false);
      setFieldInvalid(true);
      setMessage("Valid email required");
      toast.error("Please enter a valid email address.");
    }
  }


  return (
    <main className="bg-white mx-auto lg:flex lg:flex-row-reverse lg:rounded-3xl lg:w-7/12 lg:p-6" >
      <img className="w-full mx-auto lg:ml-auto lg:mr-0 lg:max-w-xs lg:flex-1" src={screenWidth < 1024 ? mobileBcnd : deskBcnd} alt="background" />
      <div className="px-6 pt-8 pb-2 text-darkGray lg:self-center lg:px-14 lg:pb-8 lg:flex-1">
        <h1 className="pb-4 text-4xl font-bold lg:text-5xl">Stay updated!</h1>
        <p className="leading-5">Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className="py-4 leading-5">
          <li className="my-2 flex gap-4 items-start"><img src={chackSign} alt="checkSign" className="translate-y-1"/> Product discovery and building what matters</li>
          <li className="my-2 flex gap-4 items-start"><img src={chackSign} alt="checkSign" className="translate-y-1"/> Measuring to ensure updates are a success</li>
          <li className="my-2 flex gap-4 items-start"><img src={chackSign} alt="checkSign" className="translate-y-1"/> And much more!</li>
        </ul>
        {/* form */}
        <form className="pt-2" onSubmit={submitForm}>
          <div>
            <div className="flex justify-between">
              <label htmlFor="email" className="font-bold text-xs">Email address</label>
              <span className="font-bold text-xs text-tomato">{message}</span>
            </div>
            <input className={`w-full my-2 py-2 px-6 rounded-lg border border-solid border-justGray focus:outline-0 focus:border-charcoalGray ${fieldInvalid ? 'border-tomato text-tomato bg-lightTomato' : ''}`} type="text" name="email" id="email" placeholder="email@company.com" value={email} onChange={(e) => {setEmail(e.currentTarget.value)}} />
          </div>
          <button className="w-full mt-3 py-3 px-6 rounded-lg bg-charcoalGray text-white font-bold text-sm hover:bg-gradient-to-r from-purple to-tomato hover:drop-shadow-2xl" type="submit">Subscribe to monthly newsletter</button>
        </form>
      </div>
    </main>
  )
}

export default HomePage