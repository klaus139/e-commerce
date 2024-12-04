import React from "react";
import logo from "../../assets/images/klaumart.png";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { FaRegUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";

import CountryDropdown from "../countryDropdown";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-blue">
          <div className="container">
            <p className="mb-0 mt-0 text-center ">
              <b>Flash Sales</b> are 30% OFF, Terms and Conditions apply
            </p>
          </div>
        </div>

        <div className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to={"/"}>
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <div className="col-sm-10 d-flex align-items-center part2">
                <CountryDropdown />

                {/* header search bar starts here */}
                <div className="headerSearch ml-3 mr-3">
                  <input className="header-input" type="text" placeholder="search for products..." />
                  <button className="btn">
                    <FiSearch />
                  </button>
                </div>

                {/* header search bar ends here */}


                <div className="part3 d-flex align-items-center ml-auto">
                  <Button className="circle mr-3">
                  <FaRegUser />
                  </Button>
                  <div className="ml-auto cartTab d-flex  align-items-center">
                    <span className="price">$150</span>
                   <div className="position-relative ml-2">
                   <Button className="circle ">
                    <IoBagOutline />
                  </Button>
                  <span className="count d-flex align-items-center justify-content-center">1</span>

                   </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
