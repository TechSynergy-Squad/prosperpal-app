import { NavLink } from "react-router-dom";
import { Logo } from "../../assets";
import { FiHome, FiLogOut, FiTarget, FiUser } from "react-icons/fi";

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
      name: "Profile",
      path: "/profile",
    },
    {
      name: "Logout",
      path: "/login",
    },
  ];

  const icons = [
    <FiHome size={24} />,
    <FiTarget size={24} />,
    <FiUser size={24} />,
    <FiLogOut size={24} />,
  ];
  return (
    <nav className="w-full sticky bg-transparent drop-shadow-2xl max-w-[180px]">
      <ul className="flex flex-col p-3">
        <img src={Logo} alt="logo" className="w-[150px] self-center" />
        <section className="flex flex-col justify-between gap-6 ">
          {navLinks.map((link, index) => (
            <section className="flex  justify-center items-center gap-2 text-primary hover:text-blue-300">
              {icons[index]}
              <NavLink
                key={link.name}
                to={link.path}
                className={`${link.name
                  .replace(" ", "")
                  .toLowerCase()} text-xs `}
              >
                {link.name}
              </NavLink>
            </section>
          ))}
        </section>
      </ul>
    </nav>
  );
};
