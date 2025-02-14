import { NavLink } from "react-router";
import vodtex from "/vodtex.webp";
function Home() {
  return (
    <div>
      <nav className="flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-4">
          <img src={vodtex} alt="vodtex icon" className="size-10 rounded-full" />
          <span className="text-3xl font-bold">VODTEX</span>
        </NavLink>
        <div className="flex items-center gap-4">
          <NavLink to="/admin">Admin</NavLink>
          <NavLink to="/caedrel">Caedrel</NavLink>
          <NavLink to="/login" className="navlink bg-cinder-600">
            Log in
          </NavLink>
        </div>
      </nav>
      Home
    </div>
  );
}

export default Home;
