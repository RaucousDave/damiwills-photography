const Navbar = ({ scroll, sections }) => {
  return (
    <nav className="items-center sm:flex hidden justify-between py-4">
      {/* Logo */}
      <div className="w-12">
        <img src="/images/damiwills-logo.png" alt="logo" />
      </div>
      <div className=" text-charcoal flex gap-3 font-body ">
        <button
          onClick={() => scroll(sections.hero)}
          className="hover:text-beige transition-colors duration-300"
        >
          Home
        </button>
        <button
          onClick={() => scroll(sections.about)}
          className="hover:text-beige transition-colors duration-300"
        >
          About
        </button>
        <button
          onClick={() => scroll(sections.gallery)}
          className="hover:text-beige transition-colors duration-300"
        >
          Gallery
        </button>
        <button
          onClick={() => scroll(sections.services)}
          className="hover:text-beige transition-colors duration-300"
        >
          Services
        </button>
        <button
          onClick={() => scroll(sections.contact)}
          className="hover:text-beige transition-colors duration-300"
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
