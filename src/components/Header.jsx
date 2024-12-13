import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#7BD3EA] text-white py-4 px-6 lg:px-12">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold">
          CHILL GAMER
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-5 font-bold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#F5A623]" : "hover:text-gray-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/allReview"
            className={({ isActive }) =>
              isActive ? "text-[#F5A623]" : "hover:text-gray-300"
            }
          >
            All Review
          </NavLink>
          <NavLink
            to="/addReview"
            className={({ isActive }) =>
              isActive ? "text-[#F5A623]" : "hover:text-gray-300"
            }
          >
            Add Review
          </NavLink>
          <NavLink
            to="/myReview"
            className={({ isActive }) =>
              isActive ? "text-[#F5A623]" : "hover:text-gray-300"
            }
          >
            My Reviews
          </NavLink>
          <NavLink
            to="/watchList"
            className={({ isActive }) =>
              isActive ? "text-[#F5A623]" : "hover:text-gray-300"
            }
          >
            Game WatchList
          </NavLink>

          {/* User Authentication */}
          {user && user.email ? (
            <>
              <img
                className="rounded-full w-10 h-10 cursor-pointer"
                src={user?.photoURL}
                alt="Profile"
                title={user.displayName}
              />
              <button
                onClick={logOut}
                className="btn btn-neutral rounded-none text-sm"
              >
                LogOut
              </button>
            </>
          ) : (
            <NavLink
              to="/auth/login"
              className="btn btn-neutral rounded-none text-sm font-bold"
            >
              Login
            </NavLink>
          )}

          {/* Theme Toggle */}
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              value="dark"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className="lg:hidden mt-4 space-y-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "block text-[#F5A623]"
                : "block hover:text-gray-300"
            }
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/allReview"
            className={({ isActive }) =>
              isActive
                ? "block text-[#F5A623]"
                : "block hover:text-gray-300"
            }
            onClick={() => setMenuOpen(false)}
          >
            All Review
          </NavLink>
          <NavLink
            to="/addReview"
            className={({ isActive }) =>
              isActive
                ? "block text-[#F5A623]"
                : "block hover:text-gray-300"
            }
            onClick={() => setMenuOpen(false)}
          >
            Add Review
          </NavLink>
          <NavLink
            to="/myReview"
            className={({ isActive }) =>
              isActive
                ? "block text-[#F5A623]"
                : "block hover:text-gray-300"
            }
            onClick={() => setMenuOpen(false)}
          >
            My Reviews
          </NavLink>
          <NavLink
            to="/watchList"
            className={({ isActive }) =>
              isActive
                ? "block text-[#F5A623]"
                : "block hover:text-gray-300"
            }
            onClick={() => setMenuOpen(false)}
          >
            Game WatchList
          </NavLink>

          {/* User Authentication */}
          {user && user.email ? (
            <>
              <img
                className="rounded-full w-10 h-10 cursor-pointer"
                src={user?.photoURL}
                alt="Profile"
                title={user.displayName}
              />
              <button
                onClick={() => {
                  logOut();
                  setMenuOpen(false);
                }}
                className="btn btn-neutral rounded-none text-sm"
              >
                LogOut
              </button>
            </>
          ) : (
            <NavLink
              to="/auth/login"
              className="btn btn-neutral rounded-none text-sm font-bold"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </NavLink>
          )}

          {/* Theme Toggle */}
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              value="dark"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </nav>
      )}
    </header>
  );
};

export default Header;
