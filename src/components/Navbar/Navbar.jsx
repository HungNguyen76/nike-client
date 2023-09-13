import {Link, useNavigate} from "react-router-dom";
import logo from '@img/nike.png'
import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import actions from '../../stores/actions';


export default function Navbar() {
  const store = useSelector(store => store)
  console.log("store", store)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    if (window.confirm("Bạn có muốn đăng xuất không?")) {
      localStorage.removeItem("token");
      dispatch(actions.logOut());
      navigate("/login");
    }
  };
  const [isLogin, setIsLogin] = useState(() => localStorage.getItem("token") || null);
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navbar brand */}
            <Link className="navbar-brand mt-2 mt-lg-0" to="/">
              <img
                src={logo}
                height={15}
                alt="MDB Logo"
                loading="lazy"
              />
            </Link>
            {/* Left links */}
            <ul className="navbar-nav mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <a className="nav-link text-reset" href="#">
                  Mens
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-reset" href="#">
                  Womens
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-reset" href="#">
                  Kids
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-reset" href="#">
                  Sales
                </a>
              </li>
            </ul>
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
          {/* Right elements */}
          <div className="d-flex align-items-center">
            {/* Icon */}
            <a className="text-reset me-3" href="#">
              <i className="fas fa-shopping-cart" />
            </a>
            {/* Notifications */}
            <div className="dropdown">
              <a
                className="text-reset me-3 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bell" />
                <span className="badge rounded-pill badge-notification bg-danger">
                  1
                </span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Some news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            {/* Avatar */}
            <div className="dropdown">
              <a
                className="text-reset me-3 dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                {!isLogin ? (
                    <i className="fas fa-user "></i>
                ) : (
                    <div className="avatarBox">
                    <span>
                      Xin chào,{" "}
                      {`${store.userStore.data?.user_name
                          .toUpperCase()
                          .charAt(0)}${store.userStore.data?.user_name.slice(
                          1
                      )}`}
                    </span>
                      <img
                          src="https://firebasestorage.googleapis.com/v0/b/final-project-react-eda92.appspot.com/o/images%2FMinhu.jpeg?alt=media&token=e37d9e4a-17c0-450f-af54-42b766f8d922"
                          className="rounded-circle"
                          height={25}
                          alt="Black and White Portrait of a Man"
                          loading="lazy"
                      />
                    </div>
                )}

                {/*<i className="fas fa-user" />*/}
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    My profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  {isLogin ? (
                      <Link
                          className="dropdown-item"
                          to="/"
                          onClick={handleLogout}
                      >
                        Logout
                      </Link>
                  ) : (
                      <Link className="dropdown-item" to="/login">
                        Login
                      </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
          {/* Right elements */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>
  );
}
