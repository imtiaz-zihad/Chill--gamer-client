import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      {/* Logo */}
      <img className="w-16 h-16" src={logo} alt="Chill Gamer" />

      {/* Navigation Links */}
      <nav className="grid grid-flow-col gap-4">
        <Link className="link link-hover" to="/allReview">
          All Review
        </Link>
        <Link className="link link-hover" to="/addReview">
          Add Review
        </Link>
        <Link className="link link-hover" to="/myReview">
          My Review
        </Link>
        <Link className="link link-hover" to="/watchList">
          WatchList
        </Link>
      </nav>

      {/* Social Media Links */}
      <nav>
        <div className="grid grid-flow-col gap-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/imtiaz-hossen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.5-.721-1.5-1.616 0-.913.554-1.616 1.438-1.616s1.5.703 1.5 1.616c0 .895-.533 1.616-1.438 1.616zm13.5 10.268h-3v-4.919c0-2.301-2-2.081-2 0v4.919h-3v-9h3v1.229c1.396-2.586 5-2.777 5 2.476v5.295z" />
            </svg>
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/imtiaz-zihad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.085 1.839 1.236 1.839 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.774.419-1.305.762-1.605-2.665-.303-5.467-1.333-5.467-5.931 0-1.31.469-2.382 1.236-3.222-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.405 1.02.006 2.047.139 3.006.405 2.29-1.553 3.297-1.23 3.297-1.23.655 1.653.242 2.873.12 3.176.77.84 1.234 1.912 1.234 3.222 0 4.61-2.807 5.624-5.479 5.921.429.369.812 1.096.812 2.21 0 1.595-.015 2.878-.015 3.271 0 .319.192.694.799.576 4.765-1.59 8.202-6.084 8.202-11.382 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          {/* Twitter */}
          <a
            href="https://x.com/MdImtiazHo74218"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Footer Text */}
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All rights reserved by Chill
          Gamer Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
