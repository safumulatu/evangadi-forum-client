import './Header.css';
import headerlogo from '../../assets/headerlogo.png';
import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppState } from '../../App';

function Header() {
  const { user, setuser } = useContext(AppState);
  const navigate = useNavigate();

  const logout = () => {
    // Clear the user object
    setuser(null);
    // Clear token from localStorage
    localStorage.setItem("token", "");
    navigate("/login");
  };

  useEffect(() => {
    // Check if a token is present in localStorage
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      // If a token is present, set the user as logged in
      setuser({});
    } else {
      // If no token is present, set the user as logged out
      setuser(null);
    }
  }, []);

  return (
    <div>
      <div className="header-r11 container-dpq">
        <div className="inn-mh5 container-v83 d-alp content-4qh">
          <a href="/">
            <img src={headerlogo} alt="" />
          </a>
          <button className="rkfxm block-fbi d-md-x2t">
            ☰
          </button>
          <div className="d-alp inn-e3q content-mo5 d-7xp block-tsc">
            <a href="/">
              Home
            </a>
            <a href="/">
              How it Works
            </a>
            <button className="header-4c8">
              {user ? (
                <span onClick={logout} className="tomblue">
                  LOG OUT
                </span>
              ) : (
                <Link to="/login">
                  <span className="tomblue">SIGN IN</span>
                </Link>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
