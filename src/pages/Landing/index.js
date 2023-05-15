import React, { useEffect } from 'react';
import Contact from './Contact';
import Career from './Career';
import FAQs from './FAQs';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import WorkProcess from './WorkProcess';
import StudentLoan from './StudentLoan';
import Benefits from './Benefits';
import Products from './Products';
import { useDispatch } from 'react-redux';

// import { loginUser } from "../../store/actions";

const Landing = (props) => {
  document.title = 'GapFinance';

  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    const element = document.getElementById('back-to-top');
    if (element) {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    }
  };

  const toTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <React.Fragment>
      <div className="layout-wrapper landing">
        <Navbar />
        <Home />
        <WorkProcess />
        <Benefits />
        <Products />
        <StudentLoan />
        {/* <About /> */}
        {/* <Career /> */}
        <FAQs />
        <Contact />
        <Footer />
        <button
          onClick={() => toTop()}
          className="btn btn-danger btn-icon landing-back-top"
          id="back-to-top"
        >
          <i className="ri-arrow-up-line"></i>
        </button>
      </div>
    </React.Fragment>
  );
};

export default Landing;
