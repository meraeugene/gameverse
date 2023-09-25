export const heroImagesSlider = [
  {
    id: 1,
    location: "/images/spiderman2.jpg",
    alt: "spiderman 2",
  },
  {
    id: 2,
    location: "/images/gtr7.webp",
    alt: "gtr 7",
  },
  {
    id: 3,
    location: "/images/horizon.webp",
    alt: "horizon",
  },
];

export const subMenuData = [
  {
    id: 1,
    title: "PC Games",
    link: "pc-games",
  },
  {
    id: 2,
    title: "PS4 Games",
    image: "/images/submenu/ps4.webp",
    link: "ps4-games",
  },
  {
    id: 3,
    title: "PS5 Games",
    image: "/images/submenu/ps5.jpg",
    link: "ps5-games",
  },
  {
    id: 4,
    title: "XBOX Games",
    image: "/images/submenu/xbox.jpg",
    link: "xbox-games",
  },
  {
    id: 5,
    title: "Gaming Peripherals",
    image: "/images/submenu/gp.jpg",
    link: "gaming-peripherals",
  },
];

export const genreImagesData = [
  {
    id: 1,
    location: "/images/grid/spiderman2.webp",
    alt: "Spiderman 2",
    genre: "Action",
  },
  {
    id: 2,
    location: "/images/grid/codmw.webp",
    alt: "Call of Duty Modern Warfare",
    genre: "Shooter",
  },
  {
    id: 3,
    location: "/images/grid/rpg.webp",
    alt: "Vampire",
    genre: "Rpg",
  },
  {
    id: 4,
    location: "/images/grid/nba2k24.webp",
    alt: "NBA 2k24",
    genre: "Sport",
  },
  {
    id: 5,
    location: "/images/grid/ufc.webp",
    alt: "UFC 5",
    genre: "Fighting",
  },
  {
    id: 6,
    location: "/images/grid/texaschainsaw.webp",
    alt: "texas chainsaw",
    genre: "Horror",
  },
  {
    id: 7,
    location: "/images/grid/granturismo.webp",
    alt: "gran turismo",
    genre: "Racing",
  },
  {
    id: 8,
    location: "/images/grid/hotwheels.webp",
    alt: "Hotwheels",
    genre: "Arcade",
  },
];

export const gamingPeripheralsCategory = [
  {
    id: 1,
    location: "/images/categories/webcam.png",
    title: "Webcam",
  },
  {
    id: 2,
    location: "/images/categories/controller.png",
    title: "Controller",
  },
  {
    id: 3,
    location: "/images/categories/gamingchair.png",
    title: "Gaming-Chair",
  },
  {
    id: 4,
    location: "/images/categories/gpu.png",
    title: "Graphics-Card",
  },
  {
    id: 5,
    location: "/images/categories/headphones.png",
    title: "Headset",
  },
  {
    id: 6,
    location: "/images/categories/keyboard.png",
    title: "Keyboard",
  },
  {
    id: 7,
    location: "/images/categories/microphone.png",
    title: "Microphone",
  },
  {
    id: 8,
    location: "/images/categories/monitor.png",
    title: "Monitor",
  },
  {
    id: 9,
    location: "/images/categories/motherboard.png",
    title: "Motherboard",
  },
  {
    id: 10,
    location: "/images/categories/mouse.png",
    title: "Mouse",
  },
  {
    id: 11,
    location: "/images/categories/router.png",
    title: "Router",
  },
];

export const gpGridImages = [
  {
    image: "/images/gpgrid/hyperx.jpg",
    title: "hyperx",
  },
  {
    image: "/images/gpgrid/razer.jpg",
    title: "razer",
  },
  {
    image: "/images/gpgrid/rog.jpg",
    title: "rog",
  },
  {
    image: "/images/gpgrid/xbox.jpg",
    title: "xbox",
  },
];

function generateRandomID() {
  return Math.floor(100000 + Math.random() * 900000);
}

function generateRandomStocks() {
  return Math.floor(100 + Math.random() * 900);
}

function generateRandomPrice() {
  return parseFloat((2500 + Math.random() * 501).toFixed(2));
}

function generateRandomLikes() {
  return Math.floor(50 + Math.random() * 100);
}

function generateRandomSold() {
  return Math.floor(Math.random() * 20);
}

