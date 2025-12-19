// components/ZanzibarExcursions.js
"use client";

const ZanzibarExcursions = () => {
  const excursions = [
    {
      title: "Spice Tour",
      description: "Visit a spice farm and learn how spices, herbs and fruits grow and used as medicine."
    },
    {
      title: "Kite Surfing",
      description: "Thanks to its steady sideshore winds, Zanzibar is an ideal spot for wind- or kitesurfing, especially the beaches at Paje, Kiwengwa and Nungwi."
    },
    {
      title: "Mountain Bike Tour",
      description: "If you like some exercise and adventure go on a biking tour to explore the island. It offers you a nice insight in the daily way of life and beautiful nature."
    },
    {
      title: "Walking Tour in Stone Town",
      description: "The old Stone Town is the historical centre of Zanzibar. Visit cultural places like Sultan's Palace, the House of Wonders, the Slave Market and food markets. You can even dinner at Freddie Mercury's former house."
    },
    {
      title: "Prison Island",
      description: "Visit the deserted island that was once used as a place where slaves were detained. Nowadays it's a place to relax at the lovely white beach, ideal for snorkeling, swimming or sunbathing. See the old prison ruins and giant land tortoises."
    },
    {
      title: "Safari Blue",
      description: "Enjoy the natural beauty of Zanzibar on a traditional wooden sailboat (dhow). Visit 3 beautiful islands where you can swim, snorkel and enjoy a delicious barbecue."
    },
    {
      title: "Jozani Forest",
      description: "Go on a walk through the last indigenous forest and mangroves on Zanzibar. See impressive huge palms and rare Red Colobus Monkeys."
    },
    {
      title: "The Rock Restaurant",
      description: "This restaurant is built on a rock in the ocean. An awesome place to eat and enjoy the views."
    },
    {
      title: "Chumbe Island",
      description: "This uninhabited small coral island is a true snorkeling paradise. It's the first private marine park in the world with only 7 beautiful eco-friendly bungalows."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Excursions During Your Zanzibar Holiday
          </h1>
          <div className="w-20 h-0.5 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            The tropical island of Zanzibar is known for its beautiful white sandy beaches and coral reefs. 
            But Zanzibar does not only offer laid-back beach life and watersport activities but also a colorful 
            culture and history. The opportunities are endless.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Left Content - Excursions List */}
          <div className="lg:w-2/3">
            <div className="space-y-2">
              {excursions.map((excursion, index) => (
                <div key={index} className="border-b border-gray-200 pb-2 last:border-b-0">
                  <h3 className="text-md font-semibold text-gray-900">
                    {excursion.title}
                  </h3>
                  <p className="text-gray-700 text-sm pt-2 leading-relaxed">
                    {excursion.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="lg:w-2/3">
            <div className="space-y-10 sticky top-10">
              
              {/* First Image */}
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://cdn-ajfhi.nitrocdn.com/KGztweKcUtUgsFQkUHxObgZRMXOaBfJI/assets/images/optimized/rev-e4b7f67/tanzania-specialist.com/wp-content/uploads/2023/07/Pemba-Lodge-Pemba-Island-Tanzania-kajak.png"
                  alt="Stone Town Zanzibar"
                  className="w-full h-75 object-cover"
                />
              </div>

              {/* Second Image */}
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://cdn-ajfhi.nitrocdn.com/KGztweKcUtUgsFQkUHxObgZRMXOaBfJI/assets/images/optimized/rev-e4b7f67/tanzania-specialist.com/wp-content/uploads/2023/07/httpstanzaniaspecialist.comwp-contentuploads202009chumbe-7.jpg"
                  alt="Zanzibar Beach Activities"
                  className="w-full h-75 object-cover"
                />
              </div>

              {/* Simple CTA */}
              <div className="bg-green-50 p-6 pt-10rounded-lg text-center">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Ready to Explore?
                </h4>
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Book Your Excursions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZanzibarExcursions;