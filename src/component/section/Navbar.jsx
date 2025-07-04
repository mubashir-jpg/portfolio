import { useEffect } from "react";
import { Link} from "react-router-dom";

export const Navbar = ({ menuopen, setmenuopen }) => {
  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    document.body.style.overflow = menuopen ? "hidden" : "";
    return () => (document.body.style.overflow = ""); // Cleanup
  }, [menuopen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto p-4">
        <div className="flex justify-between h-16 items-center">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            perdo <span className="text-blue-500">.tech</span>
          </a>

          {/* Hamburger for mobile */}
          <div
            className="w-7 h-5 relative cursor-pointer z-50 md:hidden text-white text-3xl"
            onClick={() => setmenuopen((prev) => !prev)}
          >
            {menuopen ? "✕" : "☰"}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/Home" className="text-gray-300 hover:text-white transition-colors">Home</Link>
            <Link to="/About" className="text-gray-300 hover:text-white transition-colors">About</Link>
            <Link to="/Project" className="text-gray-300 hover:text-white transition-colors">Project</Link>
            <Link to="/Conttact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuopen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black/90 text-white z-40 flex flex-col items-center space-y-4 py-6">
          <a href="/Home" className="text-lg hover:text-blue-400" onClick={() => setmenuopen(false)}>Home</a>
          <a href="/About" className="text-lg hover:text-blue-400" onClick={() => setmenuopen(false)}>About</a>
          <a href="/Project" className="text-lg hover:text-blue-400" onClick={() => setmenuopen(false)}>Project</a>
          <a href="/Conttact" className="text-lg hover:text-blue-400" onClick={() => setmenuopen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};