export const gamingPeripheralsData = [
  {
    id: generateRandomID(),
    title:
      "Razer BlackWidow V4 75% Black Hot-swappable Mechanical Gaming Keyboard ",
    brand: "Razer",
    category: "Keyboard",
    images: [
      "images/gamingPeripherals/blackwidow/1.webp",
      "images/gamingPeripherals/blackwidow/2.webp",
      "images/gamingPeripherals/blackwidow/3.jpg",
      "images/gamingPeripherals/blackwidow/4.jpg",
    ],
    price: 10995,
    likes: generateRandomLikes(),
    sold: generateRandomSold(),
    stocks: generateRandomStocks(),
  },
  {
    id: generateRandomID(),
    title:
      "HyperX Cloud Stinger 2 Core Wired Gaming Headset for PlayStation - Black",
    brand: "HyperX",
    category: "Headset",
    images: [
      "images/gamingPeripherals/cloudstinger/1.jpg",
      "images/gamingPeripherals/cloudstinger/2.jpg",
      "images/gamingPeripherals/cloudstinger/3.jpg",
      "images/gamingPeripherals/cloudstinger/4.jpg",
    ],
    price: 1790,
    likes: generateRandomLikes(),
    sold: generateRandomSold(),
    stocks: generateRandomStocks(),
  },
  {
    id: generateRandomID(),
    title: "Asus ROG Strix Scope II RX Gaming Keyboard with Pre-lubed ROG",
    brand: "ROG",
    category: "Keyboard",
    images: [
      "images/gamingPeripherals/rogstrix2/1.jpg",
      "images/gamingPeripherals/rogstrix2/2.jpg",
      "images/gamingPeripherals/rogstrix2/3.jpg",
      "images/gamingPeripherals/rogstrix2/4.jpg",
    ],
    price: 6990,
    likes: generateRandomLikes(),
    sold: generateRandomSold(),
    stocks: generateRandomStocks(),
  },
  {
    id: generateRandomID(),
    title: "Xbox Series S 512GB [White]",
    brand: "Xbox",
    category: "Console",
    images: [
      "images/gamingPeripherals/xboxwhite/1.jpg",
      "images/gamingPeripherals/xboxwhite/2.jpg",
      "images/gamingPeripherals/xboxwhite/3.jpg",
      "images/gamingPeripherals/xboxwhite/4.jpg",
    ],
    price: 15995,
    likes: generateRandomLikes(),
    sold: generateRandomSold(),
    stocks: generateRandomStocks(),
  },
  {
    id: generateRandomID(),
    title: "Xbox Series X 1TB SSD Console [Asian]",
    brand: "Xbox",
    category: "Console",
    images: [
      "images/gamingPeripherals/xboxasian/1.jpg",
      "images/gamingPeripherals/xboxasian/2.jpg",
      "images/gamingPeripherals/xboxasian/3.jpg",
      "images/gamingPeripherals/xboxasian/4.jpg",
    ],
    price: 32995,
    likes: generateRandomLikes(),
    sold: generateRandomSold(),
    stocks: generateRandomStocks(),
  },
  {
    id: generateRandomID(),
    title: "HD Camera for PlayStation 5 [CFI-ZEY1]",
    brand: "playstation",
    category: "webcam",
    images: [
      "images/gamingPeripherals/ps5camera/1.jpg",
      "images/gamingPeripherals/ps5camera/2.jpg",
    ],
    price: 3290,
    likes: generateRandomLikes(),
    sold: generateRandomSold(),
    stocks: generateRandomStocks(),
  },
  {
    id: generateRandomID(),
    title: "Xbox Wireless Controller [Carbon Black]",
    brand: "xbox",
    category: "controller",
    images: [
      "images/gamingPeripherals/xboxcontroller/1.jpg",
      "images/gamingPeripherals/xboxcontroller/2.jpg",
    ],
    price: 3290,
    likes: generateRandomLikes(),
    sold: generateRandomSold(),
    stocks: generateRandomStocks(),
  },
  {
    id: generateRandomID(),
    title: "Razer Iskur X Ergonomic Gaming Chair [RZ38-02840100]",
    brand: "razer",
    category: "gaming-chair",
    images: [
      "images/gamingPeripherals/razeriskur/1.jpg",
      "images/gamingPeripherals/razeriskur/2.jpg",
      "images/gamingPeripherals/razeriskur/3.jpg",
    ],
    price: 16450,
    likes: generateRandomLikes(),
    sold: generateRandomSold(),
    stocks: generateRandomStocks(),
  },
  {
    id: generateRandomID(),
    title: "Gigabyte GeForce RTX 3050 Eagle 8G Graphics Card",
    brand: "gigabyte",
    category: "graphics-card",
    images: [
      "images/gamingPeripherals/gpu/1.jpg",
      "images/gamingPeripherals/gpu/2.jpg",
      "images/gamingPeripherals/gpu/3.jpg",
    ],
    price: 16495,
    likes: generateRandomLikes(),
    sold: generateRandomSold(),
    stocks: generateRandomStocks(),
  },
  {
    id: generateRandomID(),
    title: "Tenda AC23 AC2100 Dual Band Gigabit WiFi Router",
    brand: "tenda",
    category: "router",
    images: [
      "images/gamingPeripherals/router/1.jpg",
      "images/gamingPeripherals/router/2.jpg",
      "images/gamingPeripherals/router/3.jpg",
    ],
    price: 2195,
    likes: generateRandomLikes(),
    sold: generateRandomSold(),
    stocks: generateRandomStocks(),
  },
  {
    id: generateRandomID(),
    title: "Razer Cobra Lightweight RGB Wired Gaming Mouse [Black]    ",
    brand: "razer",
    category: "mouse",
    images: [
      "images/gamingPeripherals/gamingmouse/1.jpg",
      "images/gamingPeripherals/gamingmouse/2.jpg",
    ],
    price: 2095,
    likes: generateRandomLikes(),
    sold: generateRandomSold(),
    stocks: generateRandomStocks(),
  },
  {
    id: generateRandomID(),
    title: "Gigabyte Z690 Aorus PRO Gaming Motherboard    ",
    brand: "gigabyte",
    category: "motherboard",
    images: [
      "images/gamingPeripherals/motherboard/1.jpg",
      "images/gamingPeripherals/motherboard/2.jpg",
      "images/gamingPeripherals/motherboard/3.jpg",
    ],
    price: 18895,
    likes: generateRandomLikes(),
    sold: generateRandomSold(),
    stocks: generateRandomStocks(),
  },
  {
    id: generateRandomID(),
    title: "Acer Predator XB273U 27 Gaming Monitor [165Hz]   ",
    brand: "Acer",
    category: "monitor",
    images: [
      "images/gamingPeripherals/gamingmonitor/1.jpg",
      "images/gamingPeripherals/gamingmonitor/2.jpg",
      "images/gamingPeripherals/gamingmonitor/3.jpg",
    ],
    price: 24995,
    likes: generateRandomLikes(),
    sold: generateRandomSold(),
    stocks: generateRandomStocks(),
  },
  {
    id: generateRandomID(),
    title: "HyperX QuadCast Gaming Microphone    ",
    brand: "HyperX",
    category: "microphone",
    images: [
      "images/gamingPeripherals/microphone/1.jpg",
      "images/gamingPeripherals/microphone/2.jpg",
      "images/gamingPeripherals/microphone/3.jpg",
    ],
    price: 6490,
    likes: generateRandomLikes(),
    sold: generateRandomSold(),
    stocks: generateRandomStocks(),
  },
];

