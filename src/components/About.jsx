const About = () => {
  return (
    <>
      <h1 className="font-heading mb-12 text-5xl text-center text-charcoal font-semibold">
        About Us
      </h1>
      <div className="flex flex-wrap md:flex-nowrap items-center gap-12 md:p-12">
        <div className="w-[100%] md:w-[50%]">
          <img src="/images/about-dami.JPG" className="rounded-md" alt="" />
        </div>
        <div className="md:w-[50%]">
          <p className="font-body text-xl leading-9 text-charcoal">
            Founded by Damiete Williams Ibama, Damiwills Photography has
            captured portraits, weddings, and brand stories across Nigeria and
            beyond. Our focus is simple — stunning images, honest pricing, and a
            great client experience.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
