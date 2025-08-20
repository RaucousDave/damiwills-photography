import { FaInstagram, FaFacebook } from "react-icons/fa";
import { LocateFixedIcon } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16">
      {/* Heading */}
      <h1 className="font-heading text-center text-charcoal text-5xl font-bold mb-6">
        Contact Us
      </h1>
      <p className="text-center text-charcoal/80 font-body text-lg max-w-2xl mx-auto mb-12">
        We’d love to hear from you! Whether you have questions, want to book a
        session, or just want to say hello, you can reach us below.
      </p>

      {/* Socials */}
      <div className="flex flex-col items-center gap-4 mb-10">
        <a
          href="https://www.instagram.com/damiwillsphotography/?igsh=ZzVmYWk4eG9yNngx"
          className="flex items-center gap-3 text-charcoal/90 hover:text-pink-600 transition-colors"
        >
          <FaInstagram className="text-3xl" />
          <span className="font-body text-lg">@damiwillsphotography</span>
        </a>

        <a
          href="https://www.facebook.com/people/DamiWills-Photography/100073692515416/"
          className="flex items-center gap-3 text-charcoal/90 hover:text-blue-600 transition-colors"
        >
          <FaFacebook className="text-3xl" />
          <span className="font-body text-lg">Damiwills Photography</span>
        </a>
      </div>

      {/* Location */}
      <div className="flex flex-col items-center text-center">
        <LocateFixedIcon className="text-red-500 text-5xl mb-3" />
        <span className="font-body text-lg text-charcoal/80">
          10A Khana Street, D/Line, Port Harcourt
        </span>
      </div>
    </section>
  );
};

export default Contact;
