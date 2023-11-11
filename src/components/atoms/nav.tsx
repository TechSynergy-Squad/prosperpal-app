import { NavLink } from "react-router-dom";

export const Nav = () => {
  const navLinks = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "Profile",
      path: "/profile",
    },
    {
      name: "Forms",
      path: "/form",
    },
    {
      name: "My IP",
      path: "/my-ip",
    },
    {
      name: "Events",
      path: "/events",
    },
    {
      name: "Attendees",
      path: "/attendees",
    },
    {
      name: "Logout",
      path: "/login",
    },
  ];
  return (
    <nav className="w-full sticky bg-[#191a1f] text-blue-500 drop-shadow-2xl">
      <ul className="flex justify-between items-center p-3">
        <h2 className="text-2xl font-bold">React Workshop</h2>
        <section className="flex justify-between gap-6">
          {navLinks.map((link) => (
            <NavLink
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
