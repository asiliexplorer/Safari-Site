// components/ZanzibarInfo.js
"use client";

const ZanzibarInfo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Best Time to Visit */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Best Time to Visit Zanzibar
          </h2>
          <div className="w-20 h-0.5 bg-green-600 mx-auto mb-8"></div>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <p className="text-gray-700 leading-relaxed">
              The most popular time to visit Zanzibar is during the dry season, from June to October and from December to February. However, Zanzibar Island is a great beach destination all-year round.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Dry Season</h3>
              <p className="text-gray-700">June - October & December - February</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Wet Season</h3>
              <p className="text-gray-700">Mid-March, April, May, November</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Hottest Month</h3>
              <p className="text-gray-700">February (average 28°C)</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Coldest Month</h3>
              <p className="text-gray-700">July (average 24°C)</p>
            </div>
          </div>
          
          <p className="text-gray-700 mt-6 text-center">
            Given its tropical climate, it's always a good time to visit Zanzibar.
          </p>
        </div>

        {/* Zanzibar Hotels */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Zanzibar Hotels
          </h2>
          <div className="w-20 h-0.5 bg-green-600 mx-auto mb-8"></div>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            Zanzibar offers a wealth of lodges, hotels and resorts. It has everything ranging from basic accommodation to ultra-luxury. Tanzania Specialist knows most of the accommodation Zanzibar so you can always contact us for advice.
          </p>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              We prefer the personal atmosphere of the small bed & breakfast lodges on the island. The staff is so friendly and will do everything you make sure you have a great time. Another benefit of bed & breakfasts is that you can explore other restaurants and bars during the day and evening. There are so many great places to eat and have a drink, with beautiful views over the ocean and a great ambiance.
            </p>
          </div>
        </div>

        {/* Reviews */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Zanzibar Holiday Reviews
          </h2>
          <div className="w-20 h-0.5 bg-green-600 mx-auto mb-8"></div>
          
          {/* Review 1 */}
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="text-gray-700 italic mb-4">
              "Zanzibar is a fantastic, beautiful island. I stayed in the village Jambiani and the Zanzibari (local people) are so friendly and welcoming. They are always up for a chat. The beaches, spice farms, forests and little villages are so beautiful. The only drawback i can think of is the lack of museums, but it can also be I did not went to the right places. There are so many nice restaurants and bars on the island where you can eat delicious local or western meals and dance."
            </p>
            <p className="font-semibold text-gray-900">Roos</p>
          </div>
          
          {/* Review 2 */}
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="text-gray-700 italic mb-4">
              "Zanzibar is a great beach destination you don't want to miss when you visit Tanzania. It is a paradise and the perfect place to end your safari. We stayed at the eastcoast of the island where you can find amazing beaches. The beaches are pretty quiet with no annoying beach boys. We have eaten delicious sea food for a fair price at several restaurants."
            </p>
            <p className="font-semibold text-gray-900">Wouter</p>
          </div>
          
          {/* Tripadvisor Link */}
         
        </div>

        {/* Contact CTA */}
            {/* <div className="text-center bg-green-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Have Questions About Zanzibar?
            </h3>
            <p className="text-gray-700 mb-6">
                If you have a question about a Zanzibar holiday or our beach itineraries, please contact us.
            </p>
            <button className="bg-[#465b2d] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3c5025] cursor-pointer transition-colors">
                Contact Us Today
            </button>
            </div> */}
      </div>
    </section>
  );
};

export default ZanzibarInfo;