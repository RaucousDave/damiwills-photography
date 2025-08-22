import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { LocateFixedIcon } from "lucide-react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_6hmbw9m", "template_u86bzaq", form.current, {
        publicKey: "ntvE_cBVepoVp-dqq",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
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
          className="flex items-center gap-1 text-charcoal/90 hover:text-pink-600 transition-colors"
        >
          <FaInstagram className="text-3xl" />
          <span className="font-body text-lg">@damiwillsphotography</span>
        </a>

        <a
          href="https://www.facebook.com/people/DamiWills-Photography/100073692515416/"
          className="flex items-center gap-1 text-charcoal/90 hover:text-blue-600 transition-colors"
        >
          <FaFacebook className="text-3xl" />
          <span className="font-body text-lg">Damiwills Photography</span>
        </a>
        <a
          href="https://wa.me/2349130896611"
          className="flex items-center gap-1 text-charcoal/90 hover:text-green-600 transition-colors"
        >
          <FaWhatsapp className="text-3xl" />
          <span className="font-body text-lg">+2349130896611</span>
        </a>
      </div>

      <div className="flex justify-center ">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-5 w-full font-body mb-12 md:w-[50%]"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-beige focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-beige focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              name="message"
              placeholder="Type your message..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-beige focus:outline-none"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            onClick={() => toast.success("Message sent successfully")}
            className="w-full py-3 bg-beige/70 hover:bg-beige text-charcoal font-semibold rounded-lg transition duration-200"
          >
            Send Message
          </button>
          <Toaster />
        </form>
      </div>
      {/* Location */}
      <div className="flex flex-col items-center text-center">
        <LocateFixedIcon className="text-red-500 text-5xl mb-3" />
        <span className="font-body text-lg text-charcoal/80">
          10A Khana Street, D/Line, Port Harcourt
        </span>
      </div>
    </>
  );
};

export default Contact;
