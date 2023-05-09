import React, { useEffect } from "react";
import Contact from "./Contact";
import Career from "./Career";
import FAQs from "./FAQs";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import WorkProcess from "./WorkProcess";
import StudentLoan from "./StudentLoan";
import Benefits from "./Benefits";
import Products from "./Products";
import { useDispatch } from "react-redux";

// import { loginUser } from "../../store/actions";

const Landing = (props) => {

  document.title = "GAP Bank";

  // const dispatch = useDispatch();

  useEffect(() => {
    sessionStorage.setItem("authUser", JSON.stringify({ "status": "success", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTliZWZjOWUzZGJjNWJhOWE0NzA4NyIsImlhdCI6MTY4MjQyMjA1MiwiZXhwIjoxNjkwMTk4MDUyfQ.bVMG0FI7m9F3LIz0Nvwe8lThhG1sX7bvO4jV83iKPZU", "data": { "_id": "63e9befc9e3dbc5ba9a47087", "first_name": "testing", "last_name": "Mohammadi", "email": "admin@themesbrand.com", "phone": 93353299096, "image": "", "password": "$2a$12$OdX.AB8Oiz6PEXohnREMjOtIy8h4/Ha3wPMHVcA/J373tQ0afoco2", "role": "0", "confirm_password": "123456789", "changePasswordAt": "2023-02-13T04:32:11.228Z", "skills": ["Photoshop", "illustrator", "HTML", "CSS", "Javascript", "Php", "Python"], "exp_year": ["2018-01-01T00:00:00.000Z", "2023-01-01T00:00:00.000Z"], "__v": 0, "city": "California", "company_name": "Themesbrand", "country": "use", "designation": "Lead Designer / Developer", "job_title": "Developer", "joining_date": "2023-01-01T00:00:00.000Z", "website": "www.velzon.com", "zipcode": "90011", "description": "tehran", "job_description": "You always want to make sure that your fonts work well together and try to limit the number of fonts you use to three or less. Experiment and play around with the fonts that you already have in the software you're working with reputable font websites. ", "portfolio": [{ "logo": "github", "bg_color": "dark", "link": "@daveadame", "_id": "63eb4c2f356e48830e807dba" }, { "logo": "global", "bg_color": "primary", "link": "www.velzon.com", "_id": "63eb4c2f356e48830e807dbb" }, { "logo": "dribbble", "bg_color": "success", "link": "@dave_adame", "_id": "63eb4c2f356e48830e807dbc" }, { "logo": "pinterest", "bg_color": "danger", "link": "Advance Dave", "_id": "63eb4c2f356e48830e807dbd" }], "passwordtoken": "7f509dc18f2da94f0e367da9d8b49d625ba608f77e58f884639a71f47d5aae87", "passwordtokenexp": "2023-02-21T12:34:15.964Z" } }));
  }, []);

  // useEffect(() => {
  //   // sessionStorage.setItem("authUser", JSON.stringify({ "status": "success", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTliZWZjOWUzZGJjNWJhOWE0NzA4NyIsImlhdCI6MTY4MjQyMjA1MiwiZXhwIjoxNjkwMTk4MDUyfQ.bVMG0FI7m9F3LIz0Nvwe8lThhG1sX7bvO4jV83iKPZU", "data": { "_id": "63e9befc9e3dbc5ba9a47087", "first_name": "testing", "last_name": "Mohammadi", "email": "admin@themesbrand.com", "phone": 93353299096, "image": "", "password": "$2a$12$OdX.AB8Oiz6PEXohnREMjOtIy8h4/Ha3wPMHVcA/J373tQ0afoco2", "role": "0", "confirm_password": "123456789", "changePasswordAt": "2023-02-13T04:32:11.228Z", "skills": ["Photoshop", "illustrator", "HTML", "CSS", "Javascript", "Php", "Python"], "exp_year": ["2018-01-01T00:00:00.000Z", "2023-01-01T00:00:00.000Z"], "__v": 0, "city": "California", "company_name": "Themesbrand", "country": "use", "designation": "Lead Designer / Developer", "job_title": "Developer", "joining_date": "2023-01-01T00:00:00.000Z", "website": "www.velzon.com", "zipcode": "90011", "description": "tehran", "job_description": "You always want to make sure that your fonts work well together and try to limit the number of fonts you use to three or less. Experiment and play around with the fonts that you already have in the software you're working with reputable font websites. ", "portfolio": [{ "logo": "github", "bg_color": "dark", "link": "@daveadame", "_id": "63eb4c2f356e48830e807dba" }, { "logo": "global", "bg_color": "primary", "link": "www.velzon.com", "_id": "63eb4c2f356e48830e807dbb" }, { "logo": "dribbble", "bg_color": "success", "link": "@dave_adame", "_id": "63eb4c2f356e48830e807dbc" }, { "logo": "pinterest", "bg_color": "danger", "link": "Advance Dave", "_id": "63eb4c2f356e48830e807dbd" }], "passwordtoken": "7f509dc18f2da94f0e367da9d8b49d625ba608f77e58f884639a71f47d5aae87", "passwordtokenexp": "2023-02-21T12:34:15.964Z" } }));
  //   dispatch(loginUser({
  //     email: "admin@themesbrand.com",
  //     password: "123456",
  //   }, props.router.navigate));
  // }, [dispatch, props.router.navigate]);

  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    const element = document.getElementById("back-to-top");
    if (element) {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
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
