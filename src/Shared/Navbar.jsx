import { Link } from "react-router-dom";
import Resume from "../assets/Skills/Untitled document.pdf"

const Navbar = () => {
    
  return (
    <div className="bg-gray-950  top-0 sticky z-20">
    
      <div className="navbar shadow-2xl  text-white ">
      
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
              <Link>Home</Link>
              </li>
              <li>
              <Link>About Us</Link>
              </li>
              <li>
              <Link>Skills</Link>
              </li>
              <li>
              <Link>Project</Link>
            </li>
            <li>
              <Link>Contact US</Link>
            </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl">JF</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
             <Link >About Us</Link>
            </li>
            <li>
              <Link>Skills</Link>
            </li>
            <li>
              <Link>Project</Link>
            </li>
            <li>
              <Link>Contact US</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
         
          <a className="btn border-0 text-white bg-purple-500 hover:bg-purple-700" href={Resume} download={Resume}>Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
