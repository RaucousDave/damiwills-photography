import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Menu = ({ scroll, sections }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { x: "100%", transition: { duration: 0.3, ease: "easeIn" } },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const navLinks = [
    { label: "Home", ref: sections.hero },
    { label: "About", ref: sections.about },
    { label: "Gallery", ref: sections.gallery },
    { label: "Services", ref: sections.services },
    { label: "Contact", ref: sections.contact },
  ];

  return (
    <nav className="md:hidden flex items-center justify-between py-4 bg-offwhite">
      {/* Logo */}
      <div className="w-12">
        <img src="/images/damiwills-logo.png" alt="" />
      </div>

      {/* Hamburger */}
      <FiMenu
        className="text-2xl cursor-pointer md:hidden"
        onClick={() => setIsOpen(true)}
      />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-screen w-[75%] bg-white  z-50 p-6 flex flex-col gap-6 shadow-lg"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Close Icon */}
              <FiX
                className="text-2xl self-end cursor-pointer"
                onClick={() => setIsOpen(false)}
              />

              {/* Links */}
              {navLinks.map((link, index) => (
                <motion.button
                  key={index}
                  href="#"
                  className="hover:text-beige font-body text-lg"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.15 * index },
                  }}
                  onClick={() => {
                    scroll(link.ref);
                    setIsOpen(false);
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Menu;
