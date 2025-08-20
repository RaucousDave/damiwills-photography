export default function Services() {
  const rates = [
    {
      title: "Standard",
      price: "₦50,000",
      details: ["One Outfit", "30 mins", "5 digital copies"],
    },
    {
      title: "Deluxe",
      price: "₦70,000",
      details: ["Two Outfits", "60 mins", "10 digital copies"],
    },
    {
      title: "Gold",
      price: "₦120,000",
      details: [
        "Three Outfits",
        "90 mins",
        "12 digital copies",
        "Luxury box (physical prints)",
      ],
    },
  ];

  const extras = [
    {
      title: "Outdoor",
      price: "₦30,000 (content space)",
    },
    {
      title: "Outdoor with Props & Backdrops",
      price: "₦50,000",
    },
    {
      title: "Family Shoot",
      price: "₦10,000 extra (more than 3 persons)",
    },
    {
      title: "Children under 3 years",
      price: "₦15,000 extra",
    },
    {
      title: "Maternity Draping",
      price: "₦30,000 extra",
    },
    {
      title: "24hrs Turnover",
      price: "₦30,000 (after selection)",
    },
  ];

  return (
    <section className="py-12">
      <h1 className="font-heading text-center text-5xl text-charcoal">
        Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {rates.map((rate, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-4 border border-gray-200"
          >
            <h2 className="text-xl text-charcoal font-heading font-bold mb-2">
              {rate.title}
            </h2>
            <p className="text-lg text-charcoal font-body opacity-80 mb-3">
              {rate.price}
            </p>
            <ul className="list-disc font-body text-charcoal list-inside space-y-1 ">
              {rate.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-1 md:col-span-2 bg-white rounded-2xl shadow-lg p-4 border border-gray-200">
          <h2 className="text-xl font-bold text-charcoal font-heading  mb-2">
            Extras
          </h2>
          <p className="text-sm text-charcoal font-body mb-3">
            Additional costs may apply
          </p>
          <ul className="list-disc list-inside space-y-2 text-charcoal font-body">
            {extras.map((extra, index) => (
              <li key={index}>
                <span className="font-semibold">{extra.title}: </span>
                {extra.price}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-gray-600 italic">
            Digital copies will be ready in 3-4 working days after selection.
          </p>
        </div>
      </div>
    </section>
  );
}
