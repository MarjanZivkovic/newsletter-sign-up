import iconSuccess from '../assets/icon-success.svg';

function SuccessPage({logOut, email}) {
  return (
    <main className="bg-white min-h-screen flex flex-col justify-between m-auto px-6 lg:rounded-3xl lg:min-h-max lg:w-1/3 lg:p-10" >
      <div className="flex flex-col flex-1 justify-center text-darkGray pt-8 pb-2 mb-20 lg:mb-6 lg:pt-0">
        <div className='mb-8 lg:mb-6'>
          <img src={iconSuccess} alt="icon success" />
        </div>
        <h1 className="pb-4 text-4xl font-bold lg:text-5xl">Thanks for subscribing!</h1>
        <p className="leading-5">A confirmation email has been sent to <span className='font-bold'>{email ? email : 'ash@loremcompany.com'}</span>. Please open it and click the button inside to confirm your subscription.</p>
      </div>
      <button className="w-full mb-6 py-3 px-6 rounded-lg bg-charcoalGray text-white font-bold text-sm lg:mb-0 hover:bg-gradient-to-r from-purple to-tomato hover:drop-shadow-2xl" type="button" onClick={logOut}>Dismiss message</button>
    </main>
  )
}

export default SuccessPage;