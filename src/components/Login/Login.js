import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import CATLogo1 from '../../images/cta-logo-one.svg'
import CATLogo2 from '../../images/cta-logo-two.png'
import { UserContext } from "../../App";
const Login = () => {
  const [,,,token] = useContext(UserContext);
  return (
    <section className="container">
      <div className="content">
        <div className="CTA">
          <img
            className="CTALogoOne"
            src={CATLogo1}
            alt=""
          />
          <Link to='/home' className="SignUp">GET ALL THERE</Link>
          <p className="Description">
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </p>
          <img
            className="CTALogoTwo"
            src={CATLogo2}
            alt=""
          />
        </div>
        <div className="BgImage"></div>
      </div>
    </section>
  );
};

export default Login;
