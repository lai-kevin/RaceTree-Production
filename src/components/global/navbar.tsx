import Link from "next/link";

const ProfileButton = () => {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
};

interface NavBarProps {
  mode?: "light" | "dark";
  showSignUp?: boolean;
  showSignIn?: boolean;
}
const NavBar:React.FC<NavBarProps> = ({mode, showSignUp, showSignIn}) => {
  if (!mode) mode = "light";
  var bgColor = (mode === "light") ? "bg-base-100" : "bg-neutral";
  var textColor = (mode === "light") ? "text-base-content" : "text-base-100";
  return (
    <div
      className={`navbar ${bgColor}`}
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999 }}
    >
      <div className="flex-1">
      <Link href="/">
        <button className={`btn btn-ghost text-xl ${textColor}`}>RaceTree</button>
      </Link>
      </div>
      <div className="flex-none"></div>

      {showSignUp && (
        <Link href="/sign-up">
          <button className="btn btn-ghost btn-sm rounded-btn bg-primary">Sign Up</button>
        </Link>
      )}
    </div>
  );
};

export default NavBar;
