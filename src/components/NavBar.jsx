import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/letter-d (1).png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-slate-900">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link to="/">
              <img src={Logo} className="h-12" alt="logo" />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-lg font-bold text-gray-100 transition hover:text-red-500/75"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-lg font-bold text-gray-100 transition hover:text-red-500/75"
                    to="/process"
                  >
                    Process
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-lg font-bold text-gray-100 transition hover:text-red-500/75"
                    to="/stats"
                  >
                    Stats
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                className="rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                to="#"
              >
                Login
              </Link>
              <div className="hidden sm:flex">
                <Link
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-red-600"
                  to="#"
                >
                  Register
                </Link>
              </div>
            </div>
            <div className="block md:hidden">
              <button
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 px-4 pt-2 pb-4">
          <ul className="text-gray-100 text-lg font-bold">
            <li className="mb-2">
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/process" onClick={toggleMenu}>
                Process
              </Link>
            </li>
            <li>
              <Link to="/stats" onClick={toggleMenu}>
                Stats
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
