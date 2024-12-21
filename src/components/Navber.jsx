import { Link } from "react-router-dom";
import returno from "../assets/returno_logo.png";

const Navber = () => {
  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="lostAndFound">Lost & Found Items</Link>
      </li>
    </>
  );

  return (
    <div className="shadow-sm border-b">
      <div className="navbar w-11/12 mx-auto">
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
              className="menu menu-sm dropdown-content bg-base-100  z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link className="">
            <img className="w-60" src={returno} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end flex items-center gap-3 md:gap-5">
          <div className="dropdown dropdown-end  ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar "
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100  z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/manageMyItems" className="justify-between">
                  Manage My Items
                  {/* <span className="badge">New</span> */}
                </Link>
              </li>
              <li className="my-1">
                <Link to="/allRecoveredItems">All Recovered Items</Link>
              </li>
              <li>
                <Link to="/addLostAndFoundItem">Add Lost & Found Item</Link>
              </li>
            </ul>
          </div>
          <Link
            to="/login"
            className="py-1 px-4 bg-teal-600 text-white rounded-md"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
