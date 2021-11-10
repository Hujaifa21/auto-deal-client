import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const DashBoard = () => {
  const { user } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              
              {user?.email ? (
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/myOrder"
                  >
                    My Order
                  </Link>
                </li>
              ) : (
                <li></li>
              )}
              {user?.email ? (
                <li className="nav-item">
                  <Link className="nav-link active" to="/review">
                    Review
                  </Link>
                </li>
              ) : (
                <li></li>
              )}
              {user?.email ? (
                <li className="nav-item">
                  <Link className="nav-link active" to="/pay">
                    Pay
                  </Link>
                </li>
              ) : (
                <li></li>
              )}
            </ul>
          </div>
      </nav>
    </div>
  );
};

export default DashBoard;
