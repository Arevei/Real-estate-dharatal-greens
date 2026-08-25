export type Project = {
  slug: string;
  title: string;
  projectName: string;
  estate: string;
  category: string;
  group: string;
  mapOrigin?: string;
  location: string;
  plotArea: string;
  description: string;
  amenities: string[];
  landmarks: string[];
  images: { src: string; alt: string; isMasterPlan?: boolean }[];
};

export const projectOrigin =
  "Ganeshpur, Uttar Pradesh 247662";

const commonLocation =
  "Ganeshpur near by Rajaji National Park(Behat), Saharanpur (Uttar Pradesh)";

const commonLandmarks = [
  "Rajaji National Park",
  "Doon Group Of Colleges",
  "Dehradun",
  "Haridwar",
  "Roorkee",
  "Rishikesh",
  "Mussoorie",
  "Delhi",
];

const fullAmenities = [
  "Entrance Gate",
  "Electrification",
  "Park",
  "Street Light",
  "Road Side Plantation",
  "Cemented Road",
  "24*7 SECURITY",
  "Open Gym",
  "Meditation Area",
];

const coreAmenities = [
  "Entrance Gate",
  "Electrification",
  "Street Light",
  "Road Side Plantation",
  "Cemented Road",
  "24*7 SECURITY",
];

const image = (folder: string, file: string, alt: string, isMasterPlan = false) => ({
  src: `/images/Shivalik_Projects_Images/${folder.replace(/^backwoods(\d+)$/, "Backwoods $1")}/${file}`,
  alt,
  isMasterPlan,
});

