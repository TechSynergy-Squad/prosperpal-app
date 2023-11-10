import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="w-screen ">
      <ul className="flex gap-6 font-bold">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
