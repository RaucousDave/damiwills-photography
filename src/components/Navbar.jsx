const Navbar = () => {
  return (
    <nav className="items-center sm:flex hidden justify-between py-4">
      {/* Logo */}
      <div className="w-12">
        <img src="/images/damiwills-logo.png" alt="logo" />
      </div>
      <div className=" text-charcoal flex gap-3 font-body ">
        <a href="" className="hover:text-beige transition-colors duration-300">
          Home
        </a>
        <a href="" className="hover:text-beige transition-colors duration-300">
          About
        </a>
        <a href="" className="hover:text-beige transition-colors duration-300">
          Gallery
        </a>
        <a href="" className="hover:text-beige transition-colors duration-300">
          Services
        </a>
        <a href="" className="hover:text-beige transition-colors duration-300">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
