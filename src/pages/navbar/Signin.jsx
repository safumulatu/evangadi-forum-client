import React from 'react';
import './signin.css'
function Signin() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <div className="container-dpg d-md-8jv mx-6n1 py-5ce item-xrw">
        <div className="wrapper-csq col-eex col-dnt me-md-ekj p-otm d-m3a column-85g">
          <p>
            Join the network
          </p>
          <p className="talff">
            Already have an account?
            <a className="hwmxo" href="/login">
              Sign in
            </a>
          </p>
          <form onSubmit={handleSubmit}>
            <input className="in1-8mn" name="email" type="email" placeholder="Email" id="ema-492" />
            <div className="d-m3a">
              <input className="in1-8mn me-3d2" name="firstName" type="text" placeholder="First Name" id="fir-8gp" />
              <input className="in1-8mn ms-7pr" name="lastName" type="text" placeholder="Last Name" id="las-543" />
            </div>
            <input className="in1-8mn" name="userName" type="text" placeholder="User Name" id="use-zwh" />
            <input className="in1-8mn" name="password" type="password" placeholder="Password" id="pas-8gg" />
            <span className="sho-leo field-agk">
              <i className="style-oXfnE" id="style-oXfnE">
                <svg fill="none" height="20" width="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }} className="snipcss0-4-13-14">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
              </i>
            </span>
            <button className="btn-dve" type="submit">
              Agree and Join
            </button>
          </form>
          <p className="mt-md-o25 mt-sm-2e5 text-6aq text-fdp">
            I agree to the
            <a className="avcwc" href="/signup">
              privacy policy
            </a>
            and
            <a className="avcwc" href="/signup">
              terms of service.
            </a>
          </p>
          <a className="oyopp text-6aq" href="/login">
            Already have an account?
          </a>
        </div>
        <div className="Sig-5v3 container-dpg col-eex col-dnt ms-md-x6l mt-sm-2e5">
          <p className="for-jkc">
            About
          </p>
          <h1>
            Evangadi Networks Q&amp;A
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem voluptate officiis beatae nobis pariatur omnis facere accusamus laboriosam hic, adipisci vero reiciendis, recusandae sit ad, eum quisquam! Molestias, ut commodi!
          </p>
          <p>
            No matter what stage of life you are in, whether you’re just starting elementary school or being promoted to CEO of a Fortune 500 company, you have much to offer to those who are trying to follow in your footsteps.!
          </p>
          <p>
            Wheather you are willing to share your knowledge or you are just looking to meet mentors of your own, please start by joining the network here.
          </p>
          <button className="btn-rx8">
            HOW IT WORKS
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
