export const categories = [
  {
    id: 1,
    name: 'Men',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Women',
    imageUrl: 'https://images.unsplash.com/photo-1492681290082-e932832941e6?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Accessories',
    imageUrl: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=800&h=600&fit=crop&q=80', // Kept original URL
  },
];

export const allProducts = [
  {
    id: 1,
    name: 'Classic Trench Coat',
    price: 220.00,
    category: 'Women',
    // imageUrl removed, images array added
    images: [
      'https://images.unsplash.com/photo-1521334884684-d80222895322?w=600&h=800&fit=crop&q=80', // Original imageUrl
      'https://images.unsplash.com/photo-1572804013427-4d7ca726b655?w=600&h=800&fit=crop&q=80', // Detail shot
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=800&fit=crop&q=80', // Model shot 2
    ],
    description: "An iconic staple, reimagined. Our Classic Trench Coat features a water-resistant cotton blend, timeless double-breasted silhouette, and adjustable belt. Perfect for transitional weather.",
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 2,
    name: 'Merino Wool Sweater',
    price: 95.00,
    category: 'Men',
    images: [
      'https://images.unsplash.com/photo-1686704814231-ef0474eea7f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774', // Original imageUrl
      'https://images.unsplash.com/photo-1611082536034-b33451018c1a?w=600&h=800&fit=crop&q=80', // Texture detail
    ],
    description: "Crafted from 100% extra-fine Merino wool, this crewneck sweater offers exceptional softness and warmth without the bulk. A versatile essential for any wardrobe.",
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 3,
    name: 'Unisex Graphic Tee',
    price: 45.00,
    category: 'Unisex',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop&q=80', // Original imageUrl
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop&q=80', // Back print maybe
    ],
    description: "Made from soft, breathable organic cotton. This relaxed-fit tee features a unique graphic print designed in-house. Perfect for everyday wear.",
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 4,
    name: 'High-Waist Denim',
    price: 110.00,
    category: 'Women',
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop&q=80', // Original imageUrl
      'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&h=800&fit=crop&q=80' // Different angle
    ],
    description: "Vintage-inspired high-waisted jeans with a modern straight-leg cut. Made from durable, non-stretch denim for an authentic feel.",
    sizes: ['24', '25', '26', '27', '28', '29', '30', '31', '32'],
  },
  {
    id: 5,
    name: 'Leather Loafers',
    price: 150.00,
    category: 'Men',
    images: [
      'https://images.unsplash.com/photo-1503602642458-232111445657?w=600&h=800&fit=crop&q=80', // Original imageUrl (Stool - maybe needs update?)
      'https://images.unsplash.com/photo-1560343090-f0409e925903?w=600&h=800&fit=crop&q=80', // Actual Loafers
      'https://images.unsplash.com/photo-1608256249266-417c419b4a4a?w=600&h=800&fit=crop&q=80', // Detail
    ],
    description: "Classic penny loafers crafted from supple full-grain leather. Features a durable sole and comfortable cushioned insole. Timeless style for any occasion.",
    sizes: ['7', '8', '9', '10', '11', '12', '13'],
  },
  {
    id: 6,
    name: 'Gold Accent Necklace',
    price: 75.00,
    category: 'Accessories',
    images: [
      'https://plus.unsplash.com/premium_photo-1740020265541-85563190b375?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774', // Original imageUrl
      'https://images.unsplash.com/photo-1611652033036-97666ee34c26?w=600&h=800&fit=crop&q=80', // On model
    ],
    description: "A delicate chain necklace featuring subtle gold-plated accents. Perfect for layering or wearing alone for a touch of minimalist elegance.",
    sizes: ['OS'], // One Size
  },
  {
    id: 7,
    name: 'Linen Button-Down',
    price: 88.00,
    category: 'Men',
    images: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&h=800&fit=crop&q=80', // Original imageUrl
      'https://images.unsplash.com/photo-1622519137603-39c26b1f20c8?w=600&h=800&fit=crop&q=80', // Detail/Texture
    ],
    description: "Stay cool and comfortable in this breathable linen button-down shirt. Features a relaxed fit and natural texture, ideal for warm weather.",
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 8,
    name: 'Silk Slip Dress',
    price: 190.00,
    category: 'Women',
    images: [
      'https://plus.unsplash.com/premium_photo-1682965697785-b52d318be99c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774', // Original imageUrl
      'https://images.unsplash.com/photo-1595431505531-6b081b0a8c2c?w=600&h=800&fit=crop&q=80', // Different angle
    ],
    description: "Luxurious slip dress made from 100% mulberry silk. Features adjustable spaghetti straps and a flattering bias cut. Dress it up or down.",
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 9,
    name: 'Oversized Hoodie',
    price: 120.00,
    category: 'Unisex',
    images: [
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&h=800&fit=crop&q=80', // Original imageUrl
      'https://images.unsplash.com/photo-1556157382-97eda2d622e3?w=600&h=800&fit=crop&q=80', // On model
    ],
    description: "Ultimate comfort meets modern style. This oversized hoodie is crafted from heavyweight organic cotton fleece with a soft brushed interior.",
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 10,
    name: 'Leather Crossbody Bag',
    price: 250.00,
    category: 'Accessories',
    images: [
      'https://plus.unsplash.com/premium_photo-1671028547411-12a7fb233ddd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774', // Original imageUrl
      'https://images.unsplash.com/photo-1594223274522-0742531d36b7?w=600&h=800&fit=crop&q=80', // Lifestyle/In use
    ],
    description: "A timeless crossbody bag made from smooth, durable leather. Features an adjustable strap, multiple compartments, and minimalist hardware.",
    sizes: ['OS'], // One Size
  },
  {
    id: 11,
    name: 'Tailored Trousers',
    price: 130.00,
    category: 'Women',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop&q=80', // Original imageUrl
      'https://images.unsplash.com/photo-1542295669-6331du525f0e?w=600&h=800&fit=crop&q=80', // Detail/Fabric
    ],
    description: "Polished and comfortable tailored trousers with a high waist and wide-leg silhouette. Made from a soft, draping fabric suitable for work or weekend.",
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 12,
    name: 'Canvas Sneakers',
    price: 105.00,
    category: 'Unisex',
    images: [
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&h=800&fit=crop&q=80', // Original imageUrl (Fashion Items - needs update?)
      'https://images.unsplash.com/photo-1512374382149-238002517887?w=600&h=800&fit=crop&q=80', // Actual Sneakers
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=800&fit=crop&q=80', // Lifestyle
    ],
    description: "Classic low-top sneakers crafted from durable organic cotton canvas. Features a comfortable cushioned footbed and vulcanized rubber sole.",
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
  }
];