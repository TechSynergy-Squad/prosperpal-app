import { NavLink } from "react-router-dom";
import { Logo } from "../../assets";

export const Nav = () => {
  const navLinks = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "Goals",
      path: "/goals",
    },
    {
      name: "John Doe",
      path: "/profile",
    },
    {
      name: "Logout",
      path: "/login",
    },
  ];
  return (
    <nav className="w-full sticky bg-transparent drop-shadow-2xl">
      <ul className="flex justify-between items-center p-3">
        <img src={Logo} alt="logo" className="w-12" />
        <section className="flex justify-between gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={`${link.name
                .replace(" ", "")
                .toLowerCase()} text-xs hover:text-blue-300`}
            >
              {link.name}
            </NavLink>
          ))}
        </section>
      </ul>
    </nav>
  );
};
