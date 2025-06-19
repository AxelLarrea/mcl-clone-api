import type { ProductType } from "../types/productType.js";

export const products: ProductType[] = [
  // Keyboard products
  {
    product_id: "kb1",
    name: "Mechanical RGB Keyboard",
    description: "Professional gaming keyboard with Cherry MX switches and customizable RGB lighting",
    price: "149.99",
    image: "https://picsum.photos/id/1/500/500",
    category: "Keyboard",
    quantity: 45,
    seller: "TechGadgets",
    rating: 4.8,
    internationalShipping: true,
    city: "San Francisco",
    condition: "New",
    brand: "Corsair",
    comments: ["Amazing build quality", "Great RGB effects"],
    specs: {
      color: "Black",
      weight: "1.2kg",
      model: "K95 RGB Platinum"
    }
  },
  {
    product_id: "kb2",
    name: "Wireless Ergonomic Keyboard",
    description: "Comfortable ergonomic design with wireless connectivity",
    price: "129.99",
    image: "https://picsum.photos/id/2/500/500",
    category: "Keyboard",
    quantity: 30,
    seller: "ErgoTech",
    rating: 4.6,
    internationalShipping: false,
    city: "Seattle",
    condition: "New",
    brand: "Logitech",
    comments: ["Reduced wrist strain", "Long battery life"],
    specs: {
      color: "White",
      weight: "0.9kg",
      model: "MX Keys"
    }
  },
  {
    product_id: "kb3",
    name: "Compact 60% Keyboard",
    description: "Space-saving mechanical keyboard with PBT keycaps",
    price: "89.99",
    image: "https://picsum.photos/id/3/500/500",
    category: "Keyboard",
    quantity: 25,
    seller: "KeyboardEnthusiast",
    rating: 4.7,
    internationalShipping: true,
    city: "Portland",
    condition: "New",
    brand: "Ducky",
    comments: ["Perfect for small desks", "Great typing experience"],
    specs: {
      color: "Gray",
      weight: "0.7kg",
      model: "One 2 Mini"
    }
  },
  {
    product_id: "kb4",
    name: "Low-Profile Mechanical Keyboard",
    description: "Slim design with laptop-style keys and mechanical switches",
    price: "119.99",
    image: "https://picsum.photos/id/4/500/500",
    category: "Keyboard",
    quantity: 20,
    seller: "ModernTech",
    rating: 4.5,
    internationalShipping: false,
    city: "Austin",
    condition: "New",
    brand: "Keychron",
    comments: ["Great for typing", "Slim and portable"],
    specs: {
      color: "Space Gray",
      weight: "0.8kg",
      model: "K1"
    }
  },
  {
    product_id: "kb5",
    name: "Split Ergonomic Keyboard",
    description: "Fully split design for maximum ergonomic comfort",
    price: "219.99",
    image: "https://picsum.photos/id/5/500/500",
    category: "Keyboard",
    quantity: 15,
    seller: "ErgoExperts",
    rating: 4.9,
    internationalShipping: true,
    city: "Chicago",
    condition: "New",
    brand: "Kinesis",
    comments: ["Eliminated my wrist pain", "Worth every penny"],
    specs: {
      color: "Black",
      weight: "1.4kg",
      model: "Freestyle Edge"
    }
  },
  {
    product_id: "kb6",
    name: "Mechanical Numpad",
    description: "Standalone mechanical numpad with programmable keys",
    price: "49.99",
    image: "https://picsum.photos/id/6/500/500",
    category: "Keyboard",
    quantity: 40,
    seller: "NumberCrunchers",
    rating: 4.4,
    internationalShipping: false,
    city: "Boston",
    condition: "New",
    brand: "Leopold",
    comments: ["Perfect companion for TKL keyboards", "Solid build"],
    specs: {
      color: "White",
      weight: "0.4kg",
      model: "FC210TP"
    }
  },
  {
    product_id: "kb7",
    name: "Gaming Keyboard with Macro Keys",
    description: "Full-size keyboard with dedicated macro keys for gaming",
    price: "159.99",
    image: "https://picsum.photos/id/7/500/500",
    category: "Keyboard",
    quantity: 35,
    seller: "GamerGear",
    rating: 4.7,
    internationalShipping: true,
    city: "Las Vegas",
    condition: "New",
    brand: "SteelSeries",
    comments: ["Great for MMO games", "Comfortable wrist rest"],
    specs: {
      color: "Black/Red",
      weight: "1.3kg",
      model: "Apex Pro"
    }
  },
  {
    product_id: "kb8",
    name: "Bluetooth Mechanical Keyboard",
    description: "Connect to multiple devices with this versatile mechanical keyboard",
    price: "139.99",
    image: "https://picsum.photos/id/8/500/500",
    category: "Keyboard",
    quantity: 25,
    seller: "WirelessTech",
    rating: 4.6,
    internationalShipping: false,
    city: "Miami",
    condition: "New",
    brand: "Anne Pro",
    comments: ["Great for multiple devices", "Compact and portable"],
    specs: {
      color: "White",
      weight: "0.65kg",
      model: "Anne Pro 2"
    }
  },
  {
    product_id: "kb9",
    name: "Silent Mechanical Keyboard",
    description: "Quiet mechanical switches perfect for office environments",
    price: "129.99",
    image: "https://picsum.photos/id/9/500/500",
    category: "Keyboard",
    quantity: 20,
    seller: "QuietComputing",
    rating: 4.5,
    internationalShipping: true,
    city: "Denver",
    condition: "New",
    brand: "Filco",
    comments: ["Quiet but still tactile", "Perfect for office use"],
    specs: {
      color: "Black",
      weight: "1.1kg",
      model: "Majestouch 2 Silent"
    }
  },
  {
    product_id: "kb10",
    name: "Ortholinear Keyboard",
    description: "Grid layout keyboard for improved typing efficiency",
    price: "169.99",
    image: "https://picsum.photos/id/10/500/500",
    category: "Keyboard",
    quantity: 15,
    seller: "KeyboardInnovators",
    rating: 4.7,
    internationalShipping: false,
    city: "Portland",
    condition: "New",
    brand: "OLKB",
    comments: ["Took time to adjust but now I love it", "Great build quality"],
    specs: {
      color: "Space Gray",
      weight: "0.7kg",
      model: "Planck"
    }
  },

  // Mouse products
  {
    product_id: "m1",
    name: "Wireless Gaming Mouse",
    description: "High-precision wireless gaming mouse with 25K DPI sensor",
    price: "149.99",
    image: "https://picsum.photos/id/11/500/500",
    category: "Mouse",
    quantity: 50,
    seller: "GamingGear",
    rating: 4.9,
    internationalShipping: false,
    city: "Los Angeles",
    condition: "New",
    brand: "Logitech",
    comments: ["Zero latency", "Amazing battery life"],
    specs: {
      color: "Black",
      weight: "80g",
      model: "G Pro X Superlight"
    }
  },
  {
    product_id: "m2",
    name: "Ergonomic Optical Mouse",
    description: "Comfortable ergonomic mouse with optical sensor",
    price: "79.99",
    image: "https://picsum.photos/id/12/500/500",
    category: "Mouse",
    quantity: 40,
    seller: "TechGear",
    rating: 4.7,
    internationalShipping: true,
    city: "New York",
    condition: "New",
    brand: "Razer",
    comments: ["Great for long hours", "Smooth scrolling"],
    specs: {
      color: "Black",
      weight: "100g",
      model: "DeathAdder V2"
    }
  },
  {
    product_id: "m3",
    name: "Bluetooth Mouse",
    description: "Wireless mouse with Bluetooth connectivity",
    price: "49.99",
    image: "https://picsum.photos/id/13/500/500",
    category: "Mouse",
    quantity: 30,
    seller: "WirelessTech",
    rating: 4.6,
    internationalShipping: false,
    city: "San Francisco",
    condition: "New",
    brand: "Microsoft",
    comments: ["Easy pairing", "Compact design"],
    specs: {
      color: "White",
      weight: "50g",
      model: "Surface Mouse 2"
    }
  },
  {
    product_id: "m4",
    name: "Gaming Mouse with RGB",
    description: "RGB lighting and 16000 DPI sensor for gaming",
    price: "199.99",
    image: "https://picsum.photos/id/14/500/500",
    category: "Mouse",
    quantity: 25,
    seller: "GamerGear",
    rating: 4.8,
    internationalShipping: true,
    city: "Chicago",
    condition: "New",
    brand: "SteelSeries",
    comments: ["Beautiful RGB effects", "High DPI for precision"],
    specs: {
      color: "Black",
      weight: "85g",
      model: "Rival 3"
    }
  },
  {
    product_id: "m5",
    name: "Wireless Mouse with Scroll Wheel",
    description: "Wireless mouse with a comfortable scroll wheel",
    price: "69.99",
    image: "https://picsum.photos/id/15/500/500",
    category: "Mouse",
    quantity: 35,
    seller: "TechGear",
    rating: 4.5,
    internationalShipping: false,
    city: "Seattle",
    condition: "New",
    brand: "Logitech",
    comments: ["Smooth scrolling", "Long battery life"],
    specs: {
      color: "White",
      weight: "70g",
      model: "MX Master 3"
    }
  },
  {
    product_id: "m6",
    name: "Compact Mouse",
    description: "Compact mouse for small desks",
    price: "39.99",
    image: "https://picsum.photos/id/16/500/500",
    category: "Mouse",
    quantity: 45,
    seller: "KeyboardEnthusiast",
    rating: 4.4,
    internationalShipping: true,
    city: "Austin",
    condition: "New",
    brand: "Ducky",
    comments: ["Perfect for small spaces", "Lightweight"],
    specs: {
      color: "Gray",
      weight: "50g",
      model: "One 2 Mini"
    }
  },
  {
    product_id: "m7",
    name: "Ergonomic Mouse with Side Buttons",
    description: "Ergonomic design with extra side buttons",
    price: "89.99",
    image: "https://picsum.photos/id/17/500/500",
    category: "Mouse",
    quantity: 30,
    seller: "ErgoTech",
    rating: 4.6,
    internationalShipping: false,
    city: "Portland",
    condition: "New",
    brand: "Logitech",
    comments: ["Reduced wrist strain", "Extra buttons for productivity"],
    specs: {
      color: "Black",
      weight: "100g",
      model: "MX Ergo"
    }
  },
  {
    product_id: "m8",
    name: "Gaming Mouse with DPI Switch",
    description: "Adjustable DPI for different gaming scenarios",
    price: "129.99",
    image: "https://picsum.photos/id/18/500/500",
    category: "Mouse",
    quantity: 20,
    seller: "GamerGear",
    rating: 4.7,
    internationalShipping: true,
    city: "Las Vegas",
    condition: "New",
    brand: "SteelSeries",
    comments: ["Great for gaming", "Easy DPI adjustment"],
    specs: {
      color: "Black/Red",
      weight: "85g",
      model: "Apex 3"
    }
  },
  {
    product_id: "m9",
    name: "Silent Mouse",
    description: "Quiet mouse for office environments",
    price: "59.99",
    image: "https://picsum.photos/id/19/500/500",
    category: "Mouse",
    quantity: 25,
    seller: "QuietComputing",
    rating: 4.5,
    internationalShipping: false,
    city: "Denver",
    condition: "New",
    brand: "Filco",
    comments: ["Quiet operation", "Perfect for office use"],
    specs: {
      color: "Black",
      weight: "70g",
      model: "Majestouch 2 Silent"
    }
  },
  {
    product_id: "m10",
    name: "Wireless Mouse with Macro Keys",
    description: "Wireless mouse with macro keys for gaming",
    price: "149.99",
    image: "https://picsum.photos/id/20/500/500",
    category: "Mouse",
    quantity: 15,
    seller: "GamerGear",
    rating: 4.8,
    internationalShipping: true,
    city: "Miami",
    condition: "New",
    brand: "SteelSeries",
    comments: ["Great for gaming", "Comfortable wrist rest"],
    specs: {
      color: "Black/Red",
      weight: "85g",
      model: "Apex 7"
    }
  },

  // Headphones products
  {
    product_id: "h1",
    name: "Noise Cancelling Headphones",
    description: "Premium wireless headphones with industry-leading noise cancellation",
    price: "349.99",
    image: "https://picsum.photos/id/21/500/500",
    category: "Headphones",
    quantity: 30,
    seller: "AudioElite",
    rating: 4.9,
    internationalShipping: false,
    city: "New York",
    condition: "New",
    brand: "Sony",
    comments: ["Amazing noise cancellation", "Great sound quality"],
    specs: {
      color: "Black",
      weight: "254g",
      model: "WH-1000XM4"
    }
  },
  {
    product_id: "h2",
    name: "Wireless Gaming Headset",
    description: "Low-latency wireless headset with surround sound for immersive gaming",
    price: "169.99",
    image: "https://picsum.photos/id/22/500/500",
    category: "Headphones",
    quantity: 40,
    seller: "GamerGear",
    rating: 4.7,
    internationalShipping: true,
    city: "Los Angeles",
    condition: "New",
    brand: "SteelSeries",
    comments: ["Great for FPS games", "Comfortable for long sessions"],
    specs: {
      color: "Black",
      weight: "310g",
      model: "Arctis Pro Wireless"
    }
  },
  {
    product_id: "h3",
    name: "True Wireless Earbuds",
    description: "Compact earbuds with active noise cancellation and water resistance",
    price: "199.99",
    image: "https://picsum.photos/id/23/500/500",
    category: "Headphones",
    quantity: 50,
    seller: "SoundGear",
    rating: 4.8,
    internationalShipping: false,
    city: "San Francisco",
    condition: "New",
    brand: "Apple",
    comments: ["Great sound in a small package", "Seamless connectivity"],
    specs: {
      color: "White",
      weight: "5.4g each",
      model: "AirPods Pro"
    }
  },
  {
    product_id: "h4",
    name: "Studio Monitor Headphones",
    description: "Professional-grade headphones for audio production and mixing",
    price: "149.99",
    image: "https://picsum.photos/id/24/500/500",
    category: "Headphones",
    quantity: 25,
    seller: "AudioPro",
    rating: 4.6,
    internationalShipping: true,
    city: "Nashville",
    condition: "New",
    brand: "Audio-Technica",
    comments: ["Flat response", "Industry standard for a reason"],
    specs: {
      color: "Black",
      weight: "285g",
      model: "ATH-M50x"
    }
  },
  {
    product_id: "h5",
    name: "Bone Conduction Headphones",
    description: "Open-ear design that conducts sound through your cheekbones",
    price: "129.99",
    image: "https://picsum.photos/id/25/500/500",
    category: "Headphones",
    quantity: 20,
    seller: "FitnessAudio",
    rating: 4.5,
    internationalShipping: false,
    city: "Portland",
    condition: "New",
    brand: "AfterShokz",
    comments: ["Great for running", "Can hear surroundings"],
    specs: {
      color: "Gray",
      weight: "26g",
      model: "Aeropex"
    }
  },
  {
    product_id: "h6",
    name: "Hi-Fi Audiophile Headphones",
    description: "Open-back headphones for critical listening and audiophile experience",
    price: "299.99",
    image: "https://picsum.photos/id/26/500/500",
    category: "Headphones",
    quantity: 15,
    seller: "AudiophileGear",
    rating: 4.8,
    internationalShipping: true,
    city: "Chicago",
    condition: "New",
    brand: "Sennheiser",
    comments: ["Incredible soundstage", "Detailed audio reproduction"],
    specs: {
      color: "Black",
      weight: "330g",
      model: "HD 660 S"
    }
  },
  {
    product_id: "h7",
    name: "DJ Headphones",
    description: "Durable headphones with swiveling ear cups for professional DJs",
    price: "149.99",
    image: "https://picsum.photos/id/27/500/500",
    category: "Headphones",
    quantity: 30,
    seller: "DJSupplies",
    rating: 4.6,
    internationalShipping: false,
    city: "Miami",
    condition: "New",
    brand: "Pioneer",
    comments: ["Industry standard for DJs", "Great isolation"],
    specs: {
      color: "Black",
      weight: "288g",
      model: "HDJ-X7"
    }
  },
  {
    product_id: "h8",
    name: "Sleep Headphones",
    description: "Comfortable headband with thin speakers for sleeping",
    price: "39.99",
    image: "https://picsum.photos/id/28/500/500",
    category: "Headphones",
    quantity: 45,
    seller: "SleepTech",
    rating: 4.4,
    internationalShipping: true,
    city: "Boston",
    condition: "New",
    brand: "CozyPhones",
    comments: ["Comfortable for side sleepers", "Great for ASMR"],
    specs: {
      color: "Navy Blue",
      weight: "40g",
      model: "Sleep Headphones"
    }
  },
  {
    product_id: "h9",
    name: "Kids Headphones",
    description: "Volume-limited headphones designed for children's safety",
    price: "29.99",
    image: "https://picsum.photos/id/29/500/500",
    category: "Headphones",
    quantity: 50,
    seller: "KidsTech",
    rating: 4.7,
    internationalShipping: false,
    city: "Seattle",
    condition: "New",
    brand: "JBL",
    comments: ["Safe volume levels", "Durable for kids"],
    specs: {
      color: "Blue/Orange",
      weight: "150g",
      model: "JR 300"
    }
  },
  {
    product_id: "h10",
    name: "Waterproof Swimming Headphones",
    description: "Fully waterproof headphones with built-in MP3 player for swimming",
    price: "89.99",
    image: "https://picsum.photos/id/30/500/500",
    category: "Headphones",
    quantity: 20,
    seller: "SwimGear",
    rating: 4.5,
    internationalShipping: true,
    city: "San Diego",
    condition: "New",
    brand: "Swimbuds",
    comments: ["Great underwater sound", "Stays in place while swimming"],
    specs: {
      color: "Black/Blue",
      weight: "30g",
      model: "Sport"
    }
  },

  // Gaming products
  {
    product_id: "g1",
    name: "Gaming Console",
    description: "Next-generation gaming console with 4K graphics and fast loading times",
    price: "499.99",
    image: "https://picsum.photos/id/31/500/500",
    category: "Gaming",
    quantity: 25,
    seller: "GameStation",
    rating: 4.9,
    internationalShipping: false,
    city: "Seattle",
    condition: "New",
    brand: "Sony",
    comments: ["Amazing graphics", "Fast load times"],
    specs: {
      color: "Black",
      weight: "4.5kg",
      model: "PlayStation 5"
    }
  },
  {
    product_id: "g2",
    name: "Gaming Controller",
    description: "Ergonomic controller with customizable buttons and wireless connectivity",
    price: "69.99",
    image: "https://picsum.photos/id/32/500/500",
    category: "Gaming",
    quantity: 50,
    seller: "GameAccessories",
    rating: 4.7,
    internationalShipping: true,
    city: "Los Angeles",
    condition: "New",
    brand: "Microsoft",
    comments: ["Comfortable grip", "Great battery life"],
    specs: {
      color: "Black",
      weight: "280g",
      model: "Xbox Elite Controller"
    }
  },
  {
    product_id: "g3",
    name: "Gaming PC",
    description: "High-performance gaming desktop with RGB lighting and liquid cooling",
    price: "1999.99",
    image: "https://picsum.photos/id/33/500/500",
    category: "Gaming",
    quantity: 15,
    seller: "PCMaster",
    rating: 4.8,
    internationalShipping: false,
    city: "San Francisco",
    condition: "New",
    brand: "Custom Build",
    comments: ["Runs all games at max settings", "Quiet cooling"],
    specs: {
      color: "Black/RGB",
      weight: "15kg",
      model: "Titan X"
    }
  },
  {
    product_id: "g4",
    name: "Gaming Laptop",
    description: "Portable gaming laptop with high refresh rate display and powerful GPU",
    price: "1499.99",
    image: "https://picsum.photos/id/34/500/500",
    category: "Gaming",
    quantity: 20,
    seller: "LaptopGaming",
    rating: 4.6,
    internationalShipping: true,
    city: "Chicago",
    condition: "New",
    brand: "ASUS",
    comments: ["Great performance", "Stays cool under load"],
    specs: {
      color: "Black",
      weight: "2.3kg",
      model: "ROG Zephyrus"
    }
  },
  {
    product_id: "g5",
    name: "Gaming Monitor",
    description: "Ultra-wide curved gaming monitor with 144Hz refresh rate",
    price: "399.99",
    image: "https://picsum.photos/id/35/500/500",
    category: "Gaming",
    quantity: 30,
    seller: "DisplayTech",
    rating: 4.7,
    internationalShipping: false,
    city: "Austin",
    condition: "New",
    brand: "Samsung",
    comments: ["Immersive gaming experience", "Great color accuracy"],
    specs: {
      color: "Black",
      weight: "7kg",
      model: "Odyssey G9"
    }
  },
  {
    product_id: "g6",
    name: "Gaming Chair",
    description: "Ergonomic racing-style gaming chair with lumbar support",
    price: "249.99",
    image: "https://picsum.photos/id/36/500/500",
    category: "Gaming",
    quantity: 35,
    seller: "ComfortGaming",
    rating: 4.5,
    internationalShipping: true,
    city: "Miami",
    condition: "New",
    brand: "SecretLab",
    comments: ["Comfortable for long sessions", "Easy to assemble"],
    specs: {
      color: "Black/Red",
      weight: "22kg",
      model: "Titan Evo"
    }
  },
  {
    product_id: "g7",
    name: "VR Headset",
    description: "Immersive virtual reality headset with motion controllers",
    price: "399.99",
    image: "https://picsum.photos/id/37/500/500",
    category: "Gaming",
    quantity: 20,
    seller: "VRWorld",
    rating: 4.8,
    internationalShipping: false,
    city: "Boston",
    condition: "New",
    brand: "Oculus",
    comments: ["Amazing VR experience", "Comfortable fit"],
    specs: {
      color: "White",
      weight: "500g",
      model: "Quest 2"
    }
  },
  {
    product_id: "g8",
    name: "Gaming Desk",
    description: "Spacious gaming desk with cable management and RGB lighting",
    price: "199.99",
    image: "https://picsum.photos/id/38/500/500",
    category: "Gaming",
    quantity: 25,
    seller: "GamerFurniture",
    rating: 4.6,
    internationalShipping: true,
    city: "Denver",
    condition: "New",
    brand: "Arozzi",
    comments: ["Sturdy construction", "Great cable management"],
    specs: {
      color: "Black",
      weight: "30kg",
      model: "Arena"
    }
  },
  {
    product_id: "g9",
    name: "Gaming Streaming Microphone",
    description: "Professional-quality microphone for gaming and streaming",
    price: "129.99",
    image: "https://picsum.photos/id/39/500/500",
    category: "Gaming",
    quantity: 40,
    seller: "StreamerGear",
    rating: 4.7,
    internationalShipping: false,
    city: "Las Vegas",
    condition: "New",
    brand: "Blue",
    comments: ["Crystal clear audio", "Easy setup"],
    specs: {
      color: "Black",
      weight: "550g",
      model: "Yeti X"
    }
  },
  {
    product_id: "g10",
    name: "Gaming Router",
    description: "High-performance router optimized for online gaming",
    price: "249.99",
    image: "https://picsum.photos/id/40/500/500",
    category: "Gaming",
    quantity: 30,
    seller: "NetworkGaming",
    rating: 4.8,
    internationalShipping: true,
    city: "San Diego",
    condition: "New",
    brand: "ASUS",
    comments: ["Low ping", "Great coverage"],
    specs: {
      color: "Black",
      weight: "1.2kg",
      model: "ROG Rapture"
    }
  },

  // Phones products
  {
    product_id: "p1",
    name: "Flagship Smartphone",
    description: "Latest flagship smartphone with advanced camera system and powerful processor",
    price: "999.99",
    image: "https://picsum.photos/id/41/500/500",
    category: "Phones",
    quantity: 35,
    seller: "MobileTech",
    rating: 4.9,
    internationalShipping: true,
    city: "San Francisco",
    condition: "New",
    brand: "Apple",
    comments: ["Amazing camera quality", "All-day battery life"],
    specs: {
      color: "Midnight Blue",
      weight: "228g",
      model: "iPhone 13 Pro Max"
    }
  },
  {
    product_id: "p2",
    name: "Android Smartphone",
    description: "High-performance Android phone with 120Hz display and fast charging",
    price: "799.99",
    image: "https://picsum.photos/id/42/500/500",
    category: "Phones",
    quantity: 40,
    seller: "PhoneWorld",
    rating: 4.8,
    internationalShipping: false,
    city: "Seattle",
    condition: "New",
    brand: "Samsung",
    comments: ["Smooth performance", "Great display"],
    specs: {
      color: "Phantom Black",
      weight: "196g",
      model: "Galaxy S21 Ultra"
    }
  },
  {
    product_id: "p3",
    name: "Budget Smartphone",
    description: "Affordable smartphone with great features and long battery life",
    price: "299.99",
    image: "https://picsum.photos/id/43/500/500",
    category: "Phones",
    quantity: 50,
    seller: "ValueMobile",
    rating: 4.6,
    internationalShipping: true,
    city: "Chicago",
    condition: "New",
    brand: "Google",
    comments: ["Great value", "Clean Android experience"],
    specs: {
      color: "Sage",
      weight: "178g",
      model: "Pixel 6a"
    }
  },
  {
    product_id: "p4",
    name: "Foldable Smartphone",
    description: "Innovative foldable display with multitasking capabilities",
    price: "1499.99",
    image: "https://picsum.photos/id/44/500/500",
    category: "Phones",
    quantity: 20,
    seller: "FutureTech",
    rating: 4.7,
    internationalShipping: false,
    city: "New York",
    condition: "New",
    brand: "Samsung",
    comments: ["Revolutionary design", "Great for productivity"],
    specs: {
      color: "Phantom Silver",
      weight: "271g",
      model: "Galaxy Z Fold 3"
    }
  },
  {
    product_id: "p5",
    name: "Gaming Smartphone",
    description: "Designed for mobile gaming with cooling system and high refresh rate",
    price: "699.99",
    image: "https://picsum.photos/id/45/500/500",
    category: "Phones",
    quantity: 30,
    seller: "GamerMobile",
    rating: 4.8,
    internationalShipping: true,
    city: "Los Angeles",
    condition: "New",
    brand: "ASUS",
    comments: ["Amazing for games", "Great cooling system"],
    specs: {
      color: "Black Glare",
      weight: "239g",
      model: "ROG Phone 5"
    }
  },
  {
    product_id: "p6",
    name: "Camera Smartphone",
    description: "Smartphone with professional-grade camera system and editing tools",
    price: "899.99",
    image: "https://picsum.photos/id/46/500/500",
    category: "Phones",
    quantity: 25,
    seller: "PhotoTech",
    rating: 4.7,
    internationalShipping: false,
    city: "Miami",
    condition: "New",
    brand: "Sony",
    comments: ["DSLR-like photos", "Great manual controls"],
    specs: {
      color: "Frosted Black",
      weight: "186g",
      model: "Xperia 1 III"
    }
  },
  {
    product_id: "p7",
    name: "Rugged Smartphone",
    description: "Waterproof and shockproof smartphone for outdoor adventures",
    price: "599.99",
    image: "https://picsum.photos/id/47/500/500",
    category: "Phones",
    quantity: 35,
    seller: "OutdoorTech",
    rating: 4.6,
    internationalShipping: true,
    city: "Denver",
    condition: "New",
    brand: "CAT",
    comments: ["Virtually indestructible", "Great battery life"],
    specs: {
      color: "Yellow/Black",
      weight: "310g",
      model: "S62 Pro"
    }
  },
  {
    product_id: "p8",
    name: "5G Smartphone",
    description: "Future-proof smartphone with 5G connectivity and fast processor",
    price: "649.99",
    image: "https://picsum.photos/id/48/500/500",
    category: "Phones",
    quantity: 45,
    seller: "ConnectedTech",
    rating: 4.7,
    internationalShipping: false,
    city: "Boston",
    condition: "New",
    brand: "OnePlus",
    comments: ["Lightning fast", "Clean interface"],
    specs: {
      color: "Arctic Sky",
      weight: "189g",
      model: "9 Pro"
    }
  },
  {
    product_id: "p9",
    name: "Business Smartphone",
    description: "Secure smartphone with productivity features for business professionals",
    price: "749.99",
    image: "https://picsum.photos/id/49/500/500",
    category: "Phones",
    quantity: 30,
    seller: "BusinessTech",
    rating: 4.5,
    internationalShipping: true,
    city: "Washington DC",
    condition: "New",
    brand: "BlackBerry",
    comments: ["Great security features", "Physical keyboard"],
    specs: {
      color: "Business Black",
      weight: "192g",
      model: "Key2"
    }
  },
  {
    product_id: "p10",
    name: "Eco-Friendly Smartphone",
    description: "Sustainable smartphone made with recycled materials",
    price: "499.99",
    image: "https://picsum.photos/id/50/500/500",
    category: "Phones",
    quantity: 25,
    seller: "GreenTech",
    rating: 4.4,
    internationalShipping: false,
    city: "Portland",
    condition: "New",
    brand: "Fairphone",
    comments: ["Ethically produced", "Modular design for easy repair"],
    specs: {
      color: "Speckled Green",
      weight: "189g",
      model: "Fairphone 4"
    }
  },

  // Monitor products
  {
    product_id: "mon1",
    name: "Ultra-wide Gaming Monitor",
    description: "49-inch curved ultra-wide monitor with 144Hz refresh rate and HDR",
    price: "899.99",
    image: "https://picsum.photos/id/51/500/500",
    category: "Monitor",
    quantity: 20,
    seller: "DisplayTech",
    rating: 4.8,
    internationalShipping: false,
    city: "Seattle",
    condition: "New",
    brand: "Samsung",
    comments: ["Incredible immersion", "Perfect for productivity and gaming"],
    specs: {
      color: "Black",
      weight: "7.5kg",
      model: "Odyssey G9"
    }
  },
  {
    product_id: "mon2",
    name: "4K Professional Monitor",
    description: "32-inch 4K monitor with color accuracy for creative professionals",
    price: "699.99",
    image: "https://picsum.photos/id/52/500/500",
    category: "Monitor",
    quantity: 25,
    seller: "CreativeTech",
    rating: 4.9,
    internationalShipping: true,
    city: "San Francisco",
    condition: "New",
    brand: "Dell",
    comments: ["Amazing color accuracy", "Great for photo editing"],
    specs: {
      color: "Silver/Black",
      weight: "5.2kg",
      model: "UltraSharp U3219Q"
    }
  },
  {
    product_id: "mon3",
    name: "Budget 1080p Monitor",
    description: "24-inch Full HD monitor with IPS panel for everyday use",
    price: "149.99",
    image: "https://picsum.photos/id/53/500/500",
    category: "Monitor",
    quantity: 50,
    seller: "ValueDisplays",
    rating: 4.5,
    internationalShipping: false,
    city: "Chicago",
    condition: "New",
    brand: "Acer",
    comments: ["Great value", "Good color reproduction"],
    specs: {
      color: "Black",
      weight: "3.1kg",
      model: "Nitro VG240Y"
    }
  },
  {
    product_id: "mon4",
    name: "Portable USB-C Monitor",
    description: "15.6-inch portable monitor powered by USB-C for on-the-go productivity",
    price: "199.99",
    image: "https://picsum.photos/id/54/500/500",
    category: "Monitor",
    quantity: 35,
    seller: "MobileTech",
    rating: 4.6,
    internationalShipping: true,
    city: "New York",
    condition: "New",
    brand: "ASUS",
    comments: ["Great for travel", "Easy setup with laptops"],
    specs: {
      color: "Dark Gray",
      weight: "0.8kg",
      model: "ZenScreen MB16AC"
    }
  },
  {
    product_id: "mon5",
    name: "240Hz Esports Monitor",
    description: "27-inch 1080p monitor with 240Hz refresh rate for competitive gaming",
    price: "349.99",
    image: "https://picsum.photos/id/55/500/500",
    category: "Monitor",
    quantity: 30,
    seller: "EsportsGear",
    rating: 4.7,
    internationalShipping: false,
    city: "Los Angeles",
    condition: "New",
    brand: "BenQ",
    comments: ["Incredibly smooth gameplay", "Great for FPS games"],
    specs: {
      color: "Black/Red",
      weight: "4.2kg",
      model: "ZOWIE XL2546K"
    }
  },
  {
    product_id: "mon6",
    name: "Dual Monitor Stand",
    description: "Adjustable stand for two monitors with cable management",
    price: "89.99",
    image: "https://picsum.photos/id/56/500/500",
    category: "Monitor",
    quantity: 40,
    seller: "OfficeSolutions",
    rating: 4.5,
    internationalShipping: true,
    city: "Boston",
    condition: "New",
    brand: "VIVO",
    comments: ["Sturdy construction", "Easy to adjust"],
    specs: {
      color: "Black",
      weight: "5.5kg",
      model: "STAND-V002"
    }
  },
  {
    product_id: "mon7",
    name: "5K Retina Display",
    description: "27-inch 5K display with P3 wide color gamut",
    price: "1299.99",
    image: "https://picsum.photos/id/57/500/500",
    category: "Monitor",
    quantity: 15,
    seller: "AppleTech",
    rating: 4.9,
    internationalShipping: false,
    city: "Cupertino",
    condition: "New",
    brand: "Apple",
    comments: ["Stunning display quality", "Perfect for creative work"],
    specs: {
      color: "Silver",
      weight: "6.3kg",
      model: "Studio Display"
    }
  },
  {
    product_id: "mon8",
    name: "Touchscreen Monitor",
    description: "24-inch touchscreen monitor for interactive work",
    price: "299.99",
    image: "https://picsum.photos/id/58/500/500",
    category: "Monitor",
    quantity: 25,
    seller: "TouchTech",
    rating: 4.6,
    internationalShipping: true,
    city: "Austin",
    condition: "New",
    brand: "ViewSonic",
    comments: ["Responsive touch", "Great for digital artists"],
    specs: {
      color: "Black",
      weight: "4.8kg",
      model: "TD2421"
    }
  },
  {
    product_id: "mon9",
    name: "HDR Gaming Monitor",
    description: "32-inch 4K HDR monitor with 144Hz refresh rate",
    price: "799.99",
    image: "https://picsum.photos/id/59/500/500",
    category: "Monitor",
    quantity: 20,
    seller: "GamingDisplays",
    rating: 4.8,
    internationalShipping: false,
    city: "Denver",
    condition: "New",
    brand: "LG",
    comments: ["Amazing HDR performance", "Great for both gaming and content creation"],
    specs: {
      color: "Black",
      weight: "6.2kg",
      model: "UltraGear 32GN950"
    }
  },
  {
    product_id: "mon10",
    name: "Budget Ultrawide Monitor",
    description: "34-inch ultrawide curved monitor with 100Hz refresh rate",
    price: "349.99",
    image: "https://picsum.photos/id/60/500/500",
    category: "Monitor",
    quantity: 30,
    seller: "BudgetDisplays",
    rating: 4.5,
    internationalShipping: true,
    city: "Phoenix",
    condition: "New",
    brand: "MSI",
    comments: ["Great value ultrawide", "Good for productivity"],
    specs: {
      color: "Black",
      weight: "5.8kg",
      model: "MAG341CQ"
    }
  },

  // Hardware products
  {
    product_id: "hw1",
    name: "High-End Graphics Card",
    description: "Powerful GPU for gaming and content creation with ray tracing capabilities",
    price: "999.99",
    image: "https://picsum.photos/id/61/500/500",
    category: "Hardware",
    quantity: 15,
    seller: "PCComponents",
    rating: 4.9,
    internationalShipping: true,
    city: "San Francisco",
    condition: "New",
    brand: "NVIDIA",
    comments: ["Amazing performance", "Runs cool under load"],
    specs: {
      color: "Black",
      weight: "1.5kg",
      model: "RTX 4080"
    }
  },
  {
    product_id: "hw2",
    name: "Gaming CPU",
    description: "High-performance processor with multiple cores for gaming and multitasking",
    price: "549.99",
    image: "https://picsum.photos/id/62/500/500",
    category: "Hardware",
    quantity: 25,
    seller: "ProcessorTech",
    rating: 4.8,
    internationalShipping: false,
    city: "Seattle",
    condition: "New",
    brand: "AMD",
    comments: ["Great for gaming", "Excellent multi-core performance"],
    specs: {
      color: "Silver",
      weight: "0.3kg",
      model: "Ryzen 9 7950X"
    }
  },
  {
    product_id: "hw3",
    name: "NVMe SSD",
    description: "Ultra-fast storage solution for quick boot times and game loading",
    price: "199.99",
    image: "https://picsum.photos/id/63/500/500",
    category: "Hardware",
    quantity: 40,
    seller: "StorageSolutions",
    rating: 4.7,
    internationalShipping: true,
    city: "Boston",
    condition: "New",
    brand: "Samsung",
    comments: ["Lightning fast", "Easy installation"],
    specs: {
      color: "Black",
      weight: "0.1kg",
      model: "980 Pro 2TB"
    }
  },
  {
    product_id: "hw4",
    name: "Gaming Motherboard",
    description: "Feature-rich motherboard with RGB lighting and overclocking capabilities",
    price: "329.99",
    image: "https://picsum.photos/id/64/500/500",
    category: "Hardware",
    quantity: 20,
    seller: "PCBuilders",
    rating: 4.6,
    internationalShipping: false,
    city: "Chicago",
    condition: "New",
    brand: "ASUS",
    comments: ["Great BIOS features", "Solid build quality"],
    specs: {
      color: "Black/RGB",
      weight: "1.2kg",
      model: "ROG Strix X670E-E Gaming"
    }
  },
  {
    product_id: "hw5",
    name: "Liquid CPU Cooler",
    description: "All-in-one liquid cooling solution with RGB lighting",
    price: "149.99",
    image: "https://picsum.photos/id/65/500/500",
    category: "Hardware",
    quantity: 30,
    seller: "CoolingTech",
    rating: 4.7,
    internationalShipping: true,
    city: "Los Angeles",
    condition: "New",
    brand: "Corsair",
    comments: ["Keeps CPU cool under load", "Quiet operation"],
    specs: {
      color: "Black",
      weight: "1.0kg",
      model: "H150i Elite Capellix"
    }
  },
  {
    product_id: "hw6",
    name: "High-Capacity RAM Kit",
    description: "32GB DDR5 memory kit with RGB lighting for gaming and content creation",
    price: "249.99",
    image: "https://picsum.photos/id/66/500/500",
    category: "Hardware",
    quantity: 35,
    seller: "MemoryExperts",
    rating: 4.8,
    internationalShipping: false,
    city: "New York",
    condition: "New",
    brand: "G.Skill",
    comments: ["Fast and reliable", "Great overclocking potential"],
    specs: {
      color: "Black/RGB",
      weight: "0.2kg",
      model: "Trident Z5 RGB DDR5-6000"
    }
  },
  {
    product_id: "hw7",
    name: "Modular Power Supply",
    description: "80+ Platinum certified power supply with modular cables",
    price: "179.99",
    image: "https://picsum.photos/id/67/500/500",
    category: "Hardware",
    quantity: 25,
    seller: "PowerSolutions",
    rating: 4.9,
    internationalShipping: true,
    city: "Denver",
    condition: "New",
    brand: "Seasonic",
    comments: ["Rock solid reliability", "Silent operation"],
    specs: {
      color: "Black",
      weight: "1.8kg",
      model: "PRIME TX-850"
    }
  },
  {
    product_id: "hw8",
    name: "PC Case",
    description: "Mid-tower case with tempered glass panel and excellent airflow",
    price: "129.99",
    image: "https://picsum.photos/id/68/500/500",
    category: "Hardware",
    quantity: 20,
    seller: "CaseMasters",
    rating: 4.7,
    internationalShipping: false,
    city: "Miami",
    condition: "New",
    brand: "Lian Li",
    comments: ["Beautiful design", "Easy to build in"],
    specs: {
      color: "White",
      weight: "8.5kg",
      model: "O11 Dynamic"
    }
  },
  {
    product_id: "hw9",
    name: "Case Fans Pack",
    description: "Pack of 3 RGB fans for optimal airflow and aesthetics",
    price: "89.99",
    image: "https://picsum.photos/id/69/500/500",
    category: "Hardware",
    quantity: 40,
    seller: "CoolingExperts",
    rating: 4.6,
    internationalShipping: true,
    city: "Austin",
    condition: "New",
    brand: "Noctua",
    comments: ["Excellent airflow", "Very quiet"],
    specs: {
      color: "Brown/Beige",
      weight: "0.3kg",
      model: "NF-A12x25 PWM (3-pack)"
    }
  },
  {
    product_id: "hw10",
    name: "External Hard Drive",
    description: "Portable 4TB external hard drive for backups and storage",
    price: "119.99",
    image: "https://picsum.photos/id/70/500/500",
    category: "Hardware",
    quantity: 50,
    seller: "StorageSolutions",
    rating: 4.5,
    internationalShipping: false,
    city: "Portland",
    condition: "New",
    brand: "Western Digital",
    comments: ["Reliable storage", "Compact design"],
    specs: {
      color: "Black",
      weight: "0.25kg",
      model: "My Passport 4TB"
    }
  }
];
