// Memories Photography - Curated Data & Imagery Matching the Design System

export const BRAND = {
  name: "MEMORIES PHOTOGRAPHY",
  tagline: "We capture moments. You keep the memories.",
  subtagline: "Wedding Photography • Cinematic Films • Portraits",
  founder: {
    name: "M.S. Annadurai",
    role: "Founder / Cinematographer",
    bio: "With a passion for storytelling and an eye for detail, we bring your special moments to life through our lens.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80",
    experience: "6+ Years of Experience",
    families: "100+ Happy Families",
    moments: "1000+ Moments Captured",
  },
  branches: ["NAGERCOIL", "CHENNAI", "COIMBATORE", "TIRUNELVELI"],
  contact: {
    phone: "+91 98765 43210",
    phoneDisplay: "+91 98765 43210",
    whatsapp: "+919876543210",
    whatsappDisplay: "+91 98765 43210",
    email: "hello@memoriesphotography.in",
    instagram: "@memoriesphotography_nagercoil",
    address: {
      nagercoil: "No. 42, Cape Road, Near Vadasery, Nagercoil, Tamil Nadu 629001",
      chennai: "12, TTK Road, Alwarpet, Chennai 600018",
      coimbatore: "88, Race Course Road, Coimbatore 641018",
      tirunelveli: "15, South Bypass Road, Tirunelveli 627005"
    }
  }
};

export const CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'weddings', name: 'Weddings', icon: 'HeartHandshake' },
  { id: 'engagements', name: 'Engagements', icon: 'Sparkles' },
  { id: 'celebrations', name: 'Celebrations', icon: 'PartyPopper' },
  { id: 'babies', name: 'Babies & Family', icon: 'Smile' },
  { id: 'portraits', name: 'Portraits', icon: 'Camera' },
];

export const FEATURED_STORIES = [
  {
    id: 'aarav-priya',
    title: 'Aarav & Priya',
    subtitle: 'Wedding Story',
    category: 'weddings',
    coverImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'engagement',
    title: 'Engagement',
    subtitle: 'Love & Togetherness',
    category: 'engagements',
    coverImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'baby-shower',
    title: 'Baby Shower',
    subtitle: 'New Beginnings',
    category: 'babies',
    coverImage: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'birthday',
    title: 'Birthday',
    subtitle: 'Little Moments',
    category: 'celebrations',
    coverImage: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=85',
  }
];

export const GALLERY_STORIES = [
  {
    id: 'story-1',
    title: 'Aarav & Priya',
    subtitle: 'Wedding Story • Chennai',
    category: 'weddings',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80',
    span: 'col-span-12 md:col-span-8 row-span-2',
    aspect: 'aspect-[4/3] md:aspect-[16/10]',
    featured: true,
  },
  {
    id: 'story-2',
    title: 'Golden Sunset Rituals',
    subtitle: 'Engagement • Nagercoil',
    category: 'engagements',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    span: 'col-span-12 md:col-span-4 row-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'story-3',
    title: 'New Born Glow',
    subtitle: 'Baby Shower • Coimbatore',
    category: 'babies',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    span: 'col-span-12 md:col-span-4 row-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'story-4',
    title: 'Mehendi & Colors',
    subtitle: 'Celebrations • Tirunelveli',
    category: 'celebrations',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80',
    span: 'col-span-12 md:col-span-4 row-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'story-5',
    title: 'The Royal Garland',
    subtitle: 'Wedding Story • Madurai',
    category: 'weddings',
    image: 'https://images.unsplash.com/photo-1519225438865-c8c366ff5b6c?auto=format&fit=crop&w=800&q=80',
    span: 'col-span-12 md:col-span-4 row-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'story-6',
    title: 'Editorial Silhouette',
    subtitle: 'Portraits • Kanyakumari Shore',
    category: 'portraits',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80',
    span: 'col-span-12 md:col-span-4 row-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'story-7',
    title: 'Siddharth & Meera',
    subtitle: 'Wedding Ceremony • Nagercoil',
    category: 'weddings',
    image: 'https://images.unsplash.com/photo-1545232979-fbf68fe9b1af?auto=format&fit=crop&w=800&q=80',
    span: 'col-span-12 md:col-span-6 row-span-1',
    aspect: 'aspect-[16/9]',
  },
  {
    id: 'story-8',
    title: 'Little Princess Turns One',
    subtitle: 'Birthday • Chennai',
    category: 'celebrations',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    span: 'col-span-12 md:col-span-6 row-span-1',
    aspect: 'aspect-[16/9]',
  }
];

