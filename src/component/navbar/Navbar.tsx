import "./navbar.scss";

export const Navbar = () => {
  interface NavItem {
    section: string;
    link: string;
  }

  const navItems: NavItem[] = [
    { section: "start", link: "#container" },
    { section: "resume", link: "#resume" },
    { section: "projects", link: "#projects" },
  ];

  return (
    <>
      <nav className="navbar">
        {navItems.map((item) => {
          return (
            <a href={item.link} className="navItem" key={item.section}>
              {item.section}
            </a>
          );
        })}
      </nav>
    </>
  );
};
