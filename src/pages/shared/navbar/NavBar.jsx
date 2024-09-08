import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";
import logo from "../../../assets//logo.png";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [carts] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      <li>
        <Link to="/secret">Secret</Link>
      </li>
      {
        //user ? 'true' : 'false'
        //user ? condition ? 'double true' : 'one true' : 'false'
      }
      {user && isAdmin && (
        <li>
          <Link to="/dashboard/adminhome">Dashboard</Link>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <Link to="/dashboard/userhome">Dashboard</Link>
        </li>
      )}
      <li>
        <Link to="/dashboard/cart">
          <div className="flex justify-center items-center">
            <FaCartPlus />
            <p className="bg-slate-400 px-2 rounded-xl mx-1 md:-mt-4">
              +{carts.length}
            </p>
          </div>
        </Link>
      </li>
      {user ? (
        <>
          <li onClick={handleLogOut} className="cursor-pointer">
            Log-Out
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar fixed bg-opacity-60 bg-[#0f110c] z-10 text-white max-w-screen-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </button>
          <ul
            tabIndex={0}
            className="flex flex-col bg-gray-900 dropdown-content justify-center items-center rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img className="w-8 -mt-2" src={logo} alt="" />
          BistroBoss
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex justify-center items-center  px-1 space-x-4">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/contact" className="btn">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
