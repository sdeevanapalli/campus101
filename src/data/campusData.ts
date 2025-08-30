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
  rating?: number;
  reviews?: number;
  category: 'food' | 'stationery' | 'services' | 'shopping';
  popular?: boolean;
  description?: string;
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
        rating: 4.5,
        reviews: 127,
        popular: true
      },
      { 
        id: 'mess1', 
        name: 'Mess 1', 
        lat: 17.542382724185554, 
        lng: 78.57383333595718, 
        desc: "Mess 1 is the hotspot on campus. It's where most students eat, meet, and chill after classes. You'll often find music and friends hanging around here.",
        category: 'food',
        rating: 4.2,
        reviews: 89,
        popular: true
      },
      { 
        id: 'mess2', 
        name: 'Mess 2', 
        lat: 17.5449069215431, 
        lng: 78.57519539689511, 
        desc: "Mess 2 is across the old hockey ground sits Mess 2. It's quieter, more spacious, and a good place if you want a peaceful meal.",
        category: 'food',
        rating: 4.0,
        reviews: 67
      },
      { 
        id: 'lib', 
        name: 'Library', 
        lat: 17.545853792704165, 
        lng: 78.57150321231636, 
        desc: "The campus library is a sanctuary for studying or finding reference books. It's open till late and has AC – major bonus during summers.",
        category: 'academic',
        rating: 4.7,
        reviews: 156,
        popular: true
      },
      { 
        id: 'audi', 
        name: 'Auditorium', 
        lat: 17.545513750761355, 
        lng: 78.57087843149998, 
        desc: "The main auditorium for events, talks, and presentations. A key venue for cultural events and academic seminars.",
        category: 'facilities',
        rating: 4.3,
        reviews: 78
      },
      { 
        id: 'cp', 
        name: 'Connaught Place', 
        lat: 17.54203796959397, 
        lng: 78.57576688860827, 
        desc: "Connaught Place is a central hub area on campus, popular for gatherings and social activities.",
        category: 'recreation',
        rating: 4.4,
        reviews: 92,
        popular: true
      },
      { 
        id: 'fountain', 
        name: 'Fountain', 
        lat: 17.54688441980337, 
        lng: 78.57212431161547, 
        desc: "A scenic fountain area that's perfect for evening walks and photo sessions. A peaceful spot on campus.",
        category: 'recreation',
        rating: 4.6,
        reviews: 45
      },
      { 
        id: 'll', 
        name: "Lover's Lane", 
        lat: 17.546845393115422, 
        lng: 78.57298386645695, 
        desc: "A romantic walkway popular among couples and friends for evening strolls and quiet conversations.",
        category: 'recreation',
        rating: 4.8,
        reviews: 203,
        popular: true
      },
      { 
        id: 'rnt', 
        name: 'Road Not Taken', 
        lat: 17.54080249370755, 
        lng: 78.57403043467615, 
        desc: "A scenic pathway that's perfect for contemplative walks and enjoying nature on campus. (The real Lover's Lane IYKYK)",
        category: 'recreation',
        rating: 4.7,
        reviews: 89
      },
      { 
        id: 'swmg', 
        name: 'Swimming Pool', 
        lat: 17.540257034530534, 
        lng: 78.57677623770725, 
        desc: "Campus swimming pool facility for recreation and fitness. A great place to cool off and stay active.",
        category: 'sports',
        rating: 4.1,
        reviews: 56
      },
      { 
        id: 'rocks', 
        name: 'Rock Garden', 
        lat: 17.5445544074219, 
        lng: 78.5730200932779, 
        desc: "A beautifully landscaped rock garden area, perfect for relaxation and enjoying the natural beauty of campus.",
        category: 'recreation',
        rating: 4.3,
        reviews: 34
      },
      { 
        id: 'direc', 
        name: "Director's Quarter", 
        lat: 17.542873825568694, 
        lng: 78.57651452810894, 
        desc: "The residential area for the campus director and administrative offices.",
        category: 'facilities',
        rating: 3.8,
        reviews: 12
      },
      { 
        id: 'mc', 
        name: 'Medical Centre', 
        lat: 17.542041484380153, 
        lng: 78.57645388966053, 
        desc: "Campus medical facility providing healthcare services to students and staff. Emergency and routine medical care available.",
        category: 'facilities',
        rating: 4.4,
        reviews: 67
      },
      { 
        id: 'ofg', 
        name: 'Old Football Ground', 
        lat: 17.54359745113174, 
        lng: 78.57499151300111, 
        desc: "Comes alive at night. Great spot for chill, impromptu matches and kicking back with the gang.",
        category: 'sports',
        rating: 4.5,
        reviews: 78,
        popular: true
      },
      { 
        id: 'nfg', 
        name: 'New Football Ground', 
        lat: 17.540979058114377, 
        lng: 78.57617359351049, 
        desc: "The fancier turf where official matches take place during fests. Still open for casual games when it is free; mix of pro vibes and chill scenes.",
        category: 'sports',
        rating: 4.6,
        reviews: 45
      },
      { 
        id: 'cg', 
        name: 'Cricket Ground', 
        lat: 17.539821974494863, 
        lng: 78.57731941388154, 
        desc: "Classic spot for gully-style cricket or full-blown matches. Always buzzing in the evenings with bat, ball, and banter.",
        category: 'sports',
        rating: 4.4,
        reviews: 89
      },
      { 
        id: 'vg', 
        name: 'Volleyball Ground', 
        lat: 17.54299589606132, 
        lng: 78.57538012811001, 
        desc: "Volleyball Ground right beside kabaddi and Amul. A solid combo of action and refreshment.",
        category: 'sports',
        rating: 4.2,
        reviews: 34
      },
      { 
        id: 'nab', 
        name: 'New Academic Block / Chess Courtyard', 
        lat: 17.545894062510076, 
        lng: 78.5695917200961, 
        desc: "New Academic Block is where a forgotten chess courtyard and a lone eatery quietly coexist.",
        category: 'academic',
        rating: 4.0,
        reviews: 56
      },
      { 
        id: 'oab', 
        name: 'Old Academic Block / Library Lawns', 
        lat: 17.545179101144704, 
        lng: 78.57116941506344, 
        desc: "Old Academic Block is where things actually happen louder busier and way more alive than its newer sleepy sibling.",
        category: 'academic',
        rating: 4.3,
        reviews: 78
      },
      { 
        id: 'valmiki', 
        name: 'Valmiki Bhavan', 
        lat: 17.545872952669946, 
        lng: 78.57470692913476,
        category: 'residential',
        rating: 4.1,
        reviews: 45
      },
      { 
        id: 'gautam', 
        name: 'Gautam Bhavan', 
        lat: 17.541604563227047, 
        lng: 78.5751704189681,
        category: 'residential',
        rating: 4.2,
        reviews: 52
      },
      { 
        id: 'krishnaram', 
        name: 'Krishna Bhavan / Ram Bhavan', 
        lat: 17.542746061934633, 
        lng: 78.57393606166247,
        category: 'residential',
        rating: 4.0,
        reviews: 38
      },
      { 
        id: 'gandhibudh', 
        name: 'Gandhi Bhavan / Budh Bhavan', 
        lat: 17.542578448925582, 
        lng: 78.57427698469752,
        category: 'residential',
        rating: 4.1,
        reviews: 41
      },
      { 
        id: 'vk', 
        name: 'Vishwakarma Bhavan', 
        lat: 17.54497398734834, 
        lng: 78.57644535482906,
        category: 'residential',
        rating: 4.3,
        reviews: 47
      },
      { 
        id: 'shankar', 
        name: 'Shankar Bhavan', 
        lat: 17.544722406131818, 
        lng: 78.57494826204248,
        category: 'residential',
        rating: 4.0,
        reviews: 39
      },
      { 
        id: 'vyas', 
        name: 'Vyas Bhavan', 
        lat: 17.54450090499368, 
        lng: 78.57535551716839,
        category: 'residential',
        rating: 4.2,
        reviews: 43
      },
      { 
        id: 'malviya', 
        name: 'Malviya Bhavan', 
        lat: 17.540998514798122, 
        lng: 78.57482350258248,
        category: 'residential',
        rating: 4.1,
        reviews: 40
      },
      { 
        id: 'meera', 
        name: 'Meera Bhavan', 
        lat: 17.54163340476832, 
        lng: 78.57402955343612,
        category: 'residential',
        rating: 4.0,
        reviews: 37
      },
      { 
        id: 'ganga', 
        name: 'Ganga Bhavan', 
        lat: 17.541954864432526, 
        lng: 78.57339341827591,
        category: 'residential',
        rating: 4.2,
        reviews: 44
      }
    ],
    outlets: [
      { 
        name: 'Heritage Stationery', 
        timing: '10:00 AM - 7:00 PM (Sunday closed)', 
        category: 'stationery',
        rating: 4.3,
        reviews: 67,
        description: 'Complete stationery needs for students'
      },
      { 
        name: 'Agarwal Supermarket', 
        timing: '9:00 AM - 9:00 PM', 
        category: 'shopping',
        rating: 4.5,
        reviews: 89,
        popular: true,
        description: 'One-stop shop for all daily needs'
      },
      { 
        name: 'Sri Sai Laundry', 
        timing: '9:00 AM - 9:00 PM (Monday closed)', 
        category: 'services',
        rating: 4.1,
        reviews: 45,
        description: 'Professional laundry services'
      },
      { 
        name: 'Pleasant', 
        timing: '12:30PM - 03:30PM & 07:00 PM - 11:00 PM',
        category: 'food',
        rating: 4.2,
        reviews: 78,
        description: 'Popular food outlet'
      },
      { 
        name: 'Protein Isle', 
        timing: '04:00 PM - 10:00 PM', 
        category: 'food',
        rating: 4.4,
        reviews: 56,
        popular: true,
        description: 'Healthy protein shakes and snacks'
      },
      { 
        name: 'Agra Chat', 
        timing: '04:00 PM - 10:00 PM',
        category: 'food',
        rating: 4.0,
        reviews: 34,
        description: 'Delicious street food and chaat'
      },
      { 
        name: 'Tea Time', 
        timing: '9:00 AM - 9:00 PM (Sunday closed)', 
        category: 'food',
        rating: 4.3,
        reviews: 67,
        description: 'Best tea and snacks on campus'
      },
      { 
        name: 'Karturi Stationery', 
        timing: '5:00 PM - 8:00 PM', 
        category: 'stationery',
        rating: 4.0,
        reviews: 23,
        description: 'Evening stationery shop'
      },
      { 
        name: 'CP05 VVS Stores', 
        timing: '12:00 PM - 10:00 PM', 
        category: 'shopping',
        rating: 4.2,
        reviews: 45,
        description: 'General store with snacks'
      },
      { 
        name: 'Vegetable Shop', 
        timing: '10:30 AM - 9:00 PM', 
        category: 'shopping',
        rating: 4.1,
        reviews: 38,
        description: 'Fresh vegetables and fruits'
      },
      { 
        name: 'Amul', 
        timing: '1:00 PM - 10:00 PM', 
        category: 'food',
        rating: 4.6,
        reviews: 89,
        popular: true,
        description: 'Ice cream and dairy products'
      },
      { 
        name: 'Vijay Vahini', 
        timing: '12:00 PM - 10:00 PM', 
        category: 'food',
        rating: 4.3,
        reviews: 56,
        description: 'South Indian food and snacks'
      },
      { 
        name: 'Thickshake', 
        timing: '11:00 AM - 9:00 PM', 
        category: 'food',
        rating: 4.4,
        reviews: 67,
        description: 'Delicious milkshakes and beverages'
      },
      { 
        name: "Yummpy's", 
        timing: '10:00 AM - 02:00 AM', 
        category: 'food',
        rating: 4.5,
        reviews: 78,
        popular: true,
        description: 'Late night food and snacks'
      },
      { 
        name: 'Hotspot', 
        timing: '10:00 AM - 12:00 AM', 
        category: 'food',
        rating: 4.2,
        reviews: 45,
        description: 'Popular hangout spot with food'
      },
      { 
        name: 'Wich Please and SFC', 
        timing: '05:00 PM - 02:00 AM', 
        category: 'food',
        rating: 4.1,
        reviews: 34,
        description: 'Sandwiches and fast food'
      },
      { 
        name: 'Nescafe', 
        timing: 'TBA', 
        category: 'food',
        rating: 4.3,
        reviews: 56,
        description: 'Coffee and beverages'
      },
      { 
        name: 'Cafeteria', 
        timing: '8:00 AM - 8:00 PM', 
        category: 'food',
        rating: 4.0,
        reviews: 67,
        description: 'Main campus cafeteria'
      },
      { 
        name: 'Domino\'s Pizza', 
        timing: '11:00 AM - 11:00 PM', 
        category: 'food',
        rating: 4.0,
        reviews: 67,
        description: 'Main campus cafeteria'
      }
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
      bhavan: 'Buddh Bhawan',
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
    bhavan: 'Buddh Bhawan',
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
    bhavan: 'Gandhi, Buddh, Vyas',
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
        rating: 4.9,
        reviews: 234,
        popular: true
      },
      { 
        id: 'library', 
        name: 'Central Library', 
        lat: 15.3000, 
        lng: 73.9880, 
        desc: "Modern library with extensive collection and study spaces with ocean views.",
        category: 'academic',
        rating: 4.6,
        reviews: 145,
        popular: true
      },
      { 
        id: 'mess', 
        name: 'Main Mess', 
        lat: 15.3010, 
        lng: 73.9870, 
        desc: "Multi-cuisine mess with both vegetarian and non-vegetarian options. Great variety and quality.",
        category: 'food',
        rating: 4.3,
        reviews: 89
      },
      { 
        id: 'sports', 
        name: 'Sports Complex', 
        lat: 15.3020, 
        lng: 73.9860, 
        desc: "State-of-the-art sports facilities including indoor and outdoor courts.",
        category: 'sports',
        rating: 4.5,
        reviews: 67
      }
    ],
    outlets: [
  {
    name: 'FK',
    timing: '9:30 AM - 1:00 AM',
    category: 'shopping',
    rating: 4.0,
    reviews: 50,
    popular: false,
    description: 'Local business'
  },
  {
    name: 'Subspot',
    timing: '9:30 AM - 1:00 AM',
    category: 'shopping',
    rating: 4.0,
    reviews: 50,
    popular: false,
    description: 'Local business'
  },
  {
    name: 'Amul',
    timing: '9:30 AM - 12:00 AM',
    category: 'shopping',
    rating: 4.0,
    reviews: 50,
    popular: false,
    description: 'Local business'
  },
  {
    name: 'Nescafé',
    timing: '8:00 AM - 7:30 PM',
    category: 'food',
    rating: 4.0,
    reviews: 50,
    popular: false,
    description: 'Local business'
  },
  {
    name: 'Shetty and sons(IC)',
    timing: '8:00 AM - 7:30 PM',
    category: 'shopping',
    rating: 4.0,
    reviews: 50,
    popular: false,
    description: 'Local business'
  },
  {
    name: 'Bdome(pragati)',
    timing: '9:00 AM - 9:00 PM',
    category: 'shopping',
    rating: 4.0,
    reviews: 50,
    popular: false,
    description: 'Local business'
  },
  {
    name: 'INS',
    timing: '11:00 AM - 1:30 AM',
    category: 'shopping',
    rating: 4.0,
    reviews: 50,
    popular: false,
    description: 'Local business'
  },
  {
    name: 'A side laundromat',
    timing: '9:00 AM - 8:00 PM',
    category: 'services',
    rating: 4.0,
    reviews: 50,
    popular: false,
    description: 'Local business'
  },
  {
    name: 'Gaja',
    timing: '12:30 PM - 7:30 PM',
    category: 'shopping',
    rating: 4.0,
    reviews: 50,
    popular: false,
    description: 'Local business'
  },
  {
    name: 'JV Shetty mega mart',
    timing: '8:00 AM - 9:30 PM',
    category: 'shopping',
    rating: 4.0,
    reviews: 50,
    popular: false,
    description: 'Local business'
  },
  {
    name: 'Pragati stationary(Malakar)',
    timing: '9:00 AM - 9:00 PM',
    category: 'stationery',
    rating: 4.0,
    reviews: 50,
    popular: false,
    description: 'Local business'
  },
  {
    name: 'Silva laundry',
    timing: '2:00 PM - 8:30 PM',
    category: 'services',
    rating: 4.0,
    reviews: 50,
    popular: false,
    description: 'Local business'
  },
  {
    name: 'Fruit and vegetable (Malakar)',
    timing: '11:30 AM - 9:30 PM',
    category: 'food',
    rating: 4.0,
    reviews: 50,
    popular: false,
    description: 'Local business'
  },
  {
    name: 'Laxmi laundry',
    timing: '10:00 AM - 9:00 PM',
    category: 'services',
    rating: 4.0,
    reviews: 50,
    popular: false,
    description: 'Local business'
  },
  {
    name: 'SBI bank',
    timing: '10:00 AM - 4:00 PM (Monday to Saturday)',
    category: 'services',
    rating: 4.0,
    reviews: 50,
    popular: false,
    description: 'Local business'
  },
  {
    name: 'RC Restaurant',
    timing: '11:30 AM - 3:00 PM and 6:30 PM - 11:30 PM',
    category: 'food',
    rating: 4.0,
    reviews: 50,
    popular: false,
    description: 'Local business'
  },
  {
    name: 'Tailor(Malakar)',
    timing: '7:00 PM - 9:00 PM',
    category: 'services',
    rating: 4.0,
    reviews: 50,
    popular: false,
    description: 'Local business'
  },
  {
    name: 'Kheteshwar Electronics',
    timing: '4:00 PM - 8:00 PM',
    category: 'shopping',
    rating: 4.0,
    reviews: 50,
    popular: false,
    description: 'Local business'
  },
  {
    name: 'Barber shop',
    timing: '11:00 AM - 8:00 PM (Tuesdays closed)',
    category: 'services',
    rating: 4.0,
    reviews: 50,
    popular: false,
    description: 'Local business'
  },
  {
    name: 'Facial shop',
    timing: '10:30 AM - 7:00 PM (2:00 PM - 3:00 PM lunch break, Monday to Saturday)',
    category: 'services',
    rating: 4.0,
    reviews: 50,
    popular: false,
    description: 'Local business'
  },
  {
    name: 'D side food truck',
    timing: '9:30 AM - 2:00 AM',
    category: 'food',
    rating: 4.0,
    reviews: 50,
    popular: false,
    description: 'Local business'
  },
  {
    name: 'Dominos',
    timing: '11:00 AM - 3:00 AM',
    category: 'food',
    rating: 4.0,
    reviews: 50,
    popular: false,
    description: 'Local business'
  }
    ],
    autoDrivers: [
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
        description: 'Annual beach festival with music, dance, and cultural performances',
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
warden:[
  {
    name: 'Dr. R.B. Moulick',
    phone: ['9881777443', '9049002211'],
    email: 'rbmoulick@goa.bits-pilani.ac.in',
    bhavan: 'CH1 - C.V. RAMAN'
  },
  {
    name: 'Dr. Vaibavish Singh',
    phone: ['9822135154'],
    email: 'vaibhavish@goa.bits-pilani.ac.in',
    bhavan: 'CH2 - S.N. BOSE'
  },
  {
    name: 'Dr. Inzamam Talukdar',
    phone: ['9886041595', '8554976831'],
    email: 'inzamam@goa.bits-pilani.ac.in',
    bhavan: 'CH3 - DR. HOMI J. BHABHA'
  },
  {
    name: 'Dr. Swaroop Talukdar',
    phone: ['9850435041', '8554976831', '9158372881'],
    email: 'swaroopt@goa.bits-pilani.ac.in',
    bhavan: 'CH4 - MEGHNAD SAHA'
  },
  {
    name: 'Dr. Ritika Agrawal',
    phone: ['9807034510', '8554976831', '7708504032'],
    email: 'ritika@goa.bits-pilani.ac.in',
    bhavan: 'CH5 - J.C. BOSE'
  },
  {
    name: 'Dr. Ripul Jindal',
    phone: ['7030588698', '9527819777', '8975040292'],
    email: 'ripul.jindal@goa.bits-pilani.ac.in',
    bhavan: 'CH6 - VISVESVARAYA'
  },
  {
    name: 'Dr. Debabrata Chitaranjan Das Mohapatra',
    phone: ['7219265955', '7875666033'],
    email: 'debabrata@goa.bits-pilani.ac.in',
    bhavan: 'CH7 - SIR C.V. RAMAN'
  },
  {
    name: 'Dr. Amjad Ahmad',
    phone: ['7448067702', '9552837895'],
    email: 'amjad.ahmad@goa.bits-pilani.ac.in',
    bhavan: 'AH1 & AH2 - RAMANUJAN & GANDHI'
  },
  {
    name: 'Dr. Pradeep Kumar Suman',
    phone: ['9591924878', '9538664024'],
    email: 'psuman@goa.bits-pilani.ac.in',
    bhavan: 'AH3 - BUDH'
  },
  {
    name: 'Dr. Pranay Shankar',
    phone: ['9022486320', '9167268518'],
    email: 'pranay@goa.bits-pilani.ac.in',
    bhavan: 'AH4 - SHANKAR'
  },
  {
    name: 'Dr. Ashish Chittora',
    phone: ['9167150885', '8554976831'],
    email: 'ashishchittora@goa.bits-pilani.ac.in',
    bhavan: 'AH5 - ASHOKA'
  },
  {
    name: 'Dr. Raviprasad A.D',
    phone: ['8275027108', '8554976830'],
    email: 'adr@goa.bits-pilani.ac.in',
    bhavan: 'AH6 - VIVEKANAND'
  },
  {
    name: 'Dr. Monojit Chowdhuri',
    phone: ['8956411927'],
    email: 'monojit@goa.bits-pilani.ac.in',
    bhavan: 'AH7 - KRISHNA'
  },
  {
    name: 'Dr. Vijay Veera Setha',
    phone: ['9740941814', '8554976830'],
    email: 'vijayveera@goa.bits-pilani.ac.in',
    bhavan: 'AH8 - GAUTAM'
  },
  {
    name: 'Dr. Naveen Gupta',
    phone: ['8826188402', '8554976830'],
    email: 'naveengupta@goa.bits-pilani.ac.in',
    bhavan: 'AH9 - MALVIYA'
  },
  {
    name: 'Dr. Reema Chatterjee',
    phone: ['9717491732', '8554976830'],
    email: 'reema@goa.bits-pilani.ac.in',
    bhavan: 'DH1 - MEERA'
  },
  {
    name: 'Dr. Saroj Baral',
    phone: ['7828059712', '7506685199'],
    email: 'sbaral@goa.bits-pilani.ac.in',
    bhavan: 'DH2 - GARGHI'
  },
  {
    name: 'Dr. Ravi Kanth Chaturvedi',
    phone: ['9305479138', '8554976830'],
    email: 'rkchaturvedi@goa.bits-pilani.ac.in',
    bhavan: 'DH3 - MAITREYI'
  },
  {
    name: 'Dr. Kanchan Maji',
    phone: ['8085174976', '9062193211', '7385966624'],
    email: 'drkanchan@goa.bits-pilani.ac.in',
    bhavan: 'DH4 - SAVITRI'
  },
  {
    name: 'Dr. Manoj M M',
    phone: ['9011090124', '8554976830'],
    email: 'manojmm@goa.bits-pilani.ac.in',
    bhavan: 'DH5 - SHAKUNTALA'
  },
  {
    name: 'Dr. Pawan Kesharwani',
    phone: ['9179647971', '7276993142', '8956485039'],
    email: 'pkesharwani@goa.bits-pilani.ac.in',
    bhavan: 'SH1 - DAY SCHOLARS'
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
        rating: 4.7,
        reviews: 189,
        popular: true
      },
      { 
        id: 'library', 
        name: 'Central Library', 
        lat: 28.3680, 
        lng: 75.5870, 
        desc: "Extensive library collection with rare books and manuscripts.",
        category: 'academic',
        rating: 4.8,
        reviews: 156,
        popular: true
      },
      { 
        id: 'mess', 
        name: 'Main Mess', 
        lat: 28.3660, 
        lng: 75.5890, 
        desc: "Traditional mess serving authentic Rajasthani and North Indian cuisine.",
        category: 'food',
        rating: 4.4,
        reviews: 98
      }
    ],
    outlets: [
      { 
        name: 'Pilani Store', 
        timing: '8:00 AM - 9:00 PM', 
        category: 'shopping',
        rating: 4.3,
        reviews: 67,
        description: 'Complete store for all student needs'
      },
      { 
        name: 'Campus Cafe', 
        timing: '9:00 AM - 11:00 PM', 
        category: 'food',
        rating: 4.5,
        reviews: 89,
        popular: true,
        description: 'Popular hangout spot with great food'
      }
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