export const STORY_DETAIL_DATA = {
  title: "Aarav & Priya",
  type: "Wedding Story • Chennai & Nagercoil",
  breadcrumbs: ["Stories", "Weddings", "Aarav & Priya"],
  quote: "A celebration of two families, one beautiful beginning.",
  storyBody: "Set amidst ancient pillars and fragrant jasmine garlands, Aarav and Priya’s celebration brought together heartfelt Tamil traditions and modern cinematic elegance. From dawn mangala vaadhyam to twilight oceanfront promises, our lenses were there to capture every tear, smile, and shared whisper.",
  details: {
    venue: "Leela Palace & Heritage Mandapam",
    date: "November 2024",
    leadPhotographer: "M.S. Annadurai",
    deliverables: "Cinematic 4K Film, 1,200 High-Res Photos, 2 Handcrafted Albums"
  },
  heroImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1400&q=80",
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
      caption: "The sacred garland exchange amidst showers of marigold petals"
    },
    {
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
      caption: "Intimate candid laughter during the evening reception"
    },
    {
      src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80",
      caption: "Detailed bridal jewellery and intricate henna artistry"
    },
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      caption: "Sunset outdoor portrait by the coastal coconut palms"
    },
    {
      src: "https://images.unsplash.com/photo-1545232979-fbf68fe9b1af?auto=format&fit=crop&w=800&q=80",
      caption: "Grand family blessing ceremony"
    }
  ]
};

export const SERVICES = [
  {
    id: 'weddings',
    title: 'Weddings',
    subtitle: 'Your wedding happens once. Your photographs let you relive it forever.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    tags: ['Candid Photography', 'Traditional Rituals', 'Drone Cinematography', 'Luxury Albums'],
    description: 'Comprehensive coverage from pre-wedding rituals to the grand reception, curated with editorial panache and genuine human emotion.'
  },
  {
    id: 'engagements',
    title: 'Engagements',
    subtitle: 'Before the wedding, there is a story worth remembering.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    tags: ['Ring Ceremony', 'Couple Portraits', 'Teaser Reel', 'Outdoor Shoots'],
    description: 'The prelude to your forever story. Natural, romantic portraits and joyful celebration with your closest circle.'
  },
  {
    id: 'celebrations',
    title: 'Celebrations',
    subtitle: 'Birthdays, baby showers, Anniversaries and more.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
    tags: ['Baby Showers', 'Milestone Birthdays', 'Anniversaries', 'Housewarming'],
    description: 'Lively, candid captures that freeze the smiles, dances, and vibrant colors of life’s most cherished milestones.'
  },
  {
    id: 'portraits',
    title: 'Portraits',
    subtitle: 'Couples, Baby, Family and individual portraits.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    tags: ['Editorial Look', 'Maternity', 'Graduation', 'Studio Lighting'],
    description: 'Artistic, timeless studio & natural light portraits crafted with intimate lighting and mindful composition.'
  }
];

