import Navbar from "./Navbar";
import Menu from "./Menu";
const Hero = ({ scroll, sections }) => {
  const collage = [
    {
      id: 1,
      src: "/images/couple-shot.jpg",
      alt: "picture of a couple",
      roundedPosition: "rounded-tl-md",
    },
    {
      id: 2,
      src: "/images/family-shot.jpg",
      alt: "picture of a family",
      roundedPosition: "rounded-tr-md",
    },
    {
      id: 3,
      src: "/images/portrait-2.jpg",
      alt: "singles-shot",
      roundedPosition: "rounded-bl-md",
    },
    {
      id: 4,
      src: "/images/portrait-shot.jpg",
      alt: "portrait shot",
      roundedPosition: "rounded-br-md",
    },
  ];

  return (
    <>
      <Navbar scroll={scroll} sections={sections} />
      <Menu scroll={scroll} sections={sections} />
      <section className="flex gap-6 min-h-[90vh] justify-center items-center flex-row py-12 flex-wrap md:flex-nowrap">
        <div className="font-body text-charcoal text-center sm:text-left sm:space-y-3 space-y-6 w-full sm:w-[60%]">
          <h1 className="font-heading text-5xl font-semibold">
            Preserving beauty in every frame
          </h1>
          <p className="text-lg text-charcoal opacity-80">
            Life’s most precious moments are fleeting — we capture them so you
            can relive them forever.
          </p>
          <button
            onClick={() => scroll(sections.contact)}
            className="bg-beige/70 transition-all duration-300 ease-linear hover:bg-beige rounded-lg  font-semibold px-6 py-3"
          >
            Book A Session Today
          </button>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-0 w-full sm:w-[40%]">
          {collage.map((photo) => (
            <div key={photo.id} className="w-[100%] h-[200px] rounded-tl">
              <img
                className={`${photo.roundedPosition} w-full h-full object-cover block`}
                src={photo.src}
                alt={photo.alt}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
