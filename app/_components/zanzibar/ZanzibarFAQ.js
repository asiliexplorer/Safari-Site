// components/ZanzibarFAQ.js
"use client";

import { useState } from 'react';

const ZanzibarFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Which Country Owns Zanzibar?",
      answer: "Zanzibar is a semi-autonomous archipelago off the coast of Tanzania in East Africa. It is composed of two main islands: Unguja (also known as Zanzibar) and Pemba, and several smaller islands. Although the islands are part of the United Republic of Tanzania, they have their own government and are considered a semi-autonomous region with its own distinct identity, culture, language, cuisine, and even a different time zone!"
    },
    {
      question: "Which city is the capital of Zanzibar?",
      answer: "The capital of Zanzibar is Stone Town, located on Unguja island. As the commercial center of Zanzibar, Stone Town has been an important trading hub since the 7th century. Today, it is a UNESCO World Heritage Site and home to much of Zanzibar's culture and history. With its winding alleyways, colorful bazaars, and stunning architecture, Stone Town is a must-visit for anyone trekking to this unique archipelago!"
    },
    {
      question: "What is the best way to get around in Zanzibar?",
      answer: "The best way to get around when you're on Zanzibar tours is by taxis, either hired from the street or arranged through a hotel. Taxis are usually reliable and affordable but it's important to agree on a price before getting in the car. Alternatively, public buses known as 'daladala' are an excellent option for travelers on a budget. If you're feeling adventurous, you can also rent a motorbike or take a ferry between islands."
    },
    {
      question: "Are there any unique festivals in Zanzibar?",
      answer: "Yes, Zanzibar is home to a number of unique festivals throughout the year. From Sauti za Busara, an annual music festival featuring African performers from around the world, to MwakaKogwa, a celebration of the harvest season with traditional dancing and cultural performances. There's also Ramadan, when Muslims fast during the daylight hours and celebrate at night with special foods and family gatherings."
    },
    {
      question: "Is Zanzibar a top destination for honeymooners?",
      answer: "Absolutely! Zanzibar is widely regarded as one of the best honeymoon destinations in the world. With its stunning beaches, magical sunsets, and romantic atmosphere, it's no wonder why so many couples choose to spend their special trip here. Whether you want a quiet retreat or an adventure-filled getaway, Zanzibar has something for everyone."
    },
    {
      question: "How long should I stay in Zanzibar?",
      answer: "The perfect length of stay for Zanzibar tours will depend on your preferences. Of course, the more time you have to explore this incredible destination, the better! But if you're short on time, even a few days can be enough to take in some of the highlights. There are plenty of activities to keep busy with during your stay, from relaxing beach days to thrilling water sports and sightseeing tours."
    },
    {
      question: "Which type of accommodation is available on Zanzibar?",
      answer: "Zanzibar has a wide range of accommodation options to suit any budget. From luxury resorts and boutique hotels, to beach bungalows and self-catering apartments, you'll be sure to find something that fits your needs. For a truly unique experience, consider staying in a traditional Swahili house or at one of the island's many campsites."
    },
    {
      question: "What activities and excursions can I do in Zanzibar?",
      answer: "Zanzibar is brimming with activities for visitors to enjoy. Take advantage of the beautiful beaches and go swimming, snorkeling, or windsurfing. Explore the island's historical sites, such as Stone Town and Prison Island. For something different, take a spice tour or join in on some local fishing trips. There's no shortage of things to do in Zanzibar!"
    },
    {
      question: "Can I drink the water in Zanzibar?",
      answer: "No, you should not drink the tap water in Zanzibar. It is best to stick to bottled water or other safe drinks like tea and coffee. Be sure to check that any beverages or ice cubes you consume are prepared with purified water. Taking these precautions will help keep you healthy during your visit!"
    },
    {
      question: "What safety precautions should I take when visiting Zanzibar?",
      answer: "As with any destination, it's important to be aware of your surroundings in Zanzibar. Make sure to research the local laws and customs before your trip. Avoid carrying large amounts of cash or valuable items that could attract unwanted attention. Stick to well-lit areas and groups when you go out at night."
    },
    {
      question: "Can I take photos of locals on Zanzibar?",
      answer: "It's important to be respectful of the local culture when taking photos on Zanzibar Tours. Always ask permission before photographing people, and be mindful of their wishes. Some locals may not want to be photographed, so use discretion if they refuse. Taking photos can be a great way to document your trip, but remember to stay respectful at all times!"
    },
    {
      question: "Is there good public transportation in Zanzibar?",
      answer: "Yes, there is good public transportation while you're on Zanzibar Tours. The most common way to get around the island is via daladala buses, which cost a few dollars per ride. You can also hire taxis, although it's recommended that you negotiate the fare before getting into the cab. For longer distances, you can find ferries and boats that will take you to your destination."
    },
    {
      question: "What kind of wildlife can be seen in Zanzibar?",
      answer: "Zanzibar is home to a diverse range of wildlife including monkeys, hippos, elephants, antelopes, and warthogs. You can also find a wide variety of bird species, including pink flamingos, kingfishers, pelicans, bee-eaters. If you're lucky enough to spot any of these animals your visit, take some time to appreciate the beauty of Zanzibar's wildlife!"
    },
    {
      question: "How friendly are the locals towards tourists in Zanzibar?",
      answer: "The locals in Zanzibar are generally very friendly and welcoming towards tourists. Be sure to be respectful of local customs and traditions, and you will find that the people of Zanzibar are more than happy to help you out with any questions or needs you may have. Take some time to interact with the locals and learn about their culture!"
    },
    {
      question: "Is it possible to rent a car while visiting Zanzibar?",
      answer: "Yes, it is possible to rent a car while visiting Zanzibar. There are several companies that offer car rentals at competitive prices. However, driving in Zanzibar can be tricky since the roads are often poorly maintained and congested. It's recommended that you hire a driver for added convenience and safety."
    },
    {
      question: "Can I explore Zanzibar on foot?",
      answer: "Yes, many parts of Zanzibar are pedestrian-friendly and can be explored on foot. Some popular walking routes include Stone Town, Jozani Forest, and the Nungwi coast. Streets can be narrow and confusing, so it's best to hire a local guide if you are unfamiliar with an area. With the right preparation, you can explore Zanzibar at your own pace!"
    },
    {
      question: "Is there good WIFI access in Zanzibar?",
      answer: "Yes, most hotels and restaurants in Zanzibar offer free WIFI access. You can also purchase a local SIM card, which will give you access to mobile data services. Be mindful of the different regulations surrounding digital privacy in Zanzibar – always read the terms and conditions before connecting to any public WIFI networks!"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Zanzibar Tour Frequently Asked Questions
          </h1>
          <div className="w-20 h-0.5 bg-green-600 mx-auto"></div>
        </div>

        {/* FAQ List with Dropdown */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-green-600 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Answer Dropdown */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-2 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        

        {/* CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-700 mb-6">
            Contact us for more information about Zanzibar tours and safaris.
          </p>
          <button className="bg-[#465b2d] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#384923] 700 transition-colors">
            Contact Our Travel Specialists
          </button>
        </div>
      </div>
    </section>
  );
};

export default ZanzibarFAQ;