export const PACKAGES = [
  {
    id: 'birthday-baby',
    name: 'Birthday / Baby Shower',
    price: '₹ 17,000',
    priceNumber: 17000,
    tagline: 'Perfect for intimate family gatherings',
    features: [
      'Photography with Candid focus',
      'Soft Copies of the Event (Full HD)',
      'Professional Color Grading & Retouching',
      '4-5 Hours Event Coverage',
      'Highlight Web Gallery with Instant Share'
    ],
    highlight: false,
    badge: 'Popular for Intimate Events'
  },
  {
    id: 'engagement',
    name: 'Engagement',
    price: '₹ 75,000',
    priceNumber: 75000,
    tagline: 'Comprehensive couple & ceremony coverage',
    features: [
      'Candid Photography by Senior Artist',
      'Candid Videography & Cinematic Teaser',
      'Traditional Photography & Stage Coverage',
      'Traditional Videography (Full Event Edit)',
      'Outdoor Couple Mini-Session',
      'Delivered in Custom Wooden USB Gift Box'
    ],
    highlight: false,
    badge: 'Most Complete Pre-Wedding'
  },
  {
    id: 'wedding-reception',
    name: 'Wedding & Reception',
    price: '₹ 1,50,000',
    priceNumber: 150000,
    tagline: 'Our signature full-experience wedding production',
    features: [
      'Dual Lead Candid Photographers',
      'Traditional Photography (2 Photographers)',
      'Outdoor Pre/Post Wedding Photoshoot',
      'Cinematic Videography + 4K Wedding Film',
      'Aerial 4K Drone Coverage (Subject to clearance)',
      'Handcrafted Premium Leather Album (2 Copies)',
      'Same-Day / 48-Hour Social Reel'
    ],
    highlight: true,
    badge: 'Most Loved & Signature'
  }
];

export const FILMS = [
  {
    id: 'film-1',
    number: '01',
    title: 'A Wedding Story',
    couple: 'Aarav & Priya',
    location: 'Chennai & Nagercoil',
    duration: '4:20 min',
    thumbnail: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'A heartfelt cinematic journey celebrating ocean winds, sacred sacred vows, and two loving families coming together.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-smiling-and-looking-at-each-other-42868-large.mp4'
  },
  {
    id: 'film-2',
    number: '02',
    title: 'An Engagement Story',
    couple: 'Karthik & Ananya',
    location: 'Coimbatore Foothills',
    duration: '3:15 min',
    thumbnail: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'Lush tea plantations, stolen laughter, and a golden hour promise whispered before sunset.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-couple-walking-through-a-green-park-42844-large.mp4'
  },
  {
    id: 'film-3',
    number: '03',
    title: 'A Celebration',
    couple: 'Siddharth & Meera',
    location: 'Nagercoil Coastal Heritage',
    duration: '5:10 min',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'An exuberant 3-day Sangeet, Haldi, and Muhurtham celebration filled with timeless joy and color.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-happy-bride-and-groom-celebrating-their-wedding-day-42858-large.mp4'
  }
];

export const INSTAGRAM_POSTS = [
  { id: 1, img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80', likes: '1.4k', caption: 'The bride in red silk elegance ✨ #MemoriesPhotography' },
  { id: 2, img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80', likes: '980', caption: 'Unfiltered candid smiles are our favourite 💫' },
  { id: 3, img: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80', likes: '2.1k', caption: 'Temple architecture meets golden light 🏛️' },
  { id: 4, img: 'https://images.unsplash.com/photo-1545232979-fbf68fe9b1af?auto=format&fit=crop&w=600&q=80', likes: '1.8k', caption: 'Haldi ceremonies that bring pure joy 💛' },
  { id: 5, img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80', likes: '1.2k', caption: 'Celebrating one year of tiny steps and giggles 🎈' },
  { id: 6, img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80', likes: '3.4k', caption: 'Sunset walk at Kanyakumari shoreline 🌊' },
  { id: 7, img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80', likes: '2.5k', caption: 'A tender promise before the ceremony begins 💍' },
  { id: 8, img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80', likes: '890', caption: 'Behind the lens with team Memories 🎥' },
  { id: 9, img: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=80', likes: '1.9k', caption: 'Grand floral stage & fairy lights backdrop 🌸' }
];
