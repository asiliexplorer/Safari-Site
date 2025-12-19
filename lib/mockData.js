// frontend/lib/mockData.js

export const mockPackages = [
  {
    id: 1,
    name: "6-Day Majestic Tanzania - Mid-Range",
    offeredBy: "Soul of Tanzania",
    tourOperator: "Soul of Tanzania",
    rating: 4.9,
    reviewCount: 525,
    shortDescription: "Explore the best of Tanzania in 6 days, visiting Tarangire, Lake Manyara, Serengeti, and Ngorongoro Crater. Enjoy breathtaking landscapes, diverse wildlife, and unforgettable game drives through iconic national parks.",
    fullDescription: "In this tour, you will have the opportunity to visit the most iconic parks of the northern safari circuit of Tanzania – Tarangire National Park, Lake Manyara National Park, Serengeti National Park (where you will stay 2 nights), and Ngorongoro Crater.",
    duration: 6,
    price: 2890,
    startingFrom: "Arusha",
    comfortLevel: "mid-range",
    tourType: "private",
    safariType: "lodge",
    specializedTours: ["safari", "wildlife"],
    features: ["can start any day", "can be customized", "suitable for solo travelers", "suitable for all ages", "airport transfer included"],
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Tarangire National Park",
      "Lake Manyara National Park",
      "Serengeti National Park (2 nights)",
      "Ngorongoro Crater",
      "Mid-range tour with lodges & tented camps",
      "Private tour",
      "Can start any day",
      "Can be customized"
    ],
    destinations: [
      "Arusha",
      "Tarangire National Park",
      "Lake Manyara National Park",
      "Serengeti National Park",
      "Ngorongoro Crater"
    ],
    // --- Detailed Data for Tabs ---
    route: {
      start: "Arusha (Day 1)",
      end: "Arusha (Day 6)",
      days: [
        { day: 1, location: "Tarangire NP", description: "" },
        { day: 2, location: "Lake Manyara NP", description: "" },
        { day: "3-4", location: "Serengeti NP", description: "" },
        { day: 5, location: "Ngorongoro Crater", description: "" },
        { day: 6, location: "End of tour", description: "" }
      ]
    },
    tourFeatures: [
      "Mid-range tour",
      "Private tour",
      "Can start any day",
      "Can be customized",
      "Suitable for solo travelers",
      "Suitable for all ages"
    ],
    activitiesTransportation: {
      activities: ["game drives"],
      vehicle: "pop-up roof 4x4 vehicle",
      transfer: "A transfer from and back to the airport is included"
    },
    accommodationMeals: {
      note: "Additional accommodation before and at the end of the tour can be arranged for an extra cost",
      schedule: [
        {
          day: 1,
          accommodation: "Tarangire Sopa Lodge",
          accommodationType: "Mid-range lodge inside Tarangire NP",
          meals: "All Meals Included"
        },
        {
          day: 2,
          accommodation: "Escarpment Luxury Lodge Manyara",
          accommodationType: "Luxury lodge on the escarpment above Lake Manyara NP",
          meals: "All Meals Included"
        },
        {
          day: "3-4",
          accommodation: "Nyikani Camp Central Serengeti",
          accommodationType: "Mid-range tented camp inside Central Serengeti NP",
          meals: "All Meals Included"
        },
        {
          day: 5,
          accommodation: "Ngorongoro Serena Safari Lodge",
          accommodationType: "Luxury lodge on the crater rim of Ngorongoro Crater",
          meals: "All Meals Included"
        },
        {
          day: 6,
          accommodation: "End of tour",
          accommodationType: "(No accommodation)",
          meals: "Breakfast Included"
        }
      ]
    },
    gallery: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1573843988976-8a4c7a9b0e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551632811-561732d1c5e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    dayByDay: [
      {
        day: 1,
        location: "Tarangire National Park",
        description: "We will pick you up from your hotel at 8 am and take you to a very special national park. Tarangire is famous for its diverse landscape with nine different vegetation zones. The park is particularly known for the abundance of Ancient Baobab trees (the largest trees on the continent) which fill the landscape and dwarf the animals next to them. The river of the park is full of wildlife ranging from a large variety of birds to lions, leopards, zebras, giraffes, buffaloes, antelopes, and, of course, elephants. In fact, the park has the largest concentration of elephants in the whole country and provides unique chances to observe the interaction between elephant families. The lunch area is fascinating, boasting an observatory with amazing views of the river and wildlife (with good chances of seeing a hunt while having your picnic). In the afternoon we will still do a game drive before continuing to your accommodation.",
        accommodation: "Tarangire Sopa Lodge",
        accommodationType: "Mid-range lodge located inside Tarangire NP",
        meals: "All meals included",
        drinks: "All drinks (Except for spirits/liquor)",
        images: [
          "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        bestTimeToVisit: "July to November (Animals come to the Tarangire River)",
        highSeason: "June to October (The park is full of visitors)",
        bestWeather: "June to October (Little rainfall)",
        wildlife: [
          { animal: "Elephant", abundance: "Abundant" },
          { animal: "Giraffe", abundance: "Common" },
          { animal: "Lion", abundance: "Common" },
          { animal: "Buffalo", abundance: "Abundant" },
          { animal: "Zebra", abundance: "Abundant" },
          { animal: "Wildebeest", abundance: "Abundant" }
        ]
      },
      {
        day: 2,
        location: "Lake Manyara NP",
        description: "A beautiful short journey across the Great Rift Valley until Lake Manyara National Park for a full-day game drive. Although small in dimension (205 sq. miles), the park has breathtaking scenery and is well famous for its lush acacia forest, giant figs, and mahogany trees, as well as for a growing population of baboons and blue monkeys. Permanent residents of this park also include giraffes, elephants, impalas, and a huge amount of buffaloes. The lake is also home to a large number of hippos. The landscapes of Lake Manyara are something that can not be described with words, and the game drives along the lake provide stunning photo opportunities of giraffes and buffaloes in the foreground and the lake (and its flamingos) in the background. During this day, some possible extra tours are possible, including a bike tour or a boat excursion. In the afternoon, transfer to the camp for dinner.",
        accommodation: "Escarpment Luxury Lodge Manyara",
        accommodationType: "Luxury lodge on the escarpment above Lake Manyara NP",
        meals: "All meals included",
        drinks: "All drinks (Except for spirits/liquor)",
        images: [
          "https://images.unsplash.com/photo-1573843988976-8a4c7a9b0e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        bestTimeToVisit: "June to October (Easier to spot animals)",
        highSeason: "July to March (The northern section gets crowded)",
        bestWeather: "June to October (Little rainfall)",
        wildlife: [
          { animal: "Elephant", abundance: "Common" },
          { animal: "Giraffe", abundance: "Common" },
          { animal: "Buffalo", abundance: "Common" },
          { animal: "Zebra", abundance: "Common" },
          { animal: "Wildebeest", abundance: "Common" },
          { animal: "Hippo", abundance: "Common" }
        ]
      },
      {
        day: "3-4",
        location: "Serengeti NP",
        description: "After an early breakfast, depart towards the most famous National park in the World, the Serengeti. You will drive up the crater highlands, making a quick stop at the rim for an out of this world view of Ngorongoro Crater. This will be an unforgettable moment for anyone seeing it for the first time. As you progress well into the Serengeti, you will see why the name means, in Swahili, 'endless plains'. The park has 6,900 sq. miles and for most of it, the plains will stretch to the horizon defying your senses and perception of distances. It is the home of the Great Migration and to 2 million wildebeests, hundreds of thousands of zebras, and all kinds of antelopes including the abundant impalas and Thomson's gazelles. As for Big Cats and large predators, it's the place of choice to look out for lions, cheetahs, leopards, hyenas, with many television scenes like the famous river crossings having been filmed in this park.\n\nFull day in the Serengeti National Park. We are completely flexible with your preferences and this day will be organized according to your wishes. On every day of the safari, your guide will discuss with you the best timings for you, including the game drives and the wake-up time. For example, on this day, you could do a morning game drive, return to the camp for lunch and relaxation and finish with an afternoon game drive, or you could do a full day game drive with a picnic lunch.",
        accommodation: "Nyikani Camp Central Serengeti",
        accommodationType: "Mid-range tented camp inside Central Serengeti NP",
        meals: "All meals included",
        drinks: "All drinks (Except for spirits/liquor)",
        images: [
          "https://images.unsplash.com/photo-1551632811-561732d1c5e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        bestTimeToVisit: "January to February and June to October (Different areas are best at different times)",
        highSeason: "July to March (The Seronera area is crowded)",
        bestWeather: "June to October (Little to no rainfall)",
        wildlife: [
          { animal: "Elephant", abundance: "Common" },
          { animal: "Lion", abundance: "Common" },
          { animal: "Cheetah", abundance: "Common" },
          { animal: "Buffalo", abundance: "Abundant" },
          { animal: "Zebra", abundance: "Abundant" },
          { animal: "Wildebeest", abundance: "Abundant" }
        ]
      },
      {
        day: 5,
        location: "Ngorongoro Crater",
        description: "On this day we suggest a very early wake up in order to do an early morning game drive (when the animals are more active) and see one of the best sunrises you'll ever witness. After the game drive, we return to the camp for a rewarding brunch, and then we'll proceed to Ngorongoro, the 8th wonder of the Natural World. The crater spreads for 102 sq. miles and has 2.000 ft high walls, making it virtually Noah's ark and inhabiting almost every species of wildlife that is indigenous to East Africa. It's one of the very rare locations in the whole continent where you can witness the Black Rhino. The crater has a river, several swamps, a soda lake with a great concentration of flamingos, a forest, and open plains. It's also famous for its elephants which, are the largest in the world and have huge tusks. Ngorongoro Crater is truly a Wonder of the Natural World.\n\nYou will reach Ngorongoro in time for a sundowner.",
        accommodation: "Ngorongoro Serena Safari Lodge",
        accommodationType: "Luxury lodge on the crater rim of Ngorongoro Crater",
        meals: "All meals included",
        drinks: "All drinks (Except for spirits/liquor)",
        images: [
          "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        bestTimeToVisit: "June to October (Wildlife viewing is best)",
        highSeason: "Most of the year – July to March (Expect crowds)",
        bestWeather: "June to October (Rainfall is little to none)",
        wildlife: [
          { animal: "Black Rhino", abundance: "Common" },
          { animal: "Lion", abundance: "Common" },
          { animal: "Buffalo", abundance: "Abundant" },
          { animal: "Zebra", abundance: "Abundant" },
          { animal: "Wildebeest", abundance: "Abundant" },
          { animal: "Hyena", abundance: "Abundant" }
        ]
      },
      {
        day: 6,
        location: "Ngorongoro",
        description: "We will start the day very early and descend into the crater floor for an incredible morning of wildlife in one of the most stunning places on Earth. After the game drive, there will be time for a picnic lunch near the beautiful hippo Lake. After lunch, we will have time for a short game drive and then ascend the crater and exit Ngorongoro Conservation Area towards Arusha. We expect to be back in Arusha around 5 pm although we are flexible in case there is a flight to catch or another situation.",
        accommodation: "End of tour",
        accommodationType: "(No accommodation)",
        meals: "Breakfast (Lunch & dinner not included)",
        drinks: "Drinks not included",
        images: [],
        bestTimeToVisit: "",
        highSeason: "",
        bestWeather: "",
        wildlife: []
      }
    ],
    rates: {
      disclaimer: "Rates are per person and exclude the international flight from/to your home country. This tour accepts children of all ages. Children under 12 receive a discount and children under 2 are free.",
      pricing: [
        {
          period: "Oct 1, 2025 - Oct 31, 2025",
          solo: "$5,025",
          oneRoomTwoPeople: "$3,310",
          oneRoomThreePeople: "$2,890",
          oneRoomFourPeople: "$2,830",
          twoRoomsFivePeople: "$2,710",
          threeRoomsSixPeople: "$2,710"
        },
        {
          period: "Nov 1, 2025 - Dec 15, 2025",
          solo: "$4,500",
          oneRoomTwoPeople: "$2,960",
          oneRoomThreePeople: "$2,540",
          oneRoomFourPeople: "$2,480",
          twoRoomsFivePeople: "$2,360",
          threeRoomsSixPeople: "$2,360"
        },
        {
          period: "Dec 16, 2025 - Dec 31, 2025",
          solo: "$5,025",
          oneRoomTwoPeople: "$3,310",
          oneRoomThreePeople: "$2,890",
          oneRoomFourPeople: "$2,830",
          twoRoomsFivePeople: "$2,710",
          threeRoomsSixPeople: "$2,710"
        },
        {
          period: "Jan 1, 2026 - Feb 28, 2026",
          solo: "$5,025",
          oneRoomTwoPeople: "$3,310",
          oneRoomThreePeople: "$2,890",
          oneRoomFourPeople: "$2,830",
          twoRoomsFivePeople: "$2,710",
          threeRoomsSixPeople: "$2,710"
        },
        {
          period: "Mar 1, 2026 - Mar 31, 2026",
          solo: "$4,500",
          oneRoomTwoPeople: "$2,960",
          oneRoomThreePeople: "$2,540",
          oneRoomFourPeople: "$2,480",
          twoRoomsFivePeople: "$2,360",
          threeRoomsSixPeople: "$2,360"
        },
        {
          period: "Apr 1, 2026 - May 31, 2026",
          solo: "$4,065",
          oneRoomTwoPeople: "$2,670",
          oneRoomThreePeople: "$2,250",
          oneRoomFourPeople: "$2,190",
          twoRoomsFivePeople: "$2,070",
          threeRoomsSixPeople: "$2,070"
        },
        {
          period: "Jun 1, 2026 - Jun 30, 2026",
          solo: "$5,025",
          oneRoomTwoPeople: "$3,310",
          oneRoomThreePeople: "$2,890",
          oneRoomFourPeople: "$2,830",
          twoRoomsFivePeople: "$2,710",
          threeRoomsSixPeople: "$2,710"
        },
        {
          period: "Jul 1, 2026 - Sep 30, 2026",
          solo: "$5,070",
          oneRoomTwoPeople: "$3,340",
          oneRoomThreePeople: "$2,920",
          oneRoomFourPeople: "$2,860",
          twoRoomsFivePeople: "$2,740",
          threeRoomsSixPeople: "$2,740"
        },
        {
          period: "Oct 1, 2026 - Oct 31, 2026",
          solo: "$5,025",
          oneRoomTwoPeople: "$3,310",
          oneRoomThreePeople: "$2,890",
          oneRoomFourPeople: "$2,830",
          twoRoomsFivePeople: "$2,710",
          threeRoomsSixPeople: "$2,710"
        },
        {
          period: "Nov 1, 2026 - Dec 15, 2026",
          solo: "$4,500",
          oneRoomTwoPeople: "$2,960",
          oneRoomThreePeople: "$2,540",
          oneRoomFourPeople: "$2,480",
          twoRoomsFivePeople: "$2,360",
          threeRoomsSixPeople: "$2,360"
        },
        {
          period: "Dec 16, 2026 - Dec 31, 2026",
          solo: "$5,025",
          oneRoomTwoPeople: "$3,310",
          oneRoomThreePeople: "$2,890",
          oneRoomFourPeople: "$2,830",
          twoRoomsFivePeople: "$2,710",
          threeRoomsSixPeople: "$2,710"
        }
      ]
    },
    inclusions: {
      included: [
        "Park fees (For non-residents)",
        "All activities (Unless labeled as optional)",
        "All accommodation (Unless listed as upgrade)",
        "A professional driver/guide",
        "All transportation (Unless labeled as optional)",
        "All Taxes/VAT",
        "Roundtrip airport transfer",
        "Meals (As specified in the day-by-day section)",
        "Drinks (As specified in the day-by-day section)"
      ],
      excluded: [
        "International flights (From/to home)",
        "Additional accommodation before and at the end of the tour",
        "Tips (Tipping guideline US$10.00 pp per day)",
        "Personal items (Souvenirs, travel insurance, visa fees, etc.)",
        "Government imposed increase of taxes and/or park fees"
      ]
    },
    gettingThere: {
      description: "This tour starts and ends in Arusha",
      details: [
        "This operator can help select your international flights, but you'll have to book them yourself.",
        "Fly to/from Kilimanjaro Airport (JRO - Check price) near Arusha. Or fly to/from Arusha Airport (ARK - Check price) via Dar es Salaam or Nairobi (Kenya).",
        "A transfer from and back to the airport is included.",
        "Additional accommodation before and at the end of the tour can be arranged for an extra cost."
      ]
    }
  },
  {
    id: 2,
    name: "5-Day Kilimanjaro Trek - Marangu Route",
    offeredBy: "Asili Explorer Safaris",
    tourOperator: "Summit Seekers Ltd",
    rating: 4.7,
    reviewCount: 808,
    shortDescription: "Conquer Africa's highest peak via the popular Marangu Route.",
    fullDescription: "This 5-day trek on the Marangu Route offers hut accommodation and a steady ascent to Uhuru Peak, the highest point in Africa. Guided by experienced professionals with all necessary equipment provided.",
    duration: 5,
    price: 1950,
    startingFrom: "Moshi",
    comfortLevel: "mid-range",
    tourType: "shared",
    safariType: "camping",
    specializedTours: ["gorilla trekking"],
    features: ["airport transfer included"],
    image: "https://images.unsplash.com/photo-1573843988976-8a4c7a9b0e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Reach the summit of Mount Kilimanjaro",
      "Experience diverse ecosystems from rainforest to arctic zone",
      "Stay in comfortable huts on Marangu Route",
      "All meals and equipment provided"
    ],
    destinations: [
      "Moshi",
      "Marangu Gate",
      "Mandara Huts",
      "Horombo Huts",
      "Kibo Huts",
      "Uhuru Peak",
      "Mweka Gate"
    ],
    // --- Detailed Data for Tabs ---
    route: {
      start: "Moshi (Day 1)",
      end: "Moshi (Day 5)",
      days: [
        { day: 1, location: "Moshi", description: "Arrival in Moshi. Briefing and equipment check. Overnight at hotel in Moshi." },
        { day: 2, location: "Marangu Gate -> Mandara Huts", description: "Drive to Marangu Gate for registration. Start trek through the rainforest to Mandara Huts (2,700m)." },
        { day: 3, location: "Mandara Huts -> Horombo Huts", description: "Continue trek through moorland to Horombo Huts (3,720m)." },
        { day: 4, location: "Horombo Huts -> Kibo Huts", description: "Ascend to Kibo Huts (4,700m) near the crater rim. Early rest for summit attempt." },
        { day: 5, location: "Kibo Huts -> Uhuru Peak -> Mweka Gate", description: "Very early start for summit attempt. Descend via Mweka Route to Mweka Gate. Transfer to Moshi." }
      ]
    },
    tourFeatures: [
      "Mid-range tour",
      "Shared tour (Max 12 climbers per group)",
      "Can start any day",
      "Can be customized (different routes available)",
      "Suitable for moderate fitness levels",
      "Minimum age of 10 years"
    ],
    activitiesTransportation: {
      activities: ["trekking", "camping"],
      vehicle: "4x4 safari vehicle (transfers)",
      transfer: "A transfer from and back to the airport/hotel is included"
    },
    accommodationMeals: {
      note: "Hut accommodation is included on the mountain. Hotel accommodation in Moshi before/after trek can be arranged for an extra cost.",
      schedule: [
        { day: 1, accommodation: "Hotel in Moshi", accommodationType: "Mid-range hotel", meals: "Dinner Included" },
        { day: 2, accommodation: "Mandara Huts", accommodationType: "Basic mountain hut", meals: "All Meals Included" },
        { day: 3, accommodation: "Horombo Huts", accommodationType: "Basic mountain hut", meals: "All Meals Included" },
        { day: 4, accommodation: "Kibo Huts", accommodationType: "Basic mountain hut", meals: "All Meals Included" },
        { day: 5, accommodation: "None (Day Trek)", accommodationType: "Day Trek", meals: "Breakfast & Lunch Included" }
      ]
    },
    gallery: [
      "https://images.unsplash.com/photo-1573843988976-8a4c7a9b0e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551632811-561732d1c5e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    dayByDay: [
      {
        day: 1,
        location: "Moshi",
        description: "Arrival at Kilimanjaro International Airport or by road to Moshi. Meet and greet by our representative and transfer to your hotel in Moshi for overnight. Briefing session in the evening covering gear check, itinerary, and safety protocols.",
        accommodation: "Selected Hotel in Moshi",
        accommodationType: "Mid-range hotel",
        meals: "Dinner Included",
        drinks: "Drinks not included",
        images: [
          "https://images.unsplash.com/photo-1573843988976-8a4c7a9b0e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        bestTimeToVisit: "January to March & June to October",
        highSeason: "July to September",
        bestWeather: "Dry seasons (January-March, June-October)",
        wildlife: []
      },
      {
        day: 2,
        location: "Marangu Gate -> Mandara Huts",
        description: "Drive to Marangu Gate (approx. 1 hour) for registration and permit check. Start trek through the lush montane forest, home to blue monkeys and colorful birds. Ascend gradually to Mandara Huts (2,700m) for overnight stay.",
        accommodation: "Mandara Huts",
        accommodationType: "Basic mountain hut",
        meals: "All Meals Included",
        drinks: "All drinks (Except for spirits/liquor)",
        images: [
          "https://images.unsplash.com/photo-1551632811-561732d1c5e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        bestTimeToVisit: "January to March & June to October",
        highSeason: "July to September",
        bestWeather: "Dry seasons (January-March, June-October)",
        wildlife: [
          { animal: "Blue Monkey", abundance: "Common" },
          { animal: "Colobus Monkey", abundance: "Common" },
          { animal: "Various Birds", abundance: "Abundant" }
        ]
      },
      {
        day: 3,
        location: "Mandara Huts -> Horombo Huts",
        description: "Continue trek through the moorland zone, passing heather and giant lobelias. The landscape becomes more open with expansive views. Reach Horombo Huts (3,720m) for overnight stay.",
        accommodation: "Horombo Huts",
        accommodationType: "Basic mountain hut",
        meals: "All Meals Included",
        drinks: "All drinks (Except for spirits/liquor)",
        images: [
          "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        bestTimeToVisit: "January to March & June to October",
        highSeason: "July to September",
        bestWeather: "Dry seasons (January-March, June-October)",
        wildlife: [
          { animal: "Elephants", abundance: "Rare (Seen at lower altitudes)" },
          { animal: "Various Birds", abundance: "Common" }
        ]
      },
      {
        day: 4,
        location: "Horombo Huts -> Kibo Huts",
        description: "Ascend to the alpine desert zone. The terrain becomes increasingly rocky and barren. Reach Kibo Huts (4,700m) near the crater rim. Early dinner and rest in preparation for the summit attempt.",
        accommodation: "Kibo Huts",
        accommodationType: "Basic mountain hut",
        meals: "All Meals Included",
        drinks: "All drinks (Except for spirits/liquor)",
        images: [
          "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        bestTimeToVisit: "January to March & June to October",
        highSeason: "July to September",
        bestWeather: "Dry seasons (January-March, June-October)",
        wildlife: []
      },
      {
        day: 5,
        location: "Kibo Huts -> Uhuru Peak -> Mweka Gate",
        description: "Very early start (around midnight) for the summit attempt. Trek through the night to Stella Point (5,700m) and then to Uhuru Peak (5,895m), the highest point in Africa. Descend via the Mweka Route to Mweka Gate (approx. 3-4 hours). Transfer back to your hotel in Moshi.",
        accommodation: "None (Day Trek)",
        accommodationType: "Day Trek",
        meals: "Breakfast & Lunch Included",
        drinks: "Drinks not included",
        images: [],
        bestTimeToVisit: "January to March & June to October",
        highSeason: "July to September",
        bestWeather: "Dry seasons (January-March, June-October)",
        wildlife: []
      }
    ],
    rates: {
      disclaimer: "Rates are per person and exclude the international flight from/to your home country. Prices vary based on group size and season. A single supplement may apply for hut accommodation. Porters and tips are extra.",
      pricing: [
        {
          period: "Oct 1, 2025 - Oct 31, 2025",
          solo: "$2,500",
          oneRoomTwoPeople: "$1,950",
          oneRoomThreePeople: "$1,800",
          oneRoomFourPeople: "$1,750",
          twoRoomsFivePeople: "$1,700",
          threeRoomsSixPeople: "$1,700"
        },
        {
          period: "Nov 1, 2025 - Dec 15, 2025",
          solo: "$2,200",
          oneRoomTwoPeople: "$1,750",
          oneRoomThreePeople: "$1,600",
          oneRoomFourPeople: "$1,550",
          twoRoomsFivePeople: "$1,500",
          threeRoomsSixPeople: "$1,500"
        },
        {
          period: "Dec 16, 2025 - Dec 31, 2025",
          solo: "$2,500",
          oneRoomTwoPeople: "$1,950",
          oneRoomThreePeople: "$1,800",
          oneRoomFourPeople: "$1,750",
          twoRoomsFivePeople: "$1,700",
          threeRoomsSixPeople: "$1,700"
        },
        {
          period: "Jan 1, 2026 - Feb 28, 2026",
          solo: "$2,500",
          oneRoomTwoPeople: "$1,950",
          oneRoomThreePeople: "$1,800",
          oneRoomFourPeople: "$1,750",
          twoRoomsFivePeople: "$1,700",
          threeRoomsSixPeople: "$1,700"
        },
        {
          period: "Mar 1, 2026 - Mar 31, 2026",
          solo: "$2,200",
          oneRoomTwoPeople: "$1,750",
          oneRoomThreePeople: "$1,600",
          oneRoomFourPeople: "$1,550",
          twoRoomsFivePeople: "$1,500",
          threeRoomsSixPeople: "$1,500"
        },
        {
          period: "Apr 1, 2026 - May 31, 2026",
          solo: "$2,000",
          oneRoomTwoPeople: "$1,600",
          oneRoomThreePeople: "$1,450",
          oneRoomFourPeople: "$1,400",
          twoRoomsFivePeople: "$1,350",
          threeRoomsSixPeople: "$1,350"
        },
        {
          period: "Jun 1, 2026 - Jun 30, 2026",
          solo: "$2,500",
          oneRoomTwoPeople: "$1,950",
          oneRoomThreePeople: "$1,800",
          oneRoomFourPeople: "$1,750",
          twoRoomsFivePeople: "$1,700",
          threeRoomsSixPeople: "$1,700"
        },
        {
          period: "Jul 1, 2026 - Sep 30, 2026",
          solo: "$2,550",
          oneRoomTwoPeople: "$1,980",
          oneRoomThreePeople: "$1,830",
          oneRoomFourPeople: "$1,780",
          twoRoomsFivePeople: "$1,730",
          threeRoomsSixPeople: "$1,730"
        },
        {
          period: "Oct 1, 2026 - Oct 31, 2026",
          solo: "$2,500",
          oneRoomTwoPeople: "$1,950",
          oneRoomThreePeople: "$1,800",
          oneRoomFourPeople: "$1,750",
          twoRoomsFivePeople: "$1,700",
          threeRoomsSixPeople: "$1,700"
        },
        {
          period: "Nov 1, 2026 - Dec 15, 2026",
          solo: "$2,200",
          oneRoomTwoPeople: "$1,750",
          oneRoomThreePeople: "$1,600",
          oneRoomFourPeople: "$1,550",
          twoRoomsFivePeople: "$1,500",
          threeRoomsSixPeople: "$1,500"
        },
        {
          period: "Dec 16, 2026 - Dec 31, 2026",
          solo: "$2,500",
          oneRoomTwoPeople: "$1,950",
          oneRoomThreePeople: "$1,800",
          oneRoomFourPeople: "$1,750",
          twoRoomsFivePeople: "$1,700",
          threeRoomsSixPeople: "$1,700"
        }
      ]
    },
    inclusions: {
      included: [
        "All accommodation during trek (huts)",
        "All meals as per itinerary",
        "Park entrance fees",
        "Services of an expert mountain guide and porter",
        "Transportation to/from trailheads",
        "Airport transfer (Moshi)",
        "All necessary camping equipment"
      ],
      excluded: [
        "International flights",
        "Tanzania visa",
        "Travel insurance",
        "Alcoholic drinks",
        "Tips/gratuities",
        "Personal expenses",
        "Hotel in Moshi before/after trek (unless specified)"
      ]
    },
    gettingThere: {
      description: "This tour starts and ends in Moshi",
      details: [
        "This operator can help select your international flights, but you'll have to book them yourself.",
        "Fly to/from Kilimanjaro Airport (JRO - Check price) near Moshi.",
        "A transfer from and back to the airport/hotel in Moshi is included.",
        "Additional accommodation before and at the end of the trek in Moshi can be arranged for an extra cost."
      ]
    }
  },
  {
    id: 3,
    name: "10-Day Epic Tanzania & Kenya Safari",
    offeredBy: "Asili Explorer Safaris",
    tourOperator: "Asili Explorer Safaris",
    rating: 4.95,
    reviewCount: 1205,
    shortDescription: "Cross borders for the ultimate East African safari adventure.",
    fullDescription: "This epic 10-day journey takes you through Tanzania's northern circuit and into Kenya's Maasai Mara, offering the chance to see an even wider variety of wildlife and landscapes.",
    duration: 10,
    price: 4200,
    startingFrom: "Dar es Salaam",
    comfortLevel: "luxury",
    tourType: "private",
    safariType: "tented",
    specializedTours: ["fly in safaris", "family"],
    features: ["itinerary customizable", "airport transfer included", "domestic flight included"],
    image: "https://images.unsplash.com/photo-1551632811-561732d1c5e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Cross-border safari from Tanzania to Kenya",
      "Visit the Maasai Mara National Reserve",
      "Experience both lodge and tented camp stays",
      "Fly-in safari option available"
    ],
    destinations: [
      "Dar es Salaam",
      "Tarangire National Park",
      "Lake Manyara National Park",
      "Serengeti National Park",
      "Ngorongoro Crater",
      "Arusha",
      "Nairobi",
      "Maasai Mara National Reserve"
    ],
    // --- Detailed Data for Tabs ---
    route: {
      start: "Dar es Salaam (Day 1)",
      end: "Nairobi (Day 10)",
      days: [
        { day: 1, location: "Dar es Salaam", description: "Arrival at Julius Nyerere International Airport. Meet and greet by our representative and transfer to your hotel in Dar es Salaam for overnight." },
        { day: 2, location: "Dar es Salaam -> Arusha", description: "Drive to Arusha (approx. 8-9 hours). Overnight at hotel in Arusha." },
        { day: 3, location: "Tarangire NP", description: "Drive to Tarangire National Park. Game drive with focus on large elephant herds. Overnight at camp." },
        { day: 4, location: "Lake Manyara NP", description: "Drive to Lake Manyara National Park. Game drive in the afternoon. Overnight at lodge." },
        { day: "5-6", location: "Serengeti NP", description: "Drive to Serengeti National Park via Ngorongoro Highlands. Arrive in time for lunch and afternoon game drive. Spend 2 nights at camp." },
        { day: 7, location: "Ngorongoro Crater", description: "Early breakfast and descend into the Ngorongoro Crater for a full-day game drive. Picnic lunch inside the crater. Return to Arusha. Overnight at lodge." },
        { day: 8, location: "Arusha -> Nairobi -> Maasai Mara", description: "Drive to the Kenyan border. Cross border and continue to Nairobi. Fly from Nairobi Wilson Airport to Maasai Mara. Game drive en route to camp. Overnight at camp." },
        { day: 9, location: "Maasai Mara NP", description: "Full day game drive in the Maasai Mara. Look for the Big Five and the Great Migration (seasonal). Overnight at camp." },
        { day: 10, location: "Maasai Mara -> Nairobi", description: "Morning game drive. Fly back to Nairobi Wilson Airport. Transfer to your hotel. Overnight in Nairobi." }
      ]
    },
    tourFeatures: [
      "Luxury tour",
      "Private tour",
      "Can start any day",
      "Can be customized",
      "Suitable for solo travelers",
      "Minimum age of 18 years"
    ],
    activitiesTransportation: {
      activities: ["game drives"],
      vehicle: "pop-up roof 4x4 vehicle",
      transfer: "A transfer from and back to the airport is included"
    },
    accommodationMeals: {
      note: "Additional accommodation before and at the end of the tour can be arranged for an extra cost",
      schedule: [
        { day: 1, accommodation: "Selected Hotel in Dar es Salaam", accommodationType: "Mid-range hotel", meals: "Breakfast & Dinner Included" },
        { day: 2, accommodation: "Hotel in Arusha", accommodationType: "Mid-range hotel", meals: "All Meals Included" },
        { day: 3, accommodation: "Tarangire Camp", accommodationType: "Luxury tented camp", meals: "All Meals Included" },
        { day: 4, accommodation: "Lake Manyara Lodge", accommodationType: "Luxury lodge", meals: "All Meals Included" },
        { day: "5-6", accommodation: "Dove Serengeti Camp", accommodationType: "Luxury tented camp inside Central Serengeti NP", meals: "All Meals Included" },
        { day: 7, accommodation: "Arusha Lodge", accommodationType: "Luxury lodge", meals: "All Meals Included" },
        { day: 8, accommodation: "Maasai Mara Camp", accommodationType: "Luxury tented camp", meals: "All Meals Included" },
        { day: 9, accommodation: "Maasai Mara Camp", accommodationType: "Luxury tented camp", meals: "All Meals Included" },
        { day: 10, accommodation: "Hotel in Nairobi", accommodationType: "Mid-range hotel", meals: "Breakfast & Lunch Included" }
      ]
    },
    gallery: [
      "https://images.unsplash.com/photo-1551632811-561732d1c5e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1573843988976-8a4c7a9b0e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    dayByDay: [
      {
        day: 1,
        location: "Dar es Salaam",
        description: "Arrival at Julius Nyerere International Airport. Meet and greet by our representative and transfer to your hotel in Dar es Salaam for overnight.",
        accommodation: "Selected Hotel in Dar es Salaam",
        accommodationType: "Mid-range hotel",
        meals: "Breakfast & Dinner Included",
        drinks: "Drinks not included",
        images: [
          "https://images.unsplash.com/photo-1551632811-561732d1c5e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        bestTimeToVisit: "June to October",
        highSeason: "July to September",
        bestWeather: "Dry season (June-October)",
        wildlife: []
      },
      {
        day: 2,
        location: "Dar es Salaam -> Arusha",
        description: "Drive to Arusha (approx. 8-9 hours). Pass through scenic landscapes and small towns. Stop for lunch en route. Overnight at hotel in Arusha.",
        accommodation: "Hotel in Arusha",
        accommodationType: "Mid-range hotel",
        meals: "All Meals Included",
        drinks: "All drinks (Except for spirits/liquor)",
        images: [
          "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        bestTimeToVisit: "June to October",
        highSeason: "July to September",
        bestWeather: "Dry season (June-October)",
        wildlife: []
      },
      {
        day: 3,
        location: "Tarangire NP",
        description: "Drive to Tarangire National Park (approx. 2-3 hours). Game drive in the afternoon. Look for large elephant herds, baobab trees, and diverse birdlife. Overnight at camp.",
        accommodation: "Tarangire Camp",
        accommodationType: "Luxury tented camp",
        meals: "All Meals Included",
        drinks: "All drinks (Except for spirits/liquor)",
        images: [
          "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        bestTimeToVisit: "July to November (Animals come to the Tarangire River)",
        highSeason: "June to October (The park is full of visitors)",
        bestWeather: "June to October (Little rainfall)",
        wildlife: [
          { animal: "Elephant", abundance: "Abundant" },
          { animal: "Giraffe", abundance: "Common" },
          { animal: "Lion", abundance: "Common" },
          { animal: "Buffalo", abundance: "Abundant" },
          { animal: "Zebra", abundance: "Abundant" },
          { animal: "Wildebeest", abundance: "Abundant" }
        ]
      },
      {
        day: 4,
        location: "Lake Manyara NP",
        description: "Drive to Lake Manyara National Park (approx. 3-4 hours). Game drive in the afternoon. Look for tree-climbing lions, elephants, and flamingos along the alkaline lake shore. Overnight at lodge.",
        accommodation: "Lake Manyara Lodge",
        accommodationType: "Luxury lodge",
        meals: "All Meals Included",
        drinks: "All drinks (Except for spirits/liquor)",
        images: [
          "https://images.unsplash.com/photo-1573843988976-8a4c7a9b0e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        bestTimeToVisit: "June to October (Easier to spot animals)",
        highSeason: "July to March (The northern section gets crowded)",
        bestWeather: "June to October (Little rainfall)",
        wildlife: [
          { animal: "Elephant", abundance: "Common" },
          { animal: "Giraffe", abundance: "Common" },
          { animal: "Buffalo", abundance: "Common" },
          { animal: "Zebra", abundance: "Common" },
          { animal: "Wildebeest", abundance: "Common" },
          { animal: "Hippo", abundance: "Common" }
        ]
      },
      {
        day: "5-6",
        location: "Serengeti NP",
        description: "Drive to Serengeti National Park via Ngorongoro Highlands (approx. 6-7 hours total). Stop at Olduvai Gorge. Arrive in time for lunch and afternoon game drive. Spend 2 nights at camp.",
        accommodation: "Dove Serengeti Camp",
        accommodationType: "Luxury tented camp inside Central Serengeti NP",
        meals: "All Meals Included",
        drinks: "All drinks (Except for spirits/liquor)",
        images: [
          "https://images.unsplash.com/photo-1551632811-561732d1c5e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        bestTimeToVisit: "January to February and June to October (Different areas are best at different times)",
        highSeason: "July to March (The Seronera area is crowded)",
        bestWeather: "June to October (Little to no rainfall)",
        wildlife: [
          { animal: "Elephant", abundance: "Common" },
          { animal: "Lion", abundance: "Common" },
          { animal: "Cheetah", abundance: "Common" },
          { animal: "Buffalo", abundance: "Abundant" },
          { animal: "Zebra", abundance: "Abundant" },
          { animal: "Wildebeest", abundance: "Abundant" }
        ]
      },
      {
        day: 7,
        location: "Ngorongoro Crater",
        description: "Early breakfast and descend into the Ngorongoro Crater for a full-day game drive. Picnic lunch inside the crater. Return to Arusha. Overnight at lodge.",
        accommodation: "Arusha Lodge",
        accommodationType: "Luxury lodge",
        meals: "All Meals Included",
        drinks: "All drinks (Except for spirits/liquor)",
        images: [
          "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        bestTimeToVisit: "June to October (Wildlife viewing is best)",
        highSeason: "Most of the year – July to March (Expect crowds)",
        bestWeather: "June to October (Rainfall is little to none)",
        wildlife: [
          { animal: "Black Rhino", abundance: "Common" },
          { animal: "Lion", abundance: "Common" },
          { animal: "Buffalo", abundance: "Abundant" },
          { animal: "Zebra", abundance: "Abundant" },
          { animal: "Wildebeest", abundance: "Abundant" },
          { animal: "Hyena", abundance: "Abundant" }
        ]
      },
      {
        day: 8,
        location: "Arusha -> Nairobi -> Maasai Mara",
        description: "Drive to the Kenyan border (approx. 3 hours). Cross border and continue to Nairobi (approx. 1 hour). Fly from Nairobi Wilson Airport to Maasai Mara (approx. 45 mins). Game drive en route to camp. Overnight at camp.",
        accommodation: "Maasai Mara Camp",
        accommodationType: "Luxury tented camp",
        meals: "All Meals Included",
        drinks: "All drinks (Except for spirits/liquor)",
        images: [
          "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        bestTimeToVisit: "July to October (Great Migration)",
        highSeason: "July to September",
        bestWeather: "Dry season (June-October)",
        wildlife: [
          { animal: "Lion", abundance: "Common" },
          { animal: "Cheetah", abundance: "Common" },
          { animal: "Leopard", abundance: "Common" },
          { animal: "Elephant", abundance: "Common" },
          { animal: "Buffalo", abundance: "Common" },
          { animal: "Rhino", abundance: "Rare" },
          { animal: "Wildebeest", abundance: "Abundant (Seasonal)" },
          { animal: "Zebra", abundance: "Abundant (Seasonal)" }
        ]
      },
      {
        day: 9,
        location: "Maasai Mara NP",
        description: "Full day game drive in the Maasai Mara. Look for the Big Five and the Great Migration (seasonal). Overnight at camp.",
        accommodation: "Maasai Mara Camp",
        accommodationType: "Luxury tented camp",
        meals: "All Meals Included",
        drinks: "All drinks (Except for spirits/liquor)",
        images: [
          "https://images.unsplash.com/photo-1573843988976-8a4c7a9b0e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        bestTimeToVisit: "July to October (Great Migration)",
        highSeason: "July to September",
        bestWeather: "Dry season (June-October)",
        wildlife: [
          { animal: "Lion", abundance: "Common" },
          { animal: "Cheetah", abundance: "Common" },
          { animal: "Leopard", abundance: "Common" },
          { animal: "Elephant", abundance: "Common" },
          { animal: "Buffalo", abundance: "Common" },
          { animal: "Rhino", abundance: "Rare" },
          { animal: "Wildebeest", abundance: "Abundant (Seasonal)" },
          { animal: "Zebra", abundance: "Abundant (Seasonal)" }
        ]
      },
      {
        day: 10,
        location: "Maasai Mara -> Nairobi",
        description: "Morning game drive. Fly back to Nairobi Wilson Airport (approx. 45 mins). Transfer to your hotel in Nairobi. Overnight in Nairobi.",
        accommodation: "Hotel in Nairobi",
        accommodationType: "Mid-range hotel",
        meals: "Breakfast & Lunch Included",
        drinks: "Drinks not included",
        images: [],
        bestTimeToVisit: "July to October (Great Migration)",
        highSeason: "July to September",
        bestWeather: "Dry season (June-October)",
        wildlife: []
      }
    ],
    rates: {
      disclaimer: "Rates are per person and exclude the international flight from/to your home country. Prices vary based on group size, season, and accommodation upgrades. Children under 12 receive a discount, children under 2 are free. A single supplement may apply. Cross-border permits and domestic flights are included.",
      pricing: [
        {
          period: "Oct 1, 2025 - Oct 31, 2025",
          solo: "$6,500",
          oneRoomTwoPeople: "$4,200",
          oneRoomThreePeople: "$3,800",
          oneRoomFourPeople: "$3,700",
          twoRoomsFivePeople: "$3,600",
          threeRoomsSixPeople: "$3,600"
        },
        {
          period: "Nov 1, 2025 - Dec 15, 2025",
          solo: "$5,800",
          oneRoomTwoPeople: "$3,700",
          oneRoomThreePeople: "$3,300",
          oneRoomFourPeople: "$3,200",
          twoRoomsFivePeople: "$3,100",
          threeRoomsSixPeople: "$3,100"
        },
        {
          period: "Dec 16, 2025 - Dec 31, 2025",
          solo: "$6,500",
          oneRoomTwoPeople: "$4,200",
          oneRoomThreePeople: "$3,800",
          oneRoomFourPeople: "$3,700",
          twoRoomsFivePeople: "$3,600",
          threeRoomsSixPeople: "$3,600"
        },
        {
          period: "Jan 1, 2026 - Feb 28, 2026",
          solo: "$6,500",
          oneRoomTwoPeople: "$4,200",
          oneRoomThreePeople: "$3,800",
          oneRoomFourPeople: "$3,700",
          twoRoomsFivePeople: "$3,600",
          threeRoomsSixPeople: "$3,600"
        },
        {
          period: "Mar 1, 2026 - Mar 31, 2026",
          solo: "$5,800",
          oneRoomTwoPeople: "$3,700",
          oneRoomThreePeople: "$3,300",
          oneRoomFourPeople: "$3,200",
          twoRoomsFivePeople: "$3,100",
          threeRoomsSixPeople: "$3,100"
        },
        {
          period: "Apr 1, 2026 - May 31, 2026",
          solo: "$5,200",
          oneRoomTwoPeople: "$3,300",
          oneRoomThreePeople: "$2,900",
          oneRoomFourPeople: "$2,800",
          twoRoomsFivePeople: "$2,700",
          threeRoomsSixPeople: "$2,700"
        },
        {
          period: "Jun 1, 2026 - Jun 30, 2026",
          solo: "$6,500",
          oneRoomTwoPeople: "$4,200",
          oneRoomThreePeople: "$3,800",
          oneRoomFourPeople: "$3,700",
          twoRoomsFivePeople: "$3,600",
          threeRoomsSixPeople: "$3,600"
        },
        {
          period: "Jul 1, 2026 - Sep 30, 2026",
          solo: "$6,550",
          oneRoomTwoPeople: "$4,250",
          oneRoomThreePeople: "$3,850",
          oneRoomFourPeople: "$3,750",
          twoRoomsFivePeople: "$3,650",
          threeRoomsSixPeople: "$3,650"
        },
        {
          period: "Oct 1, 2026 - Oct 31, 2026",
          solo: "$6,500",
          oneRoomTwoPeople: "$4,200",
          oneRoomThreePeople: "$3,800",
          oneRoomFourPeople: "$3,700",
          twoRoomsFivePeople: "$3,600",
          threeRoomsSixPeople: "$3,600"
        },
        {
          period: "Nov 1, 2026 - Dec 15, 2026",
          solo: "$5,800",
          oneRoomTwoPeople: "$3,700",
          oneRoomThreePeople: "$3,300",
          oneRoomFourPeople: "$3,200",
          twoRoomsFivePeople: "$3,100",
          threeRoomsSixPeople: "$3,100"
        },
        {
          period: "Dec 16, 2026 - Dec 31, 2026",
          solo: "$6,500",
          oneRoomTwoPeople: "$4,200",
          oneRoomThreePeople: "$3,800",
          oneRoomFourPeople: "$3,700",
          twoRoomsFivePeople: "$3,600",
          threeRoomsSixPeople: "$3,600"
        }
      ]
    },
    inclusions: {
      included: [
        "All accommodation (9 nights)",
        "All meals as per itinerary",
        "Park entrance fees (Tanzania & Kenya)",
        "Game drives",
        "Services of an expert driver-guide",
        "4x4 pop-up roof safari vehicle",
        "Airport transfers (Arrival & Departure)",
        "Cross-border permits",
        "Domestic flights (Nairobi - Mara - Nairobi)"
      ],
      excluded: [
        "International flights",
        "Tanzania & Kenya visas",
        "Travel insurance",
        "Alcoholic drinks",
        "Tips/gratuities",
        "Personal expenses"
      ]
    },
    gettingThere: {
      description: "This tour starts in Dar es Salaam and ends in Nairobi",
      details: [
        "This operator can help select your international flights, but you'll have to book them yourself.",
        "Fly to Julius Nyerere International Airport (DAR) in Dar es Salaam.",
        "Fly from Wilson Airport (NBO) in Nairobi at the end of the tour.",
        "A transfer from and back to the airports is included.",
        "Additional accommodation before and at the end of the tour can be arranged for an extra cost."
      ]
    }
  },
  {
    id: 4,
    name: "3-Day Zanzibar Beach Getaway",
    offeredBy: "Asili Explorer Safaris",
    tourOperator: "Zanzibar Bliss Travel",
    rating: 4.8,
    reviewCount: 750,
    shortDescription: "Escape to paradise with this short but sweet Zanzibar beach holiday.",
    fullDescription: "Perfect for a quick getaway, this 3-day package includes transfers, accommodation at a selected beach resort, and half-board meals. Spend your days lounging on the beach, snorkeling, or exploring Stone Town.",
    duration: 3,
    price: 850,
    startingFrom: "Zanzibar",
    comfortLevel: "mid-range",
    tourType: "shared",
    safariType: "hotel",
    specializedTours: ["beach time", "honeymoon"],
    features: ["airport transfer included"],
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Stay at a handpicked beach resort",
      "Half-board meals included",
      "Transfers from/to airport",
      "Ideal for couples or solo travelers"
    ],
    destinations: [
      "Zanzibar Airport",
      "Stone Town",
      "Paje Beach",
      "Matemwe Beach",
      "Nungwi Beach"
    ],
    // --- Detailed Data for Tabs ---
    route: {
      start: "Zanzibar Airport (Day 1)",
      end: "Zanzibar Airport (Day 3)",
      days: [
        { day: 1, location: "Zanzibar", description: "Arrival at Abeid Amani Karume International Airport. Meet and greet by our representative and transfer to your beach resort. Relax and enjoy the beach. Overnight at resort." },
        { day: 2, location: "Zanzibar", description: "Full day at leisure on the beach or optional excursions (e.g., snorkeling, Stone Town tour, spice tour). Overnight at resort." },
        { day: 3, location: "Zanzibar", description: "Breakfast at the resort. Check-out and transfer to the airport for your departure flight." }
      ]
    },
    tourFeatures: [
      "Mid-range tour",
      "Shared tour (Private option available)",
      "Can start any day",
      "Can be customized (Excursions can be added)",
      "Suitable for solo travelers",
      "Minimum age of 16 years"
    ],
    activitiesTransportation: {
      activities: ["beach relaxation", "snorkeling", "stone town tour", "spice tour"],
      vehicle: "Comfortable car/van (transfers & tours)",
      transfer: "A transfer from and back to the airport is included"
    },
    accommodationMeals: {
      note: "Additional accommodation before and at the end of the tour can be arranged for an extra cost",
      schedule: [
        { day: 1, accommodation: "Selected Beach Resort", accommodationType: "Mid-range beach resort", meals: "Half Board Included" },
        { day: 2, accommodation: "Selected Beach Resort", accommodationType: "Mid-range beach resort", meals: "Half Board Included" },
        { day: 3, accommodation: "None", accommodationType: "End of tour", meals: "Breakfast Included" }
      ]
    },
    gallery: [
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1573843988976-8a4c7a9b0e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551632811-561732d1c5e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    dayByDay: [
      {
        day: 1,
        location: "Zanzibar",
        description: "Arrival at Abeid Amani Karume International Airport. Meet and greet by our representative and transfer to your beach resort. Check-in and relax on the beach. Enjoy the resort facilities. Overnight at resort.",
        accommodation: "Selected Beach Resort",
        accommodationType: "Mid-range beach resort",
        meals: "Half Board Included",
        drinks: "Drinks not included",
        images: [
          "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        bestTimeToVisit: "June to October",
        highSeason: "July to September",
        bestWeather: "Dry season (June-October)",
        wildlife: []
      },
      {
        day: 2,
        location: "Zanzibar",
        description: "Full day at leisure on the beach or optional excursions. Popular options include snorkeling in the coral reefs, a guided tour of historic Stone Town, or a visit to a local spice plantation. Overnight at resort.",
        accommodation: "Selected Beach Resort",
        accommodationType: "Mid-range beach resort",
        meals: "Half Board Included",
        drinks: "Drinks not included",
        images: [
          "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        bestTimeToVisit: "June to October",
        highSeason: "July to September",
        bestWeather: "Dry season (June-October)",
        wildlife: []
      },
      {
        day: 3,
        location: "Zanzibar",
        description: "Breakfast at the resort. Check-out and transfer to the airport for your departure flight.",
        accommodation: "None",
        accommodationType: "End of tour",
        meals: "Breakfast Included",
        drinks: "Drinks not included",
        images: [
          "https://images.unsplash.com/photo-1573843988976-8a4c7a9b0e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        bestTimeToVisit: "June to October",
        highSeason: "July to September",
        bestWeather: "Dry season (June-October)",
        wildlife: []
      }
    ],
    rates: {
      disclaimer: "Rates are per person and exclude the international flight from/to your home country. Prices vary based on group size, season, and accommodation upgrades. Children under 12 receive a discount, children under 2 are free. A single supplement may apply.",
      pricing: [
        {
          period: "Oct 1, 2025 - Oct 31, 2025",
          solo: "$1,200",
          oneRoomTwoPeople: "$850",
          oneRoomThreePeople: "$750",
          oneRoomFourPeople: "$700",
          twoRoomsFivePeople: "$650",
          threeRoomsSixPeople: "$650"
        },
        {
          period: "Nov 1, 2025 - Dec 15, 2025",
          solo: "$1,000",
          oneRoomTwoPeople: "$750",
          oneRoomThreePeople: "$650",
          oneRoomFourPeople: "$600",
          twoRoomsFivePeople: "$550",
          threeRoomsSixPeople: "$550"
        },
        {
          period: "Dec 16, 2025 - Dec 31, 2025",
          solo: "$1,200",
          oneRoomTwoPeople: "$850",
          oneRoomThreePeople: "$750",
          oneRoomFourPeople: "$700",
          twoRoomsFivePeople: "$650",
          threeRoomsSixPeople: "$650"
        },
        {
          period: "Jan 1, 2026 - Feb 28, 2026",
          solo: "$1,200",
          oneRoomTwoPeople: "$850",
          oneRoomThreePeople: "$750",
          oneRoomFourPeople: "$700",
          twoRoomsFivePeople: "$650",
          threeRoomsSixPeople: "$650"
        },
        {
          period: "Mar 1, 2026 - Mar 31, 2026",
          solo: "$1,000",
          oneRoomTwoPeople: "$750",
          oneRoomThreePeople: "$650",
          oneRoomFourPeople: "$600",
          twoRoomsFivePeople: "$550",
          threeRoomsSixPeople: "$550"
        },
        {
          period: "Apr 1, 2026 - May 31, 2026",
          solo: "$900",
          oneRoomTwoPeople: "$650",
          oneRoomThreePeople: "$550",
          oneRoomFourPeople: "$500",
          twoRoomsFivePeople: "$450",
          threeRoomsSixPeople: "$450"
        },
        {
          period: "Jun 1, 2026 - Jun 30, 2026",
          solo: "$1,200",
          oneRoomTwoPeople: "$850",
          oneRoomThreePeople: "$750",
          oneRoomFourPeople: "$700",
          twoRoomsFivePeople: "$650",
          threeRoomsSixPeople: "$650"
        },
        {
          period: "Jul 1, 2026 - Sep 30, 2026",
          solo: "$1,250",
          oneRoomTwoPeople: "$900",
          oneRoomThreePeople: "$800",
          oneRoomFourPeople: "$750",
          twoRoomsFivePeople: "$700",
          threeRoomsSixPeople: "$700"
        },
        {
          period: "Oct 1, 2026 - Oct 31, 2026",
          solo: "$1,200",
          oneRoomTwoPeople: "$850",
          oneRoomThreePeople: "$750",
          oneRoomFourPeople: "$700",
          twoRoomsFivePeople: "$650",
          threeRoomsSixPeople: "$650"
        },
        {
          period: "Nov 1, 2026 - Dec 15, 2026",
          solo: "$1,000",
          oneRoomTwoPeople: "$750",
          oneRoomThreePeople: "$650",
          oneRoomFourPeople: "$600",
          twoRoomsFivePeople: "$550",
          threeRoomsSixPeople: "$550"
        },
        {
          period: "Dec 16, 2026 - Dec 31, 2026",
          solo: "$1,200",
          oneRoomTwoPeople: "$850",
          oneRoomThreePeople: "$750",
          oneRoomFourPeople: "$700",
          twoRoomsFivePeople: "$650",
          threeRoomsSixPeople: "$650"
        }
      ]
    },
    inclusions: {
      included: [
        "All accommodation (2 nights)",
        "Half board meals as per itinerary",
        "Airport transfers (Arrival & Departure)",
        "Use of resort facilities (pool, beach access)"
      ],
      excluded: [
        "International flights",
        "Tanzania visa",
        "Travel insurance",
        "Alcoholic drinks",
        "Tips/gratuities",
        "Personal expenses",
        "Optional excursions"
      ]
    },
    gettingThere: {
      description: "This tour starts and ends in Zanzibar",
      details: [
        "This operator can help select your international flights, but you'll have to book them yourself.",
        "Fly to/from Abeid Amani Karume International Airport (ZNZ - Check price) on Zanzibar Island.",
        "A transfer from and back to the airport is included.",
        "Additional accommodation before and at the end of the tour can be arranged for an extra cost."
      ]
    }
  },
  {
    id: 5,
    name: "7-Day Classic Serengeti & Ngorongoro Safari",
    offeredBy: "Asili Explorer Safaris",
    tourOperator: "Asili Explorer Safaris",
    rating: 4.9,
    reviewCount: 2104,
    shortDescription: "Experience the heart of Tanzania's wildlife migration and the Ngorongoro Crater.",
    fullDescription: "This 7-day adventure takes you through the iconic Serengeti National Park and the Ngorongoro Conservation Area. Witness the Great Migration, spot the Big Five, and enjoy luxury accommodations.",
    duration: 7,
    price: 2800,
    startingFrom: "Arusha",
    comfortLevel: "luxury",
    tourType: "private",
    safariType: "lodge",
    specializedTours: ["family", "honeymoon"],
    features: ["airport transfer included", "itinerary customizable"],
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Witness the Great Migration in the Serengeti",
      "Explore the Ngorongoro Crater, a UNESCO World Heritage Site",
      "Stay in luxury lodges with stunning views",
      "Expert local guides and 4x4 vehicles"
    ],
    destinations: [
      "Arusha",
      "Tarangire National Park",
      "Lake Manyara National Park",
      "Serengeti National Park",
      "Ngorongoro Crater"
    ],
    // --- Detailed Data for Tabs ---
    route: {
      start: "Arusha (Day 1)",
      end: "Arusha (Day 7)",
      days: [
        { day: 1, location: "Arusha", description: "Arrival at Kilimanjaro International Airport. Meet and greet by our representative and transfer to your hotel in Arusha for overnight." },
        { day: 2, location: "Lake Manyara NP", description: "Drive to Lake Manyara National Park ( approx. 3-4 hours). Game drive in the afternoon. Overnight at lodge." },
        { day: 3, location: "Serengeti NP", description: "Full day game drive to Serengeti National Park via Ngorongoro Highlands. Arrive in time for lunch and afternoon game drive. Overnight at camp." },
        { day: 4, location: "Serengeti NP", description: "Full day game drive in the vast Serengeti plains. Witness the Great Migration if timing allows. Overnight at camp." },
        { day: 5, location: "Ngorongoro Crater", description: "Early breakfast and descend into the Ngorongoro Crater for a full-day game drive. Picnic lunch inside the crater. Return to Arusha. Overnight at lodge." },
        { day: 6, location: "Tarangire NP", description: "Drive to Tarangire National Park. Game drive with focus on large elephant herds. Overnight at camp." },
        { day: 7, location: "Kilimanjaro Airport", description: "Breakfast at the camp/lodge. Drive to Kilimanjaro International Airport for your departure flight." }
      ]
    },
    tourFeatures: [
      "Luxury tour",
      "Private tour",
      "Can start any day",
      "Can be customized",
      "Suitable for solo travelers",
      "Minimum age of 18 years"
    ],
    activitiesTransportation: {
      activities: ["game drives"],
      vehicle: "pop-up roof 4x4 vehicle",
      transfer: "A transfer from and back to the airport is included"
    },
    accommodationMeals: {
      note: "Additional accommodation before and at the end of the tour can be arranged for an extra cost",
      schedule: [
        { day: 1, accommodation: "Selected Hotel in Arusha", accommodationType: "Mid-range hotel", meals: "Breakfast & Dinner Included" },
        { day: 2, accommodation: "Lake Manyara Lodge", accommodationType: "Luxury lodge", meals: "All Meals Included" },
        { day: 3, accommodation: "Central Serengeti Camp", accommodationType: "Luxury tented camp", meals: "All Meals Included" },
        { day: 4, accommodation: "Central Serengeti Camp", accommodationType: "Luxury tented camp", meals: "All Meals Included" },
        { day: 5, accommodation: "Arusha Lodge", accommodationType: "Luxury lodge", meals: "All Meals Included" },
        { day: 6, accommodation: "Tarangire Camp", accommodationType: "Luxury tented camp", meals: "All Meals Included" },
        { day: 7, accommodation: "None", accommodationType: "End of tour", meals: "Breakfast & Lunch Included" }
      ]
    },
    gallery: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1573843988976-8a4c7a9b0e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551632811-561732d1c5e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    dayByDay: [
      {
        day: 1,
        location: "Arusha",
        description: "Arrival at Kilimanjaro International Airport. Meet and greet by our representative and transfer to your hotel in Arusha for overnight.",
        accommodation: "Selected Hotel in Arusha",
        accommodationType: "Mid-range hotel",
        meals: "Breakfast & Dinner Included",
        drinks: "Drinks not included",
        images: [
          "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        bestTimeToVisit: "June to October",
        highSeason: "July to September",
        bestWeather: "Dry season (June-October)",
        wildlife: []
      },
      {
        day: 2,
        location: "Lake Manyara NP",
        description: "Drive to Lake Manyara National Park ( approx. 3-4 hours). Game drive in the afternoon. Look for tree-climbing lions, elephants, and flamingos along the alkaline lake shore. Overnight at lodge.",
        accommodation: "Lake Manyara Lodge",
        accommodationType: "Luxury lodge",
        meals: "All Meals Included",
        drinks: "All drinks (Except for spirits/liquor)",
        images: [
          "https://images.unsplash.com/photo-1573843988976-8a4c7a9b0e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        bestTimeToVisit: "June to October (Easier to spot animals)",
        highSeason: "July to March (The northern section gets crowded)",
        bestWeather: "June to October (Little rainfall)",
        wildlife: [
          { animal: "Elephant", abundance: "Common" },
          { animal: "Giraffe", abundance: "Common" },
          { animal: "Buffalo", abundance: "Common" },
          { animal: "Zebra", abundance: "Common" },
          { animal: "Wildebeest", abundance: "Common" },
          { animal: "Hippo", abundance: "Common" }
        ]
      },
      {
        day: 3,
        location: "Serengeti NP",
        description: "Full day game drive to Serengeti National Park via Ngorongoro Highlands. Arrive in time for lunch and afternoon game drive. Spend 2 nights at camp.",
        accommodation: "Central Serengeti Camp",
        accommodationType: "Luxury tented camp inside Central Serengeti NP",
        meals: "All Meals Included",
        drinks: "All drinks (Except for spirits/liquor)",
        images: [
          "https://images.unsplash.com/photo-1551632811-561732d1c5e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        bestTimeToVisit: "January to February and June to October (Different areas are best at different times)",
        highSeason: "July to March (The Seronera area is crowded)",
        bestWeather: "June to October (Little to no rainfall)",
        wildlife: [
          { animal: "Elephant", abundance: "Common" },
          { animal: "Lion", abundance: "Common" },
          { animal: "Cheetah", abundance: "Common" },
          { animal: "Buffalo", abundance: "Abundant" },
          { animal: "Zebra", abundance: "Abundant" },
          { animal: "Wildebeest", abundance: "Abundant" }
        ]
      },
      {
        day: 4,
        location: "Serengeti NP",
        description: "Full day game drive in the vast Serengeti plains. Witness the Great Migration if timing allows. Spot lions, leopards, cheetahs, elephants, giraffes, zebras, and wildebeest. Overnight at camp.",
        accommodation: "Central Serengeti Camp",
        accommodationType: "Luxury tented camp inside Central Serengeti NP",
        meals: "All Meals Included",
        drinks: "All drinks (Except for spirits/liquor)",
        images: [
          "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        bestTimeToVisit: "January to February and June to October (Different areas are best at different times)",
        highSeason: "July to March (The Seronera area is crowded)",
        bestWeather: "June to October (Little to no rainfall)",
        wildlife: [
          { animal: "Elephant", abundance: "Common" },
          { animal: "Lion", abundance: "Common" },
          { animal: "Cheetah", abundance: "Common" },
          { animal: "Buffalo", abundance: "Abundant" },
          { animal: "Zebra", abundance: "Abundant" },
          { animal: "Wildebeest", abundance: "Abundant" }
        ]
      },
      {
        day: 5,
        location: "Ngorongoro Crater",
        description: "Early breakfast and descend into the Ngorongoro Crater for a full-day game drive. Picnic lunch inside the crater. Return to Arusha. Overnight at lodge.",
        accommodation: "Arusha Lodge",
        accommodationType: "Luxury lodge",
        meals: "All Meals Included",
        drinks: "All drinks (Except for spirits/liquor)",
        images: [
          "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        bestTimeToVisit: "June to October (Wildlife viewing is best)",
        highSeason: "Most of the year – July to March (Expect crowds)",
        bestWeather: "June to October (Rainfall is little to none)",
        wildlife: [
          { animal: "Black Rhino", abundance: "Common" },
          { animal: "Lion", abundance: "Common" },
          { animal: "Buffalo", abundance: "Abundant" },
          { animal: "Zebra", abundance: "Abundant" },
          { animal: "Wildebeest", abundance: "Abundant" },
          { animal: "Hyena", abundance: "Abundant" }
        ]
      },
      {
        day: 6,
        location: "Tarangire NP",
        description: "Drive to Tarangire National Park. Game drive with focus on large elephant herds. Overnight at camp.",
        accommodation: "Tarangire Camp",
        accommodationType: "Luxury tented camp",
        meals: "All Meals Included",
        drinks: "All drinks (Except for spirits/liquor)",
        images: [
          "https://images.unsplash.com/photo-1573843988976-8a4c7a9b0e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        bestTimeToVisit: "July to November (Animals come to the Tarangire River)",
        highSeason: "June to October (The park is full of visitors)",
        bestWeather: "June to October (Little rainfall)",
        wildlife: [
          { animal: "Elephant", abundance: "Abundant" },
          { animal: "Giraffe", abundance: "Common" },
          { animal: "Lion", abundance: "Common" },
          { animal: "Buffalo", abundance: "Abundant" },
          { animal: "Zebra", abundance: "Abundant" },
          { animal: "Wildebeest", abundance: "Abundant" }
        ]
      },
      {
        day: 7,
        location: "Kilimanjaro Airport",
        description: "Breakfast at the camp/lodge. Drive to Kilimanjaro International Airport for your departure flight.",
        accommodation: "None",
        accommodationType: "End of tour",
        meals: "Breakfast & Lunch Included",
        drinks: "Drinks not included",
        images: [],
        bestTimeToVisit: "June to October",
        highSeason: "July to September",
        bestWeather: "Dry season (June-October)",
        wildlife: []
      }
    ],
    rates: {
      disclaimer: "Rates are per person and exclude the international flight from/to your home country. Prices vary based on group size, season, and accommodation upgrades. Children under 12 receive a discount, children under 2 are free. A single supplement may apply.",
      pricing: [
        {
          period: "Oct 1, 2025 - Oct 31, 2025",
          solo: "$5,025",
          oneRoomTwoPeople: "$3,310",
          oneRoomThreePeople: "$2,890",
          oneRoomFourPeople: "$2,830",
          twoRoomsFivePeople: "$2,710",
          threeRoomsSixPeople: "$2,710"
        },
        {
          period: "Nov 1, 2025 - Dec 15, 2025",
          solo: "$4,500",
          oneRoomTwoPeople: "$2,960",
          oneRoomThreePeople: "$2,540",
          oneRoomFourPeople: "$2,480",
          twoRoomsFivePeople: "$2,360",
          threeRoomsSixPeople: "$2,360"
        },
        {
          period: "Dec 16, 2025 - Dec 31, 2025",
          solo: "$5,025",
          oneRoomTwoPeople: "$3,310",
          oneRoomThreePeople: "$2,890",
          oneRoomFourPeople: "$2,830",
          twoRoomsFivePeople: "$2,710",
          threeRoomsSixPeople: "$2,710"
        },
        {
          period: "Jan 1, 2026 - Feb 28, 2026",
          solo: "$5,025",
          oneRoomTwoPeople: "$3,310",
          oneRoomThreePeople: "$2,890",
          oneRoomFourPeople: "$2,830",
          twoRoomsFivePeople: "$2,710",
          threeRoomsSixPeople: "$2,710"
        },
        {
          period: "Mar 1, 2026 - Mar 31, 2026",
          solo: "$4,500",
          oneRoomTwoPeople: "$2,960",
          oneRoomThreePeople: "$2,540",
          oneRoomFourPeople: "$2,480",
          twoRoomsFivePeople: "$2,360",
          threeRoomsSixPeople: "$2,360"
        },
        {
          period: "Apr 1, 2026 - May 31, 2026",
          solo: "$4,065",
          oneRoomTwoPeople: "$2,670",
          oneRoomThreePeople: "$2,250",
          oneRoomFourPeople: "$2,190",
          twoRoomsFivePeople: "$2,070",
          threeRoomsSixPeople: "$2,070"
        },
        {
          period: "Jun 1, 2026 - Jun 30, 2026",
          solo: "$5,025",
          oneRoomTwoPeople: "$3,310",
          oneRoomThreePeople: "$2,890",
          oneRoomFourPeople: "$2,830",
          twoRoomsFivePeople: "$2,710",
          threeRoomsSixPeople: "$2,710"
        },
        {
          period: "Jul 1, 2026 - Sep 30, 2026",
          solo: "$5,070",
          oneRoomTwoPeople: "$3,340",
          oneRoomThreePeople: "$2,920",
          oneRoomFourPeople: "$2,860",
          twoRoomsFivePeople: "$2,740",
          threeRoomsSixPeople: "$2,740"
        },
        {
          period: "Oct 1, 2026 - Oct 31, 2026",
          solo: "$5,025",
          oneRoomTwoPeople: "$3,310",
          oneRoomThreePeople: "$2,890",
          oneRoomFourPeople: "$2,830",
          twoRoomsFivePeople: "$2,710",
          threeRoomsSixPeople: "$2,710"
        },
        {
          period: "Nov 1, 2026 - Dec 15, 2026",
          solo: "$4,500",
          oneRoomTwoPeople: "$2,960",
          oneRoomThreePeople: "$2,540",
          oneRoomFourPeople: "$2,480",
          twoRoomsFivePeople: "$2,360",
          threeRoomsSixPeople: "$2,360"
        },
        {
          period: "Dec 16, 2026 - Dec 31, 2026",
          solo: "$5,025",
          oneRoomTwoPeople: "$3,310",
          oneRoomThreePeople: "$2,890",
          oneRoomFourPeople: "$2,830",
          twoRoomsFivePeople: "$2,710",
          threeRoomsSixPeople: "$2,710"
        }
      ]
    },
    inclusions: {
      included: [
        "All accommodation (6 nights)",
        "All meals as per itinerary",
        "Park entrance fees",
        "Game drives",
        "Services of an expert driver-guide",
        "4x4 pop-up roof safari vehicle",
        "Airport transfers (Arrival & Departure)"
      ],
      excluded: [
        "International flights",
        "Tanzania visa",
        "Travel insurance",
        "Alcoholic drinks",
        "Tips/gratuities",
        "Personal expenses"
      ]
    },
    gettingThere: {
      description: "This tour starts and ends in Arusha",
      details: [
        "This operator can help select your international flights, but you'll have to book them yourself.",
        "Fly to/from Kilimanjaro Airport (JRO - Check price) near Arusha. Or fly to/from Arusha Airport (ARK - Check price) via Dar es Salaam or Nairobi (Kenya).",
        "A transfer from and back to the airport is included.",
        "Additional accommodation before and at the end of the tour can be arranged for an extra cost."
      ]
    }
  },
  {
    id: 6,
    name: "Budget 4-Day Tarangire & Lake Manyara Safari",
    offeredBy: "Asili Explorer Safaris",
    tourOperator: "Budget Safaris TZ",
    rating: 4.6,
    reviewCount: 320,
    shortDescription: "An affordable way to experience Tanzania's wildlife wonders.",
    fullDescription: "This budget-friendly 4-day safari focuses on two of Tanzania's most accessible parks, Tarangire and Lake Manyara, known for their large elephant populations and tree-climbing lions respectively.",
    duration: 4,
    price: 750,
    startingFrom: "Arusha",
    comfortLevel: "budget",
    tourType: "shared",
    safariType: "camping",
    specializedTours: ["family"],
    features: ["airport transfer included"],
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Focus on Tarangire and Lake Manyara National Parks",
      "Affordable shared safari experience",
      "Camping under the stars",
      "Expert driver-guide"
    ],
    destinations: [
      "Arusha",
      "Tarangire National Park",
      "Lake Manyara National Park",
      "Karatu",
      "Arusha"
    ],
    // --- Detailed Data for Tabs ---
    route: {
      start: "Arusha (Day 1)",
      end: "Arusha (Day 4)",
      days: [
        { day: 1, location: "Arusha", description: "Pickup from your hotel in Arusha. Drive to Tarangire National Park. Game drive in the afternoon. Overnight camping." },
        { day: 2, location: "Tarangire NP", description: "Full day game drive in Tarangire National Park. Focus on elephants and baobab trees. Overnight camping." },
        { day: 3, location: "Lake Manyara NP", description: "Drive to Lake Manyara National Park. Game drive to see tree-climbing lions and flamingos. Overnight camping." },
        { day: 4, location: "Arusha", description: "Morning game drive. Drive back to Arusha. Drop-off at your hotel or the airport." }
      ]
    },
    tourFeatures: [
      "Budget tour",
      "Shared tour (Max 8 travelers per group)",
      "Can start any day",
      "Can be customized (Limited options)",
      "Suitable for budget-conscious travelers",
      "Minimum age of 12 years"
    ],
    activitiesTransportation: {
      activities: ["game drives", "camping"],
      vehicle: "pop-up roof 4x4 vehicle",
      transfer: "A transfer from and back to the airport/hotel is included"
    },
    accommodationMeals: {
      note: "Camping under the stars with basic facilities. Additional accommodation before and at the end of the tour can be arranged for an extra cost.",
      schedule: [
        { day: 1, accommodation: "Budget Camp in Tarangire", accommodationType: "Basic camping site", meals: "All Meals Included" },
        { day: 2, accommodation: "Budget Camp in Tarangire", accommodationType: "Basic camping site", meals: "All Meals Included" },
        { day: 3, accommodation: "Budget Camp in Lake Manyara", accommodationType: "Basic camping site", meals: "All Meals Included" },
        { day: 4, accommodation: "None", accommodationType: "End of tour", meals: "Breakfast & Lunch Included" }
      ]
    },
    gallery: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1573843988976-8a4c7a9b0e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551632811-561732d1c5e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    dayByDay: [
      {
        day: 1,
        location: "Arusha",
        description: "Pickup from your hotel in Arusha (approx. 1 hour drive). Drive to Tarangire National Park (approx. 2-3 hours). Game drive in the afternoon. Look for large elephant herds and baobab trees. Overnight camping.",
        accommodation: "Budget Camp in Tarangire",
        accommodationType: "Basic camping site",
        meals: "All Meals Included",
        drinks: "All drinks (Except for spirits/liquor)",
        images: [
          "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        bestTimeToVisit: "July to November (Animals come to the Tarangire River)",
        highSeason: "June to October (The park is full of visitors)",
        bestWeather: "June to October (Little rainfall)",
        wildlife: [
          { animal: "Elephant", abundance: "Abundant" },
          { animal: "Giraffe", abundance: "Common" },
          { animal: "Lion", abundance: "Common" },
          { animal: "Buffalo", abundance: "Abundant" },
          { animal: "Zebra", abundance: "Abundant" },
          { animal: "Wildebeest", abundance: "Abundant" }
        ]
      },
      {
        day: 2,
        location: "Tarangire NP",
        description: "Full day game drive in Tarangire National Park. Focus on elephants, baobab trees, and diverse birdlife. The park's varied landscape offers excellent opportunities for photography. Overnight camping.",
        accommodation: "Budget Camp in Tarangire",
        accommodationType: "Basic camping site",
        meals: "All Meals Included",
        drinks: "All drinks (Except for spirits/liquor)",
        images: [
          "https://images.unsplash.com/photo-1573843988976-8a4c7a9b0e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        bestTimeToVisit: "July to November (Animals come to the Tarangire River)",
        highSeason: "June to October (The park is full of visitors)",
        bestWeather: "June to October (Little rainfall)",
        wildlife: [
          { animal: "Elephant", abundance: "Abundant" },
          { animal: "Giraffe", abundance: "Common" },
          { animal: "Lion", abundance: "Common" },
          { animal: "Buffalo", abundance: "Abundant" },
          { animal: "Zebra", abundance: "Abundant" },
          { animal: "Wildebeest", abundance: "Abundant" }
        ]
      },
      {
        day: 3,
        location: "Lake Manyara NP",
        description: "Drive to Lake Manyara National Park (approx. 3-4 hours). Game drive to see tree-climbing lions and flamingos along the alkaline lake shore. Overnight camping.",
        accommodation: "Budget Camp in Lake Manyara",
        accommodationType: "Basic camping site",
        meals: "All Meals Included",
        drinks: "All drinks (Except for spirits/liquor)",
        images: [
          "https://images.unsplash.com/photo-1551632811-561732d1c5e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        bestTimeToVisit: "June to October (Easier to spot animals)",
        highSeason: "July to March (The northern section gets crowded)",
        bestWeather: "June to October (Little rainfall)",
        wildlife: [
          { animal: "Elephant", abundance: "Common" },
          { animal: "Giraffe", abundance: "Common" },
          { animal: "Buffalo", abundance: "Common" },
          { animal: "Zebra", abundance: "Common" },
          { animal: "Wildebeest", abundance: "Common" },
          { animal: "Hippo", abundance: "Common" }
        ]
      },
      {
        day: 4,
        location: "Arusha",
        description: "Morning game drive. Drive back to Arusha (approx. 3-4 hours). Drop-off at your hotel or the airport.",
        accommodation: "None",
        accommodationType: "End of tour",
        meals: "Breakfast & Lunch Included",
        drinks: "Drinks not included",
        images: [
          "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        bestTimeToVisit: "June to October",
        highSeason: "July to September",
        bestWeather: "Dry season (June-October)",
        wildlife: []
      }
    ],
    rates: {
      disclaimer: "Rates are per person and exclude the international flight from/to your home country. Prices vary based on group size and season. A single supplement may apply. Camping equipment is provided.",
      pricing: [
        {
          period: "Oct 1, 2025 - Oct 31, 2025",
          solo: "$1,200",
          oneRoomTwoPeople: "$750",
          oneRoomThreePeople: "$650",
          oneRoomFourPeople: "$600",
          twoRoomsFivePeople: "$550",
          threeRoomsSixPeople: "$550"
        },
        {
          period: "Nov 1, 2025 - Dec 15, 2025",
          solo: "$1,000",
          oneRoomTwoPeople: "$650",
          oneRoomThreePeople: "$550",
          oneRoomFourPeople: "$500",
          twoRoomsFivePeople: "$450",
          threeRoomsSixPeople: "$450"
        },
        {
          period: "Dec 16, 2025 - Dec 31, 2025",
          solo: "$1,200",
          oneRoomTwoPeople: "$750",
          oneRoomThreePeople: "$650",
          oneRoomFourPeople: "$600",
          twoRoomsFivePeople: "$550",
          threeRoomsSixPeople: "$550"
        },
        {
          period: "Jan 1, 2026 - Feb 28, 2026",
          solo: "$1,200",
          oneRoomTwoPeople: "$750",
          oneRoomThreePeople: "$650",
          oneRoomFourPeople: "$600",
          twoRoomsFivePeople: "$550",
          threeRoomsSixPeople: "$550"
        },
        {
          period: "Mar 1, 2026 - Mar 31, 2026",
          solo: "$1,000",
          oneRoomTwoPeople: "$650",
          oneRoomThreePeople: "$550",
          oneRoomFourPeople: "$500",
          twoRoomsFivePeople: "$450",
          threeRoomsSixPeople: "$450"
        },
        {
          period: "Apr 1, 2026 - May 31, 2026",
          solo: "$900",
          oneRoomTwoPeople: "$550",
          oneRoomThreePeople: "$450",
          oneRoomFourPeople: "$400",
          twoRoomsFivePeople: "$350",
          threeRoomsSixPeople: "$350"
        },
        {
          period: "Jun 1, 2026 - Jun 30, 2026",
          solo: "$1,200",
          oneRoomTwoPeople: "$750",
          oneRoomThreePeople: "$650",
          oneRoomFourPeople: "$600",
          twoRoomsFivePeople: "$550",
          threeRoomsSixPeople: "$550"
        },
        {
          period: "Jul 1, 2026 - Sep 30, 2026",
          solo: "$1,250",
          oneRoomTwoPeople: "$800",
          oneRoomThreePeople: "$700",
          oneRoomFourPeople: "$650",
          twoRoomsFivePeople: "$600",
          threeRoomsSixPeople: "$600"
        },
        {
          period: "Oct 1, 2026 - Oct 31, 2026",
          solo: "$1,200",
          oneRoomTwoPeople: "$750",
          oneRoomThreePeople: "$650",
          oneRoomFourPeople: "$600",
          twoRoomsFivePeople: "$550",
          threeRoomsSixPeople: "$550"
        },
        {
          period: "Nov 1, 2026 - Dec 15, 2026",
          solo: "$1,000",
          oneRoomTwoPeople: "$650",
          oneRoomThreePeople: "$550",
          oneRoomFourPeople: "$500",
          twoRoomsFivePeople: "$450",
          threeRoomsSixPeople: "$450"
        },
        {
          period: "Dec 16, 2026 - Dec 31, 2026",
          solo: "$1,200",
          oneRoomTwoPeople: "$750",
          oneRoomThreePeople: "$650",
          oneRoomFourPeople: "$600",
          twoRoomsFivePeople: "$550",
          threeRoomsSixPeople: "$550"
        }
      ]
    },
    inclusions: {
      included: [
        "All accommodation (3 nights camping)",
        "All meals as per itinerary",
        "Park entrance fees",
        "Game drives",
        "Services of an expert driver-guide",
        "4x4 pop-up roof safari vehicle",
        "Airport/hotel transfers (Arusha)"
      ],
      excluded: [
        "International flights",
        "Tanzania visa",
        "Travel insurance",
        "Alcoholic drinks",
        "Tips/gratuities",
        "Personal expenses"
      ]
    },
    gettingThere: {
      description: "This tour starts and ends in Arusha",
      details: [
        "This operator can help select your international flights, but you'll have to book them yourself.",
        "Fly to/from Kilimanjaro Airport (JRO - Check price) near Arusha.",
        "A transfer from and back to the airport/hotel in Arusha is included.",
        "Additional accommodation before and at the end of the tour can be arranged for an extra cost."
      ]
    }
  },
  {
  "id": 7,
  "name": "8-Day Ultimate Tanzania Safari - Luxury",
  "offeredBy": "Soul of Tanzania",
  "tourOperator": "Soul of Tanzania",
  "rating": 4.95,
  "reviewCount": 312,
  "shortDescription": "Experience Tanzania in ultimate luxury across 8 unforgettable days. Visit Tarangire, Lake Manyara, Serengeti (3 nights), and Ngorongoro Crater with premium lodges, private guides, and seamless transfers.",
  "fullDescription": "This luxury 8-day safari explores Tanzania’s northern circuit in style—Tarangire National Park, Lake Manyara, the vast Serengeti (with 3 nights for optimal wildlife viewing), and the breathtaking Ngorongoro Crater. All accommodations are 5-star lodges or exclusive tented camps with gourmet dining and panoramic views.",
  "duration": 8,
  "price": 4250,
  "startingFrom": "Arusha",
  "comfortLevel": "luxury",
  "tourType": "private",
  "safariType": "lodge",
  "specializedTours": ["safari", "wildlife", "photography", "honeymoon"],
  "features": ["can start any day", "can be customized", "suitable for couples", "suitable for all ages", "airport transfer included", "private guide"],
  "image": "https://images.unsplash.com/photo-1546182990-d3048558c36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "highlights": [
    "Tarangire National Park",
    "Lake Manyara National Park",
    "Serengeti National Park (3 nights)",
    "Ngorongoro Crater",
    "Luxury lodges & exclusive tented camps",
    "Private tour with expert guide",
    "Can start any day",
    "Customizable itinerary"
  ],
  "destinations": [
    "Arusha",
    "Tarangire National Park",
    "Lake Manyara National Park",
    "Serengeti National Park",
    "Ngorongoro Crater"
  ],
  "route": {
    "start": "Arusha (Day 1)",
    "end": "Arusha (Day 8)",
    "days": [
      { "day": 1, "location": "Tarangire NP", "description": "" },
      { "day": 2, "location": "Lake Manyara NP", "description": "" },
      { "day": "3-5", "location": "Serengeti NP", "description": "" },
      { "day": 6, "location": "Ngorongoro Crater", "description": "" },
      { "day": 7, "location": "Ngorongoro Crater rim", "description": "" },
      { "day": 8, "location": "End of tour", "description": "" }
    ]
  },
  "tourFeatures": [
    "Luxury tour",
    "Private tour",
    "Can start any day",
    "Fully customizable",
    "Ideal for honeymooners & photographers",
    "Suitable for all ages"
  ],
  "activitiesTransportation": {
    "activities": ["game drives", "sunset viewing", "guided nature walks (where permitted)"],
    "vehicle": "Premium pop-up roof 4x4 Land Cruiser with fridge & charging ports",
    "transfer": "Private airport transfers included"
  },
  "accommodationMeals": {
    "note": "Pre- and post-tour luxury stays in Arusha available upon request.",
    "schedule": [
      {
        "day": 1,
        "accommodation": "Tarangire Treetops",
        "accommodationType": "Luxury treehouse-style lodge inside Tarangire NP",
        "meals": "All Meals Included"
      },
      {
        "day": 2,
        "accommodation": "Lake Manyara Serena Lodge",
        "accommodationType": "Cliffside luxury lodge with lake views",
        "meals": "All Meals Included"
      },
      {
        "day": "3-5",
        "accommodation": "Four Seasons Safari Lodge Serengeti",
        "accommodationType": "5-star luxury lodge in Central Serengeti",
        "meals": "All Meals Included"
      },
      {
        "day": 6,
        "accommodation": "&Beyond Ngorongoro Crater Lodge",
        "accommodationType": "Ultra-luxury lodge on crater rim with butler service",
        "meals": "All Meals Included"
      },
      {
        "day": 7,
        "accommodation": "&Beyond Ngorongoro Crater Lodge",
        "accommodationType": "Second night for relaxed crater exploration",
        "meals": "All Meals Included"
      },
      {
        "day": 8,
        "accommodation": "End of tour",
        "accommodationType": "(No accommodation)",
        "meals": "Breakfast Included"
      }
    ]
  },
  "gallery": [
    "https://images.unsplash.com/photo-1546182990-d3048558c36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1573843988976-8a4c7a9b0e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1551632811-561732d1c5e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  "dayByDay": [
    {
      "day": 1,
      "location": "Tarangire National Park",
      "description": "Depart Arusha at 8:00 AM for Tarangire, famed for its elephant herds and ancient baobabs. Enjoy a full-day game drive with a gourmet picnic lunch under acacia shade. In the late afternoon, arrive at your luxury treehouse lodge for sunset views over the park.",
      "accommodation": "Tarangire Treetops",
      "accommodationType": "Luxury treehouse-style lodge inside Tarangire NP",
      "meals": "All meals included",
      "drinks": "Premium drinks included (including select wines & spirits)",
      "images": ["https://images.unsplash.com/photo-1546182990-d3048558c36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      "bestTimeToVisit": "July–October",
      "highSeason": "June–October",
      "bestWeather": "Dry season (June–October)",
      "wildlife": [
        { "animal": "Elephant", "abundance": "Abundant" },
        { "animal": "Lion", "abundance": "Common" },
        { "animal": "Giraffe", "abundance": "Common" },
        { "animal": "Oryx", "abundance": "Common" }
      ]
    },
    {
      "day": 2,
      "location": "Lake Manyara NP",
      "description": "Morning drive to Lake Manyara. Explore its groundwater forest, alkaline lake, and escarpment. Look for tree-climbing lions and flamingo flocks. Afternoon transfer to your cliffside luxury lodge with panoramic views.",
      "accommodation": "Lake Manyara Serena Lodge",
      "accommodationType": "Cliffside luxury lodge with lake views",
      "meals": "All meals included",
      "drinks": "Premium drinks included",
      "images": ["https://images.unsplash.com/photo-1573843988976-8a4c7a9b0e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      "bestTimeToVisit": "June–October",
      "highSeason": "July–March",
      "bestWeather": "June–October",
      "wildlife": [
        { "animal": "Tree-climbing lion", "abundance": "Rare but iconic" },
        { "animal": "Flamingo", "abundance": "Seasonal (dry months)" },
        { "animal": "Hippo", "abundance": "Abundant" }
      ]
    },
    {
      "day": "3-5",
      "location": "Serengeti NP",
      "description": "Three full days in the Serengeti offer unparalleled wildlife immersion. Track the Great Migration (seasonal), witness predator-prey dynamics, and enjoy sunrise/sunset drives. Your luxury lodge features a spa, infinity pool, and private verandas overlooking the plains.",
      "accommodation": "Four Seasons Safari Lodge Serengeti",
      "accommodationType": "5-star luxury lodge in Central Serengeti",
      "meals": "All meals included",
      "drinks": "Premium drinks included",
      "images": ["https://images.unsplash.com/photo-1551632811-561732d1c5e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      "bestTimeToVisit": "Year-round (Jan–Feb for calving; Jun–Oct for river crossings)",
      "highSeason": "July–March",
      "bestWeather": "June–October (dry)",
      "wildlife": [
        { "animal": "Wildebeest", "abundance": "Abundant (seasonal migration)" },
        { "animal": "Cheetah", "abundance": "Common" },
        { "animal": "Leopard", "abundance": "Common" },
        { "animal": "Lion", "abundance": "Abundant" }
      ]
    },
    {
      "day": 6,
      "location": "Ngorongoro Crater",
      "description": "Descend into the crater at dawn—home to the Big Five, including the rare black rhino. Full-day exploration with picnic lunch by Hippo Pool. Ascend in late afternoon to your iconic Maasai-inspired luxury lodge perched on the rim.",
      "accommodation": "&Beyond Ngorongoro Crater Lodge",
      "accommodationType": "Ultra-luxury lodge with butler service",
      "meals": "All meals included",
      "drinks": "Premium drinks included",
      "images": ["https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      "bestTimeToVisit": "June–October",
      "highSeason": "Year-round",
      "bestWeather": "June–October",
      "wildlife": [
        { "animal": "Black Rhino", "abundance": "Common" },
        { "animal": "Hippo", "abundance": "Abundant" },
        { "animal": "Elephant", "abundance": "Common" }
      ]
    },
    {
      "day": 7,
      "location": "Ngorongoro Crater Rim",
      "description": "Optional morning crater revisit or cultural visit to a Maasai village. Relax at the lodge with spa treatments or enjoy panoramic views from your suite. Farewell dinner under the stars.",
      "accommodation": "&Beyond Ngorongoro Crater Lodge",
      "accommodationType": "Second night for comfort and flexibility",
      "meals": "All meals included",
      "drinks": "Premium drinks included",
      "images": [],
      "bestTimeToVisit": "",
      "highSeason": "",
      "bestWeather": "",
      "wildlife": []
    },
    {
      "day": 8,
      "location": "Arusha",
      "description": "After breakfast, scenic drive back to Arusha (approx. 3.5 hours). Drop-off at your hotel or Kilimanjaro Airport (JRO) by 2:00 PM.",
      "accommodation": "End of tour",
      "accommodationType": "(No accommodation)",
      "meals": "Breakfast Included",
      "drinks": "Drinks not included",
      "images": [],
      "bestTimeToVisit": "",
      "highSeason": "",
      "bestWeather": "",
      "wildlife": []
    }
  ],
  "rates": {
    "disclaimer": "Rates are per person, based on double occupancy. Children 6–12 receive 20% discount; under 6 free (with restrictions). International flights not included.",
    "pricing": [
      {
        "period": "Oct 1, 2025 - Oct 31, 2025",
        "solo": "$7,850",
        "oneRoomTwoPeople": "$4,250",
        "oneRoomThreePeople": "$3,950",
        "oneRoomFourPeople": "$3,850"
      },
      {
        "period": "Nov 1, 2025 - Dec 15, 2025",
        "solo": "$6,950",
        "oneRoomTwoPeople": "$3,750",
        "oneRoomThreePeople": "$3,450",
        "oneRoomFourPeople": "$3,350"
      },
      {
        "period": "Dec 16, 2025 - Jan 5, 2026",
        "solo": "$8,200",
        "oneRoomTwoPeople": "$4,450",
        "oneRoomThreePeople": "$4,150",
        "oneRoomFourPeople": "$4,050"
      }
    ]
  },
  "inclusions": {
    "included": [
      "All park fees & conservation levies",
      "Luxury accommodation as per itinerary",
      "Private expert guide & 4x4 vehicle",
      "All meals & premium beverages",
      "Roundtrip airport transfers",
      "Emergency evacuation insurance",
      "All taxes & VAT"
    ],
    "excluded": [
      "International flights",
      "Travel insurance",
      "Tips (recommended: $25/day per guest)",
      "Visa fees & personal expenses",
      "Optional activities (e.g., hot air balloon safari)"
    ]
  },
  "gettingThere": {
    "description": "Tour begins and ends in Arusha.",
    "details": [
      "Fly into Kilimanjaro International Airport (JRO), 45 minutes from Arusha.",
      "Private luxury transfers included.",
      "Pre/post-tour stays at Arusha Coffee Lodge or similar can be arranged."
    ]
  }
},
{
  "id": 8,
  "name": "5-Day Budget Tanzania Safari - Camping",
  "offeredBy": "Safari Budget Co.",
  "tourOperator": "Safari Budget Co.",
  "rating": 4.6,
  "reviewCount": 418,
  "shortDescription": "An affordable 5-day camping safari through Tarangire, Serengeti, and Ngorongoro Crater. Perfect for backpackers and solo travelers seeking adventure without breaking the bank.",
  "fullDescription": "This budget-friendly camping safari covers Tanzania’s top parks—Tarangire, Serengeti, and Ngorongoro Crater—with comfortable dome tents, shared facilities, and expert local guides. All meals and park fees included.",
  "duration": 5,
  "price": 1250,
  "startingFrom": "Arusha",
  "comfortLevel": "budget",
  "tourType": "group",
  "safariType": "camping",
  "specializedTours": ["safari", "backpacking", "budget travel", "solo travel"],
  "features": ["fixed departure dates", "group tour (max 6 pax)", "suitable for solo travelers", "meals included", "airport pickup available (extra fee)"],
  "image": "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "highlights": [
    "Tarangire National Park",
    "Serengeti National Park (2 nights)",
    "Ngorongoro Crater",
    "Budget camping with shared facilities",
    "Small group (max 6 travelers)",
    "All park fees & meals included"
  ],
  "destinations": [
    "Arusha",
    "Tarangire National Park",
    "Serengeti National Park",
    "Ngorongoro Crater"
  ],
  "route": {
    "start": "Arusha (Day 1)",
    "end": "Arusha (Day 5)",
    "days": [
      { "day": 1, "location": "Tarangire NP", "description": "" },
      { "day": "2-3", "location": "Serengeti NP", "description": "" },
      { "day": 4, "location": "Ngorongoro Crater", "description": "" },
      { "day": 5, "location": "End of tour", "description": "" }
    ]
  },
  "tourFeatures": [
    "Budget camping safari",
    "Small group experience",
    "Fixed departure dates (Mon & Thu)",
    "All meals provided",
    "Ideal for solo travelers & backpackers"
  ],
  "activitiesTransportation": {
    "activities": ["game drives", "campfire evenings"],
    "vehicle": "Shared pop-up roof 4x4 minibus",
    "transfer": "Airport pickup available for $30 extra"
  },
  "accommodationMeals": {
    "note": "Camping with shared bathroom facilities. Sleeping bags can be rented for $15.",
    "schedule": [
      {
        "day": 1,
        "accommodation": "Kikoti Campsite",
        "accommodationType": "Public campsite near Tarangire NP",
        "meals": "Dinner & Breakfast"
      },
      {
        "day": "2-3",
        "accommodation": "Serena Campsite Central Serengeti",
        "accommodationType": "Designated public campsite inside Serengeti",
        "meals": "All Meals Included"
      },
      {
        "day": 4,
        "accommodation": "Simba Campsite Ngorongoro",
        "accommodationType": "Public campsite on crater rim",
        "meals": "All Meals Included"
      },
      {
        "day": 5,
        "accommodation": "End of tour",
        "accommodationType": "(No accommodation)",
        "meals": "Breakfast Included"
      }
    ]
  },
  "gallery": [
    "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1551632811-561732d1c5e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  "dayByDay": [
    {
      "day": 1,
      "location": "Tarangire NP",
      "description": "Depart Arusha at 8 AM. Afternoon game drive in Tarangire focusing on elephants and baobabs. Camp under the stars at Kikoti Campsite with cooked dinner by the campfire.",
      "accommodation": "Kikoti Campsite",
      "accommodationType": "Basic public campsite",
      "meals": "Dinner & Breakfast",
      "drinks": "Water & tea/coffee included; other drinks extra",
      "images": ["https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      "wildlife": [
        { "animal": "Elephant", "abundance": "Abundant" },
        { "animal": "Oryx", "abundance": "Common" }
      ]
    },
    {
      "day": "2-3",
      "location": "Serengeti NP",
      "description": "Full days exploring Serengeti’s plains. Track big cats, witness migration (seasonal), and enjoy sunset drives. Camp inside the park with hot bucket showers.",
      "accommodation": "Serena Campsite Central Serengeti",
      "accommodationType": "Fenced public campsite with basic amenities",
      "meals": "All meals included",
      "drinks": "Water & tea/coffee included",
      "images": ["https://images.unsplash.com/photo-1551632811-561732d1c5e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      "wildlife": [
        { "animal": "Lion", "abundance": "Common" },
        { "animal": "Wildebeest", "abundance": "Abundant" }
      ]
    },
    {
      "day": 4,
      "location": "Ngorongoro Crater",
      "description": "Early descent into the crater for a full day among rhinos, hippos, and lions. Picnic lunch by the lake. Overnight at Simba Campsite with crater views.",
      "accommodation": "Simba Campsite Ngorongoro",
      "accommodationType": "Basic campsite on crater rim",
      "meals": "All meals included",
      "drinks": "Water & tea/coffee included",
      "images": ["https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      "wildlife": [
        { "animal": "Black Rhino", "abundance": "Common" },
        { "animal": "Hippo", "abundance": "Abundant" }
      ]
    },
    {
      "day": 5,
      "location": "Arusha",
      "description": "Return to Arusha by early afternoon. Drop-off at central hotels or airport (extra fee applies).",
      "accommodation": "End of tour",
      "accommodationType": "(No accommodation)",
      "meals": "Breakfast Included",
      "drinks": "Not included",
      "images": [],
      "wildlife": []
    }
  ],
  "rates": {
    "disclaimer": "Price based on group of 4–6. Solo travelers pay a single supplement of $150. Children under 12 not recommended.",
    "pricing": [
      {
        "period": "Year-round",
        "solo": "$1,400",
        "oneRoomTwoPeople": "$1,250",
        "groupDiscount": "Groups of 4+ get 5% off"
      }
    ]
  },
  "inclusions": {
    "included": [
      "Park entry fees",
      "Camping fees",
      "All meals (as specified)",
      "Professional guide",
      "Transport in shared 4x4",
      "Drinking water"
    ],
    "excluded": [
      "Airport transfers",
      "Sleeping bag rental",
      "Tips (recommended $10/day)",
      "Alcoholic drinks",
      "Travel insurance"
    ]
  },
  "gettingThere": {
    "description": "Tour starts at 8:00 AM from Arusha city center.",
    "details": [
      "Fly into JRO or ARK.",
      "Airport pickup: $30 one-way.",
      "Must arrive in Arusha the night before departure."
    ]
  }
},
{
  "id": 9,
  "name": "7-Day Family-Friendly Tanzania Safari",
  "offeredBy": "Wildlife Wonders Safaris",
  "tourOperator": "Wildlife Wonders Safaris",
  "rating": 4.8,
  "reviewCount": 276,
  "shortDescription": "A gentle-paced 7-day safari designed for families with children. Visit Tarangire, Lake Manyara, Serengeti, and Ngorongoro with child-friendly lodges, educational activities, and flexible game drives.",
  "fullDescription": "This family-oriented safari balances wildlife excitement with comfort and safety. It includes shorter game drives, kid-approved meals, swimming pools at lodges, and educational talks by naturalist guides—perfect for travelers with children aged 5+.",
  "duration": 7,
  "price": 3150,
  "startingFrom": "Arusha",
  "comfortLevel": "mid-range",
  "tourType": "private",
  "safariType": "lodge",
  "specializedTours": ["safari", "family travel", "educational", "wildlife"],
  "features": ["can start any day", "child-friendly", "swimming pools at lodges", "educational guides", "airport transfer included"],
  "image": "https://images.unsplash.com/photo-1560250037-7f0b8b3c4a2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "highlights": [
    "Tarangire National Park",
    "Lake Manyara National Park",
    "Serengeti National Park (2 nights)",
    "Ngorongoro Crater",
    "Family suites available",
    "Child-friendly activities & menus",
    "Swimming pools at all lodges",
    "Private vehicle with child seats"
  ],
  "destinations": [
    "Arusha",
    "Tarangire National Park",
    "Lake Manyara National Park",
    "Serengeti National Park",
    "Ngorongoro Crater"
  ],
  "route": {
    "start": "Arusha (Day 1)",
    "end": "Arusha (Day 7)",
    "days": [
      { "day": 1, "location": "Tarangire NP", "description": "" },
      { "day": 2, "location": "Lake Manyara NP", "description": "" },
      { "day": "3-4", "location": "Serengeti NP", "description": "" },
      { "day": 5, "location": "Ngorongoro Crater", "description": "" },
      { "day": 6, "location": "Ngorongoro", "description": "" },
      { "day": 7, "location": "End of tour", "description": "" }
    ]
  },
  "tourFeatures": [
    "Family-focused itinerary",
    "Mid-range lodges with pools",
    "Flexible game drive times",
    "Child-sized life jackets & seats",
    "Educational wildlife booklets for kids"
  ],
  "activitiesTransportation": {
    "activities": ["game drives", "junior ranger program", "nature bingo", "stargazing"],
    "vehicle": "Spacious 4x4 with fridge, USB ports, and child seats",
    "transfer": "Included from/to Kilimanjaro Airport"
  },
  "accommodationMeals": {
    "note": "Family rooms or interconnecting rooms available. Kids’ menus and high chairs provided.",
    "schedule": [
      {
        "day": 1,
        "accommodation": "Tarangire Safari Lodge",
        "accommodationType": "Mid-range lodge with pool & family rooms",
        "meals": "All Meals Included"
      },
      {
        "day": 2,
        "accommodation": "Lake Manyara Kilimo Camp",
        "accommodationType": "Eco-lodge with garden and pool",
        "meals": "All Meals Included"
      },
      {
        "day": "3-4",
        "accommodation": "Serengeti Kati Kati Tented Camp",
        "accommodationType": "Comfortable tented camp with en-suite bathrooms",
        "meals": "All Meals Included"
      },
      {
        "day": 5,
        "accommodation": "Ngorongoro Rhino Lodge",
        "accommodationType": "Family-friendly lodge near crater entrance",
        "meals": "All Meals Included"
      },
      {
        "day": 6,
        "accommodation": "Ngorongoro Rhino Lodge",
        "accommodationType": "Second night for relaxed pace",
        "meals": "All Meals Included"
      },
      {
        "day": 7,
        "accommodation": "End of tour",
        "accommodationType": "(No accommodation)",
        "meals": "Breakfast Included"
      }
    ]
  },
  "gallery": [
    "https://images.unsplash.com/photo-1560250037-7f0b8b3c4a2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1573843988976-8a4c7a9b0e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1551632811-561732d1c5e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  "dayByDay": [
    {
      "day": 1,
      "location": "Tarangire NP",
      "description": "Gentle introduction to safari life. Afternoon game drive focused on elephants and birds. Lodge features a pool for kids to unwind.",
      "accommodation": "Tarangire Safari Lodge",
      "accommodationType": "Family-friendly with pool",
      "meals": "All meals included (kids’ menu available)",
      "drinks": "Soft drinks & juices for children included",
      "images": ["https://images.unsplash.com/photo-1560250037-7f0b8b3c4a2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      "wildlife": [
        { "animal": "Elephant", "abundance": "Abundant" },
        { "animal": "Giraffe", "abundance": "Common" }
      ]
    },
    {
      "day": 2,
      "location": "Lake Manyara NP",
      "description": "Short drive to Lake Manyara. Look for tree-climbing lions and flamingos. Afternoon includes a ‘Junior Ranger’ badge activity.",
      "accommodation": "Lake Manyara Kilimo Camp",
      "accommodationType": "Garden eco-lodge with pool",
      "meals": "All meals included",
      "drinks": "Juices & milk for kids included",
      "images": ["https://images.unsplash.com/photo-1573843988976-8a4c7a9b0e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      "wildlife": [
        { "animal": "Baboon", "abundance": "Abundant" },
        { "animal": "Flamingo", "abundance": "Seasonal" }
      ]
    },
    {
      "day": "3-4",
      "location": "Serengeti NP",
      "description": "Two full but flexible days. Morning drives (7–10 AM), rest at camp, optional afternoon drive. Kids receive wildlife bingo cards and animal tracking guides.",
      "accommodation": "Serengeti Kati Kati Tented Camp",
      "accommodationType": "Comfortable tents with private bathrooms",
      "meals": "All meals included",
      "drinks": "All non-alcoholic drinks included",
      "images": ["https://images.unsplash.com/photo-1551632811-561732d1c5e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      "wildlife": [
        { "animal": "Zebra", "abundance": "Abundant" },
        { "animal": "Cheetah", "abundance": "Common" }
      ]
    },
    {
      "day": 5,
      "location": "Ngorongoro Crater",
      "description": "Early but not too early! Descend at 7:30 AM. Full crater tour with picnic lunch. Return to lodge for pool time and storytelling evening.",
      "accommodation": "Ngorongoro Rhino Lodge",
      "accommodationType": "Family suites with garden views",
      "meals": "All meals included",
      "drinks": "All non-alcoholic drinks included",
      "images": ["https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      "wildlife": [
        { "animal": "Black Rhino", "abundance": "Common" },
        { "animal": "Buffalo", "abundance": "Abundant" }
      ]
    },
    {
      "day": 6,
      "location": "Ngorongoro",
      "description": "Optional short walk or cultural visit. Relax at the lodge. Farewell dinner with Maasai dance performance (seasonal).",
      "accommodation": "Ngorongoro Rhino Lodge",
      "accommodationType": "Second night for comfort",
      "meals": "All meals included",
      "drinks": "All non-alcoholic drinks included",
      "images": [],
      "wildlife": []
    },
    {
      "day": 7,
      "location": "Arusha",
      "description": "Scenic return to Arusha. Drop-off at hotel or airport by 3:00 PM.",
      "accommodation": "End of tour",
      "accommodationType": "(No accommodation)",
      "meals": "Breakfast Included",
      "drinks": "Not included",
      "images": [],
      "wildlife": []
    }
  ],
  "rates": {
    "disclaimer": "Children 5–11: 25% discount. Under 5: free (no bed). Family pricing for 2 adults + 2 children.",
    "pricing": [
      {
        "period": "Year-round",
        "solo": "$3,450",
        "oneRoomTwoPeople": "$3,150",
        "familyOfFour": "$2,850 per person"
      }
    ]
  },
  "inclusions": {
    "included": [
      "All park fees",
      "Family-friendly lodges with pools",
      "Private 4x4 with child seats",
      "All meals & non-alcoholic drinks",
      "Airport transfers",
      "Junior Ranger kits",
      "Taxes & VAT"
    ],
    "excluded": [
      "International flights",
      "Tips (suggested: $10/adult, $5/child per day)",
      "Travel insurance",
      "Optional cultural visits"
    ]
  },
  "gettingThere": {
    "description": "Starts and ends in Arusha.",
    "details": [
      "Fly into JRO (Kilimanjaro Airport).",
      "We recommend arriving the day before.",
      "Family pre-tour hotel packages available."
    ]
  }
},
{
  id: 19,
  name: "7-Day Rongai Route Climb",
  offeredBy: "Soul of Tanzania",
  tourOperator: "Soul of Tanzania",
  rating: 4.7,
  reviewCount: 328,
  shortDescription: "Approach Kilimanjaro from the dry, remote north—ideal for solitude and unique views.",
  fullDescription: "The only route approaching from the northern side, Rongai offers drier conditions, fewer crowds, and a unique perspective of Kibo’s cliffs and Mawenzi’s dramatic ridges.",
  duration: 7,
  price: 2150,
  startingFrom: "Arusha",
  comfortLevel: "standard",
  tourType: "group",
  safariType: "trekking",
  specializedTours: ["climbing", "adventure", "off-the-beaten-path"],
  features: ["less crowded", "dry conditions", "group size 2-12", "can start any day", "airport transfer included"],
  image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  highlights: ["Drier Conditions", "Less Crowded", "Unique Views"],
  destinations: ["Arusha", "Rongai Gate", "First Cave", "Kikelewa Cave", "Mawenzi Tarn", "Kibo Hut", "Uhuru Peak", "Marangu Gate"],
  Mount: "Kilimanjaro",
  route: {
    start: "Arusha (Day 1)",
    end: "Arusha (Day 7)",
    days: [
      { day: 1, location: "Arusha to Rongai Gate to First Cave", description: "" },
      { day: 2, location: "First Cave to Kikelewa Cave", description: "" },
      { day: 3, location: "Kikelewa Cave to Mawenzi Tarn", description: "" },
      { day: 4, location: "Mawenzi Tarn to Kibo Hut", description: "" },
      { day: 5, location: "Summit (Uhuru Peak) to Horombo Hut", description: "" },
      { day: 6, location: "Horombo Hut to Marangu Gate", description: "" },
      { day: 7, location: "Marangu Gate to Arusha", description: "" }
    ]
  },
  tourFeatures: [
    "Only northern approach",
    "Drier and more sheltered in rainy season",
    "Excellent for wildlife spotting (colobus monkeys, antelope)",
    "7-day itinerary with strong acclimatization"
  ],
  activitiesTransportation: {
    activities: ["trekking", "summit attempt", "wildlife viewing"],
    vehicle: "4x4 transfer vehicle",
    transfer: "Roundtrip transfers from Arusha included"
  },
  accommodationMeals: {
    note: "Tented camping with quality sleeping mats. Sleeping bags available for rent.",
    schedule: [
      { day: 1, accommodation: "First Cave Camp", accommodationType: "Forest-edge camp (2,650m)", meals: "Dinner & Breakfast" },
      { day: 2, accommodation: "Kikelewa Cave", accommodationType: "Moorland camp (3,670m)", meals: "All Meals Included" },
      { day: 3, accommodation: "Mawenzi Tarn", accommodationType: "Alpine desert camp (4,315m)", meals: "All Meals Included" },
      { day: 4, accommodation: "Kibo Hut", accommodationType: "Summit base (4,700m)", meals: "All Meals Included" },
      { day: 5, accommodation: "Horombo Hut", accommodationType: "Recovery hut (3,720m)", meals: "All Meals Included" },
      { day: 6, accommodation: "Marangu Gate", accommodationType: "(Day hike)", meals: "Breakfast & Lunch" },
      { day: 7, accommodation: "End of tour", accommodationType: "(No accommodation)", meals: "Breakfast Included" }
    ]
  },
  gallery: [
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  dayByDay: [
    {
      day: 1,
      location: "Rongai Gate to First Cave",
      description: "Drive to remote Rongai Gate. Trek through pine forest to First Cave with views of Kenyan plains.",
      accommodation: "First Cave Camp",
      meals: "Dinner & Breakfast",
      images: ["https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
    },
    {
      day: 2,
      location: "First Cave to Kikelewa Cave",
      description: "Ascend through moorland with views of Mawenzi Peak.",
      accommodation: "Kikelewa Cave",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 3,
      location: "Kikelewa to Mawenzi Tarn",
      description: "Cross saddle to Mawenzi Tarn beneath the shadow of Mawenzi’s cliffs.",
      accommodation: "Mawenzi Tarn",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 4,
      location: "Mawenzi Tarn to Kibo Hut",
      description: "Long traverse across alpine desert to Kibo Hut.",
      accommodation: "Kibo Hut",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 5,
      location: "Summit Day",
      description: "Midnight ascent to Uhuru Peak. Descend to Horombo Hut for recovery.",
      accommodation: "Horombo Hut",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 6,
      location: "Horombo to Marangu Gate",
      description: "Final descent through rainforest to Marangu Gate.",
      accommodation: "Marangu Gate",
      meals: "Breakfast & Lunch",
      images: []
    },
    {
      day: 7,
      location: "Marangu Gate to Arusha",
      description: "Drive back to Arusha. Tour concludes by early afternoon.",
      accommodation: "End of tour",
      meals: "Breakfast Included",
      images: []
    }
  ],
  rates: {
    disclaimer: "Price per person. Includes all park fees, meals, guides, and transfers.",
    pricing: [
      { period: "Year-round", solo: "$2,450", oneRoomTwoPeople: "$2,150" }
    ]
  },
  inclusions: {
    included: [
      "All park & camping fees",
      "Professional guides & porters (3:1 ratio)",
      "All meals on mountain",
      "Drinking water & hot drinks",
      "Emergency oxygen",
      "Transfers from Arusha"
    ],
    excluded: [
      "Sleeping bag rental ($20)",
      "Tips ($200 recommended)",
      "International flights",
      "Travel insurance",
      "Pre/post hotel"
    ]
  },
  gettingThere: {
    description: "Tour starts and ends in Arusha.",
    details: [
      "Fly into Kilimanjaro Airport (JRO).",
      "Pre-climb hotel night recommended."
    ]
  }
},
{
  id: 20,
  name: "9-Day Northern Circuit Climb",
  offeredBy: "Soul of Tanzania",
  tourOperator: "Soul of Tanzania",
  rating: 4.95,
  reviewCount: 215,
  shortDescription: "Longest route with best acclimatization and summit success rates.",
  fullDescription: "The ultimate Kilimanjaro experience—circumnavigate the entire mountain for maximum acclimatization, minimal crowds, and a 95%+ success rate.",
  duration: 9,
  price: 2850,
  startingFrom: "Arusha",
  comfortLevel: "premium",
  tourType: "group",
  safariType: "trekking",
  specializedTours: ["climbing", "premium", "high success", "photography"],
  features: ["highest success rate", "complete circumnavigation", "group size 2-8", "can start any day"],
  image: "https://tanzania-specialist.com/wp-content/uploads/2023/08/22-Kilimanjaro-Shira-1024x768.jpg",
  highlights: ["Best Acclimatization", "Highest Success", "Complete Experience"],
  destinations: ["Arusha", "Lemosho Gate", "Shira Plateau", "Northern Slopes", "Barranco Wall", "Barafu Camp", "Uhuru Peak", "Mweka Gate"],
  Mount: "Kilimanjaro",
  route: {
    start: "Arusha (Day 1)",
    end: "Arusha (Day 9)",
    days: [
      { day: 1, location: "Arusha to Lemosho Gate", description: "" },
      { day: 2, location: "Lemosho to Mti Mkubwa", description: "" },
      { day: 3, location: "Mti Mkubwa to Shira 1", description: "" },
      { day: 4, location: "Shira 1 to Shira 2", description: "" },
      { day: 5, location: "Shira 2 to Moir Hut", description: "" },
      { day: 6, location: "Moir Hut to Buffalo Camp (Northern Slopes)", description: "" },
      { day: 7, location: "Buffalo Camp to Barafu Camp", description: "" },
      { day: 8, location: "Summit to Mweka Camp", description: "" },
      { day: 9, location: "Mweka to Arusha", description: "" }
    ]
  },
  tourFeatures: [
    "9-day full circumnavigation",
    "Highest success rate (95%)",
    "Tranquil northern slopes rarely seen by climbers",
    "Ideal for serious trekkers and photographers"
  ],
  activitiesTransportation: {
    activities: ["trekking", "summit attempt", "wildlife spotting", "acclimatization hikes"],
    vehicle: "Premium 4x4 with roof hatch",
    transfer: "Included from Arusha hotels and airport"
  },
  accommodationMeals: {
    note: "Premium camping with thick sleeping mats, mess tent, and hot washing water.",
    schedule: [
      { day: 1, accommodation: "Arusha Hotel", accommodationType: "(Not included)", meals: "Dinner not included" },
      { day: 2, accommodation: "Mti Mkubwa Camp", accommodationType: "Rainforest camp", meals: "Dinner & Breakfast" },
      { day: 3, accommodation: "Shira 1 Camp", accommodationType: "Moorland plateau", meals: "All Meals Included" },
      { day: 4, accommodation: "Shira 2 Camp", accommodationType: "High plateau", meals: "All Meals Included" },
      { day: 5, accommodation: "Moir Hut", accommodationType: "Remote acclimatization", meals: "All Meals Included" },
      { day: 6, accommodation: "Buffalo Camp", accommodationType: "Northern slopes (4,050m)", meals: "All Meals Included" },
      { day: 7, accommodation: "Barafu Camp", accommodationType: "Summit base", meals: "All Meals Included" },
      { day: 8, accommodation: "Mweka Camp", accommodationType: "Descent camp", meals: "Breakfast & Lunch" },
      { day: 9, accommodation: "End of tour", accommodationType: "(No accommodation)", meals: "Breakfast Included" }
    ]
  },
  gallery: [
    "https://tanzania-specialist.com/wp-content/uploads/2023/08/22-Kilimanjaro-Shira-1024x768.jpg",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  dayByDay: [
    {
      day: 1,
      location: "Arrival in Arusha",
      description: "Evening briefing and gear check.",
      accommodation: "Arusha Hotel (not included)",
      meals: "Dinner not included",
      images: []
    },
    {
      day: 2,
      location: "Lemosho Gate to Mti Mkubwa",
      description: "Enter untouched rainforest.",
      accommodation: "Mti Mkubwa Camp",
      meals: "Dinner & Breakfast",
      images: ["https://tanzania-specialist.com/wp-content/uploads/2023/08/22-Kilimanjaro-Shira-1024x768.jpg"]
    },
    {
      day: 3,
      location: "Mti Mkubwa to Shira 1",
      description: "Emerge onto Shira Plateau.",
      accommodation: "Shira 1 Camp",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 4,
      location: "Shira 1 to Shira 2",
      description: "Acclimatization walk with 360° views.",
      accommodation: "Shira 2 Camp",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 5,
      location: "Shira 2 to Moir Hut",
      description: "Off-trail acclimatization hike.",
      accommodation: "Moir Hut",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 6,
      location: "Moir to Buffalo Camp",
      description: "Enter the remote northern slopes—rarely visited by climbers.",
      accommodation: "Buffalo Camp",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 7,
      location: "Buffalo Camp to Barafu",
      description: "Descend then ascend to summit camp.",
      accommodation: "Barafu Camp",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 8,
      location: "Summit Day",
      description: "Reach Uhuru Peak at sunrise! Descend to Mweka.",
      accommodation: "Mweka Camp",
      meals: "Breakfast & Lunch",
      images: []
    },
    {
      day: 9,
      location: "Mweka to Arusha",
      description: "Final descent. Certificate ceremony. Return to Arusha.",
      accommodation: "End of tour",
      meals: "Breakfast Included",
      images: []
    }
  ],
  rates: {
    disclaimer: "Premium 9-day package with highest success rate due to superior acclimatization.",
    pricing: [
      { period: "Year-round", solo: "$3,200", oneRoomTwoPeople: "$2,850" }
    ]
  },
  inclusions: {
    included: [
      "All park & camping fees",
      "Expert guides (1:2 ratio)",
      "Premium tents & thick sleeping mats",
      "All meals & purified water",
      "Oxygen, pulse oximeter, first aid",
      "Transfers from Arusha"
    ],
    excluded: [
      "Pre/post hotel",
      "Sleeping bag ($25)",
      "Tips ($250)",
      "Flights & insurance"
    ]
  },
  gettingThere: {
    description: "Starts in Arusha.",
    details: [
      "Fly into JRO.",
      "1 night pre-climb recommended."
    ]
  }
},
{
  id: 16,
  name: "7-Day Machame Route Climb",
  offeredBy: "Soul of Tanzania",
  tourOperator: "Soul of Tanzania",
  rating: 4.8,
  reviewCount: 612,
  shortDescription: "The most popular Kilimanjaro route offering stunning scenery and excellent acclimatization.",
  fullDescription: "Climb Africa’s highest peak via the scenic Machame Route, known for its diverse landscapes—from rainforest to alpine desert—and high summit success rate.",
  duration: 7,
  price: 2100,
  startingFrom: "Arusha",
  comfortLevel: "standard",
  tourType: "group",
  safariType: "trekking",
  specializedTours: ["climbing", "adventure", "mountaineering"],
  features: ["can start any day", "group size 2-12", "professional guides", "airport transfer included"],
  image: "https://tanzania-specialist.com/wp-content/uploads/2023/08/19-Kilimanjaro-marangu-1024x683.jpg",
  highlights: ["Best Scenery", "Great Acclimatization", "High Success (85%)"],
  destinations: ["Arusha", "Machame Gate", "Shira Plateau", "Barranco Wall", "Uhuru Peak", "Mweka Gate"],
  Mount: "Kilimanjaro",
  route: {
    start: "Arusha (Day 1)",
    end: "Arusha (Day 7)",
    days: [
      { day: 1, location: "Machame Gate to Machame Camp", description: "" },
      { day: 2, location: "Machame Camp to Shira Camp", description: "" },
      { day: 3, location: "Shira Camp to Lava Tower to Barranco Camp", description: "" },
      { day: 4, location: "Barranco Camp to Karanga Camp", description: "" },
      { day: 5, location: "Karanga Camp to Barafu Camp", description: "" },
      { day: 6, location: "Summit (Uhuru Peak) to Mweka Camp", description: "" },
      { day: 7, location: "Mweka Camp to Arusha", description: "" }
    ]
  },
  tourFeatures: [
    "7-day itinerary",
    "Group climb (2–12 people)",
    "High success rate (85%)",
    "Includes all park fees & meals",
    "Professional English-speaking guides"
  ],
  activitiesTransportation: {
    activities: ["trekking", "summit attempt", "acclimatization hikes"],
    vehicle: "4x4 transfer vehicle",
    transfer: "Roundtrip airport and gate transfers included"
  },
  accommodationMeals: {
    note: "Tented camping with sleeping mats provided. Sleeping bags available for rent.",
    schedule: [
      { day: 1, accommodation: "Machame Camp", accommodationType: "Basic mountain tent", meals: "Dinner & Breakfast" },
      { day: 2, accommodation: "Shira Camp", accommodationType: "High-altitude tent", meals: "All Meals Included" },
      { day: 3, accommodation: "Barranco Camp", accommodationType: "Scenic cliffside camp", meals: "All Meals Included" },
      { day: 4, accommodation: "Karanga Camp", accommodationType: "Acclimatization camp", meals: "All Meals Included" },
      { day: 5, accommodation: "Barafu Camp", accommodationType: "Summit base camp", meals: "All Meals Included" },
      { day: 6, accommodation: "Mweka Camp", accommodationType: "Descent camp", meals: "Breakfast & Lunch" },
      { day: 7, accommodation: "End of tour", accommodationType: "(No accommodation)", meals: "Breakfast Included" }
    ]
  },
  gallery: [
    "https://tanzania-specialist.com/wp-content/uploads/2023/08/19-Kilimanjaro-marangu-1024x683.jpg",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  dayByDay: [
    {
      day: 1,
      location: "Machame Gate to Machame Camp",
      description: "Drive from Arusha to Machame Gate (45 min). After registration, begin trek through lush rainforest to Machame Camp (3,000m).",
      accommodation: "Machame Camp",
      meals: "Dinner & Breakfast",
      images: ["https://tanzania-specialist.com/wp-content/uploads/2023/08/19-Kilimanjaro-marangu-1024x683.jpg"]
    },
    {
      day: 2,
      location: "Machame Camp to Shira Camp",
      description: "Ascend through moorland to Shira Plateau (3,840m), with views of Kibo Peak.",
      accommodation: "Shira Camp",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 3,
      location: "Shira to Lava Tower to Barranco",
      description: "Gain altitude to Lava Tower (4,630m) for acclimatization, then descend to Barranco Camp (3,950m).",
      accommodation: "Barranco Camp",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 4,
      location: "Barranco to Karanga",
      description: "Conquer the Barranco Wall, then short hike to Karanga Camp for acclimatization.",
      accommodation: "Karanga Camp",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 5,
      location: "Karanga to Barafu",
      description: "Final ascent to Barafu Camp (4,600m). Rest for midnight summit push.",
      accommodation: "Barafu Camp",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 6,
      location: "Summit Day",
      description: "Midnight start to Uhuru Peak (5,895m)! Descend to Mweka Camp (3,100m).",
      accommodation: "Mweka Camp",
      meals: "Breakfast & Lunch",
      images: []
    },
    {
      day: 7,
      location: "Mweka to Arusha",
      description: "Final descent through rainforest. Certificate ceremony. Return to Arusha by afternoon.",
      accommodation: "End of tour",
      meals: "Breakfast Included",
      images: []
    }
  ],
  rates: {
    disclaimer: "Price per person. Includes all park fees, guides, porters, meals, and transfers. Excludes tips, visa, and flights.",
    pricing: [
      { period: "Year-round", solo: "$2,400", oneRoomTwoPeople: "$2,100", groupDiscount: "Groups of 4+ get 5% off" }
    ]
  },
  inclusions: {
    included: [
      "All park entry & camping fees",
      "Professional guides & porters (3:1 ratio)",
      "All meals on mountain",
      "Drinking water & hot beverages",
      "Oxygen cylinder & emergency kit",
      "Roundtrip transfers from Arusha",
      "Climbing certificate"
    ],
    excluded: [
      "International flights",
      "Tanzania visa",
      "Tips for crew (recommended $200 total)",
      "Sleeping bag rental ($20)",
      "Travel insurance"
    ]
  },
  gettingThere: {
    description: "Tour starts and ends in Arusha.",
    details: [
      "Fly into Kilimanjaro Airport (JRO).",
      "Pre-climb hotel night recommended (not included).",
      "We provide full briefing the evening before."
    ]
  }
},
{
  id: 17,
  name: "6-Day Marangu Route Climb",
  offeredBy: "Soul of Tanzania",
  tourOperator: "Soul of Tanzania",
  rating: 4.6,
  reviewCount: 489,
  shortDescription: "The only Kilimanjaro route with hut accommodations—ideal for budget climbers seeking comfort.",
  fullDescription: "Known as the 'Coca-Cola Route,' Marangu offers dormitory-style huts, a gentler trail, and a direct path to the summit.",
  duration: 6,
  price: 1850,
  startingFrom: "Arusha",
  comfortLevel: "budget",
  tourType: "group",
  safariType: "trekking",
  specializedTours: ["climbing", "budget travel", "first-time climbers"],
  features: ["hut accommodation", "group size 2-12", "can start any day", "airport transfer included"],
  image: "https://tanzania-specialist.com/wp-content/uploads/2023/08/21-Kilimanjaro-Lemosho-1024x767.jpg",
  highlights: ["Hut Accommodations", "Direct Route", "Budget Friendly"],
  destinations: ["Arusha", "Marangu Gate", "Mandara Hut", "Horombo Hut", "Kibo Hut", "Uhuru Peak", "Marangu Gate"],
  Mount: "Kilimanjaro",
  route: {
    start: "Arusha (Day 1)",
    end: "Arusha (Day 6)",
    days: [
      { day: 1, location: "Marangu Gate to Mandara Hut", description: "" },
      { day: 2, location: "Mandara Hut to Horombo Hut", description: "" },
      { day: 3, location: "Acclimatization Day at Horombo", description: "" },
      { day: 4, location: "Horombo Hut to Kibo Hut", description: "" },
      { day: 5, location: "Summit (Uhuru Peak) to Horombo Hut", description: "" },
      { day: 6, location: "Horombo Hut to Arusha", description: "" }
    ]
  },
  tourFeatures: [
    "Only route with hut lodging",
    "6-day itinerary with acclimatization day",
    "Success rate: 70%",
    "Includes all meals & park fees"
  ],
  activitiesTransportation: {
    activities: ["trekking", "summit attempt"],
    vehicle: "4x4 transfer vehicle",
    transfer: "Roundtrip airport and gate transfers included"
  },
  accommodationMeals: {
    note: "Shared dormitory huts with bunk beds and basic facilities. Mattresses provided.",
    schedule: [
      { day: 1, accommodation: "Mandara Hut", accommodationType: "Mountain hut (2,770m)", meals: "Dinner & Breakfast" },
      { day: 2, accommodation: "Horombo Hut", accommodationType: "Larger hut with dining hall (3,720m)", meals: "All Meals Included" },
      { day: 3, accommodation: "Horombo Hut", accommodationType: "Acclimatization rest day", meals: "All Meals Included" },
      { day: 4, accommodation: "Kibo Hut", accommodationType: "Basic summit base (4,700m)", meals: "All Meals Included" },
      { day: 5, accommodation: "Horombo Hut", accommodationType: "Descent recovery", meals: "All Meals Included" },
      { day: 6, accommodation: "End of tour", accommodationType: "(No accommodation)", meals: "Breakfast Included" }
    ]
  },
  gallery: [
    "https://tanzania-specialist.com/wp-content/uploads/2023/08/21-Kilimanjaro-Lemosho-1024x767.jpg",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  dayByDay: [
    {
      day: 1,
      location: "Marangu Gate to Mandara Hut",
      description: "Gentle walk through rainforest to Mandara Hut. Great for first-time trekkers.",
      accommodation: "Mandara Hut",
      meals: "Dinner & Breakfast",
      images: ["https://tanzania-specialist.com/wp-content/uploads/2023/08/21-Kilimanjaro-Lemosho-1024x767.jpg"]
    },
    {
      day: 2,
      location: "Mandara to Horombo Hut",
      description: "Enter moorland zone with views of Mawenzi Peak.",
      accommodation: "Horombo Hut",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 3,
      location: "Acclimatization at Horombo",
      description: "Optional hike to Mawenzi Hut for altitude adjustment.",
      accommodation: "Horombo Hut",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 4,
      location: "Horombo to Kibo Hut",
      description: "Long day across alpine desert to base camp.",
      accommodation: "Kibo Hut",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 5,
      location: "Summit Day",
      description: "Midnight ascent to Uhuru Peak. Descend to Horombo for recovery.",
      accommodation: "Horombo Hut",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 6,
      location: "Horombo to Arusha",
      description: "Final descent through forest. Return to Arusha by afternoon.",
      accommodation: "End of tour",
      meals: "Breakfast Included",
      images: []
    }
  ],
  rates: {
    disclaimer: "Price per person. Includes hut fees, meals, guides, and transfers.",
    pricing: [
      { period: "Year-round", solo: "$2,100", oneRoomTwoPeople: "$1,850" }
    ]
  },
  inclusions: {
    included: [
      "Hut accommodation fees",
      "All meals on mountain",
      "Professional guides & porters",
      "Park entry & rescue fees",
      "Transfers from Arusha"
    ],
    excluded: [
      "Sleeping bag (required, rentable)",
      "Tips, visa, flights, insurance"
    ]
  },
  gettingThere: {
    description: "Starts and ends in Arusha.",
    details: [
      "Arrive at Kilimanjaro Airport (JRO).",
      "Pre-tour hotel night recommended."
    ]
  }
},
{
  id: 18,
  name: "8-Day Lemosho Route Climb",
  offeredBy: "Soul of Tanzania",
  tourOperator: "Soul of Tanzania",
  rating: 4.9,
  reviewCount: 532,
  shortDescription: "Most beautiful route with the highest success rates. Excellent for photography.",
  fullDescription: "Begin on Kilimanjaro’s remote western flank through untouched rainforest. This scenic, less-traveled path offers superior acclimatization and a 90%+ success rate.",
  duration: 8,
  price: 2450,
  startingFrom: "Arusha",
  comfortLevel: "standard",
  tourType: "group",
  safariType: "trekking",
  specializedTours: ["climbing", "photography", "premium experience"],
  features: ["scenic & uncrowded", "group size 2-10", "high success rate", "can start any day"],
  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  highlights: ["Most Scenic", "95% Success", "Less Crowded"],
  destinations: ["Arusha", "Lemosho Gate", "Shira Plateau", "Barranco Wall", "Barafu Camp", "Uhuru Peak", "Mweka Gate"],
  Mount: "Kilimanjaro",
  route: {
    start: "Arusha (Day 1)",
    end: "Arusha (Day 8)",
    days: [
      { day: 1, location: "Arusha to Lemosho Gate", description: "" },
      { day: 2, location: "Lemosho Gate to Mti Mkubwa Camp", description: "" },
      { day: 3, location: "Mti Mkubwa to Shira 1 Camp", description: "" },
      { day: 4, location: "Shira 1 to Moir Hut", description: "" },
      { day: 5, location: "Moir Hut to Barranco Camp", description: "" },
      { day: 6, location: "Barranco to Karanga to Barafu", description: "" },
      { day: 7, location: "Summit to Mweka Camp", description: "" },
      { day: 8, location: "Mweka to Arusha", description: "" }
    ]
  },
  tourFeatures: [
    "8-day premium itinerary",
    "Highest success rate (90–95%)",
    "Tranquil, scenic trail",
    "Ideal for photographers and serious trekkers"
  ],
  activitiesTransportation: {
    activities: ["trekking", "summit attempt", "wildlife spotting (colobus monkeys)"],
    vehicle: "4x4 transfer with roof hatch",
    transfer: "Included from Arusha hotels and airport"
  },
  accommodationMeals: {
    note: "Premium camping with quality tents and sleeping mats. Sleeping bags available.",
    schedule: [
      { day: 1, accommodation: "Arusha Hotel", accommodationType: "Pre-climb hotel (not included)", meals: "Dinner not included" },
      { day: 2, accommodation: "Mti Mkubwa Camp", accommodationType: "Forest camp (2,800m)", meals: "Dinner & Breakfast" },
      { day: 3, accommodation: "Shira 1 Camp", accommodationType: "Moorland camp (3,500m)", meals: "All Meals Included" },
      { day: 4, accommodation: "Moir Hut (Camp)", accommodationType: "Remote acclimatization site", meals: "All Meals Included" },
      { day: 5, accommodation: "Barranco Camp", accommodationType: "Dramatic cliffside camp", meals: "All Meals Included" },
      { day: 6, accommodation: "Barafu Camp", accommodationType: "Summit base (4,600m)", meals: "All Meals Included" },
      { day: 7, accommodation: "Mweka Camp", accommodationType: "Rainforest descent camp", meals: "Breakfast & Lunch" },
      { day: 8, accommodation: "End of tour", accommodationType: "(No accommodation)", meals: "Breakfast Included" }
    ]
  },
  gallery: [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  dayByDay: [
    {
      day: 1,
      location: "Arrival in Arusha",
      description: "Arrive and rest. Evening briefing with gear check.",
      accommodation: "Arusha Hotel (not included)",
      meals: "Dinner not included",
      images: []
    },
    {
      day: 2,
      location: "Lemosho Gate to Mti Mkubwa",
      description: "Enter pristine rainforest. Chance to see colobus monkeys.",
      accommodation: "Mti Mkubwa Camp",
      meals: "Dinner & Breakfast",
      images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
    },
    {
      day: 3,
      location: "Mti Mkubwa to Shira 1",
      description: "Emerge onto Shira Plateau with panoramic views.",
      accommodation: "Shira 1 Camp",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 4,
      location: "Shira to Moir Hut",
      description: "Off-the-beaten-path acclimatization hike.",
      accommodation: "Moir Hut",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 5,
      location: "Moir to Barranco",
      description: "Cross Shira Cathedral, descend to iconic Barranco Wall.",
      accommodation: "Barranco Camp",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 6,
      location: "Barranco to Barafu",
      description: "Scale Barranco Wall, traverse Karanga Valley, reach summit camp.",
      accommodation: "Barafu Camp",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 7,
      location: "Summit Day",
      description: "Reach Uhuru Peak at sunrise! Descend to Mweka Camp.",
      accommodation: "Mweka Camp",
      meals: "Breakfast & Lunch",
      images: []
    },
    {
      day: 8,
      location: "Mweka to Arusha",
      description: "Final forest walk. Certificate ceremony. Return to Arusha.",
      accommodation: "End of tour",
      meals: "Breakfast Included",
      images: []
    }
  ],
  rates: {
    disclaimer: "Premium 8-day package. Highest success rate due to superior acclimatization.",
    pricing: [
      { period: "Year-round", solo: "$2,800", oneRoomTwoPeople: "$2,450" }
    ]
  },
  inclusions: {
    included: [
      "All park & camping fees",
      "Expert guides (1:2 ratio)",
      "Quality mountain tents & sleeping mats",
      "All meals & purified water",
      "Emergency oxygen & first aid",
      "Transfers from Arusha"
    ],
    excluded: [
      "Pre/post hotel",
      "Sleeping bag ($25 rental)",
      "Tips ($250 recommended)",
      "Flights & insurance"
    ]
  },
  gettingThere: {
    description: "Starts in Arusha.",
    details: [
      "Fly into JRO or ARK.",
      "We recommend 1 night pre-climb in Arusha."
    ]
  }
},
{
  id: 22,
  name: "7-Day Beach Paradise Escape – Zanzibar",
  offeredBy: "Soul of Tanzania",
  tourOperator: "Soul of Tanzania",
  Island: "Zanzibar",
  rating: 4.8,
  reviewCount: 342,
  shortDescription: "Unwind in luxury beachfront resorts with white sandy beaches and turquoise waters.",
  fullDescription: "Indulge in pure relaxation on Zanzibar’s pristine shores. This all-inclusive beach escape features private beach access, spa treatments, and gourmet dining in a tropical paradise.",
  duration: 7,
  price: 1200,
  startingFrom: "Zanzibar Airport (ZNZ)",
  comfortLevel: "luxury",
  tourType: "private",
  safariType: "beach",
  specializedTours: ["beach", "honeymoon", "relaxation", "couples"],
  features: ["can start any day", "all-inclusive", "private beach", "spa included", "airport transfer included"],
  image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  highlights: [
    "Private Beach Access",
    "Daily Spa Treatments",
    "All-Inclusive Gourmet Meals",
    "Luxury Ocean-View Suite",
    "Sunset Dhow Cruise"
  ],
  destinations: ["Zanzibar Airport", "Nungwi", "Kendwa Beach", "Stone Town"],
  Island: "Zanzibar",
  route: {
    start: "Zanzibar Airport (Day 1)",
    end: "Zanzibar Airport (Day 7)",
    days: [
      { day: 1, location: "Arrival & Resort Check-in", description: "" },
      { day: 2, location: "Beach Relaxation & Spa", description: "" },
      { day: 3, location: "Snorkeling & Sunset Cruise", description: "" },
      { day: 4, location: "Free Day / Optional Excursion", description: "" },
      { day: 5, location: "Spice Tour & Stone Town Visit", description: "" },
      { day: 6, location: "Beach Day & Private Dinner", description: "" },
      { day: 7, location: "Departure", description: "" }
    ]
  },
  tourFeatures: [
    "All-inclusive luxury stay",
    "Private beachfront resort",
    "Daily breakfast, lunch, dinner & drinks",
    "One sunset dhow cruise included",
    "One full-day spa pass"
  ],
  activitiesTransportation: {
    activities: ["beach lounging", "snorkeling", "sunset cruise", "spice tour", "Stone Town walking tour"],
    vehicle: "Private airport transfers & local excursions",
    transfer: "Roundtrip airport transfers included"
  },
  accommodationMeals: {
    note: "Stay at 5-star beach resort with ocean-view suites. Upgrades available.",
    schedule: [
      { day: 1, accommodation: "The Z Hotel Zanzibar", accommodationType: "Luxury beachfront suite", meals: "Dinner & Breakfast" },
      { day: 2, accommodation: "The Z Hotel Zanzibar", accommodationType: "Ocean-view suite", meals: "All Meals Included" },
      { day: 3, accommodation: "The Z Hotel Zanzibar", accommodationType: "Private pool villa (optional)", meals: "All Meals Included" },
      { day: 4, accommodation: "The Z Hotel Zanzibar", accommodationType: "Luxury suite", meals: "All Meals Included" },
      { day: 5, accommodation: "The Z Hotel Zanzibar", accommodationType: "Beachfront room", meals: "All Meals Included" },
      { day: 6, accommodation: "The Z Hotel Zanzibar", accommodationType: "Premium suite", meals: "All Meals Included" },
      { day: 7, accommodation: "End of tour", accommodationType: "(No accommodation)", meals: "Breakfast Included" }
    ]
  },
  gallery: [
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1507699622108-4be1e9b8a580?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  dayByDay: [
    {
      day: 1,
      location: "Arrival in Zanzibar",
      description: "Meet & greet at ZNZ Airport. Private transfer to your luxury beach resort in Nungwi. Check-in and welcome drink.",
      accommodation: "The Z Hotel Zanzibar",
      meals: "Dinner & Breakfast",
      images: ["https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
    },
    {
      day: 2,
      location: "Beach & Spa Day",
      description: "Relax on powdery white sands. Enjoy a 60-minute couples massage at the oceanfront spa.",
      accommodation: "The Z Hotel Zanzibar",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 3,
      location: "Snorkeling & Sunset Cruise",
      description: "Morning snorkeling at Mnemba Atoll. Evening private dhow cruise with champagne and canapés.",
      accommodation: "The Z Hotel Zanzibar",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 4,
      location: "Free Day",
      description: "Optional: scuba diving, jet-skiing, or simply lounge by the infinity pool.",
      accommodation: "The Z Hotel Zanzibar",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 5,
      location: "Spice Tour & Stone Town",
      description: "Visit a working spice farm, then explore historic Stone Town with a guided walking tour.",
      accommodation: "The Z Hotel Zanzibar",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 6,
      location: "Romantic Beach Dinner",
      description: "Private candlelit dinner on the beach under the stars.",
      accommodation: "The Z Hotel Zanzibar",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 7,
      location: "Departure",
      description: "Leisurely breakfast. Private transfer to ZNZ Airport for your onward flight.",
      accommodation: "End of tour",
      meals: "Breakfast Included",
      images: []
    }
  ],
  rates: {
    disclaimer: "Price per person based on double occupancy. Children under 12 stay free with adults.",
    pricing: [
      { period: "Year-round", solo: "$1,800", oneRoomTwoPeople: "$1,200", oneRoomThreePeople: "$1,100" }
    ]
  },
  inclusions: {
    included: [
      "6 nights luxury beach resort",
      "All meals & selected premium drinks",
      "Roundtrip airport transfers",
      "Sunset dhow cruise",
      "Half-day spice tour & Stone Town visit",
      "One 60-min spa treatment per person",
      "Taxes & service charges"
    ],
    excluded: [
      "International flights",
      "Zanzibar visa (if applicable)",
      "Travel insurance",
      "Optional activities (diving, excursions)",
      "Tips"
    ]
  },
  gettingThere: {
    description: "Tour starts and ends at Zanzibar International Airport (ZNZ).",
    details: [
      "Fly directly to ZNZ from Dar es Salaam, Nairobi, or international hubs.",
      "Pre-tour hotel in Dar es Salaam can be arranged.",
      "Domestic flight from JRO (Kilimanjaro) to ZNZ available on request."
    ]
  }
},
{
  id: 23,
  name: "6-Day Cultural Zanzibar Explorer",
  offeredBy: "Soul of Tanzania",
  tourOperator: "Soul of Tanzania",
  island:"zanzibar",
  rating: 4.7,
  reviewCount: 289,
  shortDescription: "Discover Zanzibar’s rich history, spice farms, and coastal culture with beach relaxation.",
  fullDescription: "Blend culture and comfort on this immersive Zanzibar journey—explore Stone Town, spice plantations, Jozani Forest, and unwind on Kendwa’s beaches.",
  duration: 6,
  price: 980,
  startingFrom: "Zanzibar Airport (ZNZ)",
  comfortLevel: "mid-range",
  tourType: "private",
  safariType: "cultural & beach",
  specializedTours: ["culture", "history", "beach", "family"],
  features: ["guided tours", "can start any day", "family-friendly", "airport transfer included"],
  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  highlights: [
    "Stone Town UNESCO Site",
    "Spice Farm Tour",
    "Jozani Forest (Red Colobus Monkeys)",
    "Beach Relaxation in Kendwa",
    "Local Cooking Class"
  ],
  destinations: ["Zanzibar Airport", "Stone Town", "Jozani Forest", "Kendwa Beach"],
  Island: "Zanzibar",
  route: {
    start: "Zanzibar Airport (Day 1)",
    end: "Zanzibar Airport (Day 6)",
    days: [
      { day: 1, location: "Arrival & Stone Town Check-in", description: "" },
      { day: 2, location: "Stone Town Walking Tour", description: "" },
      { day: 3, location: "Spice Farm & Cooking Class", description: "" },
      { day: 4, location: "Jozani Forest & Beach Transfer", description: "" },
      { day: 5, location: "Kendwa Beach Relaxation", description: "" },
      { day: 6, location: "Departure", description: "" }
    ]
  },
  tourFeatures: [
    "Cultural immersion with expert guides",
    "Mix of history and beach time",
    "Includes all key Zanzibar experiences",
    "Family-friendly pacing"
  ],
  activitiesTransportation: {
    activities: ["Stone Town tour", "spice farm visit", "cooking class", "Jozani Forest walk", "beach time"],
    vehicle: "Private AC vehicle with driver",
    transfer: "All transfers included"
  },
  accommodationMeals: {
    note: "3 nights in Stone Town boutique hotel, 2 nights beach resort.",
    schedule: [
      { day: 1, accommodation: "Zanzibar Palace Hotel", accommodationType: "Boutique heritage hotel", meals: "Dinner & Breakfast" },
      { day: 2, accommodation: "Zanzibar Palace Hotel", accommodationType: "Historic Stone Town stay", meals: "Breakfast Included" },
      { day: 3, accommodation: "Zanzibar Palace Hotel", accommodationType: "Cultural heart of Zanzibar", meals: "Breakfast Included" },
      { day: 4, accommodation: "Kendwa Rocks Beach Resort", accommodationType: "Mid-range beachfront lodge", meals: "All Meals Included" },
      { day: 5, accommodation: "Kendwa Rocks Beach Resort", accommodationType: "Ocean-view bungalow", meals: "All Meals Included" },
      { day: 6, accommodation: "End of tour", accommodationType: "(No accommodation)", meals: "Breakfast Included" }
    ]
  },
  gallery: [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1507699622108-4be1e9b8a580?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  dayByDay: [
    {
      day: 1,
      location: "Arrival in Zanzibar",
      description: "Transfer to Stone Town. Check into heritage hotel. Evening walk along Forodhani Gardens.",
      accommodation: "Zanzibar Palace Hotel",
      meals: "Dinner & Breakfast",
      images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
    },
    {
      day: 2,
      location: "Stone Town UNESCO Tour",
      description: "Guided walking tour: House of Wonders, Old Fort, slave market, and hidden alleys.",
      accommodation: "Zanzibar Palace Hotel",
      meals: "Breakfast Included",
      images: []
    },
    {
      day: 3,
      location: "Spice Farm & Cooking Class",
      description: "Visit a working spice farm. Learn to cook Swahili dishes like pilau and coconut curry.",
      accommodation: "Zanzibar Palace Hotel",
      meals: "Breakfast Included",
      images: []
    },
    {
      day: 4,
      location: "Jozani Forest & Beach Transfer",
      description: "See endangered red colobus monkeys. Afternoon transfer to Kendwa Beach.",
      accommodation: "Kendwa Rocks Beach Resort",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 5,
      location: "Beach Day in Kendwa",
      description: "Relax on one of Zanzibar’s most beautiful beaches. Optional snorkeling or dhow cruise.",
      accommodation: "Kendwa Rocks Beach Resort",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 6,
      location: "Departure",
      description: "Breakfast and transfer to ZNZ Airport.",
      accommodation: "End of tour",
      meals: "Breakfast Included",
      images: []
    }
  ],
  rates: {
    disclaimer: "Price per person. Children 6–12: 25% discount.",
    pricing: [
      { period: "Year-round", solo: "$1,350", oneRoomTwoPeople: "$980" }
    ]
  },
  inclusions: {
    included: [
      "3 nights Stone Town hotel",
      "2 nights beach resort",
      "Daily breakfast",
      "2 lunches & 2 dinners",
      "All guided tours",
      "All transfers",
      "Entrance fees"
    ],
    excluded: [
      "International flights",
      "Visa",
      "Travel insurance",
      "Tips",
      "Optional beach activities"
    ]
  },
  gettingThere: {
    description: "Starts at Zanzibar International Airport (ZNZ).",
    details: [
      "Direct flights available from Dar es Salaam (20 min) or Nairobi.",
      "We recommend arriving by 2 PM on Day 1."
    ]
  }
},
{
  id: 24,
  name: "8-Day Honeymoon Bliss – Zanzibar",
  offeredBy: "Soul of Tanzania",
  tourOperator: "Soul of Tanzania",
  island:"zanzibar",
  rating: 4.9,
  reviewCount: 412,
  shortDescription: "Romantic luxury escape for newlyweds with private villas, spa, and sunset cruises.",
  fullDescription: "Celebrate love in paradise with a private pool villa, candlelit dinners, couples spa, and unforgettable ocean views.",
  duration: 8,
  price: 2450,
  startingFrom: "Zanzibar Airport (ZNZ)",
  comfortLevel: "luxury",
  tourType: "private",
  safariType: "honeymoon",
  specializedTours: ["honeymoon", "luxury", "romance", "beach"],
  features: ["private pool villa", "butler service", "champagne welcome", "all-inclusive", "romantic dinners"],
  image: "https://images.unsplash.com/photo-1507699622108-4be1e9b8a580?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  highlights: [
    "Private Pool Villa",
    "Daily Breakfast in Bed",
    "Couples Spa Package",
    "Private Sunset Cruise",
    "Romantic Beach Dinner"
  ],
  destinations: ["Zanzibar Airport", "Pongwe Beach", "Prison Island", "Mnemba Atoll"],
  Island: "Zanzibar",
  route: {
    start: "Zanzibar Airport (Day 1)",
    end: "Zanzibar Airport (Day 8)",
    days: [
      { day: 1, location: "Arrival & Villa Check-in", description: "" },
      { day: 2, location: "Private Beach & Spa", description: "" },
      { day: 3, location: "Mnemba Atoll Snorkeling", description: "" },
      { day: 4, location: "Prison Island & Tortoises", description: "" },
      { day: 5, location: "Couples Massage & Pool Day", description: "" },
      { day: 6, location: "Sunset Dhow Cruise", description: "" },
      { day: 7, location: "Private Beach Dinner", description: "" },
      { day: 8, location: "Departure", description: "" }
    ]
  },
  tourFeatures: [
    "Exclusive honeymoon package",
    "Private villa with infinity pool",
    "All-inclusive premium plan",
    "Romantic experiences included",
    "24/7 butler service"
  ],
  activitiesTransportation: {
    activities: ["private beach time", "snorkeling", "island tours", "spa", "sunset cruise", "private dining"],
    vehicle: "Private luxury transfers",
    transfer: "Included from ZNZ Airport"
  },
  accommodationMeals: {
    note: "7 nights in private ocean-view pool villa with butler.",
    schedule: [
      { day: 1, accommodation: "The Palms Zanzibar", accommodationType: "Private luxury villa with pool", meals: "Dinner & Breakfast" },
      { day: 2, accommodation: "The Palms Zanzibar", accommodationType: "Beachfront villa", meals: "All Meals Included" },
      { day: 3, accommodation: "The Palms Zanzibar", accommodationType: "Ocean-view suite", meals: "All Meals Included" },
      { day: 4, accommodation: "The Palms Zanzibar", accommodationType: "Luxury villa", meals: "All Meals Included" },
      { day: 5, accommodation: "The Palms Zanzibar", accommodationType: "Private retreat", meals: "All Meals Included" },
      { day: 6, accommodation: "The Palms Zanzibar", accommodationType: "Honeymoon suite", meals: "All Meals Included" },
      { day: 7, accommodation: "The Palms Zanzibar", accommodationType: "Final night celebration", meals: "All Meals Included" },
      { day: 8, accommodation: "End of tour", accommodationType: "(No accommodation)", meals: "Breakfast Included" }
    ]
  },
  gallery: [
    "https://images.unsplash.com/photo-1507699622108-4be1e9b8a580?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  dayByDay: [
    {
      day: 1,
      location: "Arrival in Zanzibar",
      description: "Champagne welcome at ZNZ. Private transfer to your villa. Romantic check-in with rose petals.",
      accommodation: "The Palms Zanzibar",
      meals: "Dinner & Breakfast",
      images: ["https://images.unsplash.com/photo-1507699622108-4be1e9b8a580?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
    },
    {
      day: 2,
      location: "Private Beach & Spa",
      description: "Couples massage at the oceanfront spa. Afternoon lounging on your private beach.",
      accommodation: "The Palms Zanzibar",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 3,
      location: "Mnemba Atoll Snorkeling",
      description: "Private boat to Mnemba. Snorkel among dolphins and coral reefs. Picnic on a sandbank.",
      accommodation: "The Palms Zanzibar",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 4,
      location: "Prison Island",
      description: "Visit giant tortoises and historic ruins. Swim in crystal-clear lagoons.",
      accommodation: "The Palms Zanzibar",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 5,
      location: "Pool & Relaxation Day",
      description: "Enjoy your private pool. Optional yoga session at sunset.",
      accommodation: "The Palms Zanzibar",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 6,
      location: "Sunset Dhow Cruise",
      description: "Private traditional dhow with champagne and canapés as the sun sets over the Indian Ocean.",
      accommodation: "The Palms Zanzibar",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 7,
      location: "Farewell Beach Dinner",
      description: "Candlelit dinner on the beach with live Taarab music.",
      accommodation: "The Palms Zanzibar",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 8,
      location: "Departure",
      description: "Leisurely breakfast. Private transfer to ZNZ Airport.",
      accommodation: "End of tour",
      meals: "Breakfast Included",
      images: []
    }
  ],
  rates: {
    disclaimer: "Honeymoon package for 2 people. Valid with marriage certificate (issued within 6 months).",
    pricing: [
      { period: "Year-round", oneRoomTwoPeople: "$2,450" }
    ]
  },
  inclusions: {
    included: [
      "7 nights luxury private villa",
      "All meals & premium drinks",
      "All excursions & boat trips",
      "Couples spa treatment",
      "Sunset dhow cruise",
      "Romantic beach dinner",
      "All transfers",
      "Honeymoon amenities"
    ],
    excluded: [
      "Flights",
      "Visa",
      "Insurance",
      "Tips",
      "Additional spa treatments"
    ]
  },
  gettingThere: {
    description: "Starts at Zanzibar International Airport (ZNZ).",
    details: [
      "Honeymooners must present marriage certificate.",
      "We recommend arriving on a Monday or Thursday for best villa availability."
    ]
  }
},
{
  id: 25,
  name: "5-Day Budget Zanzibar Getaway",
  offeredBy: "Soul of Tanzania",
  tourOperator: "Soul of Tanzania",
  island:"zanzibar",
  rating: 4.5,
  reviewCount: 521,
  shortDescription: "Affordable beach break with clean guesthouses, local food, and island charm.",
  fullDescription: "Experience Zanzibar without breaking the bank—stay in cozy beach lodges, enjoy local cuisine, and explore key sights like Stone Town and Prison Island.",
  duration: 5,
  price: 650,
  startingFrom: "Zanzibar Airport (ZNZ)",
  comfortLevel: "budget",
  tourType: "private",
  safariType: "beach",
  specializedTours: ["budget", "backpacking", "solo travel", "beach"],
  features: ["affordable", "local experience", "airport pickup", "flexible dates"],
  image: "https://images.unsplash.com/photo-1551632811-561732d1c5e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  highlights: [
    "Beachfront Guesthouse",
    "Local Swahili Meals",
    "Stone Town Walking Tour",
    "Snorkeling at Prison Island",
    "Budget-Friendly"
  ],
  destinations: ["Zanzibar Airport", "Stone Town", "Prison Island", "Paje Beach"],
  Island: "Zanzibar",
  route: {
    start: "Zanzibar Airport (Day 1)",
    end: "Zanzibar Airport (Day 5)",
    days: [
      { day: 1, location: "Arrival & Stone Town Check-in", description: "" },
      { day: 2, location: "Stone Town Exploration", description: "" },
      { day: 3, location: "Prison Island & Beach Transfer", description: "" },
      { day: 4, location: "Paje Beach Relaxation", description: "" },
      { day: 5, location: "Departure", description: "" }
    ]
  },
  tourFeatures: [
    "Affordable island escape",
    "Authentic local stays",
    "Includes key cultural & beach experiences",
    "Ideal for solo travelers & backpackers"
  ],
  activitiesTransportation: {
    activities: ["Stone Town tour", "Prison Island visit", "snorkeling", "beach time"],
    vehicle: "Shared airport transfer & local taxi",
    transfer: "Airport pickup included (drop-off extra)"
  },
  accommodationMeals: {
    note: "Budget-friendly guesthouses with fan rooms and shared or private bathrooms.",
    schedule: [
      { day: 1, accommodation: "Zanzibar Coffee House", accommodationType: "Boutique budget guesthouse", meals: "Breakfast Included" },
      { day: 2, accommodation: "Zanzibar Coffee House", accommodationType: "Central Stone Town location", meals: "Breakfast Included" },
      { day: 3, accommodation: "Paje Beach Bungalows", accommodationType: "Basic beachfront bungalow", meals: "Breakfast & Dinner" },
      { day: 4, accommodation: "Paje Beach Bungalows", accommodationType: "Ocean-view room", meals: "Breakfast & Dinner" },
      { day: 5, accommodation: "End of tour", accommodationType: "(No accommodation)", meals: "Breakfast Included" }
    ]
  },
  gallery: [
    "https://images.unsplash.com/photo-1551632811-561732d1c5e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1507699622108-4be1e9b8a580?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  dayByDay: [
    {
      day: 1,
      location: "Arrival in Zanzibar",
      description: "Meet at ZNZ Airport. Shared transfer to Stone Town guesthouse. Free evening to explore Forodhani Night Market.",
      accommodation: "Zanzibar Coffee House",
      meals: "Breakfast Included",
      images: ["https://images.unsplash.com/photo-1551632811-561732d1c5e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
    },
    {
      day: 2,
      location: "Stone Town Walking Tour",
      description: "Self-guided or optional guided tour of Darajani Market, Old Fort, and Freddie Mercury House.",
      accommodation: "Zanzibar Coffee House",
      meals: "Breakfast Included",
      images: []
    },
    {
      day: 3,
      location: "Prison Island & Transfer to Paje",
      description: "Morning ferry to Prison Island to see giant tortoises. Afternoon transfer to Paje Beach.",
      accommodation: "Paje Beach Bungalows",
      meals: "Breakfast & Dinner",
      images: []
    },
    {
      day: 4,
      location: "Beach Day in Paje",
      description: "Relax on one of Zanzibar’s most famous beaches. Optional kite-surfing or snorkeling.",
      accommodation: "Paje Beach Bungalows",
      meals: "Breakfast & Dinner",
      images: []
    },
    {
      day: 5,
      location: "Departure",
      description: "Breakfast and shared transfer to ZNZ Airport (extra fee for early drop-off).",
      accommodation: "End of tour",
      meals: "Breakfast Included",
      images: []
    }
  ],
  rates: {
    disclaimer: "Price based on double occupancy. Solo travelers pay 20% extra. Children under 12 not recommended.",
    pricing: [
      { period: "Year-round", solo: "$780", oneRoomTwoPeople: "$650" }
    ]
  },
  inclusions: {
    included: [
      "2 nights Stone Town guesthouse",
      "2 nights Paje beach bungalow",
      "Daily breakfast",
      "Welcome dinner on beach",
      "Airport pickup",
      "Entrance to Prison Island"
    ],
    excluded: [
      "International flights",
      "Zanzibar visa",
      "Travel insurance",
      "Airport drop-off ($20)",
      "Tips & optional activities"
    ]
  },
  gettingThere: {
    description: "Tour starts at Zanzibar International Airport (ZNZ).",
    details: [
      "Fly via Dar es Salaam (DAR) or Nairobi (NBO).",
      "Arrive by 3 PM on Day 1 for included transfer."
    ]
  }
},
{
  id: 26,
  name: "7-Day Family Zanzibar Adventure",
  offeredBy: "Soul of Tanzania",
  tourOperator: "Soul of Tanzania",
    island:"zanzibar",
  rating: 4.8,
  reviewCount: 298,
  shortDescription: "Kid-friendly beach holiday with shallow lagoons, cultural tours, and family suites.",
  fullDescription: "Perfect for families—safe swimming beaches, interactive spice tours, turtle sanctuaries, and spacious family rooms with kids’ menus and activities.",
  duration: 7,
  price: 1350,
  startingFrom: "Zanzibar Airport (ZNZ)",
  comfortLevel: "mid-range",
  tourType: "private",
  safariType: "family & beach",
  specializedTours: ["family", "kids", "beach", "educational"],
  features: ["family suites", "shallow beaches", "kids’ menu", "educational tours", "airport transfer"],
  image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  highlights: [
    "Family-Friendly Resort",
    "Turtle Sanctuary Visit",
    "Interactive Spice Farm",
    "Safe Swimming Lagoons",
    "Kids’ Activities Included"
  ],
  destinations: ["Zanzibar Airport", "Paje Beach", "Jambiani", "Turtle Sanctuary", "Stone Town"],
  Island: "Zanzibar",
  route: {
    start: "Zanzibar Airport (Day 1)",
    end: "Zanzibar Airport (Day 7)",
    days: [
      { day: 1, location: "Arrival & Resort Check-in", description: "" },
      { day: 2, location: "Beach & Kids’ Club", description: "" },
      { day: 3, location: "Turtle Sanctuary & Jambiani", description: "" },
      { day: 4, location: "Spice Farm Tour", description: "" },
      { day: 5, location: "Stone Town Family Tour", description: "" },
      { day: 6, location: "Beach Day & Sandcastle Contest", description: "" },
      { day: 7, location: "Departure", description: "" }
    ]
  },
  tourFeatures: [
    "Designed for families with children 4+",
    "Shallow, calm beaches for safe swimming",
    "Educational & fun activities for kids",
    "Family suites with extra beds"
  ],
  activitiesTransportation: {
    activities: ["beach play", "turtle feeding", "spice picking", "Stone Town scavenger hunt", "coconut painting"],
    vehicle: "Private family-friendly van with AC",
    transfer: "Roundtrip airport transfers included"
  },
  accommodationMeals: {
    note: "Family suites with interconnecting rooms or extra beds. Kids’ menus available.",
    schedule: [
      { day: 1, accommodation: "White Sands Luxury Villas & Spa", accommodationType: "Family suite with garden view", meals: "Dinner & Breakfast" },
      { day: 2, accommodation: "White Sands Luxury Villas & Spa", accommodationType: "Beachfront family villa", meals: "All Meals Included" },
      { day: 3, accommodation: "White Sands Luxury Villas & Spa", accommodationType: "Ocean-view suite", meals: "All Meals Included" },
      { day: 4, accommodation: "White Sands Luxury Villas & Spa", accommodationType: "Spacious family room", meals: "All Meals Included" },
      { day: 5, accommodation: "White Sands Luxury Villas & Spa", accommodationType: "Premium family suite", meals: "All Meals Included" },
      { day: 6, accommodation: "White Sands Luxury Villas & Spa", accommodationType: "Final night celebration", meals: "All Meals Included" },
      { day: 7, accommodation: "End of tour", accommodationType: "(No accommodation)", meals: "Breakfast Included" }
    ]
  },
  gallery: [
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  dayByDay: [
    {
      day: 1,
      location: "Arrival in Zanzibar",
      description: "Private transfer to family resort in Paje. Welcome juice and kids’ welcome pack.",
      accommodation: "White Sands Luxury Villas & Spa",
      meals: "Dinner & Breakfast",
      images: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
    },
    {
      day: 2,
      location: "Beach & Kids’ Club",
      description: "Supervised kids’ activities: shell collecting, coconut painting. Parents relax at pool or spa.",
      accommodation: "White Sands Luxury Villas & Spa",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 3,
      location: "Turtle Sanctuary & Jambiani",
      description: "Visit a turtle conservation center. Swim in calm lagoon. Picnic lunch on beach.",
      accommodation: "White Sands Luxury Villas & Spa",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 4,
      location: "Interactive Spice Farm",
      description: "Kids pick cloves, vanilla, and cinnamon. Make their own spice pouch to take home.",
      accommodation: "White Sands Luxury Villas & Spa",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 5,
      location: "Stone Town Family Scavenger Hunt",
      description: "Fun, educational tour with clues about Zanzibar history. Ice cream stop included!",
      accommodation: "White Sands Luxury Villas & Spa",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 6,
      location: "Beach Day & Sandcastle Contest",
      description: "Family sandcastle building with prizes. Sunset group photo.",
      accommodation: "White Sands Luxury Villas & Spa",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 7,
      location: "Departure",
      description: "Breakfast and private transfer to ZNZ Airport.",
      accommodation: "End of tour",
      meals: "Breakfast Included",
      images: []
    }
  ],
  rates: {
    disclaimer: "Price per adult. Children 4–11: 50% discount. Under 4: free (no bed).",
    pricing: [
      { period: "Year-round", oneRoomTwoAdults: "$1,350", familyOfFour: "$1,100 per adult" }
    ]
  },
  inclusions: {
    included: [
      "6 nights family resort",
      "All meals (kids’ menu available)",
      "All guided family activities",
      "Roundtrip private transfers",
      "Entrance fees",
      "Kids’ welcome pack"
    ],
    excluded: [
      "Flights",
      "Visa",
      "Travel insurance",
      "Tips",
      "Optional spa treatments"
    ]
  },
  gettingThere: {
    description: "Starts at Zanzibar International Airport (ZNZ).",
    details: [
      "Best for families with children aged 4+.",
      "Cots and high chairs available on request."
    ]
  }
},
{
  id: 27,
  name: "10-Day All-Inclusive Luxury Zanzibar",
  offeredBy: "Soul of Tanzania",
  tourOperator: "Soul of Tanzania",
  island:"zanzibar",
  rating: 4.95,
  reviewCount: 187,
  shortDescription: "Ultimate all-inclusive escape with premium drinks, gourmet dining, and unlimited excursions.",
  fullDescription: "Indulge in a 10-day all-inclusive luxury experience with unlimited spa, water sports, private tours, and 5-star service in a private ocean villa.",
  duration: 10,
  price: 3200,
  startingFrom: "Zanzibar Airport (ZNZ)",
  comfortLevel: "luxury",
  tourType: "private",
  safariType: "all-inclusive",
  specializedTours: ["luxury", "all-inclusive", "wellness", "beach"],
  features: ["unlimited premium drinks", "all excursions included", "butler service", "private chef option", "helicopter transfer available"],
  image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  highlights: [
    "All-Inclusive Premium Plan",
    "Unlimited Spa & Water Sports",
    "Private Island Picnic",
    "Helicopter Tour (Optional)",
    "24/7 Butler Service"
  ],
  destinations: ["Zanzibar Airport", "Bwejuu Beach", "Mnemba Atoll", "Chumbe Island", "Stone Town"],
  Island: "Zanzibar",
  route: {
    start: "Zanzibar Airport (Day 1)",
    end: "Zanzibar Airport (Day 10)",
    days: [
      { day: 1, location: "Arrival & Villa Check-in", description: "" },
      { day: 2, location: "Spa & Beach Day", description: "" },
      { day: 3, location: "Mnemba Atoll Snorkeling", description: "" },
      { day: 4, location: "Chumbe Island Eco-Tour", description: "" },
      { day: 5, location: "Stone Town Cultural Day", description: "" },
      { day: 6, location: "Private Sandbank Picnic", description: "" },
      { day: 7, location: "Water Sports Day", description: "" },
      { day: 8, location: "Sunset Helicopter Tour (Optional)", description: "" },
      { day: 9, location: "Farewell Beach Gala", description: "" },
      { day: 10, location: "Departure", description: "" }
    ]
  },
  tourFeatures: [
    "Fully all-inclusive: food, drinks, excursions, spa",
    "Private ocean-view villa with pool",
    "Personal butler & 24/7 concierge",
    "Unlimited non-motorized water sports",
    "Helicopter upgrade available"
  ],
  activitiesTransportation: {
    activities: ["snorkeling", "kayaking", "paddleboarding", "island tours", "spa", "helicopter flight", "gourmet dining"],
    vehicle: "Private luxury transfers + boat + helicopter option",
    transfer: "Included (helicopter extra)"
  },
  accommodationMeals: {
    note: "9 nights in private luxury villa with infinity pool and butler service.",
    schedule: [
      { day: 1, accommodation: "Essque Zalu Zanzibar", accommodationType: "Private ocean villa with pool", meals: "Dinner & Breakfast" },
      { day: 2, accommodation: "Essque Zalu Zanzibar", accommodationType: "Luxury beachfront villa", meals: "All Meals Included" },
      // ... days 3–9: same property, all meals included
      { day: 9, accommodation: "Essque Zalu Zanzibar", accommodationType: "Final night gala suite", meals: "All Meals Included" },
      { day: 10, accommodation: "End of tour", accommodationType: "(No accommodation)", meals: "Breakfast Included" }
    ]
  },
  gallery: [
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1507699622108-4be1e9b8a580?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  dayByDay: [
    {
      day: 1,
      location: "Arrival in Zanzibar",
      description: "VIP meet at ZNZ. Champagne transfer to your private villa. Butler unpacks your bags.",
      accommodation: "Essque Zalu Zanzibar",
      meals: "Dinner & Breakfast",
      images: ["https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
    },
    {
      day: 2,
      location: "Spa & Beach",
      description: "Unlimited spa access. Private beach cabana with dedicated server.",
      accommodation: "Essque Zalu Zanzibar",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 3,
      location: "Mnemba Atoll",
      description: "Private boat to Mnemba. Snorkel with turtles. Gourmet picnic on sandbank.",
      accommodation: "Essque Zalu Zanzibar",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 4,
      location: "Chumbe Island",
      description: "Eco-tour of coral sanctuary and historic lighthouse.",
      accommodation: "Essque Zalu Zanzibar",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 5,
      location: "Stone Town",
      description: "Private guide through markets, museums, and hidden courtyards. Lunch at Emerson on Hurumzi.",
      accommodation: "Essque Zalu Zanzibar",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 6,
      location: "Private Sandbank Picnic",
      description: "Exclusive use of a deserted sandbank. Champagne, lobster, and sunset photoshoot.",
      accommodation: "Essque Zalu Zanzibar",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 7,
      location: "Water Sports Day",
      description: "Kayaking, paddleboarding, windsurfing—all included.",
      accommodation: "Essque Zalu Zanzibar",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 8,
      location: "Helicopter Tour (Optional)",
      description: "30-min aerial tour over Zanzibar archipelago (extra $450).",
      accommodation: "Essque Zalu Zanzibar",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 9,
      location: "Farewell Gala",
      description: "Beachfront gala dinner with Swahili dancers and fire performers.",
      accommodation: "Essque Zalu Zanzibar",
      meals: "All Meals Included",
      images: []
    },
    {
      day: 10,
      location: "Departure",
      description: "Late checkout. Private transfer to ZNZ with farewell gift.",
      accommodation: "End of tour",
      meals: "Breakfast Included",
      images: []
    }
  ],
  rates: {
    disclaimer: "Price per person based on double occupancy. Helicopter tour not included.",
    pricing: [
      { period: "Year-round", oneRoomTwoPeople: "$3,200" }
    ]
  },
  inclusions: {
    included: [
      "9 nights luxury private villa",
      "All meals & premium drinks (including wine & spirits)",
      "All excursions & boat trips",
      "Unlimited spa & water sports",
      "Private butler & 24/7 concierge",
      "All transfers",
      "Welcome & farewell amenities"
    ],
    excluded: [
      "International flights",
      "Visa",
      "Travel insurance",
      "Helicopter tour ($450)",
      "Gratuities"
    ]
  },
  gettingThere: {
    description: "Starts at Zanzibar International Airport (ZNZ).",
    details: [
      "VIP fast-track immigration available.",
      "We recommend business class for the full luxury experience."
    ]
  }
}


  // Add more packages as needed...
];

// Filter options data
export const filterOptions = {
  categories: [
    { id: 'all', name: 'All Packages' },
    { id: 'safari', name: 'Safari' },
    { id: 'kilimanjaro', name: 'Kilimanjaro' },
    { id: 'zanzibar', name: 'Zanzibar' },
    { id: 'combined', name: 'Combined' }
  ],
  durations: [
    { id: 'all', name: 'Any Duration' },
    { id: 'short', name: '1-5 Days' },
    { id: 'medium', name: '6-10 Days' },
    { id: 'long', name: '11+ Days' }
  ],
  difficulties: [
    { id: 'all', name: 'Any Difficulty' },
    { id: 'easy', name: 'Easy' },
    { id: 'moderate', name: 'Moderate' },
    { id: 'challenging', name: 'Challenging' }
  ],
  priceRanges: [
    { id: 'all', name: 'Any Price' },
    { id: 'budget', name: 'Under $1500' },
    { id: 'mid', name: '$1500 - $3000' },
    { id: 'luxury', name: '$3000+' }
  ],
  comfortLevels: [
    { id: 'all', name: 'All Comfort Levels' },
    { id: 'budget', name: 'Budget' },
    { id: 'mid-range', name: 'Mid-Range' },
    { id: 'luxury', name: 'Luxury' },
    { id: 'luxury+', name: 'Luxury+' }
  ],
  tourTypes: [
    { id: 'all', name: 'All Tour Types' },
    { id: 'private', name: 'Private Tour' },
    { id: 'shared', name: 'Shared Tour' }
  ],
  safariTypes: [
    { id: 'all', name: 'All Safari Types' },
    { id: 'lodge', name: 'Lodge' },
    { id: 'tented', name: 'Tented Camp' },
    { id: 'hotel', name: 'Hotel' },
    { id: 'camping', name: 'Camping' }
  ],
  specializedTours: [
    { id: 'fly-in-safaris', name: 'Fly-in Safaris' },
    { id: 'family', name: 'Family' },
    { id: 'beach-time', name: 'Beach Time' },
    { id: 'honeymoon', name: 'Honeymoon' },
    { id: 'gorilla-trekking', name: 'Gorilla Trekking' },
    { id: 'walking-safaris', name: 'Walking Safaris' }
  ],
  otherFeatures: [
    { id: 'airport-transfer', name: 'Airport Transfer Included' },
    { id: 'customizable', name: 'Itinerary Can Be Customized' },
    { id: 'domestic-flight', name: 'Domestic Flight Included' }
  ]
};

export { mockPackages };


// frontend/lib/mockParksData.js

// frontend/lib/mockData.js

// --- Existing mockPackages data (your safari tour packages) --

// frontend/lib/mockData.js

// --- Existing mockPackages data ---


// --- Enhanced mockParksData for Country Detail Page ---
export const mockParksData = {
  tanzania: {
    countryName: "Tanzania",
    pageTitle: "Tanzania Safari - Complete Travel Guide",
    overallRating: 4.8,
    totalReviews: 1988,
    safariCount: "8,009 Tanzania Safaris",
    
    // Navigation tabs
    tabs: [
      "Overview",
      "Parks & Reserves", 
      "Reviews",
      "Wildlife",
      "Birds",
      "Best Time To Visit",
      "Weather & Climate",
      "Popular Routes",
      "How To Get There",
      "Malaria & Vaccinations",
      "Staying Safe"
    ],

    // --- TAB 1: Overview --- (UPDATED)
    overview: {
      expert: {
        name: "Philip Briggs",
        byline: "Africa Expert & Author",
        bio: "Philip is a renowned Africa expert and author of many guidebooks to African destinations, including the Bradt guide to Tanzania."
      },
      summary: "Tanzania, with its three safari circuits, is one of Africa's top wildlife destinations. The popular Northern circuit incorporates bucket-list landmarks such as Serengeti National Park, Ngorongoro Crater and Mt Kilimanjaro. Repeat visitors might prefer the remote wilderness vibe of the Southern or Western circuits. For some beach time, the 'Spice Island' of Zanzibar is only a short flight away.",
      stats: {
        rates: "$216 to $636",
        bestTimeToGo: "June to October; January to February (For wildebeest calving)",
        highSeason: "July to March (North), June to October (South and west)",
        size: "947,303km² / 365,756mi²"
      },
      prosCons: {
        pros: [
          "Superb wildlife viewing, including the annual wildebeest migration in Serengeti",
          "Off-the-beaten-track safaris in Katavi and Ruaha National Parks",
          "Several wildlife-viewing circuits for repeat visits",
          "Best chimp trekking in Africa in Gombe and Mahale Mountains National Parks",
          "Beach holiday extensions on Zanzibar",
          "Traditional cultures"
        ],
        cons: [
          "Relatively expensive safari destination",
          "Some popular parks can be crowded"
        ]
      },
      // NEW FIELDS REQUIRED BY COMPONENT
      wildlifeSection: {
        title: "Wildlife",
        content: "Tanzania offers excellent wildlife viewing. If it's your goal to tick off the Big Five, you're in luck. Elephant, buffalo and lion are easily seen. If you're visiting the Ngorongoro Crater, you'll probably spot black rhino too. Although common, leopards are very secretive.",
        moreLink: "More about Wildlife"
      },
      thingsToDo: {
        title: "Things to Do in Tanzania",
        content: "Beyond wildlife viewing, Tanzania offers incredible cultural experiences, beach relaxation on Zanzibar, and mountain climbing on Kilimanjaro."
      },
      reviews: {
        expert: {
          rating: 4.8,
          count: 18
        },
        user: {
          rating: 4.8,
          count: 1972
        }
      },
      premierParks: {
        title: "Premier Parks",
        list: [
          "Serengeti National Park",
          "Ngorongoro Crater", 
          "Nyerere National Park",
          "Ruaha National Park"
        ],
        allParksNote: "View all 15 parks"
      }
    },

    // --- TAB 2: Parks & Reserves --- (UPDATED)
    parksAndReserves: {
      premierParks: [
        { name: "Ngorongoro Crater", tag: "Best Park" },
        { name: "Nyerere National Park", tag: "Best Park" },
        { name: "Ruaha National Park", tag: "Best Park" },
        { name: "Serengeti National Park", tag: "Best Park" }
      ],
      allParks: [
        {
          name: "Arusha National Park",
          rating: 4.2,
          reviews: 112,
          highlights: "Classic safaris, hiking, antelope species, buffalo, giraffe, Kilimanjaro colobus",
          image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
          slug: "arusha-national-park"
        },
        {
          name: "Gombe National Park", 
          rating: 4.5,
          reviews: 23,
          highlights: "Chimpanzee trekking, other primate species present",
          image: "https://images.unsplash.com/photo-1573843988976-8a4c7a9b0e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
          slug: "gombe-national-park"
        },
        {
          name: "Katavi National Park",
          rating: 4.5,
          reviews: 34,
          highlights: "Classic and walking safaris, four of the Big Five (no rhino), many hippo",
          image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
          slug: "katavi-national-park"
        },
        {
          name: "Lake Manyara National Park",
          rating: 4.0,
          reviews: 315,
          highlights: "Classic, walking and canoe safaris, treetop walkway, four of the Big Five (no rhino)",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
          slug: "lake-manyara-national-park"
        },
        {
          name: "Mahale Mountains National Park",
          rating: 4.4,
          reviews: 21,
          highlights: "Chimpanzee trekking, other primate species present",
          image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
          slug: "mahale-mountains-national-park"
        },
        {
          name: "Mikumi National Park",
          rating: 4.2,
          reviews: 90,
          highlights: "Classic and walking safaris, four of the Big Five (no rhino)",
          image: "https://images.unsplash.com/photo-1573843988976-8a4c7a9b0e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
          slug: "mikumi-national-park"
        },
        {
          name: "Ngorongoro Crater",
          rating: 4.8,
          reviews: 604,
          highlights: "Classic safaris, abundant wildlife including the Big Five",
          image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
          slug: "ngorongoro-crater"
        },
        {
          name: "Nyerere National Park",
          rating: 4.6,
          reviews: 111,
          highlights: "Classic, walking and boat safaris, four of the Big Five (no rhino), wild dog",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
          slug: "nyerere-national-park"
        },
        {
          name: "Ruaha National Park",
          rating: 4.7,
          reviews: 75,
          highlights: "Classic and walking safaris, four of the Big Five (no rhino), cheetah, wild dog",
          image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
          slug: "ruaha-national-park"
        },
        {
          name: "Serengeti National Park",
          rating: 4.9,
          reviews: 554,
          highlights: "Classic safaris, Big Five (rhino very rare), big cats, wildebeest migration",
          image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
          slug: "serengeti-national-park"
        },
        {
          name: "Tarangire National Park",
          rating: 4.6,
          reviews: 386,
          highlights: "Classic and walking safaris, four of the Big Five (no rhino), lots of elephant",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
          slug: "tarangire-national-park"
        }
      ]
    },

    // --- TAB 3: Reviews --- (UPDATED)
    reviews: {
      expertRating: 4.8,
      expertReviews: 18,
      userRating: 4.8,
      userReviews: 1972,
      latestExpertReview: {
        author: "Tim Bewer",
        country: "US",
        title: "Crowded Favorites and Well-Kept Secrets",
        rating: 5,
        fullReview: "Tanzania is home to Serengeti National Park and Ngorongoro Crater; and this fact alone makes a solid case for declaring it Africa's best safari country. But, of course, there's much more that just these two places. Most visitors stick to the Northern circuit, but the Southern and Western circuits offer incredible wilderness experiences without the crowds."
      },
      latestUserReview: {
        author: "Cristian Corona",
        country: "IT",
        date: "Oct 22, 2025",
        rating: 5,
        review: "One of the most beautiful and fantastic places to go on safari, with fantastic unspoiled nature, a large number of animals, and many felines, Tanzania offers a true immersion in the savana in a truly welcoming and wild environment!"
      }
    },

    // --- TAB 4: Wildlife --- (UPDATED)
    wildlife: {
      abundanceLegend: ["Abundant", "Common", "Occasional", "Rare", "None"],
      speciesAbundance: {
        "Elephant": "Abundant",
        "Giraffe": "Abundant", 
        "Hippo": "Abundant",
        "Buffalo": "Abundant",
        "Zebra": "Abundant",
        "Wildebeest": "Abundant",
        "White Rhino": "None",
        "Black Rhino": "Rare",
        "Lion": "Common",
        "Leopard": "Occasional",
        "Cheetah": "Occasional",
        "Hyena": "Common",
        "Wild Dog": "Rare"
      },
      wildlifeRating: {
        expertRating: 4.8,
        expertReviews: 18,
        userRating: 4.8,
        userReviews: 1972
      },
      wildebeestMigration: {
        title: "Wildebeest Migration",
        description: "The wildebeest migration is one of Africa's greatest wildlife spectacles. At least 2 million hooved animals – mainly wildebeest, but also zebra and gazelle – move around the Mara-Serengeti ecosystem.",
        highlights: "Highlights of this 800km/500mi circular trek include the wildebeest calving on the Southern Serengeti plains and the dramatic Mara River crossings in the north."
      },
      // NEW FIELD REQUIRED BY COMPONENT
      parkRatings: [
        { park: "Serengeti NP", rating: 4.9, count: 554 },
        { park: "Ngorongoro Crater", rating: 4.8, count: 604 },
        { park: "Ruaha NP", rating: 4.7, count: 75 },
        { park: "Nyerere NP", rating: 4.6, count: 111 },
        { park: "Tarangire NP", rating: 4.6, count: 386 }
      ]
    },

    // --- TAB 5: Birds --- (UPDATED)
    birds: {
      summary: "Tanzania is an incredible birding destination. It has one of the largest species lists of any African country: over 1,100 birds have been recorded, of which more than 800 are resident and nearly 200 are regular migrants.",
      birdingRating: {
        expertRating: 4.8,
        expertReviews: 18,
        userRating: 4.8,
        userReviews: 1972
      },
      notableBirds: [
        { name: "Common ostrich", abundance: "Common" },
        { name: "Fischer's lovebird", abundance: "Locally common & endemic" },
        { name: "Palm-nut vulture", abundance: "Occasional" },
        { name: "Red-and-yellow barbet", abundance: "Locally common" },
        { name: "Superb starling", abundance: "Common" }
      ],
      bestTime: "The birdlife in Tanzania is good year-round but at its best from November to April when Palearctic and intra-African migratory birds are present. At this time, many resident bird species are in breeding plumage and nesting.",
      bestParks: [
        { park: "Arusha NP", rating: 4.2, count: 76 },
        { park: "Tarangire NP", rating: 4.4, count: 247 },
        { park: "Lake Manyara NP", rating: 4.1, count: 220 },
        { park: "Ruaha NP", rating: 4.4, count: 60 },
        { park: "Serengeti NP", rating: 4.5, count: 389 },
        { park: "Ngorongoro Crater", rating: 4.3, count: 400 }
      ]
    },

    // --- TAB 6: Best Time To Visit --- (UPDATED)
    bestTimeToVisit: {
      summary: "The best time to visit Tanzania is during the Dry season, from June to October, when wildlife viewing is generally at its best. This is also the best time to see the wildebeest migration in Serengeti National Park.",
      keyInfo: {
        bestTime: "June to October (All parks), January to February (Serengeti for the wildebeest calving)",
        highSeason: "July to March (Northern circuit parks), June to October (Southern and Western circuit parks)",
        lowSeason: "April and May (Many lodges are closed in the Southern and Western circuit parks)",
        bestWeather: "June to October (Little to no rainfall)"
      },
      monthlyChart: [
        { month: "January", wildlife: 5 },
        { month: "February", wildlife: 5 },
        { month: "March", wildlife: 4 },
        { month: "April", wildlife: 3 },
        { month: "May", wildlife: 3 },
        { month: "June", wildlife: 5 },
        { month: "July", wildlife: 5 },
        { month: "August", wildlife: 5 },
        { month: "September", wildlife: 5 },
        { month: "October", wildlife: 5 },
        { month: "November", wildlife: 4 },
        { month: "December", wildlife: 5 }
      ],
      // NEW FIELDS REQUIRED BY COMPONENT
      drySeason: {
        months: "June to October",
        highlights: [
          "Excellent wildlife viewing",
          "Animals gather around water sources",
          "Clear skies and minimal rainfall",
          "Best time for photography"
        ]
      },
      wetSeason: {
        months: "November to May", 
        highlights: [
          "Lush green landscapes",
          "Bird watching is at its best",
          "Fewer tourists and lower prices",
          "Wildebeest calving season"
        ]
      }
    },

    // --- TAB 7: Weather & Climate --- (UPDATED)
    weatherAndClimate: {
      summary: "Tanzania has a pleasant, tropical climate, but it has large regional climatic variations influenced by several factors, including altitude. The hottest and most humid part of the country is the coast.",
      climateChart: {
        location: "Arusha - 1,400m / 4,594ft",
        temperatureData: [
          { month: "Jan", min: 10, max: 28 },
          { month: "Feb", min: 10, max: 28 },
          { month: "Mar", min: 11, max: 27 },
          { month: "Apr", min: 13, max: 25 },
          { month: "May", min: 11, max: 22 },
          { month: "Jun", min: 8, max: 21 },
          { month: "Jul", min: 9, max: 20 },
          { month: "Aug", min: 8, max: 22 },
          { month: "Sep", min: 8, max: 24 },
          { month: "Oct", min: 10, max: 26 },
          { month: "Nov", min: 10, max: 27 },
          { month: "Dec", min: 10, max: 27 }
        ],
        rainfallData: [
          { month: "Jan", rainfall: 50 },
          { month: "Feb", rainfall: 80 },
          { month: "Mar", rainfall: 170 },
          { month: "Apr", rainfall: 360 },
          { month: "May", rainfall: 210 },
          { month: "Jun", rainfall: 30 },
          { month: "Jul", rainfall: 10 },
          { month: "Aug", rainfall: 10 },
          { month: "Sep", rainfall: 20 },
          { month: "Oct", rainfall: 30 },
          { month: "Nov", rainfall: 110 },
          { month: "Dec", rainfall: 100 }
        ]
      },
      drySeason: {
        months: "June to October",
        description: "There is little rainfall in the Dry season and the humidity is very low. It cools off at night. Be sure to pack warm clothing because morning game drives in open vehicles will be cold.",
        details: [
          "June to September – Afternoon temperatures are usually between 20°C/68°F and 30°C/86°F",
          "October – It's the end of the Dry season. It is hot and the first rains will come as a relief."
        ]
      },
      wetSeason: {
        months: "November to May",
        description: "During most of the Wet season, afternoon temperatures are consistently hot (around 30°C/86°F) but it is colder above 1,300m/4,265ft.",
        details: [
          "November & December – 'Short rains' – It rains regularly for about a month",
          "January & February – The northern parks and coastal areas tend to have a break",
          "March to May – 'Long rains' – These are the wettest months"
        ]
      },
      // NEW FIELD REQUIRED BY COMPONENT
      expert: {
        name: "Philip Briggs",
        bio: "Philip is a renowned Africa expert and author of many guidebooks to African destinations, including the Bradt guide to Tanzania."
      }
    },

    // --- TAB 8: Popular Routes --- (NO CHANGES NEEDED - matches component)
    popularRoutes: {
      northernCircuit: {
        title: "Northern Circuit",
        duration: "(1 to 2 weeks)",
        description: "The Northern safari circuit is the most popular circuit in Tanzania. In most cases, you will fly to Kilimanjaro International Airport (JRO) or Arusha Airport (ARK) near Arusha, the gateway of the Northern circuit.",
        destinations: [
          "Arusha National Park (0.5 to 2 days) is a scenic park dominated by Mt Meru with views of Mt Kilimanjaro on clear days",
          "Lake Manyara National Park (1 day) protects an abundance of wildlife in a beautiful setting below the Rift Valley escarpment",
          "Tarangire National Park (1 to 3 days) is home to massive elephant herds that gather around the Tarangire River in the Dry season",
          "Ngorongoro Crater (1 to 2 days) where it's not unusual to see the Big Five in one day",
          "Serengeti National Park (3 to 5 days) offers top wildlife viewing and a chance to witness the spectacular wildebeest migration"
        ],
        addOns: [
          "Zanzibar Island for relaxing on gorgeous beaches",
          "Gombe National Park or Mahale Mountains National Park for chimpanzee trekking",
          "Kilimanjaro National Park for climbing Africa's tallest mountain"
        ]
      },
      southernCircuit: {
        title: "Southern Circuit",
        duration: "(1 to 2 weeks)",
        description: "The off-the-beaten-track character of the Southern safari circuit makes for a holistic wilderness experience.",
        destinations: [
          "Mikumi National Park (1 to 2 days) has great animal concentrations (especially buffalo and elephant) in the Dry season",
          "Nyerere National Park (3 to 5 days) offers a combination of game drives, boat trips and walking safaris",
          "Ruaha National Park (3 to 5 days) is home to an incredible variety of animals including wild dogs"
        ],
        addOns: [
          "Zanzibar Island for relaxing on gorgeous beaches and spice tours"
        ]
      },
      westernCircuit: {
        title: "Western Circuit",
        duration: "(1 week)",
        description: "Tanzania's Western safari circuit is remote and exclusive. It combines an off-the-beaten-track classic safari with chimp trekking.",
        destinations: [
          "Mahale Mountains National Park or Gombe National Park (2 to 5 days) for the best chimpanzee trekking in Africa",
          "Katavi National Park (2 to 5 days) offers excellent wildlife viewing in the Dry season with superb wilderness appeal"
        ],
        addOns: [
          "Zanzibar Island for relaxing on gorgeous beaches and scuba diving"
        ]
      }
    },

    // --- TAB 9: How To Get There --- (NO CHANGES NEEDED - matches component)
    howToGetThere: {
      description: "Most safaris in Tanzania start from Arusha or Dar es Salaam, with international flights arriving at Kilimanjaro International Airport (JRO) or Julius Nyerere International Airport (DAR).",
      details: [
        "International flights connect through major hubs like Nairobi, Addis Ababa, or Dubai",
        "Domestic flights connect major parks and cities",
        "Road transfers are arranged by safari operators",
        "Visa requirements vary by nationality - check before travel"
      ]
    },

    // --- TAB 10: Malaria & Vaccinations --- (NO CHANGES NEEDED - matches component)
    malariaVaccinations: {
      expert: {
        name: "Philip Briggs",
        bio: "Philip is a renowned Africa expert and author of many guidebooks to African destinations, including the Bradt guide to Tanzania."
      },
      vaccinations: "Yellow fever vaccination is required if traveling from a yellow fever endemic country. Routine vaccinations should be up to date. Hepatitis A, Typhoid, and Malaria prophylaxis are recommended.",
      malariaRisk: "Malaria is present throughout Tanzania, including all safari areas. Prophylaxis is strongly recommended. Use mosquito repellent, wear long sleeves, and sleep under mosquito nets.",
      moreInfo: [
        { country: "Australia", url: "www.smartraveller.gov.au" },
        { country: "Canada", url: "travel.gc.ca" },
        { country: "United Kingdom", url: "www.gov.uk" },
        { country: "United States", url: "wwwnc.cdc.gov/travel" }
      ]
    },

    // --- TAB 11: Staying Safe --- (NO CHANGES NEEDED - matches component)
    stayingSafe: {
      expert: {
        name: "Philip Briggs", 
        bio: "Philip is a renowned Africa expert and author of many guidebooks to African destinations, including the Bradt guide to Tanzania."
      },
      summary: "Tanzania is generally safe for tourists, especially when on organized safaris. Exercise normal precautions in cities and follow your guide's instructions in wildlife areas.",
      safetyTips: [
        {
          title: "Wildlife Safety",
          description: "Always follow your guide's instructions. Never approach wild animals on foot and stay in your vehicle during game drives.",
          link: "View Wildlife Safety Guidelines"
        },
        {
          title: "Urban Safety", 
          description: "Be aware of your surroundings in cities. Don't display valuables and use registered taxis after dark.",
          link: "Urban Safety Tips"
        },
        {
          title: "Health Safety",
          description: "Drink bottled water, use insect repellent, and have comprehensive travel insurance.",
          link: "Health Safety Information"
        }
      ],
      governmentAdvice: [
        { country: "Australia", url: "www.smartraveller.gov.au" },
        { country: "Canada", url: "travel.gc.ca" },
        { country: "United Kingdom", url: "www.gov.uk" },
        { country: "United States", url: "travel.state.gov" }
      ]
    }
  },
// lib/mockData.js


// lib/mockData.js



  // === 1. Ngorongoro Crater ===
  ngorongoroCrater: {
    overview: {
      breadcrumbs: ["Home", "Countries & Parks", "Tanzania", "Ngorongoro Crater"],
      expert: {
        name: "Philip Briggs",
        byline: "By Philip Briggs",
        bio: "Philip is a renowned Africa expert and author of many guidebooks to African destinations, including the Bradt guide to Tanzania."
      },
      summary: "A visit to the Ngorongoro Crater is an experience of a lifetime. As the world’s only intact caldera, the crater is the top attraction of the 8,292km² Ngorongoro Conservation Area. There are few places that have comparable wildlife densities. It is not unusual to see the Big Five in one day here. And all this is in the most amazing setting with a backdrop of the 600m-/1,968ft-high crater wall.",
      stats: {
        "Best Time To Go": "June to October (Wildlife viewing is best)",
        "High Season": "Most of the year – July to March (Expect crowds)",
        "Size": "260km² / 100mi²",
        "Altitude": "1,027-3,522m / 3,369-11,555ft"
      },
      prosCons: {
        pros: [
          "Top wildlife viewing all year round",
          "Superb for spotting predators",
          "Black rhino is easily seen",
          "Beautiful scenery",
          "Staying on the crater rim offers great views into the crater",
          "Cultural visit to a Maasai village can be arranged"
        ],
        cons: [
          "Very crowded throughout the year",
          "Entrance to the crater is very expensive"
        ]
      },
      media: { photos: true, map: true }
    },
    reviews: {
      expertRating: 4.4,
      expertReviews: 17,
      userRating: 4.8,
      userReviews: 587,
      latestExpertReview: {
        author: "Stuart Butler",
        country: "UK",
        title: "More than a Crater",
        rating: 4,
        fullReview: "This world renowned extinct volcanic crater covers a simply enormous 260km sq and is the largest intact volcanic caldera on the planet, but visitors don’t come here merely for the geology..."
      },
      latestUserReview: {
        author: "Gerjanne Bosman",
        country: "NL",
        date: "Oct 13, 2025",
        rating: 4,
        review: "I didn't like it that much. Maybe because I fell in love with the Serengeti and we have visited Ngorongoro after the Serengeti"
      }
    },
    wildlife: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "The Ngorongoro Crater is without a doubt Tanzania’s most productive Big Five destination. The crater floor teems with wildlife, and predator sightings tend to be exceptional.",
      abundanceLegend: ["Abundant", "Common", "Occasional", "Rare", "None"],
      speciesAbundance: {
        "Elephant": "Common",
        "Giraffe": "None",
        "Hippo": "Common",
        "Buffalo": "Abundant",
        "Zebra": "Abundant",
        "Wildebeest": "Abundant",
        "White Rhino": "None",
        "Black Rhino": "Common",
        "Lion": "Common",
        "Leopard": "Occasional",
        "Cheetah": "None",
        "Hyena": "Abundant",
        "Wild Dog": "None"
      },
      wildlifeRating: { expertRating: 4.4, expertReviews: 17, userRating: 4.8, userReviews: 587 },
      highlights: "Most safari heavyweights are well represented in the crater. Black rhino is the star attraction...",
      bestTimeForWildlife: "Wildlife viewing is excellent in the Ngorongoro Crater throughout the year, although animals are most easily spotted during the Dry season (June to October)."
    },
    birds: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "There is excellent birding to be had in the Ngorongoro Crater. Even from a great distance, you’ll see flocks of pink flamingos in Lake Magadi.",
      birdingRating: { expertRating: 4.4, expertReviews: 17, userRating: 4.8, userReviews: 587 },
      notableBirds: [
        { name: "Augur buzzard", abundance: "Common" },
        { name: "Black kite", abundance: "Common" },
        { name: "Kori bustard", abundance: "Common" },
        { name: "Grey crowned crane", abundance: "Common" }
      ],
      facts: { totalSpecies: "500+", migratorySeason: "November to April" },
      bestTimeForBirding: "The birdlife in the Ngorongoro Crater is good throughout the year. However, the variety is greatest from November to April..."
    },
    bestTimeToVisit: {
      expert: { name: "Philip Briggs", bio: "..." },
      monthlyRatings: {
        January: "Excellent", February: "Excellent", March: "Good", April: "Good",
        May: "Excellent", June: "Excellent", July: "Excellent", August: "Excellent",
        September: "Excellent", October: "Excellent", November: "Excellent", December: "Excellent"
      },
      keyInfo: {
        bestTime: "June to October (Wildlife viewing is best)",
        highSeason: "Most of the year – July to March",
        lowSeason: "April and May",
        bestWeather: "June to October",
        worstWeather: "March and April"
      },
      drySeason: {
        months: "June to October",
        highlights: [
          "Wildlife is easier to spot since the grass is shorter",
          "There is little rainfall and lots of sunshine",
          "It gets crowded",
          "Mornings and nights get very cold so you’ll need winter clothes"
        ]
      },
      wetSeason: {
        months: "November to May",
        highlights: [
          "Wildlife viewing is excellent, even in the Wet season",
          "The scenery is green and beautiful",
          "April and May are low-season months so there are fewer visitors",
          "Birding is in its prime due to the presence of migratory birds from November to April"
        ]
      }
    },
    weatherAndClimate: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "The Ngorongoro Crater has a mild, temperate climate. The area experiences a Wet season with two rainy periods...",
      climateChart: {
        location: "Ngorongoro Conservation Area – 1,027-3,522m",
        temperatureData: [
          { month: "January", min: 13, max: 25 },
          { month: "February", min: 13, max: 25 },
          { month: "March", min: 13, max: 26 },
          { month: "April", min: 13, max: 25 },
          { month: "May", min: 12, max: 24 },
          { month: "June", min: 11, max: 23 },
          { month: "July", min: 10, max: 22 },
          { month: "August", min: 10, max: 23 },
          { month: "September", min: 12, max: 24 },
          { month: "October", min: 13, max: 25 },
          { month: "November", min: 13, max: 25 },
          { month: "December", min: 13, max: 25 }
        ],
        rainfallData: [
          { month: "January", rainfall: 91 },
          { month: "February", rainfall: 99 },
          { month: "March", rainfall: 132 },
          { month: "April", rainfall: 143 },
          { month: "May", rainfall: 53 },
          { month: "June", rainfall: 7 },
          { month: "July", rainfall: 4 },
          { month: "August", rainfall: 5 },
          { month: "September", rainfall: 7 },
          { month: "October", rainfall: 25 },
          { month: "November", rainfall: 83 },
          { month: "December", rainfall: 111 }
        ]
      },
      drySeason: {
        months: "June to October",
        details: [
          "Afternoon temperatures are usually around 19°C/66°F on the crater floor",
          "Sunny, cloudless skies are normal",
          "It gets cold at night, and it can freeze on the crater rim"
        ]
      },
      wetSeason: {
        months: "November to May",
        details: [
          "Daytime temperatures are usually around 23°C/73°F",
          "Short rains (Nov–Dec), long rains (Mar–May)",
          "Rarely rains all day"
        ]
      }
    },
    howToGetThere: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Most people visit the Ngorongoro Crater as part of a Northern circuit safari...",
      access: {
        fromArusha: "3-hour drive (180km) on tarred road",
        fromSerengeti: "3-hour drive (140km)",
        fromLakeManyara: "2-hour drive (80km)",
        fromTarangire: "4-hour drive (180km)"
      },
      airports: [
        { code: "JRO", name: "Kilimanjaro International Airport", note: "50km from Arusha" },
        { code: "DAR", name: "Julius Nyerere International Airport", note: "Fly to ARK or JRO" }
      ],
      domesticAirlines: [
        "Coastal Aviation", "Air Excel", "Regional Air", "Safari Air Link",
        "Auric Air", "Air Tanzania", "Precision Air", "ZanAir", "As Salaam Air"
      ]
    },
    malariaAndSafety: {
      expert: { name: "Philip Briggs", bio: "..." },
      safety: {
        summary: "The Ngorongoro Crater is a very safe destination in our opinion. Crime is rare in Tanzania’s parks and reserves.",
        tips: [
          "Crime is rare in parks",
          "Take normal precautions in cities like Arusha",
          "Follow guide instructions during wildlife viewing"
        ]
      },
      malaria: {
        risk: "Low to moderate (due to high altitude >2,000m)",
        prevention: [
          "DEET-based repellent",
          "Antimalarial medication (consult doctor)",
          "Cover skin in evenings"
        ]
      },
      vaccinations: "Consult travel doctor for recommended vaccines"
    }
  },

  // === 2. Serengeti National Park ===
  serengetiNationalPark: {
    overview: {
      breadcrumbs: ["Home", "Countries & Parks", "Tanzania", "Serengeti National Park"],
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "The Serengeti is Tanzania's most famous park, home to the Great Migration and exceptional year-round wildlife viewing. It forms part of the larger Serengeti-Mara ecosystem spanning Tanzania and Kenya.",
      stats: {
        "Best Time To Go": "June–Oct (migration), Jan–Feb (calving)",
        "High Season": "July to March",
        "Size": "14,763km² / 5,700mi²",
        "Altitude": "920–1,850m / 3,018–6,070ft"
      },
      prosCons: {
        pros: [
          "Witness the Great Migration",
          "Big cat sightings (lion, leopard, cheetah)",
          "Year-round wildlife viewing",
          "Hot air balloon safaris",
          "Multiple ecosystems"
        ],
        cons: [
          "Can be crowded in peak season",
          "Long drives between regions",
          "Expensive park fees"
        ]
      },
      media: { photos: true, map: true }
    },
    reviews: {
      expertRating: 4.9,
      expertReviews: 200,
      userRating: 4.9,
      userReviews: 554,
      latestExpertReview: {
        author: "Tim Bewer",
        country: "US",
        title: "Crowded Favorites and Well-Kept Secrets",
        rating: 5,
        fullReview: "Tanzania is home to Serengeti National Park and Ngorongoro Crater; and this fact alone makes a solid case for declaring it Africa’s best safari country..."
      },
      latestUserReview: {
        author: "Cristian Corona",
        country: "IT",
        date: "Oct 22, 2025",
        rating: 5,
        review: "One of the most beautiful and fantastic places to go on safari..."
      }
    },
    wildlife: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "The Serengeti hosts over 2 million wildebeest, plus lions, leopards, cheetahs, and elephants. It's one of the best places in Africa to see the Big Five.",
      abundanceLegend: ["Abundant", "Common", "Occasional", "Rare", "None"],
      speciesAbundance: {
        "Elephant": "Abundant",
        "Giraffe": "Abundant",
        "Hippo": "Common",
        "Buffalo": "Abundant",
        "Zebra": "Abundant",
        "Wildebeest": "Abundant",
        "White Rhino": "None",
        "Black Rhino": "Rare",
        "Lion": "Abundant",
        "Leopard": "Common",
        "Cheetah": "Common",
        "Hyena": "Abundant",
        "Wild Dog": "Rare"
      },
      wildlifeRating: { expertRating: 4.9, expertReviews: 200, userRating: 4.9, userReviews: 554 },
      highlights: "Home to the Great Migration... best cheetah sightings in Africa...",
      bestTimeForWildlife: "Dry season (Jun–Oct) for migration; Jan–Feb for calving..."
    },
    birds: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Over 500 bird species recorded, including ostrich, kori bustard, and migratory waterfowl.",
      birdingRating: { expertRating: 4.5, expertReviews: 150, userRating: 4.5, userReviews: 389 },
      notableBirds: [
        { name: "Ostrich", abundance: "Common" },
        { name: "Kori bustard", abundance: "Common" },
        { name: "Secretary bird", abundance: "Occasional" },
        { name: "Martial eagle", abundance: "Rare" }
      ],
      facts: { totalSpecies: "500+", migratorySeason: "November to April" },
      bestTimeForBirding: "Year-round, but best Nov–Apr for migrants"
    },
    bestTimeToVisit: {
      expert: { name: "Philip Briggs", bio: "..." },
      monthlyRatings: {
        January: "Excellent", February: "Excellent", March: "Fair", April: "Fair",
        May: "Fair", June: "Excellent", July: "Excellent", August: "Excellent",
        September: "Excellent", October: "Excellent", November: "Good", December: "Good"
      },
      keyInfo: {
        bestTime: "June to October; January to February",
        highSeason: "July to March",
        lowSeason: "April and May",
        bestWeather: "June to October",
        worstWeather: "March to May"
      },
      drySeason: {
        months: "June to October",
        highlights: [
          "Great Migration in Northern Serengeti",
          "Mara River crossings (Jul–Oct)",
          "Excellent predator sightings"
        ]
      },
      wetSeason: {
        months: "November to May",
        highlights: [
          "Wildebeest calving (Jan–Feb)",
          "Green, lush landscapes",
          "Fewer tourists (Apr–May)"
        ]
      }
    },
    weatherAndClimate: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "The Serengeti has a classic East African savanna climate with distinct wet and dry seasons.",
      climateChart: {
        location: "Serengeti National Park – 920-1,850m",
        temperatureData: [
          { month: "January", min: 16, max: 29 },
          { month: "February", min: 16, max: 29 },
          { month: "March", min: 16, max: 28 },
          { month: "April", min: 15, max: 26 },
          { month: "May", min: 14, max: 25 },
          { month: "June", min: 13, max: 24 },
          { month: "July", min: 12, max: 23 },
          { month: "August", min: 12, max: 24 },
          { month: "September", min: 13, max: 26 },
          { month: "October", min: 15, max: 28 },
          { month: "November", min: 16, max: 28 },
          { month: "December", min: 16, max: 28 }
        ],
        rainfallData: [
          { month: "January", rainfall: 80 },
          { month: "February", rainfall: 100 },
          { month: "March", rainfall: 150 },
          { month: "April", rainfall: 250 },
          { month: "May", rainfall: 120 },
          { month: "June", rainfall: 20 },
          { month: "July", rainfall: 10 },
          { month: "August", rainfall: 10 },
          { month: "September", rainfall: 15 },
          { month: "October", rainfall: 30 },
          { month: "November", rainfall: 70 },
          { month: "December", rainfall: 90 }
        ]
      },
      drySeason: {
        months: "June to October",
        details: [
          "Sunny days, cool nights",
          "Dust can reduce visibility",
          "Animals congregate at water sources"
        ]
      },
      wetSeason: {
        months: "November to May",
        details: [
          "Short rains (Nov–Dec), long rains (Mar–May)",
          "Roads can become muddy",
          "Lush vegetation"
        ]
      }
    },
    howToGetThere: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Accessed via scheduled or chartered flights from Arusha or road transfers (long drive).",
      access: {
        fromArusha: "8-hour drive or 1.5-hour flight",
        fromNgorongoro: "3-hour drive (140km)",
        fromLakeManyara: "4-hour drive (160km)"
      },
      airports: [
        { code: "SEU", name: "Seronera Airstrip", note: "Central Serengeti" },
        { code: "KGR", name: "Kogatende Airstrip", note: "Northern Serengeti" },
        { code: "MRE", name: "Mwiba Airstrip", note: "Southern Serengeti" }
      ],
      domesticAirlines: [
        "Coastal Aviation", "Auric Air", "Safari Air Link", "Air Excel"
      ]
    },
    malariaAndSafety: {
      expert: { name: "Philip Briggs", bio: "..." },
      safety: {
        summary: "Serengeti is very safe for tourists. Crime is virtually non-existent in the park.",
        tips: [
          "Always stay with your guide",
          "Never approach wild animals",
          "Follow park rules strictly"
        ]
      },
      malaria: {
        risk: "High (low altitude, wet season)",
        prevention: [
          "Antimalarial prophylaxis essential",
          "DEET repellent",
          "Mosquito nets at camps"
        ]
      },
      vaccinations: "Yellow fever certificate required if arriving from endemic country"
    }
  },

  // === 3. Tarangire National Park ===
  tarangireNationalPark: {
    overview: {
      breadcrumbs: ["Home", "Countries & Parks", "Tanzania", "Tarangire National Park"],
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Famous for its massive elephant herds and iconic baobab trees, Tarangire is a dry-season haven for wildlife. The Tarangire River sustains large concentrations of animals when other parks dry up.",
      stats: {
        "Best Time To Go": "June to October",
        "High Season": "June to October",
        "Size": "2,850km² / 1,100mi²",
        "Altitude": "1,000–1,500m / 3,280–4,920ft"
      },
      prosCons: {
        pros: [
          "Largest elephant population in Tanzania",
          "Iconic baobab trees",
          "Less crowded than Serengeti",
          "Excellent dry-season wildlife"
        ],
        cons: [
          "Wildlife disperses in wet season",
          "Limited Big Five (no rhino)",
          "Fewer predators than Serengeti"
        ]
      },
      media: { photos: true, map: true }
    },
    reviews: {
      expertRating: 4.6,
      expertReviews: 30,
      userRating: 4.6,
      userReviews: 386,
      latestExpertReview: {
        author: "Tim Bewer",
        country: "US",
        title: "Elephant Paradise",
        rating: 5,
        fullReview: "Tarangire is the place to see elephants in Tanzania. The baobabs create a quintessential African landscape..."
      },
      latestUserReview: {
        author: "Maria Schmidt",
        country: "DE",
        date: "Oct 10, 2025",
        rating: 5,
        review: "Saw over 100 elephants in one day! The baobabs are magical."
      }
    },
    wildlife: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Home to 3,000+ elephants, plus lion, leopard, and rare antelope like kudu and oryx. Four of the Big Five (no rhino).",
      abundanceLegend: ["Abundant", "Common", "Occasional", "Rare", "None"],
      speciesAbundance: {
        "Elephant": "Abundant",
        "Giraffe": "Abundant",
        "Hippo": "Common",
        "Buffalo": "Abundant",
        "Zebra": "Common",
        "Wildebeest": "Common",
        "White Rhino": "None",
        "Black Rhino": "None",
        "Lion": "Common",
        "Leopard": "Occasional",
        "Cheetah": "Rare",
        "Hyena": "Common",
        "Wild Dog": "Rare"
      },
      wildlifeRating: { expertRating: 4.6, expertReviews: 30, userRating: 4.6, userReviews: 386 },
      highlights: "Dry season (Jun–Oct) brings elephants to the Tarangire River...",
      bestTimeForWildlife: "June to October for best game viewing"
    },
    birds: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Over 550 bird species, including yellow-collared lovebird and ashy starling (endemic to northern Tanzania).",
      birdingRating: { expertRating: 4.4, expertReviews: 25, userRating: 4.4, userReviews: 247 },
      notableBirds: [
        { name: "Yellow-collared lovebird", abundance: "Common & endemic" },
        { name: "Ashy starling", abundance: "Common & endemic" },
        { name: "Klipspringer", abundance: "Rare" }
      ],
      facts: { totalSpecies: "550+", migratorySeason: "November to April" },
      bestTimeForBirding: "Year-round; endemics visible in dry season"
    },
    bestTimeToVisit: {
      expert: { name: "Philip Briggs", bio: "..." },
      monthlyRatings: {
        January: "Fair", February: "Fair", March: "Fair", April: "Fair",
        May: "Fair", June: "Good", July: "Excellent", August: "Excellent",
        September: "Excellent", October: "Excellent", November: "Excellent", December: "Good"
      },
      keyInfo: {
        bestTime: "June to October",
        highSeason: "June to October",
        lowSeason: "April and May",
        bestWeather: "June to October",
        worstWeather: "March to May"
      },
      drySeason: {
        months: "June to October",
        highlights: [
          "Elephant concentrations along the river",
          "Clear views under baobabs",
          "Excellent photography conditions"
        ]
      },
      wetSeason: {
        months: "November to May",
        highlights: [
          "Green scenery and birding",
          "Fewer tourists (Apr–May)",
          "Lush vegetation"
        ]
      }
    },
    weatherAndClimate: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Hot and dry in the dry season; warm and wet in the wet season. One of Tanzania's hotter parks.",
      climateChart: {
        location: "Tarangire National Park – 1,000-1,500m",
        temperatureData: [
          { month: "January", min: 18, max: 32 },
          { month: "February", min: 18, max: 32 },
          { month: "March", min: 18, max: 31 },
          { month: "April", min: 17, max: 29 },
          { month: "May", min: 16, max: 28 },
          { month: "June", min: 14, max: 27 },
          { month: "July", min: 13, max: 26 },
          { month: "August", min: 13, max: 27 },
          { month: "September", min: 15, max: 29 },
          { month: "October", min: 17, max: 31 },
          { month: "November", min: 18, max: 31 },
          { month: "December", min: 18, max: 31 }
        ],
        rainfallData: [
          { month: "January", rainfall: 70 },
          { month: "February", rainfall: 90 },
          { month: "March", rainfall: 140 },
          { month: "April", rainfall: 200 },
          { month: "May", rainfall: 80 },
          { month: "June", rainfall: 10 },
          { month: "July", rainfall: 5 },
          { month: "August", rainfall: 5 },
          { month: "September", rainfall: 10 },
          { month: "October", rainfall: 20 },
          { month: "November", rainfall: 50 },
          { month: "December", rainfall: 60 }
        ]
      },
      drySeason: {
        months: "June to October",
        details: [
          "Hot days, cool nights",
          "Dust can reduce visibility",
          "Animals gather at the Tarangire River"
        ]
      },
      wetSeason: {
        months: "November to May",
        details: [
          "Afternoon showers common",
          "Roads can become muddy",
          "Lush green landscapes"
        ]
      }
    },
    howToGetThere: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "3-hour drive from Arusha or fly into Tarangire Airstrip.",
      access: {
        fromArusha: "3-hour drive (180km)",
        fromNgorongoro: "4-hour drive (200km)",
        fromSerengeti: "5-hour drive (250km)"
      },
      airports: [
        { code: "TRE", name: "Tarangire Airstrip", note: "Seasonal flights" }
      ],
      domesticAirlines: ["Coastal Aviation", "Auric Air"]
    },
    malariaAndSafety: {
      expert: { name: "Philip Briggs", bio: "..." },
      safety: {
        summary: "Tarangire is very safe for tourists. Crime is virtually non-existent in the park.",
        tips: [
          "Always stay with your guide",
          "Never approach wild animals",
          "Follow park rules strictly"
        ]
      },
      malaria: {
        risk: "Moderate to high",
        prevention: [
          "Antimalarial medication recommended",
          "DEET repellent",
          "Mosquito nets at camps"
        ]
      },
      vaccinations: "Standard travel vaccines recommended"
    }
  },

  // === 4. Lake Manyara National Park ===
  lakeManyaraNationalPark: {
    overview: {
      breadcrumbs: ["Home", "Countries & Parks", "Tanzania", "Lake Manyara National Park"],
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Famous for tree-climbing lions and huge flocks of flamingos, Lake Manyara is a compact but diverse park at the base of the Rift Valley escarpment. It offers a great introduction to Tanzanian wildlife.",
      stats: {
        "Best Time To Go": "June to October",
        "High Season": "July to March",
        "Size": "330km² / 127mi²",
        "Altitude": "960–1,500m / 3,150–4,920ft"
      },
      prosCons: {
        pros: [
          "Tree-climbing lions",
          "Flamingo flocks on the lake",
          "Treetop walkway",
          "Easy access from Arusha",
          "Compact and manageable"
        ],
        cons: [
          "Small size limits game viewing",
          "Can be crowded",
          "Limited Big Five (no rhino)"
        ]
      },
      media: { photos: true, map: true }
    },
    reviews: {
      expertRating: 4.0,
      expertReviews: 18,
      userRating: 4.0,
      userReviews: 315,
      latestExpertReview: {
        author: "Stuart Butler",
        country: "UK",
        title: "Compact but Spectacular",
        rating: 4,
        fullReview: "Lake Manyara packs a lot into a small area. The tree-climbing lions are a unique sight..."
      },
      latestUserReview: {
        author: "James Wilson",
        country: "UK",
        date: "Oct 5, 2025",
        rating: 4,
        review: "Saw tree-climbing lions! The flamingos were amazing."
      }
    },
    wildlife: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Known for tree-climbing lions, large elephant herds, and over 400 bird species including flamingos.",
      abundanceLegend: ["Abundant", "Common", "Occasional", "Rare", "None"],
      speciesAbundance: {
        "Elephant": "Abundant",
        "Giraffe": "Abundant",
        "Hippo": "Abundant",
        "Buffalo": "Abundant",
        "Zebra": "Common",
        "Wildebeest": "Common",
        "White Rhino": "None",
        "Black Rhino": "None",
        "Lion": "Common",
        "Leopard": "Rare",
        "Cheetah": "None",
        "Hyena": "Common",
        "Wild Dog": "None"
      },
      wildlifeRating: { expertRating: 4.0, expertReviews: 18, userRating: 4.0, userReviews: 315 },
      highlights: "Tree-climbing lions are a unique sight... flamingos gather on Lake Manyara...",
      bestTimeForWildlife: "Dry season (Jun–Oct) for best viewing"
    },
    birds: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Over 400 bird species, including greater flamingo, pelican, fish eagle, and hammerkop.",
      birdingRating: { expertRating: 4.1, expertReviews: 20, userRating: 4.1, userReviews: 220 },
      notableBirds: [
        { name: "Greater flamingo", abundance: "Abundant (dry season)" },
        { name: "Pelican", abundance: "Common" },
        { name: "Fish eagle", abundance: "Common" },
        { name: "Hammerkop", abundance: "Common" }
      ],
      facts: { totalSpecies: "400+", migratorySeason: "November to April" },
      bestTimeForBirding: "Year-round; flamingos best in dry season"
    },
    bestTimeToVisit: {
      expert: { name: "Philip Briggs", bio: "..." },
      monthlyRatings: {
        January: "Good", February: "Good", March: "Fair", April: "Fair",
        May: "Good", June: "Excellent", July: "Excellent", August: "Excellent",
        September: "Excellent", October: "Excellent", November: "Good", December: "Good"
      },
      keyInfo: {
        bestTime: "June to October",
        highSeason: "July to March",
        lowSeason: "April and May",
        bestWeather: "June to October",
        worstWeather: "March to May"
      },
      drySeason: {
        months: "June to October",
        highlights: [
          "Flamingo concentrations on the lake",
          "Tree-climbing lions active",
          "Clear views and good photography"
        ]
      },
      wetSeason: {
        months: "November to May",
        highlights: [
          "Green scenery and migratory birds (Nov–Apr)",
          "Fewer tourists (Apr–May)",
          "Lush vegetation"
        ]
      }
    },
    weatherAndClimate: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Mild year-round; wet Nov–May. Cooler at higher elevations near the escarpment.",
      climateChart: {
        location: "Lake Manyara National Park – 960-1,500m",
        temperatureData: [
          { month: "January", min: 16, max: 28 },
          { month: "February", min: 16, max: 28 },
          { month: "March", min: 16, max: 27 },
          { month: "April", min: 15, max: 25 },
          { month: "May", min: 14, max: 24 },
          { month: "June", min: 12, max: 23 },
          { month: "July", min: 11, max: 22 },
          { month: "August", min: 12, max: 23 },
          { month: "September", min: 14, max: 25 },
          { month: "October", min: 15, max: 27 },
          { month: "November", min: 16, max: 27 },
          { month: "December", min: 16, max: 27 }
        ],
        rainfallData: [
          { month: "January", rainfall: 80 },
          { month: "February", rainfall: 100 },
          { month: "March", rainfall: 150 },
          { month: "April", rainfall: 250 },
          { month: "May", rainfall: 120 },
          { month: "June", rainfall: 20 },
          { month: "July", rainfall: 10 },
          { month: "August", rainfall: 10 },
          { month: "September", rainfall: 15 },
          { month: "October", rainfall: 30 },
          { month: "November", rainfall: 70 },
          { month: "December", rainfall: 90 }
        ]
      },
      drySeason: {
        months: "June to October",
        details: [
          "Cool nights",
          "Sunny days",
          "Animals gather near the lake"
        ]
      },
      wetSeason: {
        months: "November to May",
        details: [
          "Afternoon showers common",
          "Roads can become muddy",
          "Lush green landscapes"
        ]
      }
    },
    howToGetThere: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "2-hour drive from Arusha or fly into Lake Manyara Airstrip.",
      access: {
        fromArusha: "2-hour drive (120km)",
        fromNgorongoro: "2-hour drive (80km)",
        fromTarangire: "3-hour drive (150km)"
      },
      airports: [
        { code: "LKY", name: "Lake Manyara Airstrip", note: "Seasonal flights" }
      ],
      domesticAirlines: ["Coastal Aviation", "Auric Air"]
    },
    malariaAndSafety: {
      expert: { name: "Philip Briggs", bio: "..." },
      safety: {
        summary: "Lake Manyara is very safe for tourists. Crime is virtually non-existent in the park.",
        tips: [
          "Always stay with your guide",
          "Never approach wild animals",
          "Follow park rules strictly"
        ]
      },
      malaria: {
        risk: "Moderate",
        prevention: [
          "DEET repellent",
          "Antimalarial medication recommended",
          "Mosquito nets at camps"
        ]
      },
      vaccinations: "Standard travel vaccines recommended"
    }},
  
  // === 5. Ruaha National Park ===
  ruahaNationalPark: {
    overview: {
      breadcrumbs: ["Home", "Countries & Parks", "Tanzania", "Ruaha National Park"],
      expert: { name: "Philip Briggs", byline: "By Philip Briggs", bio: "Philip is a renowned Africa expert and author of many guidebooks to African destinations, including the Bradt guide to Tanzania." },
      summary: "Tanzania’s largest national park, Ruaha is a remote wilderness with dramatic landscapes, large elephant herds, and excellent wild dog sightings. It forms part of the Rungwa-Kizigo-Muhesi ecosystem.",
      stats: {
        "Best Time To Go": "June to October",
        "High Season": "June to October",
        "Size": "20,226km² / 7,809mi²",
        "Altitude": "600–1,300m / 1,970–4,265ft"
      },
      prosCons: {
        pros: [
          "True wilderness experience",
          "Wild dog stronghold",
          "Dramatic scenery with baobabs and river gorges",
          "High lion density"
        ],
        cons: [
          "Very remote and hot",
          "Closed Apr–May",
          "Limited infrastructure"
        ]
      },
      media: { photos: true, map: true }
    },
    reviews: {
      expertRating: 4.7,
      expertReviews: 18,
      userRating: 4.7,
      userReviews: 75,
      latestExpertReview: {
        author: "Tim Bewer",
        country: "US",
        title: "Africa's Best-Kept Secret",
        rating: 5,
        fullReview: "Ruaha is Tanzania's hidden gem. Few tourists, incredible wildlife, and a true sense of wilderness..."
      },
      latestUserReview: {
        author: "Anna Müller",
        country: "DE",
        date: "Oct 18, 2025",
        rating: 5,
        review: "Saw wild dogs hunting! The remoteness made it feel like we had Africa to ourselves."
      }
    },
    wildlife: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Home to 10% of the world’s lion population and large numbers of wild dog, cheetah, and elephant.",
      abundanceLegend: ["Abundant", "Common", "Occasional", "Rare", "None"],
      speciesAbundance: {
        "Elephant": "Abundant",
        "Giraffe": "Common",
        "Hippo": "Common",
        "Buffalo": "Abundant",
        "Zebra": "Common",
        "Wildebeest": "Common",
        "White Rhino": "None",
        "Black Rhino": "None",
        "Lion": "Abundant",
        "Leopard": "Common",
        "Cheetah": "Occasional",
        "Hyena": "Common",
        "Wild Dog": "Common"
      },
      wildlifeRating: { expertRating: 4.7, expertReviews: 18, userRating: 4.7, userReviews: 75 },
      highlights: "One of Africa’s best places to see wild dogs. Lions are exceptionally numerous.",
      bestTimeForWildlife: "Dry season (Jun–Oct) when animals gather at the Great Ruaha River."
    },
    birds: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Over 570 bird species, including crested barbet, yellow-throated sandgrouse, and racket-tailed roller.",
      birdingRating: { expertRating: 4.4, expertReviews: 15, userRating: 4.4, userReviews: 60 },
      notableBirds: [
        { name: "Crested barbet", abundance: "Common" },
        { name: "Racket-tailed roller", abundance: "Common" },
        { name: "Yellow-throated sandgrouse", abundance: "Common" },
        { name: "Ashy starling", abundance: "Endemic" }
      ],
      facts: { totalSpecies: "570+", migratorySeason: "November to April" },
      bestTimeForBirding: "Year-round; endemics visible in dry season"
    },
    bestTimeToVisit: {
      expert: { name: "Philip Briggs", bio: "..." },
      monthlyRatings: {
        January: "Fair", February: "Fair", March: "Poor", April: "Poor",
        May: "Fair", June: "Excellent", July: "Excellent", August: "Excellent",
        September: "Excellent", October: "Excellent", November: "Good", December: "Fair"
      },
      keyInfo: {
        bestTime: "June to October",
        highSeason: "June to October",
        lowSeason: "April and May",
        bestWeather: "June to October",
        worstWeather: "March to May"
      },
      drySeason: {
        months: "June to October",
        highlights: [
          "Animals congregate at the Great Ruaha River",
          "Excellent predator sightings",
          "Clear views in open woodlands"
        ]
      },
      wetSeason: {
        months: "November to May",
        highlights: [
          "Lush green scenery",
          "Fewer tourists (Apr–May)",
          "Migratory birds (Nov–Apr)"
        ]
      }
    },
    weatherAndClimate: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Hot and dry in the dry season; warm and wet in the wet season. One of Tanzania's hotter parks.",
      climateChart: {
        location: "Ruaha National Park – 600-1,300m",
        temperatureData: [
          { month: "January", min: 20, max: 34 },
          { month: "February", min: 20, max: 33 },
          { month: "March", min: 20, max: 32 },
          { month: "April", min: 19, max: 30 },
          { month: "May", min: 17, max: 29 },
          { month: "June", min: 15, max: 28 },
          { month: "July", min: 14, max: 27 },
          { month: "August", min: 15, max: 28 },
          { month: "September", min: 17, max: 30 },
          { month: "October", min: 19, max: 33 },
          { month: "November", min: 20, max: 33 },
          { month: "December", min: 20, max: 33 }
        ],
        rainfallData: [
          { month: "January", rainfall: 120 },
          { month: "February", rainfall: 140 },
          { month: "March", rainfall: 180 },
          { month: "April", rainfall: 100 },
          { month: "May", rainfall: 30 },
          { month: "June", rainfall: 5 },
          { month: "July", rainfall: 2 },
          { month: "August", rainfall: 2 },
          { month: "September", rainfall: 5 },
          { month: "October", rainfall: 20 },
          { month: "November", rainfall: 50 },
          { month: "December", rainfall: 100 }
        ]
      },
      drySeason: {
        months: "June to October",
        details: [
          "Very hot days, cool nights",
          "Dust can reduce visibility",
          "Animals gather at water sources"
        ]
      },
      wetSeason: {
        months: "November to May",
        details: [
          "Afternoon showers common",
          "Roads can become impassable (Apr–May)",
          "Lush vegetation"
        ]
      }
    },
    howToGetThere: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Fly into Ruaha Airstrip from Dar es Salaam or Iringa.",
      access: {
        fromDar: "1-hour flight or 8-hour drive",
        fromIringa: "2-hour drive (120km)"
      },
      airports: [
        { code: "IRI", name: "Iringa Airport", note: "Regional hub" },
        { code: "DAR", name: "Julius Nyerere International Airport", note: "International gateway" }
      ],
      domesticAirlines: ["Coastal Aviation", "Auric Air", "Safari Air Link"]
    },
    malariaAndSafety: {
      expert: { name: "Philip Briggs", bio: "..." },
      safety: {
        summary: "Ruaha is very safe for tourists. Crime is virtually non-existent in the park.",
        tips: [
          "Always stay with your guide",
          "Never approach wild animals",
          "Follow park rules strictly"
        ]
      },
      malaria: {
        risk: "High (low altitude, wet season)",
        prevention: [
          "Antimalarial prophylaxis essential",
          "DEET repellent",
          "Mosquito nets at camps"
        ]
      },
      vaccinations: "Yellow fever certificate required if arriving from endemic country"
    }
  },

  // === 6. Nyerere National Park (Selous) ===
  nyerereNationalPark: {
    overview: {
      breadcrumbs: ["Home", "Countries & Parks", "Tanzania", "Nyerere National Park"],
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Africa’s largest game reserve, Nyerere (formerly Selous) offers boat safaris, walking safaris, and wild dog sightings in a true wilderness setting.",
      stats: {
        "Best Time To Go": "June to October",
        "High Season": "June to October",
        "Size": "50,000km² / 19,305mi²",
        "Altitude": "100–300m / 330–980ft"
      },
      prosCons: {
        pros: [
          "Boat and walking safaris",
          "Wild dog sightings",
          "Uncrowded",
          "Rufiji River ecosystem"
        ],
        cons: [
          "Remote",
          "Closed Apr–May",
          "Less Big Five density"
        ]
      },
      media: { photos: true, map: true }
    },
    reviews: {
      expertRating: 4.6,
      expertReviews: 20,
      userRating: 4.6,
      userReviews: 111,
      latestExpertReview: {
        author: "Stuart Butler",
        country: "UK",
        title: "Wilderness Paradise",
        rating: 5,
        fullReview: "Nyerere offers a true wilderness experience with activities you won't find elsewhere..."
      },
      latestUserReview: {
        author: "Lars Jensen",
        country: "DK",
        date: "Oct 15, 2025",
        rating: 4,
        review: "The boat safari on the Rufiji River was magical. Saw hippos, crocs, and birds everywhere."
      }
    },
    wildlife: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Home to 30% of Tanzania’s wild dogs, plus elephant, hippo, and crocodile. Four of the Big Five (no rhino).",
      abundanceLegend: ["Abundant", "Common", "Occasional", "Rare", "None"],
      speciesAbundance: {
        "Elephant": "Common",
        "Giraffe": "Rare",
        "Hippo": "Abundant",
        "Buffalo": "Abundant",
        "Zebra": "Rare",
        "Wildebeest": "Rare",
        "White Rhino": "None",
        "Black Rhino": "None",
        "Lion": "Common",
        "Leopard": "Occasional",
        "Cheetah": "None",
        "Hyena": "Common",
        "Wild Dog": "Common"
      },
      wildlifeRating: { expertRating: 4.6, expertReviews: 20, userRating: 4.6, userReviews: 111 },
      highlights: "Boat safaris offer unique hippo and crocodile viewing. Wild dogs are frequently seen.",
      bestTimeForWildlife: "Dry season (Jun–Oct) for best wildlife and boat safaris on the Rufiji River."
    },
    birds: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Over 440 bird species, including African skimmer, Pel's fishing owl, and kingfishers.",
      birdingRating: { expertRating: 4.4, expertReviews: 18, userRating: 4.4, userReviews: 109 },
      notableBirds: [
        { name: "African skimmer", abundance: "Common" },
        { name: "Pel's fishing owl", abundance: "Rare" },
        { name: "Giant kingfisher", abundance: "Common" },
        { name: "African fish eagle", abundance: "Common" }
      ],
      facts: { totalSpecies: "440+", migratorySeason: "November to April" },
      bestTimeForBirding: "Year-round; riverine species best in dry season"
    },
    bestTimeToVisit: {
      expert: { name: "Philip Briggs", bio: "..." },
      monthlyRatings: {
        January: "Fair", February: "Fair", March: "Poor", April: "Poor",
        May: "Fair", June: "Excellent", July: "Excellent", August: "Excellent",
        September: "Excellent", October: "Excellent", November: "Good", December: "Fair"
      },
      keyInfo: {
        bestTime: "June to October",
        highSeason: "June to October",
        lowSeason: "April and May",
        bestWeather: "June to October",
        worstWeather: "March to May"
      },
      drySeason: {
        months: "June to October",
        highlights: [
          "Boat safaris on Rufiji River",
          "Walking safaris permitted",
          "Wild dog sightings"
        ]
      },
      wetSeason: {
        months: "November to May",
        highlights: [
          "Lush green scenery",
          "Fewer tourists (Apr–May)",
          "Migratory birds (Nov–Apr)"
        ]
      }
    },
    weatherAndClimate: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Hot and humid year-round due to low elevation and proximity to the Indian Ocean.",
      climateChart: {
        location: "Nyerere National Park – 100-300m",
        temperatureData: [
          { month: "January", min: 22, max: 33 },
          { month: "February", min: 22, max: 32 },
          { month: "March", min: 22, max: 31 },
          { month: "April", min: 21, max: 30 },
          { month: "May", min: 19, max: 29 },
          { month: "June", min: 17, max: 28 },
          { month: "July", min: 16, max: 27 },
          { month: "August", min: 17, max: 28 },
          { month: "September", min: 19, max: 30 },
          { month: "October", min: 21, max: 32 },
          { month: "November", min: 22, max: 32 },
          { month: "December", min: 22, max: 32 }
        ],
        rainfallData: [
          { month: "January", rainfall: 150 },
          { month: "February", rainfall: 180 },
          { month: "March", rainfall: 250 },
          { month: "April", rainfall: 200 },
          { month: "May", rainfall: 80 },
          { month: "June", rainfall: 20 },
          { month: "July", rainfall: 10 },
          { month: "August", rainfall: 10 },
          { month: "September", rainfall: 15 },
          { month: "October", rainfall: 40 },
          { month: "November", rainfall: 80 },
          { month: "December", rainfall: 120 }
        ]
      },
      drySeason: {
        months: "June to October",
        details: [
          "Hot and dry",
          "River levels ideal for boat safaris",
          "Animals gather at water sources"
        ]
      },
      wetSeason: {
        months: "November to May",
        details: [
          "Hot and humid",
          "Heavy rains (Mar–May)",
          "Some camps closed (Apr–May)"
        ]
      }
    },
    howToGetThere: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Fly into Selous Airstrip from Dar es Salaam.",
      access: {
        fromDar: "1-hour flight or 6-hour drive"
      },
      airports: [
        { code: "DAR", name: "Julius Nyerere International Airport", note: "International gateway" }
      ],
      domesticAirlines: ["Coastal Aviation", "Auric Air", "Safari Air Link"]
    },
    malariaAndSafety: {
      expert: { name: "Philip Briggs", bio: "..." },
      safety: {
        summary: "Nyerere is very safe for tourists. Crime is virtually non-existent in the park.",
        tips: [
          "Always stay with your guide",
          "Follow walking safari rules",
          "Use insect repellent"
        ]
      },
      malaria: {
        risk: "Very high (low altitude, riverine)",
        prevention: [
          "Antimalarial prophylaxis essential",
          "DEET repellent",
          "Mosquito nets at camps"
        ]
      },
      vaccinations: "Yellow fever certificate required if arriving from endemic country"
    }
  },

  // === 7. Katavi National Park ===
  kataviNationalPark: {
    overview: {
      breadcrumbs: ["Home", "Countries & Parks", "Tanzania", "Katavi National Park"],
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "One of Tanzania’s most remote and untouched parks, Katavi offers a true wilderness experience with massive hippo pods and buffalo herds.",
      stats: {
        "Best Time To Go": "June to October",
        "High Season": "June to October",
        "Size": "4,471km² / 1,726mi²",
        "Altitude": "900–1,100m / 2,950–3,610ft"
      },
      prosCons: {
        pros: [
          "True wilderness",
          "Huge hippo concentrations",
          "Few tourists",
          "Intimate safari experience"
        ],
        cons: [
          "Very remote",
          "Difficult access",
          "Closed Apr–May"
        ]
      },
      media: { photos: true, map: true }
    },
    reviews: {
      expertRating: 4.5,
      expertReviews: 12,
      userRating: 4.5,
      userReviews: 34,
      latestExpertReview: {
        author: "Tim Bewer",
        country: "US",
        title: "Africa's Last Wilderness",
        rating: 5,
        fullReview: "Katavi is as wild as Africa gets. Few roads, few people, and incredible wildlife..."
      },
      latestUserReview: {
        author: "Sophie Dubois",
        country: "FR",
        date: "Oct 12, 2025",
        rating: 5,
        review: "Saw hundreds of hippos in one pod! The remoteness was challenging but worth it."
      }
    },
    wildlife: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Home to one of Africa’s largest hippo populations, plus lion, leopard, and large buffalo herds. Four of the Big Five (no rhino).",
      abundanceLegend: ["Abundant", "Common", "Occasional", "Rare", "None"],
      speciesAbundance: {
        "Elephant": "Common",
        "Giraffe": "Rare",
        "Hippo": "Abundant",
        "Buffalo": "Abundant",
        "Zebra": "Common",
        "Wildebeest": "Common",
        "White Rhino": "None",
        "Black Rhino": "None",
        "Lion": "Common",
        "Leopard": "Occasional",
        "Cheetah": "None",
        "Hyena": "Common",
        "Wild Dog": "Rare"
      },
      wildlifeRating: { expertRating: 4.5, expertReviews: 12, userRating: 4.5, userReviews: 34 },
      highlights: "Katavi has some of Africa’s largest hippo pods, with hundreds congregating in shrinking pools.",
      bestTimeForWildlife: "Dry season (Jun–Oct) when animals congregate at shrinking water sources."
    },
    birds: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Over 400 bird species, including fish eagle, saddle-billed stork, and African skimmer.",
      birdingRating: { expertRating: 4.3, expertReviews: 10, userRating: 4.3, userReviews: 30 },
      notableBirds: [
        { name: "Saddle-billed stork", abundance: "Common" },
        { name: "African skimmer", abundance: "Common" },
        { name: "Fish eagle", abundance: "Common" },
        { name: "Goliath heron", abundance: "Common" }
      ],
      facts: { totalSpecies: "400+", migratorySeason: "November to April" },
      bestTimeForBirding: "Year-round; waterbirds best in dry season"
    },
    bestTimeToVisit: {
      expert: { name: "Philip Briggs", bio: "..." },
      monthlyRatings: {
        January: "Fair", February: "Fair", March: "Poor", April: "Poor",
        May: "Poor", June: "Good", July: "Excellent", August: "Excellent",
        September: "Excellent", October: "Excellent", November: "Fair", December: "Fair"
      },
      keyInfo: {
        bestTime: "June to October",
        highSeason: "June to October",
        lowSeason: "April and May",
        bestWeather: "June to October",
        worstWeather: "March to May"
      },
      drySeason: {
        months: "June to October",
        highlights: [
          "Massive hippo pods in shrinking pools",
          "Buffalo herds up to 1,000 strong",
          "Excellent predator sightings"
        ]
      },
      wetSeason: {
        months: "November to May",
        highlights: [
          "Lush green scenery",
          "Park closed Apr–May",
          "Migratory birds (Nov–Apr)"
        ]
      }
    },
    weatherAndClimate: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Hot and dry in the dry season; very wet in the wet season. One of Tanzania's more extreme climates.",
      climateChart: {
        location: "Katavi National Park – 900-1,100m",
        temperatureData: [
          { month: "January", min: 19, max: 31 },
          { month: "February", min: 19, max: 30 },
          { month: "March", min: 19, max: 29 },
          { month: "April", min: 18, max: 28 },
          { month: "May", min: 16, max: 27 },
          { month: "June", min: 14, max: 26 },
          { month: "July", min: 13, max: 25 },
          { month: "August", min: 14, max: 26 },
          { month: "September", min: 16, max: 28 },
          { month: "October", min: 18, max: 30 },
          { month: "November", min: 19, max: 30 },
          { month: "December", min: 19, max: 30 }
        ],
        rainfallData: [
          { month: "January", rainfall: 150 },
          { month: "February", rainfall: 180 },
          { month: "March", rainfall: 250 },
          { month: "April", rainfall: 200 },
          { month: "May", rainfall: 80 },
          { month: "June", rainfall: 10 },
          { month: "July", rainfall: 5 },
          { month: "August", rainfall: 5 },
          { month: "September", rainfall: 10 },
          { month: "October", rainfall: 40 },
          { month: "November", rainfall: 80 },
          { month: "December", rainfall: 120 }
        ]
      },
      drySeason: {
        months: "June to October",
        details: [
          "Hot days, cool nights",
          "Dust can reduce visibility",
          "Animals gather at water sources"
        ]
      },
      wetSeason: {
        months: "November to May",
        details: [
          "Heavy rains (Mar–May)",
          "Roads become impassable",
          "Park closed Apr–May"
        ]
      }
    },
    howToGetThere: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Fly into Katavi Airstrip from Dar es Salaam or Ruaha.",
      access: {
        fromDar: "2-hour flight",
        fromRuaha: "1-hour flight"
      },
      airports: [
        { code: "KTL", name: "Katavi Airstrip", note: "Seasonal flights" }
      ],
      domesticAirlines: ["Coastal Aviation", "Auric Air"]
    },
    malariaAndSafety: {
      expert: { name: "Philip Briggs", bio: "..." },
      safety: {
        summary: "Katavi is very safe for tourists. Crime is virtually non-existent in the park.",
        tips: [
          "Always stay with your guide",
          "Follow park rules strictly",
          "Be prepared for remoteness"
        ]
      },
      malaria: {
        risk: "High (low altitude, wet season)",
        prevention: [
          "Antimalarial prophylaxis essential",
          "DEET repellent",
          "Mosquito nets at camps"
        ]
      },
      vaccinations: "Yellow fever certificate required if arriving from endemic country"
    }
  },

  // === 8. Arusha National Park ===
  arushaNationalPark: {
    overview: {
      breadcrumbs: ["Home", "Countries & Parks", "Tanzania", "Arusha National Park"],
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Arusha National Park offers scenic views of Mount Meru and Mount Kilimanjaro, with diverse habitats from montane forest to alpine desert.",
      stats: {
        "Best Time To Go": "June to October",
        "High Season": "July to March",
        "Size": "137km² / 53mi²",
        "Altitude": "1,400–4,566m / 4,593–14,980ft"
      },
      prosCons: {
        pros: [
          "Stunning mountain scenery",
          "Close to Arusha city",
          "Good for day trips",
          "Mount Meru hiking"
        ],
        cons: [
          "Limited big game",
          "Not part of the Northern Circuit loop",
          "Fewer predators"
        ]
      },
      media: { photos: true, map: true }
    },
    reviews: {
      expertRating: 4.2,
      expertReviews: 15,
      userRating: 4.2,
      userReviews: 112,
      latestExpertReview: {
        author: "Stuart Butler",
        country: "UK",
        title: "Mountain Beauty",
        rating: 4,
        fullReview: "Arusha NP is perfect for those short on time or looking for mountain scenery..."
      },
      latestUserReview: {
        author: "Emma Thompson",
        country: "UK",
        date: "Oct 20, 2025",
        rating: 4,
        review: "Beautiful views of Kilimanjaro! Saw giraffes and colobus monkeys."
      }
    },
    wildlife: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Home to giraffe, buffalo, zebra, and the rare Kilimanjaro colobus monkey. Predators are scarce.",
      abundanceLegend: ["Abundant", "Common", "Occasional", "Rare", "None"],
      speciesAbundance: {
        "Elephant": "Rare",
        "Giraffe": "Common",
        "Hippo": "Common",
        "Buffalo": "Common",
        "Zebra": "Common",
        "Wildebeest": "Rare",
        "White Rhino": "None",
        "Black Rhino": "None",
        "Lion": "Rare",
        "Leopard": "Rare",
        "Cheetah": "None",
        "Hyena": "Rare",
        "Wild Dog": "None"
      },
      wildlifeRating: { expertRating: 4.0, expertReviews: 15, userRating: 4.2, userReviews: 112 },
      highlights: "The Kilimanjaro colobus monkey is endemic to this region and easily seen in the forest.",
      bestTimeForWildlife: "Dry season (Jun–Oct) offers best wildlife viewing and clear mountain views."
    },
    birds: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Over 400 bird species, including turacos, hornbills, and eagles in the montane forest.",
      birdingRating: { expertRating: 4.2, expertReviews: 12, userRating: 4.2, userReviews: 76 },
      notableBirds: [
        { name: "Hartlaub's turaco", abundance: "Common" },
        { name: "Silvery-cheeked hornbill", abundance: "Common" },
        { name: "African crowned eagle", abundance: "Occasional" },
        { name: "Mountain buzzard", abundance: "Common" }
      ],
      facts: { totalSpecies: "400+", migratorySeason: "November to April" },
      bestTimeForBirding: "Year-round; forest species best in dry season"
    },
    bestTimeToVisit: {
      expert: { name: "Philip Briggs", bio: "..." },
      monthlyRatings: {
        January: "Good", February: "Good", March: "Fair", April: "Fair",
        May: "Good", June: "Excellent", July: "Excellent", August: "Excellent",
        September: "Excellent", October: "Excellent", November: "Good", December: "Good"
      },
      keyInfo: {
        bestTime: "June to October",
        highSeason: "July to March",
        lowSeason: "April and May",
        bestWeather: "June to October",
        worstWeather: "March to May"
      },
      drySeason: {
        months: "June to October",
        highlights: [
          "Clear views of Kilimanjaro",
          "Best wildlife viewing",
          "Ideal for hiking Mount Meru"
        ]
      },
      wetSeason: {
        months: "November to May",
        highlights: [
          "Lush green scenery",
          "Fewer tourists (Apr–May)",
          "Migratory birds (Nov–Apr)"
        ]
      }
    },
    weatherAndClimate: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Mild temperatures year-round due to high altitude. Cooler at higher elevations.",
      climateChart: {
        location: "Arusha National Park – 1,400-4,566m",
        temperatureData: [
          { month: "January", min: 10, max: 28 },
          { month: "February", min: 10, max: 28 },
          { month: "March", min: 11, max: 27 },
          { month: "April", min: 13, max: 25 },
          { month: "May", min: 11, max: 22 },
          { month: "June", min: 8, max: 21 },
          { month: "July", min: 9, max: 20 },
          { month: "August", min: 8, max: 22 },
          { month: "September", min: 8, max: 24 },
          { month: "October", min: 10, max: 26 },
          { month: "November", min: 10, max: 27 },
          { month: "December", min: 10, max: 27 }
        ],
        rainfallData: [
          { month: "January", rainfall: 50 },
          { month: "February", rainfall: 80 },
          { month: "March", rainfall: 170 },
          { month: "April", rainfall: 360 },
          { month: "May", rainfall: 210 },
          { month: "June", rainfall: 30 },
          { month: "July", rainfall: 10 },
          { month: "August", rainfall: 10 },
          { month: "September", rainfall: 20 },
          { month: "October", rainfall: 30 },
          { month: "November", rainfall: 110 },
          { month: "December", rainfall: 100 }
        ]
      },
      drySeason: {
        months: "June to October",
        details: [
          "Mild days, cool nights",
          "Clear mountain views",
          "Ideal for hiking"
        ]
      },
      wetSeason: {
        months: "November to May",
        details: [
          "Afternoon showers common",
          "Lush vegetation",
          "Mount Meru climbing possible year-round"
        ]
      }
    },
    howToGetThere: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Easily accessible from Arusha city (45-minute drive).",
      access: {
        fromArusha: "45-minute drive (30km)"
      },
      airports: [
        { code: "ARK", name: "Arusha Airport", note: "Domestic flights" },
        { code: "JRO", name: "Kilimanjaro International Airport", note: "50km from Arusha" }
      ],
      domesticAirlines: ["Coastal Aviation", "Auric Air", "Precision Air"]
    },
    malariaAndSafety: {
      expert: { name: "Philip Briggs", bio: "..." },
      safety: {
        summary: "Arusha NP is very safe for tourists. Crime is rare in the park.",
        tips: [
          "Always stay with your guide",
          "Follow park rules",
          "Be cautious in Arusha city"
        ]
      },
      malaria: {
        risk: "Low (high altitude)",
        prevention: [
          "DEET repellent",
          "Cover skin in evenings"
        ]
      },
      vaccinations: "Standard travel vaccines recommended"
    }
  },
 
  // === 9. Gombe National Park ===
  gombeNationalPark: {
    overview: {
      breadcrumbs: ["Home", "Countries & Parks", "Tanzania", "Gombe National Park"],
      expert: { name: "Philip Briggs", byline: "By Philip Briggs", bio: "Philip is a renowned Africa expert and author of many guidebooks to African destinations, including the Bradt guide to Tanzania." },
      summary: "Gombe is Tanzania’s smallest park but world-famous for Jane Goodall’s chimpanzee research. Located on the eastern shore of Lake Tanganyika, it offers an intimate primate experience in dense forest.",
      stats: {
        "Best Time To Go": "May to October",
        "High Season": "June to September",
        "Size": "52km² / 20mi²",
        "Altitude": "770–1,600m / 2,526–5,250ft"
      },
      prosCons: {
        pros: [
          "Best chimp trekking in Africa",
          "Intimate wildlife experience",
          "Lake Tanganyika access",
          "Historic research site"
        ],
        cons: [
          "Remote location",
          "Expensive access",
          "Limited other wildlife",
          "Weather-dependent"
        ]
      },
      media: { photos: true, map: true }
    },
    reviews: {
      expertRating: 4.5,
      expertReviews: 20,
      userRating: 4.5,
      userReviews: 23,
      latestExpertReview: {
        author: "Tim Bewer",
        country: "US",
        title: "Chimpanzee Paradise",
        rating: 5,
        fullReview: "Gombe offers the most intimate chimp experience in Africa. Walking through the forest with Jane Goodall's legacy all around you is unforgettable..."
      },
      latestUserReview: {
        author: "Sarah Johnson",
        country: "UK",
        date: "Oct 8, 2025",
        rating: 5,
        review: "Saw chimps within 30 minutes! They were so relaxed and natural. Worth every penny."
      }
    },
    wildlife: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Famous for habituated chimpanzee communities. Also home to red colobus monkeys, bushbabies, and forest birds.",
      abundanceLegend: ["Abundant", "Common", "Occasional", "Rare", "None"],
      speciesAbundance: {
        "Chimpanzee": "Abundant",
        "Red Colobus": "Common",
        "Bushbaby": "Occasional",
        "Leopard": "Rare",
        "Elephant": "None",
        "Lion": "None",
        "Giraffe": "None",
        "Hippo": "None",
        "Buffalo": "None",
        "Zebra": "None",
        "Wildebeest": "None",
        "Black Rhino": "None",
        "Hyena": "None"
      },
      wildlifeRating: { expertRating: 4.5, expertReviews: 20, userRating: 4.5, userReviews: 23 },
      highlights: "Home to 100+ habituated chimpanzees. Red colobus monkeys are frequently seen.",
      bestTimeForWildlife: "Dry season (May–Oct) offers easier trekking and better chimp visibility."
    },
    birds: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Over 200 bird species, including fish eagle, palm-nut vulture, and forest specialists.",
      birdingRating: { expertRating: 4.3, expertReviews: 15, userRating: 4.3, userReviews: 20 },
      notableBirds: [
        { name: "African fish eagle", abundance: "Common" },
        { name: "Palm-nut vulture", abundance: "Occasional" },
        { name: "Blue-headed sunbird", abundance: "Endemic" },
        { name: "Green tinkerbird", abundance: "Rare" }
      ],
      facts: { totalSpecies: "200+", migratorySeason: "November to April" },
      bestTimeForBirding: "Year-round; forest species best in dry season"
    },
    bestTimeToVisit: {
      expert: { name: "Philip Briggs", bio: "..." },
      monthlyRatings: {
        January: "Fair", February: "Fair", March: "Fair", April: "Poor",
        May: "Fair", June: "Good", July: "Excellent", August: "Excellent",
        September: "Excellent", October: "Excellent", November: "Good", December: "Fair"
      },
      keyInfo: {
        bestTime: "May to October",
        highSeason: "June to September",
        lowSeason: "April and May",
        bestWeather: "May to October",
        worstWeather: "March to April"
      },
      drySeason: {
        months: "May to October",
        highlights: [
          "Easier chimp trekking on dry trails",
          "Better chimp visibility in thinner foliage",
          "Fewer mosquitoes"
        ]
      },
      wetSeason: {
        months: "November to April",
        highlights: [
          "Lush green forest",
          "Fewer tourists",
          "Migratory birds (Nov–Apr)"
        ]
      }
    },
    weatherAndClimate: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Hot and humid year-round due to low elevation and proximity to Lake Tanganyika.",
      climateChart: {
        location: "Gombe National Park – 770-1,600m",
        temperatureData: [
          { month: "January", min: 20, max: 30 },
          { month: "February", min: 20, max: 30 },
          { month: "March", min: 20, max: 29 },
          { month: "April", min: 19, max: 28 },
          { month: "May", min: 18, max: 27 },
          { month: "June", min: 17, max: 26 },
          { month: "July", min: 16, max: 25 },
          { month: "August", min: 17, max: 26 },
          { month: "September", min: 18, max: 28 },
          { month: "October", min: 19, max: 29 },
          { month: "November", min: 20, max: 29 },
          { month: "December", min: 20, max: 30 }
        ],
        rainfallData: [
          { month: "January", rainfall: 100 },
          { month: "February", rainfall: 120 },
          { month: "March", rainfall: 180 },
          { month: "April", rainfall: 250 },
          { month: "May", rainfall: 100 },
          { month: "June", rainfall: 20 },
          { month: "July", rainfall: 10 },
          { month: "August", rainfall: 10 },
          { month: "September", rainfall: 20 },
          { month: "October", rainfall: 50 },
          { month: "November", rainfall: 80 },
          { month: "December", rainfall: 100 }
        ]
      },
      drySeason: {
        months: "May to October",
        details: [
          "Hot and dry",
          "Dust-free trails for trekking",
          "Lower humidity"
        ]
      },
      wetSeason: {
        months: "November to April",
        details: [
          "Hot and humid",
          "Heavy rains (Mar–Apr)",
          "Slippery trails"
        ]
      }
    },
    howToGetThere: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Accessed via boat from Kigoma on Lake Tanganyika.",
      access: {
        fromKigoma: "2–3 hour boat ride"
      },
      airports: [
        { code: "TKQ", name: "Kigoma Airport", note: "Regional flights from Dar" }
      ],
      domesticAirlines: ["Coastal Aviation", "Auric Air"]
    },
    malariaAndSafety: {
      expert: { name: "Philip Briggs", bio: "..." },
      safety: {
        summary: "Gombe is very safe for tourists. Crime is virtually non-existent in the park.",
        tips: [
          "Always stay with your guide during chimp trekking",
          "Follow ranger instructions",
          "Be cautious in Kigoma town"
        ]
      },
      malaria: {
        risk: "Very high (low altitude, lake proximity)",
        prevention: [
          "Antimalarial prophylaxis essential",
          "DEET repellent",
          "Mosquito nets at camps"
        ]
      },
      vaccinations: "Yellow fever certificate required if arriving from endemic country"
    }
  },

  // === 10. Mahale Mountains National Park ===
  mahaleMountainsNationalPark: {
    overview: {
      breadcrumbs: ["Home", "Countries & Parks", "Tanzania", "Mahale Mountains National Park"],
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Located on the shores of Lake Tanganyika, Mahale offers pristine chimp trekking in a stunning mountainous rainforest setting. It's one of Africa's most remote and exclusive destinations.",
      stats: {
        "Best Time To Go": "May to October",
        "High Season": "June to September",
        "Size": "1,613km² / 623mi²",
        "Altitude": "780–2,462m / 2,560–8,077ft"
      },
      prosCons: {
        pros: [
          "World-class chimp trekking",
          "Remote and pristine",
          "Lake access with beaches",
          "Exclusive experience"
        ],
        cons: [
          "Very expensive",
          "Logistically complex",
          "Limited to dry season",
          "No road access"
        ]
      },
      media: { photos: true, map: true }
    },
    reviews: {
      expertRating: 4.4,
      expertReviews: 15,
      userRating: 4.4,
      userReviews: 21,
      latestExpertReview: {
        author: "Stuart Butler",
        country: "UK",
        title: "Africa's Last Wilderness",
        rating: 5,
        fullReview: "Mahale is as wild as it gets. Chimp trekking on forested slopes above Lake Tanganyika is a truly magical experience..."
      },
      latestUserReview: {
        author: "David Chen",
        country: "SG",
        date: "Oct 11, 2025",
        rating: 4,
        review: "Incredible chimp encounters! The beach lodge was perfect after long treks."
      }
    },
    wildlife: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Home to 1,000+ chimpanzees and other primates like red colobus and blue monkeys.",
      abundanceLegend: ["Abundant", "Common", "Occasional", "Rare", "None"],
      speciesAbundance: {
        "Chimpanzee": "Abundant",
        "Red Colobus": "Common",
        "Blue Monkey": "Common",
        "Leopard": "Rare",
        "Elephant": "Rare",
        "Lion": "None",
        "Giraffe": "None",
        "Hippo": "Common",
        "Buffalo": "Rare",
        "Zebra": "None",
        "Wildebeest": "None",
        "Black Rhino": "None",
        "Hyena": "None"
      },
      wildlifeRating: { expertRating: 4.4, expertReviews: 15, userRating: 4.4, userReviews: 21 },
      highlights: "One of Africa's largest chimp populations. Hippos in Lake Tanganyika.",
      bestTimeForWildlife: "Dry season (May–Oct) for easier trekking and chimp visibility."
    },
    birds: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Over 300 bird species, including fish eagle, crested guineafowl, and forest specialists.",
      birdingRating: { expertRating: 4.2, expertReviews: 12, userRating: 4.2, userReviews: 18 },
      notableBirds: [
        { name: "African fish eagle", abundance: "Common" },
        { name: "Crested guineafowl", abundance: "Common" },
        { name: "Green tinkerbird", abundance: "Rare" },
        { name: "Blue-headed sunbird", abundance: "Endemic" }
      ],
      facts: { totalSpecies: "300+", migratorySeason: "November to April" },
      bestTimeForBirding: "Year-round; forest species best in dry season"
    },
    bestTimeToVisit: {
      expert: { name: "Philip Briggs", bio: "..." },
      monthlyRatings: {
        January: "Fair", February: "Fair", March: "Fair", April: "Poor",
        May: "Fair", June: "Good", July: "Excellent", August: "Excellent",
        September: "Excellent", October: "Excellent", November: "Good", December: "Fair"
      },
      keyInfo: {
        bestTime: "May to October",
        highSeason: "June to September",
        lowSeason: "April and May",
        bestWeather: "May to October",
        worstWeather: "March to April"
      },
      drySeason: {
        months: "May to October",
        highlights: [
          "Easier chimp trekking on dry trails",
          "Better visibility in thinner foliage",
          "Beach time on Lake Tanganyika"
        ]
      },
      wetSeason: {
        months: "November to April",
        highlights: [
          "Lush green forest",
          "Fewer tourists",
          "Migratory birds (Nov–Apr)"
        ]
      }
    },
    weatherAndClimate: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Hot and humid year-round due to low elevation and proximity to Lake Tanganyika.",
      climateChart: {
        location: "Mahale Mountains – 780-2,462m",
        temperatureData: [
          { month: "January", min: 20, max: 30 },
          { month: "February", min: 20, max: 30 },
          { month: "March", min: 20, max: 29 },
          { month: "April", min: 19, max: 28 },
          { month: "May", min: 18, max: 27 },
          { month: "June", min: 17, max: 26 },
          { month: "July", min: 16, max: 25 },
          { month: "August", min: 17, max: 26 },
          { month: "September", min: 18, max: 28 },
          { month: "October", min: 19, max: 29 },
          { month: "November", min: 20, max: 29 },
          { month: "December", min: 20, max: 30 }
        ],
        rainfallData: [
          { month: "January", rainfall: 100 },
          { month: "February", rainfall: 120 },
          { month: "March", rainfall: 180 },
          { month: "April", rainfall: 250 },
          { month: "May", rainfall: 100 },
          { month: "June", rainfall: 20 },
          { month: "July", rainfall: 10 },
          { month: "August", rainfall: 10 },
          { month: "September", rainfall: 20 },
          { month: "October", rainfall: 50 },
          { month: "November", rainfall: 80 },
          { month: "December", rainfall: 100 }
        ]
      },
      drySeason: {
        months: "May to October",
        details: [
          "Hot and dry",
          "Dust-free trails for trekking",
          "Lower humidity"
        ]
      },
      wetSeason: {
        months: "November to April",
        details: [
          "Hot and humid",
          "Heavy rains (Mar–Apr)",
          "Slippery trails"
        ]
      }
    },
    howToGetThere: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Fly to Kigoma, then take a boat to Mahale.",
      access: {
        fromKigoma: "3–4 hour boat ride"
      },
      airports: [
        { code: "TKQ", name: "Kigoma Airport", note: "Regional flights from Dar" }
      ],
      domesticAirlines: ["Coastal Aviation", "Auric Air"]
    },
    malariaAndSafety: {
      expert: { name: "Philip Briggs", bio: "..." },
      safety: {
        summary: "Mahale is very safe for tourists. Crime is virtually non-existent in the park.",
        tips: [
          "Always stay with your guide during chimp trekking",
          "Follow ranger instructions",
          "Be cautious in Kigoma town"
        ]
      },
      malaria: {
        risk: "Very high (low altitude, lake proximity)",
        prevention: [
          "Antimalarial prophylaxis essential",
          "DEET repellent",
          "Mosquito nets at camps"
        ]
      },
      vaccinations: "Yellow fever certificate required if arriving from endemic country"
    }
  },

  // === 11. Mikumi National Park ===
  mikumiNationalPark: {
    overview: {
      breadcrumbs: ["Home", "Countries & Parks", "Tanzania", "Mikumi National Park"],
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Often called the 'Serengeti in miniature,' Mikumi is easily accessible from Dar es Salaam and offers classic savanna wildlife viewing with good infrastructure.",
      stats: {
        "Best Time To Go": "June to October",
        "High Season": "June to October",
        "Size": "3,230km² / 1,247mi²",
        "Altitude": "300–800m / 980–2,625ft"
      },
      prosCons: {
        pros: [
          "Easy access from Dar es Salaam",
          "Good wildlife density",
          "Affordable",
          "Well-maintained roads"
        ],
        cons: [
          "Can be busy",
          "Less exclusive",
          "Not part of main circuits"
        ]
      },
      media: { photos: true, map: true }
    },
    reviews: {
      expertRating: 4.2,
      expertReviews: 10,
      userRating: 4.2,
      userReviews: 90,
      latestExpertReview: {
        author: "Tim Bewer",
        country: "US",
        title: "Serengeti Lite",
        rating: 4,
        fullReview: "Mikumi offers excellent value for money. Great for those short on time or budget..."
      },
      latestUserReview: {
        author: "Raj Patel",
        country: "IN",
        date: "Oct 14, 2025",
        rating: 4,
        review: "Saw lions, elephants, and giraffes all in one day! Great introduction to Tanzanian wildlife."
      }
    },
    wildlife: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Home to lion, leopard, elephant, giraffe, zebra, and wildebeest. Four of the Big Five (no rhino).",
      abundanceLegend: ["Abundant", "Common", "Occasional", "Rare", "None"],
      speciesAbundance: {
        "Elephant": "Abundant",
        "Giraffe": "Abundant",
        "Hippo": "Common",
        "Buffalo": "Abundant",
        "Zebra": "Abundant",
        "Wildebeest": "Abundant",
        "White Rhino": "None",
        "Black Rhino": "None",
        "Lion": "Common",
        "Leopard": "Occasional",
        "Cheetah": "Rare",
        "Hyena": "Common",
        "Wild Dog": "Rare"
      },
      wildlifeRating: { expertRating: 4.2, expertReviews: 10, userRating: 4.2, userReviews: 90 },
      highlights: "The Mkata Floodplain offers excellent game viewing year-round.",
      bestTimeForWildlife: "Dry season (Jun–Oct) for best game viewing along the Mkata Floodplain."
    },
    birds: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Over 400 bird species, including yellow-throated longclaw, bateleur eagle, and waterfowl.",
      birdingRating: { expertRating: 4.1, expertReviews: 8, userRating: 4.1, userReviews: 85 },
      notableBirds: [
        { name: "Yellow-throated longclaw", abundance: "Common" },
        { name: "Bateleur eagle", abundance: "Common" },
        { name: "Saddle-billed stork", abundance: "Common" },
        { name: "African skimmer", abundance: "Occasional" }
      ],
      facts: { totalSpecies: "400+", migratorySeason: "November to April" },
      bestTimeForBirding: "Year-round; waterbirds best in dry season"
    },
    bestTimeToVisit: {
      expert: { name: "Philip Briggs", bio: "..." },
      monthlyRatings: {
        January: "Good", February: "Good", March: "Fair", April: "Poor",
        May: "Good", June: "Excellent", July: "Excellent", August: "Excellent",
        September: "Excellent", October: "Excellent", November: "Good", December: "Good"
      },
      keyInfo: {
        bestTime: "June to October",
        highSeason: "June to October",
        lowSeason: "April and May",
        bestWeather: "June to October",
        worstWeather: "March to May"
      },
      drySeason: {
        months: "June to October",
        highlights: [
          "Animals congregate at Mkata Floodplain",
          "Excellent visibility",
          "Dust can reduce air quality"
        ]
      },
      wetSeason: {
        months: "November to May",
        highlights: [
          "Lush green scenery",
          "Fewer tourists (Apr–May)",
          "Migratory birds (Nov–Apr)"
        ]
      }
    },
    weatherAndClimate: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Hot and dry in the dry season; warm and wet in the wet season. One of Tanzania's hotter parks.",
      climateChart: {
        location: "Mikumi National Park – 300-800m",
        temperatureData: [
          { month: "January", min: 22, max: 34 },
          { month: "February", min: 22, max: 33 },
          { month: "March", min: 22, max: 32 },
          { month: "April", min: 21, max: 30 },
          { month: "May", min: 19, max: 29 },
          { month: "June", min: 17, max: 28 },
          { month: "July", min: 16, max: 27 },
          { month: "August", min: 17, max: 28 },
          { month: "September", min: 19, max: 30 },
          { month: "October", min: 21, max: 33 },
          { month: "November", min: 22, max: 33 },
          { month: "December", min: 22, max: 33 }
        ],
        rainfallData: [
          { month: "January", rainfall: 120 },
          { month: "February", rainfall: 140 },
          { month: "March", rainfall: 180 },
          { month: "April", rainfall: 250 },
          { month: "May", rainfall: 80 },
          { month: "June", rainfall: 20 },
          { month: "July", rainfall: 10 },
          { month: "August", rainfall: 10 },
          { month: "September", rainfall: 15 },
          { month: "October", rainfall: 40 },
          { month: "November", rainfall: 80 },
          { month: "December", rainfall: 120 }
        ]
      },
      drySeason: {
        months: "June to October",
        details: [
          "Very hot days, cool nights",
          "Dust can reduce visibility",
          "Animals gather at water sources"
        ]
      },
      wetSeason: {
        months: "November to May",
        details: [
          "Afternoon showers common",
          "Roads can become muddy",
          "Lush vegetation"
        ]
      }
    },
    howToGetThere: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "4-hour drive from Dar es Salaam or fly into Mikumi Airstrip.",
      access: {
        fromDar: "4-hour drive (280km)"
      },
      airports: [
        { code: "DAR", name: "Julius Nyerere International Airport", note: "International gateway" }
      ],
      domesticAirlines: ["Coastal Aviation", "Auric Air"]
    },
    malariaAndSafety: {
      expert: { name: "Philip Briggs", bio: "..." },
      safety: {
        summary: "Mikumi is very safe for tourists. Crime is virtually non-existent in the park.",
        tips: [
          "Always stay with your guide",
          "Never approach wild animals",
          "Follow park rules strictly"
        ]
      },
      malaria: {
        risk: "High (low altitude, wet season)",
        prevention: [
          "Antimalarial prophylaxis essential",
          "DEET repellent",
          "Mosquito nets at camps"
        ]
      },
      vaccinations: "Yellow fever certificate required if arriving from endemic country"
    }
  },

  // === 12. Mkomazi National Park ===
  mkomaziNationalPark: {
    overview: {
      breadcrumbs: ["Home", "Countries & Parks", "Tanzania", "Mkomazi National Park"],
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Bordering Kenya’s Tsavo West, Mkomazi is a conservation success story with a rhino sanctuary and diverse landscapes from acacia savanna to rugged mountains.",
      stats: {
        "Best Time To Go": "June to October",
        "High Season": "June to October",
        "Size": "3,234km² / 1,249mi²",
        "Altitude": "300–1,000m / 980–3,280ft"
      },
      prosCons: {
        pros: [
          "Black rhino sanctuary",
          "Conservation focus",
          "Scenic views",
          "Less crowded"
        ],
        cons: [
          "Wildlife can be hard to spot",
          "Remote",
          "Limited infrastructure"
        ]
      },
      media: { photos: true, map: true }
    },
    reviews: {
      expertRating: 3.9,
      expertReviews: 8,
      userRating: 3.9,
      userReviews: 12,
      latestExpertReview: {
        author: "Stuart Butler",
        country: "UK",
        title: "Conservation Success",
        rating: 4,
        fullReview: "Mkomazi is a testament to successful conservation. The rhino sanctuary is impressive..."
      },
      latestUserReview: {
        author: "Michael Weber",
        country: "DE",
        date: "Oct 16, 2025",
        rating: 4,
        review: "Saw rhinos in the sanctuary! The landscape is dramatic and there were few other tourists."
      }
    },
    wildlife: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Home to black rhino (in sanctuary), elephant, giraffe, and oryx. Big Five present but hard to see.",
      abundanceLegend: ["Abundant", "Common", "Occasional", "Rare", "None"],
      speciesAbundance: {
        "Elephant": "Common",
        "Giraffe": "Common",
        "Hippo": "Rare",
        "Buffalo": "Common",
        "Zebra": "Common",
        "Wildebeest": "Common",
        "White Rhino": "None",
        "Black Rhino": "Rare",
        "Lion": "Occasional",
        "Leopard": "Rare",
        "Cheetah": "Rare",
        "Hyena": "Common",
        "Wild Dog": "Rare"
      },
      wildlifeRating: { expertRating: 3.9, expertReviews: 8, userRating: 3.9, userReviews: 12 },
      highlights: "The Tony Fitzjohn/George Adamson African Wildlife Preservation Trust runs a successful rhino sanctuary.",
      bestTimeForWildlife: "Dry season (Jun–Oct) for better wildlife visibility."
    },
    birds: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Over 450 bird species, including vulturine guineafowl, martial eagle, and hornbills.",
      birdingRating: { expertRating: 4.0, expertReviews: 6, userRating: 4.0, userReviews: 10 },
      notableBirds: [
        { name: "Vulturine guineafowl", abundance: "Common" },
        { name: "Martial eagle", abundance: "Rare" },
        { name: "Silvery-cheeked hornbill", abundance: "Common" },
        { name: "Yellow-billed oxpecker", abundance: "Common" }
      ],
      facts: { totalSpecies: "450+", migratorySeason: "November to April" },
      bestTimeForBirding: "Year-round; raptors best in dry season"
    },
    bestTimeToVisit: {
      expert: { name: "Philip Briggs", bio: "..." },
      monthlyRatings: {
        January: "Fair", February: "Fair", March: "Fair", April: "Poor",
        May: "Fair", June: "Good", July: "Excellent", August: "Excellent",
        September: "Excellent", October: "Excellent", November: "Good", December: "Fair"
      },
      keyInfo: {
        bestTime: "June to October",
        highSeason: "June to October",
        lowSeason: "April and May",
        bestWeather: "June to October",
        worstWeather: "March to May"
      },
      drySeason: {
        months: "June to October",
        highlights: [
          "Animals gather at water sources",
          "Better visibility in sparse vegetation",
          "Rhino sanctuary visits"
        ]
      },
      wetSeason: {
        months: "November to May",
        highlights: [
          "Lush green scenery",
          "Fewer tourists (Apr–May)",
          "Migratory birds (Nov–Apr)"
        ]
      }
    },
    weatherAndClimate: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Hot and dry in the dry season; warm and wet in the wet season. Semi-arid climate.",
      climateChart: {
        location: "Mkomazi National Park – 300-1,000m",
        temperatureData: [
          { month: "January", min: 22, max: 34 },
          { month: "February", min: 22, max: 33 },
          { month: "March", min: 22, max: 32 },
          { month: "April", min: 21, max: 30 },
          { month: "May", min: 19, max: 29 },
          { month: "June", min: 17, max: 28 },
          { month: "July", min: 16, max: 27 },
          { month: "August", min: 17, max: 28 },
          { month: "September", min: 19, max: 30 },
          { month: "October", min: 21, max: 33 },
          { month: "November", min: 22, max: 33 },
          { month: "December", min: 22, max: 33 }
        ],
        rainfallData: [
          { month: "January", rainfall: 100 },
          { month: "February", rainfall: 120 },
          { month: "March", rainfall: 150 },
          { month: "April", rainfall: 200 },
          { month: "May", rainfall: 60 },
          { month: "June", rainfall: 15 },
          { month: "July", rainfall: 5 },
          { month: "August", rainfall: 5 },
          { month: "September", rainfall: 10 },
          { month: "October", rainfall: 30 },
          { month: "November", rainfall: 60 },
          { month: "December", rainfall: 100 }
        ]
      },
      drySeason: {
        months: "June to October",
        details: [
          "Very hot days, cool nights",
          "Dust can reduce visibility",
          "Sparse vegetation"
        ]
      },
      wetSeason: {
        months: "November to May",
        details: [
          "Afternoon showers common",
          "Roads can become muddy",
          "Lush vegetation"
        ]
      }
    },
    howToGetThere: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Fly to Kilimanjaro or drive from Arusha (5–6 hours).",
      access: {
        fromArusha: "5–6 hour drive (300km)",
        fromMoshi: "3-hour drive (180km)"
      },
      airports: [
        { code: "JRO", name: "Kilimanjaro International Airport", note: "50km from Arusha" }
      ],
      domesticAirlines: ["Coastal Aviation", "Auric Air"]
    },
    malariaAndSafety: {
      expert: { name: "Philip Briggs", bio: "..." },
      safety: {
        summary: "Mkomazi is very safe for tourists. Crime is virtually non-existent in the park.",
        tips: [
          "Always stay with your guide",
          "Never approach wild animals",
          "Follow park rules strictly"
        ]
      },
      malaria: {
        risk: "Moderate (low altitude, wet season)",
        prevention: [
          "Antimalarial medication recommended",
          "DEET repellent",
          "Mosquito nets at camps"
        ]
      },
      vaccinations: "Yellow fever certificate required if arriving from endemic country"
    }
  },

   // === 13. Grumeti Game Reserve ===
  grumetiGameReserve: {
    overview: {
      breadcrumbs: ["Home", "Countries & Parks", "Tanzania", "Grumeti Game Reserve"],
      expert: { name: "Philip Briggs", byline: "By Philip Briggs", bio: "Philip is a renowned Africa expert and author of many guidebooks to African destinations, including the Bradt guide to Tanzania." },
      summary: "Part of the Greater Serengeti ecosystem, Grumeti is a private reserve offering exclusive game viewing during the wildebeest migration. Located in the western corridor, it's known for dramatic river crossings.",
      stats: {
        "Best Time To Go": "May to July",
        "High Season": "May to July",
        "Size": "1,476km² / 570mi²",
        "Altitude": "1,200–1,500m / 3,940–4,920ft"
      },
      prosCons: {
        pros: [
          "Exclusive access",
          "Migration river crossings",
          "Luxury lodges",
          "Fewer tourists"
        ],
        cons: [
          "Very expensive",
          "Private reserve (extra fees)",
          "Limited to migration season"
        ]
      },
      media: { photos: true, map: true }
    },
    reviews: {
      expertRating: 4.7,
      expertReviews: 10,
      userRating: 4.8,
      userReviews: 0,
      latestExpertReview: {
        author: "Tim Bewer",
        country: "US",
        title: "Exclusive Migration Experience",
        rating: 5,
        fullReview: "Grumeti offers an exclusive Serengeti experience with dramatic river crossings during the Great Migration..."
      },
      latestUserReview: {
        author: "James Wilson",
        country: "UK",
        date: "Oct 19, 2025",
        rating: 5,
        review: "Saw wildebeest crossing the Grumeti River! The luxury lodge was worth every penny."
      }
    },
    wildlife: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Part of the Serengeti migration route. Big Five present (rhino very rare). Excellent predator sightings.",
      abundanceLegend: ["Abundant", "Common", "Occasional", "Rare", "None"],
      speciesAbundance: {
        "Elephant": "Common",
        "Giraffe": "Common",
        "Hippo": "Abundant",
        "Buffalo": "Abundant",
        "Zebra": "Abundant",
        "Wildebeest": "Abundant",
        "White Rhino": "None",
        "Black Rhino": "Rare",
        "Lion": "Common",
        "Leopard": "Occasional",
        "Cheetah": "Occasional",
        "Hyena": "Common",
        "Wild Dog": "Rare"
      },
      wildlifeRating: { expertRating: 4.7, expertReviews: 10, userRating: 4.8, userReviews: 0 },
      highlights: "Dramatic Grumeti River crossings during May–July migration...",
      bestTimeForWildlife: "May–July for migration river crossings"
    },
    birds: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Over 450 bird species, including fish eagle, saddle-billed stork, and migratory waterfowl.",
      birdingRating: { expertRating: 4.3, expertReviews: 8, userRating: 4.3, userReviews: 0 },
      notableBirds: [
        { name: "African fish eagle", abundance: "Common" },
        { name: "Saddle-billed stork", abundance: "Common" },
        { name: "Goliath heron", abundance: "Common" },
        { name: "African skimmer", abundance: "Occasional" }
      ],
      facts: { totalSpecies: "450+", migratorySeason: "November to April" },
      bestTimeForBirding: "Year-round; waterbirds best in dry season"
    },
    bestTimeToVisit: {
      expert: { name: "Philip Briggs", bio: "..." },
      monthlyRatings: {
        January: "Fair", February: "Fair", March: "Fair", April: "Poor",
        May: "Excellent", June: "Excellent", July: "Excellent", August: "Good",
        September: "Fair", October: "Fair", November: "Fair", December: "Fair"
      },
      keyInfo: {
        bestTime: "May to July",
        highSeason: "May to July",
        lowSeason: "August to April",
        bestWeather: "May to July",
        worstWeather: "March to April"
      },
      drySeason: {
        months: "May to July",
        highlights: [
          "Dramatic wildebeest river crossings",
          "Exclusive game viewing",
          "Luxury lodge experience"
        ]
      },
      wetSeason: {
        months: "August to April",
        highlights: [
          "Fewer tourists",
          "Lush green scenery",
          "Migratory birds (Nov–Apr)"
        ]
      }
    },
    weatherAndClimate: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Classic Serengeti climate with distinct wet and dry seasons.",
      climateChart: {
        location: "Grumeti Game Reserve – 1,200-1,500m",
        temperatureData: [
          { month: "January", min: 16, max: 29 },
          { month: "February", min: 16, max: 29 },
          { month: "March", min: 16, max: 28 },
          { month: "April", min: 15, max: 26 },
          { month: "May", min: 14, max: 25 },
          { month: "June", min: 13, max: 24 },
          { month: "July", min: 12, max: 23 },
          { month: "August", min: 12, max: 24 },
          { month: "September", min: 13, max: 26 },
          { month: "October", min: 15, max: 28 },
          { month: "November", min: 16, max: 28 },
          { month: "December", min: 16, max: 28 }
        ],
        rainfallData: [
          { month: "January", rainfall: 80 },
          { month: "February", rainfall: 100 },
          { month: "March", rainfall: 150 },
          { month: "April", rainfall: 250 },
          { month: "May", rainfall: 120 },
          { month: "June", rainfall: 20 },
          { month: "July", rainfall: 10 },
          { month: "August", rainfall: 10 },
          { month: "September", rainfall: 15 },
          { month: "October", rainfall: 30 },
          { month: "November", rainfall: 70 },
          { month: "December", rainfall: 90 }
        ]
      },
      drySeason: {
        months: "May to July",
        details: [
          "Sunny days, cool nights",
          "Dust can reduce visibility",
          "Animals congregate at water sources"
        ]
      },
      wetSeason: {
        months: "August to April",
        details: [
          "Short rains (Nov–Dec), long rains (Mar–May)",
          "Roads can become muddy",
          "Lush vegetation"
        ]
      }
    },
    howToGetThere: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Accessed via scheduled or chartered flights from Arusha or Seronera.",
      access: {
        fromArusha: "1.5-hour flight",
        fromSerengeti: "30-minute flight"
      },
      airports: [
        { code: "GRU", name: "Grumeti Airstrip", note: "Private reserve airstrip" }
      ],
      domesticAirlines: ["Coastal Aviation", "Auric Air", "Safari Air Link"]
    },
    malariaAndSafety: {
      expert: { name: "Philip Briggs", bio: "..." },
      safety: {
        summary: "Grumeti is very safe for tourists. Crime is virtually non-existent in the reserve.",
        tips: [
          "Always stay with your guide",
          "Follow reserve rules strictly",
          "Private reserve access controlled"
        ]
      },
      malaria: {
        risk: "High (low altitude, wet season)",
        prevention: [
          "Antimalarial prophylaxis essential",
          "DEET repellent",
          "Mosquito nets at lodges"
        ]
      },
      vaccinations: "Yellow fever certificate required if arriving from endemic country"
    }
  },

  // === 14. Rubondo Island National Park ===
  rubondoIslandNationalPark: {
    overview: {
      breadcrumbs: ["Home", "Countries & Parks", "Tanzania", "Rubondo Island National Park"],
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Located in Lake Victoria, Rubondo is a unique island park with chimpanzees, sitatunga antelope, and rich birdlife. It offers a rare combination of lake and forest ecosystems.",
      stats: {
        "Best Time To Go": "June to September",
        "High Season": "June to September",
        "Size": "240km² / 93mi²",
        "Altitude": "1,100–1,300m / 3,610–4,265ft"
      },
      prosCons: {
        pros: [
          "Unique island setting",
          "Chimp reintroduction project",
          "Boat safaris",
          "Few tourists"
        ],
        cons: [
          "Remote",
          "Limited wildlife density",
          "Weather-dependent"
        ]
      },
      media: { photos: true, map: true }
    },
    reviews: {
      expertRating: 4.3,
      expertReviews: 5,
      userRating: 4.3,
      userReviews: 4,
      latestExpertReview: {
        author: "Stuart Butler",
        country: "UK",
        title: "Island Wilderness",
        rating: 4,
        fullReview: "Rubondo offers a unique island safari experience with chimps and lake activities..."
      },
      latestUserReview: {
        author: "Emma Thompson",
        country: "UK",
        date: "Oct 17, 2025",
        rating: 4,
        review: "Saw chimps and sitatunga! The boat safari on Lake Victoria was magical."
      }
    },
    wildlife: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Home to reintroduced chimpanzees, sitatunga, elephant, and over 200 bird species.",
      abundanceLegend: ["Abundant", "Common", "Occasional", "Rare", "None"],
      speciesAbundance: {
        "Chimpanzee": "Occasional",
        "Sitatunga": "Rare",
        "Elephant": "Rare",
        "Giraffe": "None",
        "Hippo": "Common",
        "Buffalo": "Rare",
        "Zebra": "None",
        "Wildebeest": "None",
        "Black Rhino": "None",
        "Lion": "None",
        "Leopard": "Rare",
        "Hyena": "Rare",
        "Wild Dog": "None"
      },
      wildlifeRating: { expertRating: 4.3, expertReviews: 5, userRating: 4.3, userReviews: 4 },
      highlights: "One of Africa's few island national parks with chimp reintroduction...",
      bestTimeForWildlife: "Dry season (Jun–Sep) for better chimp trekking"
    },
    birds: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Over 200 bird species, including fish eagle, African skimmer, and waterfowl.",
      birdingRating: { expertRating: 4.2, expertReviews: 4, userRating: 4.2, userReviews: 3 },
      notableBirds: [
        { name: "African fish eagle", abundance: "Common" },
        { name: "African skimmer", abundance: "Common" },
        { name: "Goliath heron", abundance: "Common" },
        { name: "Pied kingfisher", abundance: "Common" }
      ],
      facts: { totalSpecies: "200+", migratorySeason: "November to April" },
      bestTimeForBirding: "Year-round; waterbirds best in dry season"
    },
    bestTimeToVisit: {
      expert: { name: "Philip Briggs", bio: "..." },
      monthlyRatings: {
        January: "Fair", February: "Fair", March: "Poor", April: "Poor",
        May: "Fair", June: "Good", July: "Excellent", August: "Excellent",
        September: "Good", October: "Fair", November: "Fair", December: "Fair"
      },
      keyInfo: {
        bestTime: "June to September",
        highSeason: "June to September",
        lowSeason: "April and May",
        bestWeather: "June to September",
        worstWeather: "March to May"
      },
      drySeason: {
        months: "June to September",
        highlights: [
          "Better chimp trekking conditions",
          "Boat safaris on Lake Victoria",
          "Fewer mosquitoes"
        ]
      },
      wetSeason: {
        months: "October to May",
        highlights: [
          "Lush green island",
          "Migratory birds (Nov–Apr)",
          "Fewer tourists"
        ]
      }
    },
    weatherAndClimate: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Hot and humid year-round due to Lake Victoria proximity.",
      climateChart: {
        location: "Rubondo Island – 1,100-1,300m",
        temperatureData: [
          { month: "January", min: 18, max: 28 },
          { month: "February", min: 18, max: 28 },
          { month: "March", min: 18, max: 27 },
          { month: "April", min: 17, max: 26 },
          { month: "May", min: 16, max: 25 },
          { month: "June", min: 15, max: 24 },
          { month: "July", min: 14, max: 23 },
          { month: "August", min: 15, max: 24 },
          { month: "September", min: 16, max: 26 },
          { month: "October", min: 17, max: 27 },
          { month: "November", min: 18, max: 27 },
          { month: "December", min: 18, max: 27 }
        ],
        rainfallData: [
          { month: "January", rainfall: 100 },
          { month: "February", rainfall: 120 },
          { month: "March", rainfall: 180 },
          { month: "April", rainfall: 250 },
          { month: "May", rainfall: 100 },
          { month: "June", rainfall: 30 },
          { month: "July", rainfall: 20 },
          { month: "August", rainfall: 20 },
          { month: "September", rainfall: 40 },
          { month: "October", rainfall: 80 },
          { month: "November", rainfall: 120 },
          { month: "December", rainfall: 150 }
        ]
      },
      drySeason: {
        months: "June to September",
        details: [
          "Lower humidity",
          "Better boat conditions",
          "Easier forest trekking"
        ]
      },
      wetSeason: {
        months: "October to May",
        details: [
          "High humidity",
          "Heavy rains (Mar–May)",
          "Boat safaris weather-dependent"
        ]
      }
    },
    howToGetThere: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Fly to Mwanza, then take a boat to Rubondo.",
      access: {
        fromMwanza: "1-hour boat ride"
      },
      airports: [
        { code: "MWZ", name: "Mwanza Airport", note: "Regional flights from Dar" }
      ],
      domesticAirlines: ["Coastal Aviation", "Auric Air"]
    },
    malariaAndSafety: {
      expert: { name: "Philip Briggs", bio: "..." },
      safety: {
        summary: "Rubondo is very safe for tourists. Crime is virtually non-existent on the island.",
        tips: [
          "Always stay with your guide during chimp trekking",
          "Follow boat safety rules",
          "Be cautious in Mwanza city"
        ]
      },
      malaria: {
        risk: "Very high (lake proximity)",
        prevention: [
          "Antimalarial prophylaxis essential",
          "DEET repellent",
          "Mosquito nets at lodge"
        ]
      },
      vaccinations: "Yellow fever certificate required if arriving from endemic country"
    }
  },

  // === 15. Saadani National Park ===
  saadaniNationalPark: {
    overview: {
      breadcrumbs: ["Home", "Countries & Parks", "Tanzania", "Saadani National Park"],
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Tanzania’s only coastal national park, Saadani combines beach and bush with game drives and boat safaris on the Wami River. It's perfect for combining safari and beach holidays.",
      stats: {
        "Best Time To Go": "June to October",
        "High Season": "June to October",
        "Size": "1,100km² / 425mi²",
        "Altitude": "0–200m / 0–656ft"
      },
      prosCons: {
        pros: [
          "Beach and bush combo",
          "Boat safaris on Wami River",
          "Easy access from Zanzibar",
          "Unique coastal ecosystem"
        ],
        cons: [
          "Limited wildlife density",
          "Not for serious safari-goers",
          "Can be hot and humid"
        ]
      },
      media: { photos: true, map: true }
    },
    reviews: {
      expertRating: 3.4,
      expertReviews: 8,
      userRating: 3.4,
      userReviews: 18,
      latestExpertReview: {
        author: "Tim Bewer",
        country: "US",
        title: "Beach & Bush Combo",
        rating: 4,
        fullReview: "Saadani is perfect for those wanting to combine safari and beach time..."
      },
      latestUserReview: {
        author: "Maria Schmidt",
        country: "DE",
        date: "Oct 21, 2025",
        rating: 3,
        review: "Nice beach but limited wildlife. Good for relaxation after a Serengeti safari."
      }
    },
    wildlife: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Home to giraffe, buffalo, lion, and hippo. Wildlife is thinly populated compared to other parks.",
      abundanceLegend: ["Abundant", "Common", "Occasional", "Rare", "None"],
      speciesAbundance: {
        "Elephant": "Rare",
        "Giraffe": "Common",
        "Hippo": "Common",
        "Buffalo": "Common",
        "Zebra": "Rare",
        "Wildebeest": "Rare",
        "White Rhino": "None",
        "Black Rhino": "None",
        "Lion": "Occasional",
        "Leopard": "Rare",
        "Cheetah": "None",
        "Hyena": "Occasional",
        "Wild Dog": "None"
      },
      wildlifeRating: { expertRating: 3.4, expertReviews: 8, userRating: 3.4, userReviews: 18 },
      highlights: "Tanzania's only coastal national park with beach access...",
      bestTimeForWildlife: "Dry season (Jun–Oct) for best game viewing"
    },
    birds: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Over 400 bird species, including fish eagle, palm-nut vulture, and coastal waterfowl.",
      birdingRating: { expertRating: 3.8, expertReviews: 6, userRating: 3.8, userReviews: 15 },
      notableBirds: [
        { name: "African fish eagle", abundance: "Common" },
        { name: "Palm-nut vulture", abundance: "Common" },
        { name: "Goliath heron", abundance: "Common" },
        { name: "Mangrove kingfisher", abundance: "Rare" }
      ],
      facts: { totalSpecies: "400+", migratorySeason: "November to April" },
      bestTimeForBirding: "Year-round; coastal species best in dry season"
    },
    bestTimeToVisit: {
      expert: { name: "Philip Briggs", bio: "..." },
      monthlyRatings: {
        January: "Fair", February: "Fair", March: "Fair", April: "Poor",
        May: "Fair", June: "Good", July: "Excellent", August: "Excellent",
        September: "Excellent", October: "Good", November: "Fair", December: "Fair"
      },
      keyInfo: {
        bestTime: "June to October",
        highSeason: "June to October",
        lowSeason: "April and May",
        bestWeather: "June to October",
        worstWeather: "March to May"
      },
      drySeason: {
        months: "June to October",
        highlights: [
          "Best game viewing",
          "Beach weather ideal",
          "Boat safaris on Wami River"
        ]
      },
      wetSeason: {
        months: "November to May",
        highlights: [
          "Lush green scenery",
          "Fewer tourists (Apr–May)",
          "Migratory birds (Nov–Apr)"
        ]
      }
    },
    weatherAndClimate: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Hot and humid year-round due to coastal location.",
      climateChart: {
        location: "Saadani National Park – 0-200m",
        temperatureData: [
          { month: "January", min: 24, max: 32 },
          { month: "February", min: 24, max: 32 },
          { month: "March", min: 24, max: 31 },
          { month: "April", min: 23, max: 30 },
          { month: "May", min: 22, max: 29 },
          { month: "June", min: 21, max: 28 },
          { month: "July", min: 20, max: 27 },
          { month: "August", min: 20, max: 28 },
          { month: "September", min: 21, max: 29 },
          { month: "October", min: 23, max: 31 },
          { month: "November", min: 24, max: 31 },
          { month: "December", min: 24, max: 31 }
        ],
        rainfallData: [
          { month: "January", rainfall: 100 },
          { month: "February", rainfall: 120 },
          { month: "March", rainfall: 180 },
          { month: "April", rainfall: 250 },
          { month: "May", rainfall: 100 },
          { month: "June", rainfall: 30 },
          { month: "July", rainfall: 20 },
          { month: "August", rainfall: 20 },
          { month: "September", rainfall: 40 },
          { month: "October", rainfall: 80 },
          { month: "November", rainfall: 120 },
          { month: "December", rainfall: 150 }
        ]
      },
      drySeason: {
        months: "June to October",
        details: [
          "Lower humidity",
          "Ideal beach weather",
          "Animals gather at Wami River"
        ]
      },
      wetSeason: {
        months: "November to May",
        details: [
          "High humidity",
          "Heavy rains (Mar–May)",
          "Lush coastal vegetation"
        ]
      }
    },
    howToGetThere: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Drive from Dar es Salaam (3 hours) or boat from Zanzibar.",
      access: {
        fromDar: "3-hour drive (200km)",
        fromZanzibar: "1-hour boat ride"
      },
      airports: [
        { code: "DAR", name: "Julius Nyerere International Airport", note: "International gateway" },
        { code: "ZNZ", name: "Zanzibar Airport", note: "For boat transfers" }
      ],
      domesticAirlines: ["Coastal Aviation", "Auric Air"]
    },
    malariaAndSafety: {
      expert: { name: "Philip Briggs", bio: "..." },
      safety: {
        summary: "Saadani is very safe for tourists. Crime is rare in the park.",
        tips: [
          "Always stay with your guide",
          "Follow boat safety rules",
          "Be cautious in Dar es Salaam"
        ]
      },
      malaria: {
        risk: "Very high (coastal, low altitude)",
        prevention: [
          "Antimalarial prophylaxis essential",
          "DEET repellent",
          "Mosquito nets at lodges"
        ]
      },
      vaccinations: "Yellow fever certificate required if arriving from endemic country"
    }
  }
}


export { mockParksData };