export const projects: Project[] = [
  {
    slug: "shakumbhari-estate",
    title: "Shakumbhari Estate",
    projectName: "Shakumbhari",
    estate: "Shakumbhari Estate",
    category: "Residential Land and Farm House",
    group: "Farm House",
    mapOrigin:
      "The Shakumbhari Estate by Dharatal Greens, Jhajra & Dadal, Hinduwala, Samaspur, Ahmadpur, Mohammadpur, Tehsil - Behat, Post, Mirzapur Pole, Uttar Pradesh 247121",
    location: "Haiderpur Hinduwala, Pargana Faizabad, Behat Tehsil Behat District Saharanpur UP-247121",
    plotArea: "100-300 Sq Yd, 800 Sq Yd Or Above",
    description:
      "Shakumbhari Estate by Dharatal Greens is a premium residential project located in Behat, Saharanpur. This project offers a unique blend of modern living and natural beauty, with plots available in sizes ranging from 100 to 300 square yards, as well as larger farmhouses of 800 square yards and above. The estate is designed to provide a serene environment while ensuring all essential amenities are within reach.",
    amenities: [...fullAmenities, "Mountain view with tumbling ranges"],
    landmarks: [
      "Mata Shakumbhari Devi Mandir",
      "Glocal University",
      "Paonta Shahib",
      "Doon Group Of Colleges",
      "Dehradun",
      "Delhi",
      "Haridwar",
      "Rishikesh",
      "Mussoorie",
      "Saharanpur Railway Station",
    ],
    images: [
      {
        src: "https://ik.imagekit.io/3uiubuexm/Project%20Photo/shakumbhari/vlcsnap-2025-10-22-16h39m03s016.png",
        alt: "Shakumbhari Estate project view",
      },
      {
        src: "https://ik.imagekit.io/3uiubuexm/Project%20Photo/shakumbhari/vlcsnap-2025-10-22-16h40m41s648.png",
        alt: "Shakumbhari Estate landscape view",
      },
      {
        src: "https://ik.imagekit.io/3uiubuexm/Project%20Photo/shakumbhari/vlcsnap-2025-10-22-16h39m40s924.png",
        alt: "Shakumbhari Estate plotted development",
      },
      {
        src: "https://dharatalgreens.com/images/shakumbhari/shakumbhari_estate_masterplan.webp",
        alt: "Shakumbhari Estate master plan",
        isMasterPlan: true,
      },
    ],
  },
  {
    slug: "backwoods-1",
    title: "Backwoods 1",
    projectName: "Shivalik",
    estate: "Shivalik Estate",
    category: "Residential Plot",
    group: "Residential Plot",
    location: commonLocation,
    plotArea: "50 - 200 Sq Yd",
    description:
      "Backwoods 1 by Dharatal Greens is a premium plotted development nestled at the edge of Rajaji National Park in Ganeshpur, Saharanpur, Uttar Pradesh. Designed to harmonize modern convenience with the tranquility of the Shivalik hills, this residential project offers thoughtfully sized plots ranging from 50 to 200 square yards. Each plot is planned to provide ample space for luxurious living while ensuring a serene environment surrounded by nature. The project features wide, well-maintained roads of 25 to 30 feet, enhancing accessibility and connectivity within the community.",
    amenities: fullAmenities,
    landmarks: commonLandmarks,
    images: [
      image("backwoods1", "img1.jpg", "Backwoods 1 project view"),
      image("backwoods1", "img2.jpg", "Backwoods 1 internal road"),
      image("backwoods1", "img3.jpg", "Backwoods 1 green surroundings"),
      image("backwoods1", "img4.jpg", "Backwoods 1 site landscape"),
      image("backwoods1", "backwoods_1_masterplan.webp", "Backwoods 1 master plan", true),
    ],
  },
  {
    slug: "backwoods-2",
    title: "Backwoods 2",
    projectName: "Shivalik",
    estate: "Shivalik Estate",
    category: "Bungalow",
    group: "Bungalow",
    location: commonLocation,
    plotArea: "200 - 600 Sq Yd",
    description:
      "Escape the chaos and invest in space that breathes. Backwoods 2 is an elite plotted community by Dharatal Greens featuring large plots from 200 to 600 square yards close to Rajaji National Park. It is designed for eco-conscious buyers and investors looking for future-ready land in a serene and fast-appreciating location.",
    amenities: fullAmenities,
    landmarks: commonLandmarks,
    images: [
      image("backwoods2", "img1.jpg", "Backwoods 2 project view"),
      image("backwoods2", "backwoods_2_masterplan.webp", "Backwoods 2 master plan", true),
    ],
  },
  {
    slug: "backwoods-3",
    title: "Backwoods 3",
    projectName: "Shivalik",
    estate: "Shivalik Estate",
    category: "Farm House",
    group: "Farm House",
    location: commonLocation,
    plotArea: "600 - 1000 Sq Yd",
    description:
      "Strategically located with easy access yet away from city noise, Backwoods 3 is made for solitude, sustainability, and a soulful connection with nature. Whether you are building a cabin, a weekend retreat, or investing in rare forest-adjacent land, this is your canvas of calm.",
    amenities: coreAmenities,
    landmarks: commonLandmarks,
    images: [
      image("backwoods3", "img1.jpg", "Backwoods 3 project view"),
      image("backwoods3", "img2.jpg", "Backwoods 3 green site"),
      image("backwoods3", "img3.jpg", "Backwoods 3 plotted area"),
      image("backwoods3", "backwoods_3_masterplan.webp", "Backwoods 3 master plan", true),
    ],
  },
  {
    slug: "backwoods-4",
    title: "Backwoods 4",
    projectName: "Shivalik",
    estate: "Shivalik Estate",
    category: "Residential Plot",
    group: "Residential Plot",
    location: commonLocation,
    plotArea: "200 - 400 Sq Yd",
    description:
      "Backwoods 4 is your gateway to nature and modern living. Nestled in Ganeshpur near Rajaji National Park, this Shivalik residential enclave offers spacious plots from 200 to 400 square yards, perfect for building a dream home surrounded by natural beauty.",
    amenities: fullAmenities.filter((item) => item !== "Open Gym" && item !== "Meditation Area"),
    landmarks: commonLandmarks,
    images: [
      image("backwoods4", "img1.jpg", "Backwoods 4 project view"),
      image("backwoods4", "img2.jpg", "Backwoods 4 road view"),
      image("backwoods4", "img3.jpg", "Backwoods 4 green plot"),
      image("backwoods4", "backwoods_4_masterplan.webp", "Backwoods 4 master plan", true),
    ],
  },
  {
    slug: "backwoods-5",
    title: "Backwoods 5",
    projectName: "Shivalik",
    estate: "Shivalik Estate",
    category: "Residential Plot",
    group: "Residential Plot",
    location: commonLocation,
    plotArea: "100 - 500 Sq Yd",
    description:
      "Backwoods 5 by Dharatal Greens offers 100 to 500 square yard plots in Ganeshpur near Rajaji National Park. With gated access, electrification, cemented roads, green parks, and wellness spaces, it delivers secure and serene living close to Saharanpur and Haridwar.",
    amenities: fullAmenities,
    landmarks: commonLandmarks,
    images: [
      image("backwoods5", "img1.jpg", "Backwoods 5 project view"),
      image("backwoods5", "img2.jpg", "Backwoods 5 internal view"),
      image("backwoods5", "img3.jpg", "Backwoods 5 plotted area"),
      image("backwoods5", "img4.jpg", "Backwoods 5 surrounding landscape"),
      image("backwoods5", "backwoods_5_masterplan.webp", "Backwoods 5 master plan", true),
    ],
  },
  {
    slug: "backwoods-6",
    title: "Backwoods 6",
    projectName: "Shivalik",
    estate: "Shivalik Estate",
    category: "Residential Plot",
    group: "Residential Plot",
    location: commonLocation,
    plotArea: "50 - 200 Sq Yd",
    description:
      "Backwoods 6 by Dharatal Greens offers a unique opportunity to own serene land in Ganeshpur, Saharanpur. With plot sizes from 50 to 200 square yards, this residential project is designed for those seeking tranquility and natural beauty near Rajaji National Park.",
    amenities: fullAmenities.filter((item) => item !== "Open Gym" && item !== "Meditation Area"),
    landmarks: commonLandmarks,
    images: [
      image("backwoods6", "img1.jpg", "Backwoods 6 project view"),
      image("backwoods6", "img2.jpg", "Backwoods 6 road and plots"),
      image("backwoods6", "img3.jpg", "Backwoods 6 site landscape"),
      image("backwoods6", "img4.jpg", "Backwoods 6 green surroundings"),
      image("backwoods6", "backwoods_6_masterplan.webp", "Backwoods 6 master plan", true),
    ],
  },
  {
    slug: "backwoods-7",
    title: "Backwoods 7",
    projectName: "Shivalik",
    estate: "Shivalik Estate",
    category: "Residential Plot",
    group: "Residential Plot",
    location: commonLocation,
    plotArea: "100 - 400 Sq Yd",
    description:
      "Backwoods 7 is a premium residential project by Dharatal Greens located in Ganeshpur, Saharanpur. It offers spacious residential plots from 100 to 400 square yards, ideal for building your dream home with a strategic location near Rajaji National Park.",
    amenities: fullAmenities,
    landmarks: commonLandmarks,
    images: [
      image("backwoods7", "img1.jpg", "Backwoods 7 project view"),
      image("backwoods7", "img2.jpg", "Backwoods 7 landscaped view"),
      image("backwoods7", "img3.jpg", "Backwoods 7 plotted community"),
      image("backwoods7", "img4.jpg", "Backwoods 7 site view"),
      image("backwoods7", "img5.jpg", "Backwoods 7 road view"),
      image("backwoods7", "img6.jpg", "Backwoods 7 natural setting"),
      image("backwoods7", "backwoods_7_masterplan.webp", "Backwoods 7 master plan", true),
    ],
  },
  {
    slug: "backwoods-8",
    title: "Backwoods 8",
    projectName: "Shivalik",
    estate: "Shivalik Estate",
    category: "Mini Farm house",
    group: "Farm House",
    location: commonLocation,
    plotArea: "500 - 800 Sq Yd",
    description:
      "Backwoods 8 is a premium project by Dharatal Greens in Ganeshpur, Saharanpur. It offers spacious mini farmhouses from 500 to 800 square yards for buyers seeking serene living near Rajaji National Park with a blend of nature and modern amenities.",
    amenities: coreAmenities,
    landmarks: commonLandmarks,
    images: [
      image("backwoods8", "img1.jpg", "Backwoods 8 project view"),
      image("backwoods8", "img2.jpg", "Backwoods 8 farm house site"),
      image("backwoods8", "img3.jpg", "Backwoods 8 green setting"),
      image("backwoods8", "backwoods_8_masterplan.webp", "Backwoods 8 master plan", true),
    ],
  },
  {
    slug: "backwoods-9",
    title: "Backwoods 9",
    projectName: "Shivalik",
    estate: "Shivalik Estate",
    category: "Residential Plot",
    group: "Residential Plot",
    location: commonLocation,
    plotArea: "100 - 200 Sq Yd",
    description:
      "Backwoods 9 by Dharatal Greens is a serene and modern residential enclave in Ganeshpur near Rajaji National Park, offering residential plots from 100 to 200 square yards. Essentials such as a grand entrance gate, electrification, street lighting, cemented roads, and 24x7 security create a safe and welcoming environment.",
    amenities: fullAmenities,
    landmarks: commonLandmarks,
    images: [
      image("backwoods9", "img1.jpg", "Backwoods 9 project view"),
      image("backwoods9", "img2.jpg", "Backwoods 9 internal road"),
      image("backwoods9", "img3.jpg", "Backwoods 9 plotted area"),
      image("backwoods9", "img4.jpg", "Backwoods 9 green site"),
      image("backwoods9", "backwoods_9_masterplan.webp", "Backwoods 9 master plan", true),
    ],
  },
  {
    slug: "backwoods-10",
    title: "Backwoods 10",
    projectName: "Shivalik",
    estate: "Shivalik Estate",
    category: "Residential Plot",
    group: "Residential Plot",
    location: commonLocation,
    plotArea: "100 - 500 Sq Yd",
    description:
      "Backwoods 10 is the latest offering from Dharatal Greens, nestled in the scenic surroundings of Ganeshpur near Rajaji National Park. Offering residential plots from 100 to 500 square yards, this thoughtfully developed enclave invites you to experience modern living in the lap of nature.",
    amenities: fullAmenities,
    landmarks: commonLandmarks,
    images: [
      image("backwoods10", "img1.jpg", "Backwoods 10 project view"),
      image("backwoods10", "img2.jpg", "Backwoods 10 site view"),
      image("backwoods10", "img3.jpg", "Backwoods 10 plotted community"),
      image("backwoods10", "img4.jpg", "Backwoods 10 green surroundings"),
      image("backwoods10", "backwoods_10_masterplan.webp", "Backwoods 10 master plan", true),
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
