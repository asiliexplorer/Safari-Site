// components/ZanzibarVacation.js
"use client";

const ZanzibarVacation = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Zanzibar Vacation
            </h1>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Imagine a dream holiday to the tropical island Zanzibar. This bounty island is a paradise, 
                offering the world's most beautiful beaches and coral reefs. Miles and miles of white sandy 
                beaches sprinkled with palm trees, surrounded by the clear azure waters of the Indian Ocean.
              </p>
              
              <p>
                Apart from laid-back beach life, Zanzibar also has a colorful culture and history. 
                Stone Town is well worth a visit. This fascinating old city offers so many nice markets, 
                restaurants and historical sightseeing's.
              </p>
              
              <p>
                Zanzibar Island is part of the Zanzibar archipelago, together with Pemba and Mafia and many 
                smaller islands. These islands are also called the Spice Islands because of their rich history 
                in the spice trade and many spice plantations. Great beach destinations to wash off the dust 
                after your safari.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2">
            <img
              src="https://cdn-ajfhi.nitrocdn.com/KGztweKcUtUgsFQkUHxObgZRMXOaBfJI/assets/images/optimized/rev-e4b7f67/tanzania-specialist.com/wp-content/uploads/2023/08/Dream-of-zanzibar-sky.jpg"
              alt="Zanzibar Beach"
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZanzibarVacation;