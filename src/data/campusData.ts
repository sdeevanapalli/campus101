export interface Location {
  id: string;
  name: string;
  lat: number;
  lng: number;
  desc?: string;
  category: 'academic' | 'recreation' | 'food' | 'residential' | 'facilities' | 'sports';
  rating?: number;
  reviews?: number;
  popular?: boolean;
}

export interface Outlet {
  name: string;
  timing: string;
  closed?: boolean;
  category: 'food' | 'stationery' | 'services' | 'shopping';
  popular?: boolean;
  description?: string;
  menuImages?: string[];
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: 'academic' | 'cultural' | 'sports' | 'technical';
  image?: string;
}

export interface Review {
  id: string;
  locationId: string;
  rating: number;
  comment: string;
  author: string;
  date: string;
}

export interface CampusData {
  name: string;
  slug: string;
  description: string;
  image: string;
  mapCenter: [number, number];
  locations: Location[];
  outlets: Outlet[];
  // Optional list of outlet contact numbers for quick access
  outletPhones?: Array<{ name: string; phone: string }>;
  autoDrivers?: string[];
  busRoutes?: Array<{ route: string; times: string[] }>;
  warden?: Array<{ name: string; phone: Array<string>; email: string; bhavan:string; type?: 'Boys' | 'Girls'; role?: string }>;
  goacabs?: Array<{ name: string; vehicle: string; phone: Array<string>; }>;
  events: Event[];
  reviews: Review[];
  stats: {
    students: string;
    facilities: string;
    clubs: string;
    area: string;
  };
  heroImages: string[];
}

export const campusData: Record<string, CampusData> = {
  hyderabad: {
    name: "BITS Pilani, Hyderabad Campus",
    slug: "hyderabad",
    description: "The modern tech hub campus of BITS Pilani in Hyderabad, known for its state-of-the-art facilities and vibrant student life.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
    mapCenter: [17.544, 78.574],
    stats: {
      students: "3,000+",
      facilities: "50+",
      clubs: "40+",
      area: "200 acres"
    },
    heroImages: [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9a1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
    ],
    locations: [
      { 
        id: 'SAC', 
        name: 'SAC', 
        lat: 17.54090448861708, 
        lng: 78.57527103665713, 
        desc: "The Student Activities Centre (SAC) hosts club rooms, a dance room, gym, and space for practice and meetings. Great place for rehearsals or chilling.",
        category: 'recreation',
        popular: true
      },
      { 
        id: 'mess1', 
        name: 'Mess 1', 
        lat: 17.542382724185554, 
        lng: 78.57383333595718, 
        desc: "Mess 1 is the hotspot on campus. It's where most students eat, meet, and chill after classes. You'll often find music and friends hanging around here.",
        category: 'food',
        popular: true
      },
      { 
        id: 'mess2', 
        name: 'Mess 2', 
        lat: 17.5449069215431, 
        lng: 78.57519539689511, 
        desc: "Mess 2 is across the old hockey ground sits Mess 2. It's quieter, more spacious, and a good place if you want a peaceful meal.",
        category: 'food',
      },
      { 
        id: 'lib', 
        name: 'Library', 
        lat: 17.545853792704165, 
        lng: 78.57150321231636, 
        desc: "The campus library is a sanctuary for studying or finding reference books. It's open till late and has AC – major bonus during summers.",
        category: 'academic',
        popular: true
      },
      { 
        id: 'audi', 
        name: 'Auditorium', 
        lat: 17.545513750761355, 
        lng: 78.57087843149998, 
        desc: "The main auditorium for events, talks, and presentations. A key venue for cultural events and academic seminars.",
        category: 'facilities',
      },
      { 
        id: 'cp', 
        name: 'Connaught Place', 
        lat: 17.54203796959397, 
        lng: 78.57576688860827, 
        desc: "Connaught Place is a central hub area on campus, popular for gatherings and social activities.",
        category: 'recreation',
        popular: true
      },
      { 
        id: 'fountain', 
        name: 'Fountain', 
        lat: 17.54688441980337, 
        lng: 78.57212431161547, 
        desc: "A scenic fountain area that's perfect for evening walks and photo sessions. A peaceful spot on campus.",
        category: 'recreation',
      },
      { 
        id: 'll', 
        name: "Lover's Lane", 
        lat: 17.546845393115422, 
        lng: 78.57298386645695, 
        desc: "A romantic walkway popular among couples and friends for evening strolls and quiet conversations.",
        category: 'recreation',
        popular: true
      },
      { 
        id: 'rnt', 
        name: 'Road Not Taken', 
        lat: 17.54080249370755, 
        lng: 78.57403043467615, 
        desc: "A scenic pathway that's perfect for contemplative walks and enjoying nature on campus. (The real Lover's Lane IYKYK)",
        category: 'recreation',
      },
      { 
        id: 'swmg', 
        name: 'Swimming Pool', 
        lat: 17.540257034530534, 
        lng: 78.57677623770725, 
        desc: "Campus swimming pool facility for recreation and fitness. A great place to cool off and stay active.",
        category: 'sports',
      },
      { 
        id: 'rocks', 
        name: 'Rock Garden', 
        lat: 17.5445544074219, 
        lng: 78.5730200932779, 
        desc: "A beautifully landscaped rock garden area, perfect for relaxation and enjoying the natural beauty of campus.",
        category: 'recreation',
      },
      { 
        id: 'direc', 
        name: "Director's Quarter", 
        lat: 17.542873825568694, 
        lng: 78.57651452810894, 
        desc: "The residential area for the campus director and administrative offices.",
        category: 'facilities',
      },
      { 
        id: 'mc', 
        name: 'Medical Centre', 
        lat: 17.542041484380153, 
        lng: 78.57645388966053, 
        desc: "Campus medical facility providing healthcare services to students and staff. Emergency and routine medical care available.",
        category: 'facilities',
      },
      { 
        id: 'ofg', 
        name: 'Old Football Ground', 
        lat: 17.54359745113174, 
        lng: 78.57499151300111, 
        desc: "Comes alive at night. Great spot for chill, impromptu matches and kicking back with the gang.",
        category: 'sports',
        popular: true
      },
      { 
        id: 'nfg', 
        name: 'New Football Ground', 
        lat: 17.540979058114377, 
        lng: 78.57617359351049, 
        desc: "The fancier turf where official matches take place during fests. Still open for casual games when it is free; mix of pro vibes and chill scenes.",
        category: 'sports',
      },
      { 
        id: 'cg', 
        name: 'Cricket Ground', 
        lat: 17.539821974494863, 
        lng: 78.57731941388154, 
        desc: "Classic spot for gully-style cricket or full-blown matches. Always buzzing in the evenings with bat, ball, and banter.",
        category: 'sports',
      },
      { 
        id: 'vg', 
        name: 'Volleyball Ground', 
        lat: 17.54299589606132, 
        lng: 78.57538012811001, 
        desc: "Volleyball Ground right beside kabaddi and Amul. A solid combo of action and refreshment.",
        category: 'sports',
      },
      { 
        id: 'nab', 
        name: 'New Academic Block / Chess Courtyard', 
        lat: 17.545894062510076, 
        lng: 78.5695917200961, 
        desc: "New Academic Block is where a forgotten chess courtyard and a lone eatery quietly coexist.",
        category: 'academic',
      },
      { 
        id: 'oab', 
        name: 'Old Academic Block / Library Lawns', 
        lat: 17.545179101144704, 
        lng: 78.57116941506344, 
        desc: "Old Academic Block is where things actually happen louder busier and way more alive than its newer sleepy sibling.",
        category: 'academic',
      },
      { 
        id: 'valmiki', 
        name: 'Valmiki Bhavan', 
        lat: 17.545872952669946, 
        lng: 78.57470692913476,
        category: 'residential',
      },
      { 
        id: 'gautam', 
        name: 'Gautam Bhavan', 
        lat: 17.541604563227047, 
        lng: 78.5751704189681,
        category: 'residential',
      },
      { 
        id: 'krishnaram', 
        name: 'Krishna Bhavan / Ram Bhavan', 
        lat: 17.542746061934633, 
        lng: 78.57393606166247,
        category: 'residential',
      },
      { 
        id: 'gandhibudh', 
        name: 'Gandhi Bhavan / Budh Bhavan', 
        lat: 17.542578448925582, 
        lng: 78.57427698469752,
        category: 'residential',
      },
      { 
        id: 'vk', 
        name: 'Vishwakarma Bhavan', 
        lat: 17.54497398734834, 
        lng: 78.57644535482906,
        category: 'residential',
      },
      { 
        id: 'shankar', 
        name: 'Shankar Bhavan', 
        lat: 17.544722406131818, 
        lng: 78.57494826204248,
        category: 'residential',
      },
      { 
        id: 'vyas', 
        name: 'Vyas Bhavan', 
        lat: 17.54450090499368, 
        lng: 78.57535551716839,
        category: 'residential',
      },
      { 
        id: 'malviya', 
        name: 'Malviya Bhavan', 
        lat: 17.540998514798122, 
        lng: 78.57482350258248,
        category: 'residential',
      },
      { 
        id: 'meera', 
        name: 'Meera Bhavan', 
        lat: 17.54163340476832, 
        lng: 78.57402955343612,
        category: 'residential',
      },
      { 
        id: 'ganga', 
        name: 'Ganga Bhavan', 
        lat: 17.541954864432526, 
        lng: 78.57339341827591,
        category: 'residential',
      }
    ],
    outlets: [
      { 
        name: 'Heritage Stationery', 
        timing: '10:00 AM - 7:00 PM (Sunday closed)', 
        category: 'stationery',
        description: 'Complete stationery needs for students'
      },
      { 
        name: 'Agarwal Supermarket', 
        timing: '9:00 AM - 9:00 PM', 
        category: 'shopping',
        popular: true,
        description: 'One-stop shop for all daily needs'
      },
      { 
        name: 'Sri Sai Laundry', 
        timing: '9:00 AM - 9:00 PM (On Monday 9AM to 5PM)', 
        category: 'services',
        description: 'Professional laundry services'
      },
      { 
        name: 'Pleasant', 
        timing: '12:30PM - 03:30PM & 07:00 PM - 11:00 PM',
        category: 'food',
        description: 'Popular food outlet'
      },
      { 
        name: 'Protein Isle', 
        timing: '04:00 PM - 10:00 PM', 
        category: 'food',
        popular: true,
        description: 'Healthy protein shakes and snacks'
      },
      { 
        name: 'Agra Chat', 
        timing: '04:00 PM - 10:00 PM',
        category: 'food',
        description: 'Delicious street food and chaat'
      },
      { 
        name: 'Tea Time', 
        timing: '09:30 AM - 10:30 PM', 
        category: 'food',
        description: 'Best tea and snacks on campus'
      },
      { 
        name: 'Karturi Stationery', 
        timing: '5:00 PM - 8:00 PM', 
        category: 'stationery',
        description: 'Evening stationery shop'
      },
      { 
        name: 'Vijay Laxmi Enterprises', 
        timing: '09:00 AM - 09:00 PM', 
        category: 'stationery',
        description: 'Evening stationery shop'
      },
      { 
        name: 'CP05 VVS Stores', 
        timing: '12:00 PM - 10:00 PM', 
        category: 'shopping',
        description: 'General store with snacks'
      },
      { 
        name: 'Vegetable Shop', 
        timing: '10:30 AM - 9:00 PM', 
        category: 'shopping',
        description: 'Fresh vegetables and fruits'
      },
      { 
        name: 'Amul', 
        timing: '1:00 PM - 10:00 PM', 
        category: 'food',
        popular: true,
        description: 'Ice cream and dairy products'
      },
      { 
        name: 'Vijay Vahini', 
        timing: '08:30 AM - 02:00 AM', 
        category: 'food',
        description: 'South Indian food and snacks'
      },
      { 
        name: 'Thickshake', 
        timing: '09:30 AM - 11:30 PM', 
        category: 'food',
        description: 'Delicious milkshakes and beverages'
      },
      { 
        name: "Yummpy's", 
        timing: '08:00 AM - 02:00 AM', 
        category: 'food',
        popular: true,
        description: 'Late night food and snacks'
      },
      { 
        name: 'Hotspot', 
        timing: '09:00 AM - 03:20 AM', 
        category: 'food',
        description: 'Popular hangout spot with food'
      },
      { 
        name: 'Fruitful', 
        timing: '04:00 PM - 10:30 PM', 
        category: 'food',
        description: 'Popular hangout spot with food'
      },
      { 
        name: 'Wich Please', 
        timing: '05:00 PM - 01:45 AM', 
        category: 'food',
        description: 'Sandwiches and fast food'
      },
      { 
        name: 'SFC', 
        timing: '03:00 PM - 01:45 AM', 
        category: 'food',
        description: 'Sandwiches and fast food'
      },
      { 
        name: 'Nescafe', 
        timing: '02:00 PM - 02:00 AM', 
        category: 'food',
        description: 'Coffee and beverages'
      },
      { 
        name: 'Cafeteria', 
        timing: '8:00 AM - 8:00 PM', 
        category: 'food',
        description: 'Main campus cafeteria'
      },
      { 
        name: 'Domino\'s Pizza', 
        timing: '11:00 AM - 11:00 PM', 
        category: 'food',
        description: 'Main campus cafeteria'
      },
      { 
        name: 'C3', 
        timing: '03:00 PM - 02:00 AM', 
        category: 'food',
        description: 'Main campus cafeteria'
      },
      { 
        name: 'Campus Kitchen', 
        timing: '08:00 AM - 07:30 PM', 
        category: 'food',
        description: 'Main campus cafeteria'
      },
      { 
        name: 'Cafe Coffee Day', 
        timing: '09:00 AM - 05:30 PM', 
        category: 'food',
        description: 'Main campus cafeteria'
      },
      { 
        name: 'Goutham Cafe', 
        timing: '08:00 AM - 07:00 PM', 
        category: 'food',
        description: 'Main campus cafeteria'
      }
    ],
    outletPhones: [
      { name: 'Hotspot', phone: '70133 34805' },
      { name: "Yummpy's", phone: '93814 23625' },
      { name: 'SFC', phone: '99120 20026' },
      { name: 'WichPlease', phone: '82900 04921' },
      { name: 'Vijay Vahini', phone: '93937 37444' }
    ],
    autoDrivers: [
  '96035 11629', '98481 65044', '99484 83171', '90000 92037',
  '63025 36271', '98664 72092', '99599 78917', '96768 07459',
  '77023 86068', '95533 75890', '90106 97472', '97055 52391',
  '95248 76740', '98481 28649', '91775 20097', '80740 12874',
  '86869 37544', '90107 90411', '9951419388', '9912175784',
  '6302014403', '9908133959', '9948934098', '9542876740',
  '9989396607', '9705495353', '6281598329', '7416118766' 
    ],
    busRoutes: [
      { route: 'BPHC to Secunderabad / JBS', times: ['09:00 AM', '10:00 AM', '02:00 PM', '05:00 PM', '06:00 PM'] },
      { route: 'Secunderabad / JBS to BPHC', times: ['8:00 AM', '09:00 AM', '12:45 PM', '04:00 PM', '05:00 PM'] }
    ],
    events: [
      {
        id: '1',
        title: 'APOGEE 2024',
        date: '2024-03-15',
        time: '9:00 AM',
        location: 'Main Auditorium',
        description: 'Annual technical festival with workshops, competitions, and cultural events',
        category: 'technical',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop'
      },
      {
        id: '2',
        title: 'Cultural Night',
        date: '2024-03-20',
        time: '7:00 PM',
        location: 'SAC',
        description: 'Annual cultural celebration with music, dance, and performances',
        category: 'cultural',
        image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop'
      },
      {
        id: '3',
        title: 'Sports Meet',
        date: '2024-04-10',
        time: '8:00 AM',
        location: 'Sports Complex',
        description: 'Inter-hostel sports competition with various events',
        category: 'sports',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop'
      }
    ],
    reviews: [
      {
        id: '1',
        locationId: 'SAC',
        rating: 5,
        comment: 'Best place to hang out with friends! Great atmosphere and facilities.',
        author: 'Rahul K.',
        date: '2024-01-15'
      },
      {
        id: '2',
        locationId: 'mess1',
        rating: 4,
        comment: 'Good food and great place to meet people. Can get crowded during peak hours.',
        author: 'Priya S.',
        date: '2024-01-10'
      },
      {
        id: '3',
        locationId: 'lib',
        rating: 5,
        comment: 'Perfect study environment with AC and good lighting. Open till late!',
        author: 'Amit R.',
        date: '2024-01-08'
      }
    ],
    warden: [
    {
      name: 'Prof. Kumar Pranav Narayan',
      phone: ['9010202882'],
      email: 'pranav@hyderabad.bits-pilani.ac.in',
      bhavan: 'Vishwakarma Bhawan (Chief Warden)',
      type: 'Boys'
    },
    {
      name: 'Dr. Sounak Roy',
      phone: ['9010041783'],
      email: 'sounak.roy@hyderabad.bits-pilani.ac.in',
      bhavan: 'Vyas Bhavan',
      type: 'Boys'
    },
    {
      name: 'Dr. G R Sabareesh',
      phone: ['9010202832'],
      email: 'sabareesh@hyderabad.bits-pilani.ac.in',
      bhavan: 'Gandhi Bhavan',
      type: 'Boys'
    },
    {
      name: 'Dr. Onkar Kulkarni',
      phone: ['9010202813'],
      email: 'onkar@hyderabad.bits-pilani.ac.in',
      bhavan: 'Shankar Bhawan',
      type: 'Boys'
    },
    {
      name: 'Dr. Phaneendra Kiran Chaganti',
      phone: ['9010202831'],
      email: 'cpkiran@hyderabad.bits-pilani.ac.in',
      bhavan: 'Budh Bhawan',
      type: 'Boys'
    },
    {
      name: 'Dr. Syed Ershad Ahmed',
      phone: ['9010202805'],
      email: 'syed@hyderabad.bits-pilani.ac.in',
      bhavan: 'Ram Bhawan',
      type: 'Boys'
    },
    {
      name: 'Dr. Arkamitra Kar',
      phone: ['8334934610'],
      email: 'arkamitra.kar@hyderabad.bits-pilani.ac.in',
      bhavan: 'Gautam & Malaviya Bhavan',
      type: 'Boys'
    },
  {
    name: 'Dr. Subhash Goshal',
    phone: ['9705726162'],
    email: 'ghosal@hyderabad.bits-pilani.ac.in',
    bhavan: 'Krishna Bhawan',
    type: 'Boys'
  },
  {
    name: 'Dr Thota Nagaraju',
    phone: ['9052901073'],
    email: 'nagaraju@hyderabad.bits-pilani.ac.in',
    bhavan: 'Valmiki Bhawan',
    type: 'Boys'
  },
  {
    name: 'Dr. Swathi Biswas',
    phone: ['9010202848'],
    email: 'swati.biswas@hyderabad.bits-pilani.ac.in',
    bhavan: 'Meera Bhawan',
    type: 'Girls'
  },
  {
    name: 'Dr. D.Purnima',
    phone: ['9010202833'],
    email: 'dpurnima@hyderabad.bits-pilani.ac.in',
    bhavan: 'Malaviya Bhawan',
    type: 'Girls'
  },
  {
    name: 'Dr. Nitin Kotkunde',
    phone: ['9010451444'],
    email: 'nitink@hyderabad.bits-pilani.ac.in',
    bhavan: 'Valmiki Bhawan',
    type: 'Boys'
  },
  {
    name: 'Dr. Santosh Mohapatra',
    phone: ['9160796502'],
    email: 'santosh@hyderabad.bits-pilani.ac.in',
    bhavan: 'Vyas Bhawan',
    type: 'Boys'
  },
  {
    name: 'Dr. Mohan S C',
    phone: ['8096725644'],
    email: 'mohansc@hyderabad.bits-pilani.ac.in',
    bhavan: 'Gandhi Bhawan',
    type: 'Boys'
  },
  {
    name: 'Dr. Vivek Sharma',
    phone: ['9650131560'],
    email: 'viveksharma@hyderabad.bits-pilani.ac.in',
    bhavan: 'Shankar Bhawan',
    type: 'Boys'
  },
  {
    name: 'Dr. Pranesh Bhargava',
    phone: ['7988228215'],
    email: 'pranesh@hyderabad.bits-pilani.ac.in',
    bhavan: 'Budh Bhawan',
    type: 'Boys'
  },
  {
    name: 'Dr. Satish Kumar Dubey',
    phone: ['7036734387'],
    email: 'satishdubey@hyderabad.bits-pilani.ac.in',
    bhavan: 'Ram Bhawan',
    type: 'Boys'
  },
  {
    name: 'Dr. Jagan Mohan J',
    phone: ['9951225780'],
    email: 'manishkumar@hyderabad.bits-pilani.ac.in',
    bhavan: 'Gautam Bhawan',
    type: 'Boys'
  },
  {
    name: 'Dr. Manish Kumar',
    phone: ['8184836465'],
    email: 'alivelu@hyderabad.bits-pilani.ac.in',
    bhavan: 'Krishna Bhawan',
    type: 'Boys'
  },
  {
    name: 'Dr. T S L Radhika',
    phone: ['9848141337'],
    email: 'radhikatsl@hyderabad.bits-pilani.ac.in',
    bhavan: 'Meera Bhawan',
    type: 'Girls'
  },
  {
    name: 'Dr. Alivelu Manga Parimi',
    phone: ['9676533763'],
    email: 'alivelu@hyderabad.bits-pilani.ac.in',
    bhavan: 'Malaviya Bhawan',
    type: 'Girls'
  },
  {
    name: 'Dr. Shaikshavali Chitraganti',
    phone: ['7993724109'],
    email: 'shaik@hyderabad.bits-pilani.ac.in',
    bhavan: 'Vishwakarma Bhawan Part I',
    type: 'Boys'
  },
  {
    name: 'Dr. Piyush Khandelia',
    phone: ['9121784714'],
    email: 'piyush.khandelia@hyderabad.bits-pilani.ac.in',
    bhavan: 'Vishwakarma Bhawan Part II',
    type: 'Boys'
  },
  {
    name: 'Mr.Haridas',
    phone: ['9010202854'],
    email: 'haridas@hyderabad.bits-pilani.ac.in',
    bhavan: 'Krishna, Ram, Shanker Bhawan',
    type: 'Boys',
    role: 'Office Staff'
  },
  {
    name: 'Mr.Santhosh',
    phone: ['9010202835'],
    email: 'santhosh@hyderabad.bits-pilani.ac.in',
    bhavan: 'Gandhi, Budh, Vyas',
    type: 'Boys',
    role: 'Office Staff'
  },
  {
    name: 'Ms.Anitha',
    phone: ['9010202834'],
    email: 'anitha@hyderabad.bits-pilani.ac.in',
    bhavan: 'Malaviya Bhawan',
    type: 'Girls',
    role: 'Office Staff'
  },
  {
    name: 'Mrs.L.Vijitha',
    phone: ['9666360799'],
    email: 'vijitha@hyderabad.bits-pilani.ac.in',
    bhavan: 'Meera Bhawan',
    type: 'Girls',
    role: 'Office Staff'
  },
  {
    name: 'Mr. Khaja Moinuddin',
    phone: ['7674933646'],
    email: 'khaja@hyderabad.bits-pilani.ac.in',
    bhavan: 'Valmiki & Gautam Bhawan',
    type: 'Boys',
    role: 'Office Staff'
  },
  {
    name: 'K Srinivaslu',
    phone: ['9133014014'],
    email: 'sreenuks@hyderabad.bits-pilani.ac.in',
    bhavan: 'Vishwakarma Bhawan',
    type: 'Boys',
    role: 'Office Staff'
  },
  {
    name: 'Sanjay Saikia',
    phone: ['9912318419'],
    email: 'saikiasanjay@hyderabad.bits-pilani.ac.in',
    bhavan: 'Valmiki and Goutham Bhawan',
    type: 'Boys',
    role: 'Office Staff'
  },
  {
    name: 'Jugal',
    phone: ['9010202815'],
    email: 'jugal@hyderabad.bits-pilani.ac.in',
    bhavan: 'Vishwakarma Bhawan',
    type: 'Boys',
    role: 'Office Staff'
  },
  {
    name: 'Basanth',
    phone: ['7660069230'],
    email: 'basantha@hyderabad.bits-pilani.ac.in',
    bhavan: 'Vyas and Shankar',
    type: 'Boys',
    role: 'Office Staff'
  },
  {
    name: 'Paras',
    phone: ['9010743272'],
    email: 'parash@hyderabad.bits-pilani.ac.in',
    bhavan: 'Valmiki and Goutham bhawan',
    type: 'Boys',
    role: 'Office Staff'
  },
  {
    name: 'Devaji',
    phone: ['9951144753'],
    email: 'devaji@hyderabad.bits-pilani.ac.in',
    bhavan: 'Krishna and Ram bhawan',
    type: 'Boys',
    role: 'Office Staff'
  },
  {
    name: 'Bhagat',
    phone: ['9705923495'],
    email: 'Srikantbhajat081@gmail.com',
    bhavan: 'Vishwakarma Bhawan',
    type: 'Boys',
    role: 'Office Staff'
  },
  {
    name: 'Gaffur',
    phone: ['9866047888'],
    email: 'Mdgafur124@gmail.com',
    bhavan: 'Krishna and Ram bhawan',
    type: 'Boys',
    role: 'Office Staff'
  },
  {
    name: 'R MAHESH',
    phone: ['9666855208'],
    email: 'Rachakondamahesh1992@gmail.com',
    bhavan: 'Vishwakarma Bhawan',
    type: 'Boys',
    role: 'Office Staff'
  },
  {
    name: 'NERAJ KAR',
    phone: ['8639599039'],
    email: 'Nerajibits45@gmail.com',
    bhavan: 'Gandhi and Budh Bhawan',
    type: 'Boys',
    role: 'Office Staff'
  },
  {
    name: 'K. Anuradha',
    phone: ['9553900181'],
    email: 'anuradha@hyderabad.bits-pilani.ac.in',
    bhavan: 'Meera / Malaviya',
    type: 'Girls',
    role: 'Office Staff'
  },
  {
    name: 'B.Vijaya Laxmi',
    phone: ['9553464208'],
    email: 'vijayalaxmi@hyderabad.bits-pilani.ac.in',
    bhavan: 'Meera / Malaviya',
    type: 'Girls',
    role: 'Office Staff'
  },
  {
    name: 'I. Catherine',
    phone: ['7702857792'],
    email: 'KLTS Employee',
    bhavan: 'Meera / Malaviya',
    type: 'Girls',
    role: 'Office Staff'
  }
]
  },
  goa: {
    name: "BITS Pilani, K. K. Birla Goa Campus",
    slug: "goa",
    description: "Coastal paradise offering academic excellence with beachside serenity and modern facilities.",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
    mapCenter: [15.2993, 73.9872],
    stats: {
      students: "2,500+",
      facilities: "40+",
      clubs: "35+",
      area: "180 acres"
    },
    heroImages: [
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9a1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
    ],
    locations: [
      { 
        id: 'beach', 
        name: 'Campus Beach', 
        lat: 15.2993, 
        lng: 73.9872, 
        desc: "Private beach access for students. Perfect for evening walks, sunset views, and beach activities.",
        category: 'recreation',
        popular: true
      },
      { 
        id: 'library', 
        name: 'Central Library', 
        lat: 15.3000, 
        lng: 73.9880, 
        desc: "Modern library with extensive collection and study spaces with ocean views.",
        category: 'academic',
        popular: true
      },
      { 
        id: 'mess', 
        name: 'Main Mess', 
        lat: 15.3010, 
        lng: 73.9870, 
        desc: "Multi-cuisine mess with both vegetarian and non-vegetarian options. Great variety and quality.",
        category: 'food',
      },
      { 
        id: 'sports', 
        name: 'Sports Complex', 
        lat: 15.3020, 
        lng: 73.9860, 
        desc: "State-of-the-art sports facilities including indoor and outdoor courts.",
        category: 'sports',
      }
    ],
    outlets: [
  {
    name: 'FK',
    timing: '9:30 AM - 1:00 AM',
    category: 'shopping',
    popular: false,
    description: 'Local business',
    menuImages: [
      '/menu/FK1.webp',
      '/menu/FK2.webp'
    ]
  },
  {
    name: 'Subspot',
    timing: '9:30 AM - 1:00 AM',
    category: 'shopping',
    popular: false,
    description: 'Local business',
    menuImages: [
      '/menu/SUB1.webp',
      '/menu/SUB2.webp'
    ]
  },
  {
    name: 'Amul',
    timing: '08:30 AM - 03:30 AM',
    category: 'shopping',
    popular: false,
    description: 'Local business'
  },
  {
    name: 'Nescafé',
    timing: '8:00 AM - 7:30 PM',
    category: 'food',
    popular: false,
    description: 'Local business',
    menuImages: [
      '/menu/NESCAFE1.webp',
      '/menu/NESCAFE2.webp',
      '/menu/NESCAFE3.webp'
    ]
  },
  {
    name: 'Shetty and sons(IC)',
    timing: '8:00 AM - 7:30 PM',
    category: 'shopping',
    popular: false,
    description: 'Local business'
  },
  {
    name: 'Bdome(pragati)',
    timing: '9:00 AM - 9:00 PM',
    category: 'shopping',
    popular: false,
    description: 'Local business'
  },
  {
    name: 'INS',
    timing: '11:00 AM - 1:30 AM',
    category: 'shopping',
    popular: false,
    description: 'Local business',
    menuImages: [
      '/menu/INS1.webp',
      '/menu/INS2.webp',
      '/menu/INS3.webp',
      '/menu/INS4.webp'
    ]
  },
  {
    name: 'A side laundromat',
    timing: '9:00 AM - 8:00 PM',
    category: 'services',
    popular: false,
    description: 'Local business'
  },
  {
    name: 'Gaja',
    timing: '12:30 PM - 7:30 PM',
    category: 'shopping',
    popular: false,
    description: 'Local business',
    menuImages: [
      '/menu/GAJA.webp'
    ]
  },
  {
    name: 'JV Shetty mega mart',
    timing: '8:00 AM - 9:30 PM',
    category: 'shopping',
    popular: false,
    description: 'Local business'
  },
  {
    name: 'Pragati stationary(Malakar)',
    timing: '9:00 AM - 9:00 PM',
    category: 'stationery',
    popular: false,
    description: 'Local business'
  },
  {
    name: 'Silva laundry',
    timing: '2:00 PM - 8:30 PM',
    category: 'services',
    popular: false,
    description: 'Local business'
  },
  {
    name: 'Fruit and vegetable (Malakar)',
    timing: '11:30 AM - 9:30 PM',
    category: 'food',
    popular: false,
    description: 'Local business'
  },
  {
    name: 'Laxmi laundry',
    timing: '10:00 AM - 9:00 PM',
    category: 'services',
    popular: false,
    description: 'Local business'
  },
  {
    name: 'SBI bank',
    timing: '10:00 AM - 4:00 PM (Monday to Saturday)',
    category: 'services',
    popular: false,
    description: 'Local business'
  },
  {
    name: 'RC Restaurant',
    timing: '11:30 AM - 3:00 PM and 6:30 PM - 11:30 PM',
    category: 'food',
    popular: false,
    description: 'Local business'
  },
  {
    name: 'Tailor(Malakar)',
    timing: '7:00 PM - 9:00 PM',
    category: 'services',
    popular: false,
    description: 'Local business'
  },
  {
    name: 'Kheteshwar Electronics',
    timing: '4:00 PM - 8:00 PM',
    category: 'shopping',
    popular: false,
    description: 'Local business'
  },
  {
    name: 'Barber shop',
    timing: '11:00 AM - 8:00 PM (Tuesdays closed)',
    category: 'services',
    popular: false,
    description: 'Local business'
  },
  {
    name: 'Facial shop',
    timing: '10:30 AM - 7:00 PM (2:00 PM - 3:00 PM lunch break, Monday to Saturday)',
    category: 'services',
    popular: false,
    description: 'Local business'
  },
  {
    name: 'D side food truck',
    timing: '9:30 AM - 2:00 AM',
    category: 'food',
    popular: false,
    description: 'Local business',
    menuImages: [
      '/menu/D_SIDE.webp'
    ]
  },
  {
    name: 'Dominos',
    timing: '11:00 AM - 3:00 AM',
    category: 'food',
    popular: false,
    description: 'Local business'
  }
    ],
    outletPhones: [
      { name: 'FK', phone: 'TBD' },
      { name: 'Subspot', phone: 'TBD' },
      { name: 'Amul', phone: 'TBD' },
      { name: 'Nescafé', phone: 'TBD' }
    ],
    autoDrivers: [ //placeholders
      'Goa Driver 1 - 9876543210',
      'Goa Driver 2 - 9876543211'
    ],
    busRoutes: [
      { route: 'Campus to Panaji', times: ['7:00 AM', '5:00 PM'] },
      { route: 'Campus to Margao', times: ['8:00 AM', '6:00 PM'] }
    ],
    events: [
      {
        id: '1',
        title: 'Waves 2024',
        date: '2024-03-25',
        time: '6:00 PM',
        location: 'Beach Front',
        description: 'Annual beach festival with music, dance, and cultural performances.',
        category: 'cultural',
        image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop'
      }
    ],
    reviews: [
      {
        id: '1',
        locationId: 'beach',
        rating: 5,
        comment: 'Amazing beach access! Perfect for evening walks and sunset photography.',
        author: 'Maria G.',
        date: '2024-01-20'
      }
    ],
    goacabs: [
  {
    "name": "Kalidas Naik/Ramdas",
    "phone": [
      "9890211087",
      "9822809226"
    ],
    "vehicle": "WAGONR"
  },
  {
    "name": "Nelish/Riya taxi",
    "phone": [
      "9765081213"
    ],
    "vehicle": "4 wheeler/Baleno"
  },
  {
    "name": "Hemant",
    "phone": [
      "9822177493"
    ],
    "vehicle": "6 seater corola altis"
  },
  {
    "name": "Anil",
    "phone": [
      "9130855154",
      "8805209030"
    ],
    "vehicle": "Wagonr"
  },
  {
    "name": "Gonzalez(John)",
    "phone": [
      "9823139989"
    ],
    "vehicle": "BUS(17 seater)"
  },
  {
    "name": "Sunny",
    "phone": [
      "7757973665"
    ],
    "vehicle": "swift dzire"
  },
  {
    "name": "Ashok",
    "phone": [
      "9689087766"
    ],
    "vehicle": "traveller(20 seater), eco(6 seater)"
  },
  {
    "name": "Sunil Rathore",
    "phone": [
      "8668229736"
    ],
    "vehicle": "sumo(9 seater)"
  },
  {
    "name": "Hussain A",
    "phone": [
      "8208901429"
    ],
    "vehicle": "4 seater, wagonr/dzire"
  },
  {
    "name": "Chaitanya",
    "phone": [
      "9637088689"
    ],
    "vehicle": "hatchback/swift vxi"
  },
  {
    "name": "Imitaz",
    "phone": [
      "9834872026"
    ],
    "vehicle": "DZIRE(NIGHT),ERTIGA(DAY+NIGHT)"
  },
  {
    "name": "Vishal",
    "phone": [
      "7888219141"
    ],
    "vehicle": "ertiga(6 seater)"
  },
  {
    "name": "ananth",
    "phone": [
      "8484000582"
    ],
    "vehicle": "ertiga 6 seater/ wagonr(small)"
  },
  {
    "name": "Hanumanta",
    "phone": [
      "9096012310"
    ],
    "vehicle": "5 seater maruti baleno"
  },
  {
    "name": "Dilwar Khan",
    "phone": [
      "7507861713"
    ],
    "vehicle": "Swift Dzire"
  },
  {
    "name": "Maruti",
    "phone": [
      "9763154839"
    ],
    "vehicle": " (ertiga,dzire) , innova"
  },
  {
    "name": "Praveen",
    "phone": [
      "8208062388"
    ],
    "vehicle": "(4+ 1seater)baleno"
  },
  {
    "name": "Gopal ",
    "phone": [
      "9767635373"
    ],
    "vehicle": "ERTIGA(6 SEATER)"
  },
  {
    "name": "Umakant Naik",
    "phone": [
      "9890362468"
    ],
    "vehicle": "Swift Dzire"
  },
  {
    "name": "Shabeer ",
    "phone": [
      "9588449274"
    ],
    "vehicle": "4 seater Sedan(swift dzire)"
  },
  {
    "name": "Prakash",
    "phone": [
      "8530613831"
    ],
    "vehicle": "4 seater"
  },
  {
    "name": "Mahboob Khan ",
    "phone": [
      "9021580773"
    ],
    "vehicle": "4 seater"
  },
  {
    "name": "Santosh bhai ",
    "phone": [
      "9766422291"
    ],
    "vehicle": "4 seater (Dzire/Wagonr)"
  },
  {
    "name": "Anil Naik",
    "phone": [
      "9823998831"
    ],
    "vehicle": "4 seater"
  },
  {
    "name": "Ramesh Naik",
    "phone": [
      "9890695214"
    ],
    "vehicle": "Ertiga"
  }
],
warden: [
  {
    "name": "Dr. Sudeep Baudha",
    "phone": ["8871774354", "8956485930"],
    "email": "ch1warden@goa.bits-pilani.ac.in",
    "bhavan": "CH1"
  },
  {
    "name": "Dr. Varinder Singh",
    "phone": ["9822133154"],
    "email": "ch2warden@goa.bits-pilani.ac.in",
    "bhavan": "CH2"
  },
  {
    "name": "Dr. Indrani Talukdar",
    "phone": ["9890415048", "8956485931"],
    "email": "ch3warden@goa.bits-pilani.ac.in",
    "bhavan": "CH3"
  },
  {
    "name": "Dr. Indrani Talukdar",
    "phone": ["9890415048", "8956485931"],
    "email": "ch4warden@goa.bits-pilani.ac.in",
    "bhavan": "CH4"
  },
  {
    "name": "Dr. Ritika Jaswal",
    "phone": ["9897604635", "9876981347", "8956485932"],
    "email": "ch5warden@goa.bits-pilani.ac.in",
    "bhavan": "CH5"
  },
  {
    "name": "Dr. Ritika Jaswal",
    "phone": ["9897604635", "9876981347", "8956485932"],
    "email": "ch6warden@goa.bits-pilani.ac.in",
    "bhavan": "CH6"
  },
  {
    "name": "Dr. Anushaya Chittaranjan Mohapatra",
    "phone": ["7710035981", "8956485933"],
    "email": "ch7warden@goa.bits-pilani.ac.in",
    "bhavan": "CH7"
  },
  {
    "name": "Dr. Arfat Ahmad Sofi",
    "phone": ["9149960707", "7599325717", "8956485922"],
    "email": "ah1warden@goa.bits-pilani.ac.in",
    "bhavan": "AH1"
  },
  {
    "name": "Dr. Arfat Ahmad Sofi",
    "phone": ["9149960707", "7599325717", "8956485922"],
    "email": "ah2warden@goa.bits-pilani.ac.in",
    "bhavan": "AH2"
  },
  {
    "name": "Dr. Pradeep Boggarapu",
    "phone": ["9535248795", "8956485923"],
    "email": "ah3warden@goa.bits-pilani.ac.in",
    "bhavan": "AH3"
  },
  {
    "name": "Dr. Pratanshu Ranjan",
    "phone": ["9873498539", "8956485924"],
    "email": "ah4warden@goa.bits-pilani.ac.in",
    "bhavan": "AH4"
  },
  {
    "name": "Dr. Ashish Chittora",
    "phone": ["9167330585", "8956485925"],
    "email": "ah5warden@goa.bits-pilani.ac.in",
    "bhavan": "AH5"
  },
  {
    "name": "Dr. Raviprasad Aduri",
    "phone": ["8378071084", "8956485926"],
    "email": "ah6warden@goa.bits-pilani.ac.in",
    "bhavan": "AH6"
  },
  {
    "name": "Dr. Monojit Bhattacharya",
    "phone": ["8956485927"],
    "email": "ah7warden@goa.bits-pilani.ac.in",
    "bhavan": "AH7"
  },
  {
    "name": "Dr. Tusar Tirtha Saha",
    "phone": ["7478414241", "8956485928"],
    "email": "ah8warden@goa.bits-pilani.ac.in",
    "bhavan": "AH8"
  },
  {
    "name": "Dr. Naveen Gupta",
    "phone": ["8826388404", "8956485929"],
    "email": "ah9warden@goa.bits-pilani.ac.in",
    "bhavan": "AH9"
  },
  {
    "name": "Dr. Mohan Kumar Behera",
    "phone": ["9717482923", "8956485934"],
    "email": "dh1warden@goa.bits-pilani.ac.in",
    "bhavan": "DH1"
  },
  {
    "name": "Dr. Nilesh Dadashade Pawar",
    "phone": ["7838595727", "8956485935"],
    "email": "dh2warden@goa.bits-pilani.ac.in",
    "bhavan": "DH2"
  },
  {
    "name": "Dr. Ravikant Iamati",
    "phone": ["6366476438", "8956485936"],
    "email": "dh3warden@goa.bits-pilani.ac.in",
    "bhavan": "DH3"
  },
  {
    "name": "Dr. Kanchan Manna",
    "phone": ["9083174976", "9021957357", "8956485937"],
    "email": "dh4warden@goa.bits-pilani.ac.in",
    "bhavan": "DH4"
  },
  {
    "name": "Dr. Kiran Mali",
    "phone": ["9011091126", "8956485938"],
    "email": "dh5warden@goa.bits-pilani.ac.in",
    "bhavan": "DH5"
  },
  {
    "name": "Dr. Vivek Rangarajan",
    "phone": ["9176547871", "7499223142", "8956485939"],
    "email": "dh6warden@goa.bits-pilani.ac.in",
    "bhavan": "DH6"
  }
]

  },
  pilani: {
    name: "BITS Pilani, Pilani Campus",
    slug: "pilani",
    description: "Historic flagship campus where tradition meets innovation, offering the complete BITS experience.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
    mapCenter: [28.3670, 75.5880],
    stats: {
      students: "4,000+",
      facilities: "60+",
      clubs: "50+",
      area: "328 acres"
    },
    heroImages: [
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9a1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
    ],
    locations: [
      { 
        id: 'main', 
        name: 'Main Building', 
        lat: 28.3670, 
        lng: 75.5880, 
        desc: "Historic main building with administrative offices and lecture halls.",
        category: 'academic',
        popular: true
      },
      { 
        id: 'library', 
        name: 'Central Library', 
        lat: 28.3680, 
        lng: 75.5870, 
        desc: "Extensive library collection with rare books and manuscripts.",
        category: 'academic',
        popular: true
      },
      { 
        id: 'mess', 
        name: 'Main Mess', 
        lat: 28.3660, 
        lng: 75.5890, 
        desc: "Traditional mess serving authentic Rajasthani and North Indian cuisine.",
        category: 'food',
      }
    ],
    outlets: [
      { 
        name: 'Pilani Store', 
        timing: '8:00 AM - 9:00 PM', 
        category: 'shopping',
        description: 'Complete store for all student needs'
      },
      { 
        name: 'Campus Cafe', 
        timing: '9:00 AM - 11:00 PM', 
        category: 'food',
        popular: true,
        description: 'Popular hangout spot with great food'
      }
    ],
    // Placeholder phone numbers for Pilani outlets — replace with actual numbers when available
    outletPhones: [
      { name: 'Pilani Store', phone: 'TBD' },
      { name: 'Campus Cafe', phone: 'TBD' }
    ],
    autoDrivers: [
      'Pilani Driver 1 - 9876543210',
      'Pilani Driver 2 - 9876543211'
    ],
    busRoutes: [
      { route: 'Campus to Jaipur', times: ['6:00 AM', '4:00 PM'] },
      { route: 'Campus to Delhi', times: ['7:00 AM', '5:00 PM'] }
    ],
    events: [
      {
        id: '1',
        title: 'BOSM 2024',
        date: '2024-04-05',
        time: '9:00 AM',
        location: 'Main Ground',
        description: 'Annual sports meet with inter-college competitions',
        category: 'sports',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop'
      }
    ],
    reviews: [
      {
        id: '1',
        locationId: 'main',
        rating: 5,
        comment: 'Historic and beautiful campus with amazing architecture!',
        author: 'Vikram S.',
        date: '2024-01-25'
      }
    ]
  }
};

export const heroImages = [
  {
    title: "Hyderabad Campus",
    link: "/hyderabad",
    thumbnail: "/bitsh_audi.webp"
  },
  {
    title: "Goa Campus",
    link: "/goa",
    thumbnail: "/bitsg_done.webp"
  },
  {
    title: "Pilani Campus",
    link: "/pilani",
    thumbnail: "/bitsp_clock.webp"
  },
  {
    title: "BITS HYD",
    link: "/hyderabad",
    thumbnail: "/bitsh_workshop.webp"
  },
  {
    title: "BITS Goa",
    link: "/goa",
    thumbnail: "/bitsg_dome.webp"
  }
];