export const gamesData = [
  {
    id: generateRandomID(),
    title: "Spiderman 2",
    genre: "Action",
    likes: generateRandomLikes(),
    releasedYear: 2023,
    platforms: [
      {
        name: "PS5",
        location: "/images/games/ps5/spiderman2.jpg",
        stocks: generateRandomStocks(),
        price: generateRandomPrice(),
        sold: generateRandomSold(),
      },
    ],
  },
  {
    id: generateRandomID(),
    title: "Mortal Kombat 1",
    genre: "Action",
    likes: generateRandomLikes(),
    releasedYear: 2023,
    platforms: [
      {
        name: "PS5",
        location: "/images/games/ps5/mk.jpg",
        stocks: generateRandomStocks(),
        price: generateRandomPrice(),
        sold: generateRandomSold(),
      },
      {
        name: "XBOX",
        location: "/images/games/xbox/mk.jfif",
        stocks: generateRandomStocks(),
        price: generateRandomPrice(),
        sold: generateRandomSold(),
      },
    ],
  },

  {
    id: generateRandomID(),
    title: "NBA 2K24 Kobe Edition ",
    genre: "Sport",
    likes: generateRandomLikes(),
    releasedYear: 2023,
    platforms: [
      {
        name: "PS5",
        location: "/images/games/ps5/nba2k24.jpg",
        stocks: generateRandomStocks(),
        price: generateRandomPrice(),
        sold: generateRandomSold(),
      },
      {
        name: "PS4",
        location: "/images/games/ps4/nba2k24.jpg",
        stocks: generateRandomStocks(),
        price: generateRandomPrice(),
        sold: generateRandomSold(),
      },
      {
        name: "XBOX",
        location: "/images/games/xbox/nba2k24.jpg",
        stocks: generateRandomStocks(),
        price: generateRandomPrice(),
        sold: generateRandomSold(),
      },
      {
        name: "PC",
        location: "/images/games/pc/nba2k24.jpg",
        stocks: generateRandomStocks(),
        price: generateRandomPrice(),
        sold: generateRandomSold(),
      },
    ],
  },
  {
    id: generateRandomID(),
    title: "UFC 5",
    genre: "Fighting, Sport",
    likes: generateRandomLikes(),
    releasedYear: 2023,
    platforms: [
      {
        name: "PS5",
        location: "/images/games/ps5/ufc5.jpg",
        stocks: generateRandomStocks(),
        price: generateRandomPrice(),
        sold: generateRandomSold(),
      },

      {
        name: "XBOX",
        location: "/images/games/xbox/ufc5.jpg",
        stocks: generateRandomStocks(),
        price: generateRandomPrice(),
        sold: generateRandomSold(),
      },
    ],
  },
  {
    id: generateRandomID(),
    title: "Texas Chainsaw",
    genre: "Horror,Thriller",
    likes: generateRandomLikes(),
    releasedYear: 2023,
    platforms: [
      {
        name: "PS5",
        location: "/images/games/ps5/texaschainsaw.jpg",
        stocks: generateRandomStocks(),
        price: generateRandomPrice(),
        sold: generateRandomSold(),
      },
      {
        name: "PS4",
        location: "/images/games/ps4/texaschainsaw.jpg",
        stocks: generateRandomStocks(),
        price: generateRandomPrice(),
        sold: generateRandomSold(),
      },
      {
        name: "XBOX",
        location: "/images/games/xbox/texaschainsaw.jpg",
        stocks: generateRandomStocks(),
        price: generateRandomPrice(),
        sold: generateRandomSold(),
      },
    ],
  },
  {
    id: generateRandomID(),
    title: "Grand Turismo 7",
    genre: "Sport,Racing",
    likes: generateRandomLikes(),
    releasedYear: 2018,
    platforms: [
      {
        name: "PS5",
        location: "/images/games/ps5/gtr7.jpg",
        stocks: generateRandomStocks(),
        price: generateRandomPrice(),
        sold: generateRandomSold(),
      },
      {
        name: "PS4",
        location: "/images/games/ps4/gtr7.jpg",
        stocks: generateRandomStocks(),
        price: generateRandomPrice(),
        sold: generateRandomSold(),
      },
    ],
  },

  {
    id: generateRandomID(),
    title: "Rainbow Six Seige ",
    genre: "Shooter",
    likes: generateRandomLikes(),
    releasedYear: 2020,
    platforms: [
      {
        name: "PS5",
        location: "/images/games/ps5/rss.jpg",
        stocks: generateRandomStocks(),
        price: generateRandomPrice(),
        sold: generateRandomSold(),
      },
      {
        name: "PS4",
        location: "/images/games/ps4/rss.jpg",
        stocks: generateRandomStocks(),
        price: generateRandomPrice(),
        sold: generateRandomSold(),
      },
      {
        name: "XBOX",
        location: "/images/games/xbox/rss.jpg",
        stocks: generateRandomStocks(),
        price: generateRandomPrice(),
        sold: generateRandomSold(),
      },
    ],
  },
  {
    id: generateRandomID(),
    title: "Madden NFL 24",
    genre: "Sport",
    likes: generateRandomLikes(),
    releasedYear: 2023,
    platforms: [
      {
        name: "PS5",
        location: "/images/games/ps5/madden.jpg",
        stocks: generateRandomStocks(),
        price: generateRandomPrice(),
        sold: generateRandomSold(),
      },
      {
        name: "PS4",
        location: "/images/games/ps4/madden.jpg",
        stocks: generateRandomStocks(),
        price: generateRandomPrice(),
        sold: generateRandomSold(),
      },
      {
        name: "XBOX",
        location: "/images/games/xbox/madden.jpg",
        stocks: generateRandomStocks(),
        price: generateRandomPrice(),
        sold: generateRandomSold(),
      },
      {
        name: "PC",
        location: "/images/games/pc/madden.jpg",
        stocks: generateRandomStocks(),
        price: generateRandomPrice(),
        sold: generateRandomSold(),
      },
    ],
  },
];
