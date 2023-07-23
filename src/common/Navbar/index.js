import { Link } from "react-router-dom";
import githubIcon from "../../Assets/Icons/github.png";

import { navItems } from "../../DB/NavItems";

export function Navbar() {
  return (
    <header className="flex items-center justify-between p-4 bg-primary">
      <Link to="/" className="flex items-center">
        <img
          src={githubIcon}
          alt="github"
          title="github"
          width={36}
          height={36}
        />
        <p className="text-base md:text-2xl text-white font-bold ml-2">Github Search</p>
      </Link>
      <nav>
        <ul className="flex items-center justify-start">
          {navItems.map((nav) => {
            return (
              <li key={nav.id} className="mx-2 text-white text-base font-bold">
                <Link to={nav.path}>{nav.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
