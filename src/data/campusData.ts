export interface Location {
  id: string;
  name: string;
  lat: number;
  lng: number;
  desc?: string;
}

export interface Outlet {
  name: string;
  timing: string;
  closed?: boolean;
}

export interface CampusData {
  name: string;
  slug: string;
  description: string;
  image: string;
  mapCenter: [number, number];
  locations: Location[];
  outlets: Outlet[];
  messTimings: Array<[string, string]>;
  emergencyContacts: Array<{ name: string; phone: string; label?: string }>;
  autoDrivers?: string[];
  busRoutes?: Array<{ route: string; times: string[] }>;
}

export const campusData: Record<string, CampusData> = {
  hyderabad: {
    name: "BITS Pilani, Hyderabad Campus",
    slug: "hyderabad",
    description: "The modern tech hub campus of BITS Pilani in Hyderabad, known for its state-of-the-art facilities and vibrant student life.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
    mapCenter: [17.544, 78.574],
    locations: [
      { id: 'SAC', name: 'SAC', lat: 17.54090448861708, lng: 78.57527103665713, desc: "The Student Activities Centre (SAC) hosts club rooms, a dance room, gym, and space for practice and meetings. Great place for rehearsals or chilling." },
      { id: 'mess1', name: 'Mess 1', lat: 17.542382724185554, lng: 78.57383333595718, desc: "Mess 1 is the hotspot on campus. It's where most students eat, meet, and chill after classes. You'll often find music and friends hanging around here." },
      { id: 'mess2', name: 'Mess 2', lat: 17.5449069215431, lng: 78.57519539689511, desc: "Mess 2 is across the old hockey ground sits Mess 2. It's quieter, more spacious, and a good place if you want a peaceful meal." },
      { id: 'lib', name: 'Library', lat: 17.545853792704165, lng: 78.57150321231636, desc: "The campus library is a sanctuary for studying or finding reference books. It's open till late and has AC – major bonus during summers." },
      { id: 'audi', name: 'Auditorium', lat: 17.545513750761355, lng: 78.57087843149998, desc: "The main auditorium for events, talks, and presentations. A key venue for cultural events and academic seminars." },
      { id: 'cp', name: 'Connaught Place', lat: 17.54203796959397, lng: 78.57576688860827, desc: "Connaught Place is a central hub area on campus, popular for gatherings and social activities." },
      { id: 'fountain', name: 'Fountain', lat: 17.54688441980337, lng: 78.57212431161547, desc: "A scenic fountain area that's perfect for evening walks and photo sessions. A peaceful spot on campus." },
      { id: 'll', name: "Lover's Lane", lat: 17.546845393115422, lng: 78.57298386645695, desc: "A romantic walkway popular among couples and friends for evening strolls and quiet conversations." },
      { id: 'rnt', name: 'Road Not Taken', lat: 17.54080249370755, lng: 78.57403043467615, desc: "A scenic pathway that's perfect for contemplative walks and enjoying nature on campus. (The real Lover's Lane IYKYK)" },
      { id: 'swmg', name: 'Swimming Pool', lat: 17.540257034530534, lng: 78.57677623770725, desc: "Campus swimming pool facility for recreation and fitness. A great place to cool off and stay active." },
      { id: 'rocks', name: 'Rock Garden', lat: 17.5445544074219, lng: 78.5730200932779, desc: "A beautifully landscaped rock garden area, perfect for relaxation and enjoying the natural beauty of campus." },
      { id: 'direc', name: "Director's Quarter", lat: 17.542873825568694, lng: 78.57651452810894, desc: "The residential area for the campus director and administrative offices." },
      { id: 'mc', name: 'Medical Centre', lat: 17.542041484380153, lng: 78.57645388966053, desc: "Campus medical facility providing healthcare services to students and staff. Emergency and routine medical care available." },
      { id: 'ofg', name: 'Old Football Ground', lat: 17.54359745113174, lng: 78.57499151300111, desc: "Comes alive at night. Great spot for chill, impromptu matches and kicking back with the gang." },
      { id: 'nfg', name: 'New Football Ground', lat: 17.540979058114377, lng: 78.57617359351049, desc: "The fancier turf where official matches take place during fests. Still open for casual games when it is free; mix of pro vibes and chill scenes." },
      { id: 'cg', name: 'Cricket Ground', lat: 17.539821974494863, lng: 78.57731941388154, desc: "Classic spot for gully-style cricket or full-blown matches. Always buzzing in the evenings with bat, ball, and banter." },
      { id: 'vg', name: 'Volleyball Ground', lat: 17.54299589606132, lng: 78.57538012811001, desc: "Volleyball Ground right beside kabaddi and Amul. A solid combo of action and refreshment." },
      { id: 'nab', name: 'New Academic Block / Chess Courtyard', lat: 17.545894062510076, lng: 78.5695917200961, desc: "New Academic Block is where a forgotten chess courtyard and a lone eatery quietly coexist." },
      { id: 'oab', name: 'Old Academic Block / Library Lawns', lat: 17.545179101144704, lng: 78.57116941506344, desc: "Old Academic Block is where things actually happen louder busier and way more alive than its newer sleepy sibling." },
      { id: 'valmiki', name: 'Valmiki Bhavan', lat: 17.545872952669946, lng: 78.57470692913476},
      { id: 'gautam', name: 'Gautam Bhavan', lat: 17.541604563227047, lng: 78.5751704189681},
      { id: 'krishnaram', name: 'Krishna Bhavan / Ram Bhavan', lat: 17.542746061934633, lng: 78.57393606166247},
      { id: 'gandhibudh', name: 'Gandhi Bhavan / Budh Bhavan', lat: 17.542578448925582, lng: 78.57427698469752},
      { id: 'vk', name: 'Vishwakarma Bhavan', lat: 17.54497398734834, lng: 78.57644535482906},
      { id: 'shankar', name: 'Shankar Bhavan', lat: 17.544722406131818, lng: 78.57494826204248},
      { id: 'vyas', name: 'Vyas Bhavan', lat: 17.54450090499368, lng: 78.57535551716839},
      { id: 'malviya', name: 'Malviya Bhavan', lat: 17.540998514798122, lng: 78.57482350258248},
      { id: 'meera', name: 'Meera Bhavan', lat: 17.54163340476832, lng: 78.57402955343612},
      { id: 'ganga', name: 'Ganga Bhavan', lat: 17.541954864432526, lng: 78.57339341827591}
    ],
    outlets: [
      { name: 'Heritage Stationery', timing: '10:00 AM - 7:00 PM (Sunday closed)' },
      { name: 'Agarwal Supermarket', timing: '9:00 AM - 9:00 PM' },
      { name: 'Sri Sai Laundry', timing: '9:00 AM - 9:00 PM (Monday closed)' },
      { name: 'Pleasant', timing: 'Closed for Summer Term', closed: true },
      { name: 'Protein Isle', timing: '04:00 PM - 10:00 PM' },
      { name: 'Agra Chat', timing: 'Closed for Summer Term', closed: true },
      { name: 'Tea Time', timing: '9:00 AM - 9:00 PM (Sunday closed)' },
      { name: 'Karturi Stationery', timing: '5:00 PM - 8:00 PM' },
      { name: 'CP05 VVS Stores', timing: '12:00 PM - 10:00 PM' },
      { name: 'Vegetable Shop', timing: '10:30 AM - 9:00 PM' },
      { name: 'Amul', timing: '1:00 PM - 10:00 PM' },
      { name: 'Vijay Vahini', timing: '12:00 PM - 10:00 PM' },
      { name: 'Thickshake', timing: '11:00 AM - 9:00 PM' },
      { name: "Yummpy's", timing: '10:00 AM - 02:00 AM' },
      { name: 'Hotspot', timing: '10:00 AM - 12:00 AM' },
      { name: 'Wich Please and SFC', timing: 'Closed for Summer Term', closed: true },
      { name: 'Nescafe', timing: 'Closed for Summer Term', closed: true },
      { name: 'Cafeteria', timing: '8:00 AM - 8:00 PM' }
    ],
    messTimings: [
      ['Breakfast:', '07:30 AM - 9:30 AM'],
      ['Lunch:', '12:00 PM - 2:00 PM'],
      ['Snacks:', '04:30 PM - 06:00 PM'],
      ['Dinner:', '7:30 PM - 09:30 PM']
    ],
    emergencyContacts: [
      { name: 'Security (Campus)', phone: '8977771235' },
      { name: 'Security (Main Gate)', phone: '8977771230' },
      { name: 'Medical Centre', phone: '8977771237' },
      { name: 'Warden (Boys)', phone: '8977771246' },
      { name: 'Warden (Girls)', phone: '8977771247' }
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
      {
        route: '242 RG (Raidurgam - Gachibowli)',
        times: ['7:00 AM', '8:30 AM', '5:30 PM', '7:00 PM']
      }
    ]
  },
  goa: {
    name: "BITS Pilani, K. K. Birla Goa Campus",
    slug: "goa",
    description: "The coastal paradise campus of BITS Pilani in Goa, offering a perfect blend of academic excellence and beachside serenity.",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
    mapCenter: [15.3890, 73.9677],
    locations: [
      // Academic Buildings
      { id: 'main_building', name: 'Main Building (B-Dome)', lat: 15.3890, lng: 73.9677, desc: "The iconic central academic building with distinctive dome architecture housing most departments and administrative offices." },
      { id: 'library_goa', name: 'Central Library', lat: 15.3885, lng: 73.9670, desc: "Well-equipped library with extensive collection, study spaces, and beautiful campus views. Open 24/7 during exams." },
      { id: 'lab_complex_goa', name: 'Laboratory Complex', lat: 15.3888, lng: 73.9665, desc: "State-of-the-art laboratories for engineering, sciences, and research with modern equipment." },
      { id: 'auditorium_goa', name: 'Main Auditorium', lat: 15.3892, lng: 73.9672, desc: "Main venue for cultural events, seminars, academic presentations, and convocations." },
      { id: 'admin_block_goa', name: 'Administrative Block', lat: 15.3893, lng: 73.9675, desc: "Administrative offices, student services center, and faculty offices." },
      
      // Hostels - A Block
      { id: 'a1_hostel', name: 'A1 Hostel (Boys)', lat: 15.3875, lng: 73.9680, desc: "Boys hostel in A Block with single room accommodation and modern facilities." },
      { id: 'a2_hostel', name: 'A2 Hostel (Boys)', lat: 15.3873, lng: 73.9678, desc: "Boys hostel in A Block with excellent common room facilities and Wi-Fi." },
      { id: 'a3_hostel', name: 'A3 Hostel (Boys)', lat: 15.3871, lng: 73.9676, desc: "Boys hostel in A Block known for its vibrant student community." },
      { id: 'a4_hostel', name: 'A4 Hostel (Boys)', lat: 15.3869, lng: 73.9674, desc: "Boys hostel in A Block with scenic views of the campus." },
      { id: 'a5_hostel', name: 'A5 Hostel (Boys)', lat: 15.3867, lng: 73.9672, desc: "Boys hostel in A Block with excellent sports facilities nearby." },
      { id: 'a6_hostel', name: 'A6 Hostel (Boys)', lat: 15.3865, lng: 73.9670, desc: "Boys hostel in A Block close to the academic buildings." },
      { id: 'a7_hostel', name: 'A7 Hostel (Boys)', lat: 15.3863, lng: 73.9668, desc: "Boys hostel in A Block with modern amenities and study spaces." },
      { id: 'a8_hostel', name: 'A8 Hostel (Boys)', lat: 15.3861, lng: 73.9666, desc: "Boys hostel in A Block known for its active student clubs." },
      { id: 'a9_hostel', name: 'A9 Hostel (Boys)', lat: 15.3859, lng: 73.9664, desc: "Boys hostel in A Block with excellent mess facilities." },
      
      // Hostels - C Block  
      { id: 'c1_hostel', name: 'C1 Hostel (Boys)', lat: 15.3882, lng: 73.9695, desc: "Boys hostel in C Block with riverside views and peaceful environment." },
      { id: 'c2_hostel', name: 'C2 Hostel (Boys)', lat: 15.3884, lng: 73.9697, desc: "Boys hostel in C Block known for its cultural activities." },
      { id: 'c3_hostel', name: 'C3 Hostel (Boys)', lat: 15.3886, lng: 73.9699, desc: "Boys hostel in C Block with excellent sports facilities." },
      { id: 'c4_hostel', name: 'C4 Hostel (Boys)', lat: 15.3888, lng: 73.9701, desc: "Boys hostel in C Block close to the sports complex." },
      { id: 'c5_hostel', name: 'C5 Hostel (Boys)', lat: 15.3890, lng: 73.9703, desc: "Boys hostel in C Block with modern infrastructure." },
      { id: 'c6_hostel', name: 'C6 Hostel (Boys)', lat: 15.3892, lng: 73.9705, desc: "Boys hostel in C Block known for its tech community." },
      { id: 'c7_hostel', name: 'C7 Hostel (Boys)', lat: 15.3894, lng: 73.9707, desc: "Boys hostel in C Block with scenic campus views." },
      
      // Hostels - D Block (Newest)
      { id: 'd1_hostel', name: 'D1 Hostel (Boys)', lat: 15.3905, lng: 73.9685, desc: "New boys hostel in D Block with state-of-the-art facilities and modern architecture." },
      { id: 'd2_hostel', name: 'D2 Hostel (Boys)', lat: 15.3907, lng: 73.9687, desc: "New boys hostel in D Block with excellent common areas and study spaces." },
      { id: 'd3_hostel', name: 'D3 Hostel (Boys)', lat: 15.3909, lng: 73.9689, desc: "New boys hostel in D Block with advanced security systems." },
      { id: 'd4_hostel', name: 'D4 Hostel (Boys)', lat: 15.3911, lng: 73.9691, desc: "New boys hostel in D Block with modern mess facilities." },
      { id: 'd5_hostel', name: 'D5 Hostel (Boys)', lat: 15.3913, lng: 73.9693, desc: "New boys hostel in D Block with recreational facilities." },
      { id: 'd6_hostel', name: 'D6 Hostel (Boys)', lat: 15.3915, lng: 73.9695, desc: "New boys hostel in D Block with beautiful landscape views." },
      
      // Girls Hostels
      { id: 'girls_hostel_1', name: 'Girls Hostel 1', lat: 15.3900, lng: 73.9690, desc: "Girls hostel with secure accommodation and modern amenities in a safe environment." },
      { id: 'girls_hostel_2', name: 'Girls Hostel 2', lat: 15.3902, lng: 73.9692, desc: "Girls hostel with excellent common facilities and study areas." },
      { id: 'girls_hostel_3', name: 'Girls Hostel 3', lat: 15.3904, lng: 73.9694, desc: "Girls hostel with recreational facilities and beautiful garden areas." },
      { id: 'phd_quarters', name: 'PhD Scholars Quarters', lat: 15.3906, lng: 73.9696, desc: "Married PhD research scholars quarters with family accommodation facilities." },
      
      // Dining and Food
      { id: 'mess_goa', name: 'Main Mess', lat: 15.3895, lng: 73.9685, desc: "Central dining facility serving diverse cuisine with coastal views and accommodating various dietary preferences." },
      { id: 'veg_mess', name: 'Vegetarian Mess', lat: 15.3893, lng: 73.9683, desc: "Dedicated vegetarian mess with traditional and contemporary vegetarian dishes." },
      { id: 'cafeteria', name: 'Cafeteria', lat: 15.3891, lng: 73.9681, desc: "Campus cafeteria offering snacks, beverages, and quick meals throughout the day." },
      
      // Sports and Recreation
      { id: 'sac_goa', name: 'Student Activity Centre (SAC)', lat: 15.3880, lng: 73.9690, desc: "Student Activity Centre with gymnasium, badminton courts, table tennis, squash, and other indoor games." },
      { id: 'cricket_ground', name: 'Cricket Ground', lat: 15.3870, lng: 73.9700, desc: "BCCI-recognized cricket ground maintained by Goa Cricket Association, hosting national tournaments like Vijay Hazare Trophy." },
      { id: 'football_ground', name: 'Football Ground', lat: 15.3868, lng: 73.9698, desc: "Full-size football ground maintained by Salgaocar F.C. for matches and practice." },
      { id: 'basketball_court', name: 'Basketball Courts', lat: 15.3878, lng: 73.9688, desc: "Multiple basketball courts for recreational and competitive play." },
      { id: 'tennis_court', name: 'Tennis Courts', lat: 15.3876, lng: 73.9686, desc: "Professional tennis courts for tournaments and practice sessions." },
      { id: 'swimming_pool', name: 'Swimming Pool', lat: 15.3874, lng: 73.9684, desc: "Olympic-size swimming pool for recreation, training, and water sports." },
      { id: 'gymnasium', name: 'Gymnasium', lat: 15.3872, lng: 73.9682, desc: "Well-equipped gymnasium with modern fitness equipment and training facilities." },
      
      // Academic Departments
      { id: 'cse_dept', name: 'Computer Science Department', lat: 15.3887, lng: 73.9673, desc: "Computer Science and Information Systems department with advanced labs and research facilities." },
      { id: 'ece_dept', name: 'Electronics Department', lat: 15.3889, lng: 73.9675, desc: "Electronics and Communication Engineering department with state-of-the-art labs." },
      { id: 'mech_dept', name: 'Mechanical Department', lat: 15.3885, lng: 73.9671, desc: "Mechanical Engineering department with workshops and advanced manufacturing labs." },
      { id: 'chem_dept', name: 'Chemical Department', lat: 15.3883, lng: 73.9669, desc: "Chemical Engineering department with process labs and pilot plants." },
      { id: 'phy_dept', name: 'Physics Department', lat: 15.3881, lng: 73.9667, desc: "Physics department with research labs and advanced instrumentation facilities." },
      { id: 'chem_sci_dept', name: 'Chemistry Department', lat: 15.3879, lng: 73.9665, desc: "Chemistry department with analytical and synthetic chemistry labs." },
      { id: 'bio_dept', name: 'Biological Sciences Department', lat: 15.3877, lng: 73.9663, desc: "Biological Sciences department with biotechnology and life sciences research facilities." },
      { id: 'math_dept', name: 'Mathematics Department', lat: 15.3875, lng: 73.9661, desc: "Mathematics department with computational labs and research facilities." },
      { id: 'hss_dept', name: 'Humanities Department', lat: 15.3873, lng: 73.9659, desc: "Humanities and Social Sciences department promoting liberal arts education." },
      { id: 'mgmt_dept', name: 'Management Department', lat: 15.3871, lng: 73.9657, desc: "Management department offering MBA and business education programs." },
      
      // Essential Services
      { id: 'medical_center_goa', name: 'Medical Center', lat: 15.3897, lng: 73.9682, desc: "Campus healthcare facility with doctors, pharmacy, and 24/7 medical services for students and staff." },
      { id: 'guest_house', name: 'Guest House', lat: 15.3899, lng: 73.9684, desc: "Campus guest house for visitors, parents, and official guests with comfortable accommodation." },
      { id: 'shopping_complex', name: 'Shopping Complex', lat: 15.3895, lng: 73.9688, desc: "Campus shopping complex with departmental store, banks, ATMs, and essential service outlets." },
      { id: 'post_office', name: 'Post Office', lat: 15.3893, lng: 73.9686, desc: "Campus post office for postal services, courier, and package deliveries." },
      { id: 'bank_branch', name: 'Bank Branch', lat: 15.3891, lng: 73.9684, desc: "Campus bank branch with ATMs and banking services for students and staff." },
      
      // Scenic Spots
      { id: 'zuari_viewpoint', name: 'Zuari River Viewpoint', lat: 15.3865, lng: 73.9710, desc: "Scenic viewpoint overlooking the beautiful Zuari River, perfect for evening walks and photography." },
      { id: 'hilltop_viewpoint', name: 'Hilltop Viewpoint', lat: 15.3920, lng: 73.9650, desc: "Elevated viewpoint offering panoramic views of the campus and surrounding Goan landscape." },
      { id: 'central_lawns', name: 'Central Lawns', lat: 15.3892, lng: 73.9678, desc: "Beautiful central lawns area perfect for outdoor events, gatherings, and relaxation." },
      { id: 'botanical_garden', name: 'Botanical Garden', lat: 15.3885, lng: 73.9705, desc: "Campus botanical garden showcasing Goan flora and providing a peaceful environment for study." }
    ],
    outlets: [
      { name: 'Shopping Complex Store', timing: '8:00 AM - 9:00 PM' },
      { name: 'Campus Departmental Store', timing: '9:00 AM - 8:00 PM' },
      { name: 'Juice Corner', timing: '7:00 AM - 10:00 PM' },
      { name: 'Fresh Fruit Shop', timing: '8:00 AM - 8:00 PM' },
      { name: 'Xerox & Printing Center', timing: '8:00 AM - 10:00 PM' },
      { name: 'Stationery Shop', timing: '9:00 AM - 7:00 PM (Sunday closed)' },
      { name: 'Laundry & Dry Cleaning', timing: '7:00 AM - 7:00 PM (Monday closed)' },
      { name: 'Cafe Beans', timing: '7:00 AM - 11:00 PM' },
      { name: 'Tea Point', timing: '6:00 AM - 11:00 PM' },
      { name: 'Snacks Counter', timing: '9:00 AM - 10:00 PM' },
      { name: 'Ice Cream Parlor', timing: '11:00 AM - 10:00 PM' },
      { name: 'Medical Store', timing: '8:00 AM - 9:00 PM' },
      { name: 'Barber Shop', timing: '9:00 AM - 7:00 PM (Sunday closed)' },
      { name: 'Bank ATM (SBI)', timing: '24/7' },
      { name: 'Bank ATM (HDFC)', timing: '24/7' },
      { name: 'Post Office Counter', timing: '10:00 AM - 5:00 PM (Mon-Sat)' },
      { name: 'Mobile Recharge Center', timing: '9:00 AM - 8:00 PM' },
      { name: 'Sports Equipment Shop', timing: '4:00 PM - 8:00 PM' },
      { name: 'Computer Repair Center', timing: '10:00 AM - 6:00 PM (Mon-Fri)' }
    ],
    messTimings: [
      ['Breakfast:', '07:30 AM - 9:30 AM'],
      ['Lunch:', '12:30 PM - 2:30 PM'],
      ['Snacks:', '05:00 PM - 06:30 PM'],
      ['Dinner:', '8:00 PM - 10:00 PM']
    ],
    emergencyContacts: [
      { name: 'Security Control Room', phone: '0832-2580318' },
      { name: 'Main Gate Security', phone: '0832-2580319' },
      { name: 'Medical Center', phone: '0832-2580315' },
      { name: 'Ambulance Service', phone: '0832-2580316' },
      { name: 'Chief Warden (Boys)', phone: '0832-2580320' },
      { name: 'Chief Warden (Girls)', phone: '0832-2580321' },
      { name: 'Fire Safety', phone: '0832-2580317' },
      { name: 'Maintenance Emergency', phone: '0832-2580322' },
      { name: 'Administration Office', phone: '0832-2580311' },
      { name: 'Director Office', phone: '0832-2580301' }
    ],
    autoDrivers: [
      '9822123456', '9822234567', '9822345678', '9822456789',
      '9822567890', '9822678901', '9822789012', '9822890123',
      '9822901234', '9823012345', '9823123456', '9823234567',
      '9823345678', '9823456789', '9823567890', '9823678901',
      '9823789012', '9823890123', '9823901234', '9824012345'
    ],
    busRoutes: [
      {
        route: 'Panaji - BITS Goa',
        times: ['7:00 AM', '8:30 AM', '12:30 PM', '5:30 PM', '7:00 PM']
      },
      {
        route: 'Vasco - BITS Goa',
        times: ['7:30 AM', '9:00 AM', '1:00 PM', '6:00 PM', '7:30 PM']
      },
      {
        route: 'Margao - BITS Goa',
        times: ['7:15 AM', '8:45 AM', '12:45 PM', '5:45 PM', '7:15 PM']
      }
    ]
  },
  pilani: {
    name: "BITS Pilani",
    slug: "pilani",
    description: "The original and historic campus of BITS Pilani in Rajasthan, where tradition meets innovation in the heart of the desert.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
    mapCenter: [28.3670, 75.5900],
    locations: [
      // Iconic Landmarks
      { id: 'clock_tower', name: 'Clock Tower', lat: 28.3670, lng: 75.5900, desc: "The iconic clock tower - the symbol and heart of BITS Pilani campus, a historic landmark since 1964." },
      { id: 'lib_pilani', name: 'Central Library', lat: 28.3675, lng: 75.5905, desc: "The main library with an extensive collection, historical significance, and 24/7 access during exams." },
      { id: 'audi_pilani', name: 'Main Auditorium', lat: 28.3668, lng: 75.5895, desc: "Historic auditorium hosting major convocations, cultural events, and important ceremonies." },
      { id: 'main_building_pilani', name: 'Main Building (Administrative)', lat: 28.3672, lng: 75.5898, desc: "The main administrative building housing the Director's office and central administration." },
      
      // Academic Departments
      { id: 'fd1_pilani', name: 'FD-I (Physics & Chemistry)', lat: 28.3680, lng: 75.5910, desc: "Fundamental Sciences Department housing Physics and Chemistry with advanced research labs." },
      { id: 'fd2_pilani', name: 'FD-II (Mathematics)', lat: 28.3665, lng: 75.5890, desc: "Mathematics Department with computational labs, faculty offices, and classrooms." },
      { id: 'mech_pilani', name: 'Mechanical Engineering Department', lat: 28.3660, lng: 75.5885, desc: "Mechanical Engineering Department with extensive workshops, labs, and manufacturing facilities." },
      { id: 'civil_pilani', name: 'Civil Engineering Department', lat: 28.3685, lng: 75.5920, desc: "Civil Engineering Department with structural labs, surveying equipment, and research facilities." },
      { id: 'eee_pilani', name: 'Electrical & Electronics Department', lat: 28.3655, lng: 75.5880, desc: "Electrical and Electronics Engineering Department with power labs and advanced instrumentation." },
      { id: 'csis_pilani', name: 'Computer Science Department', lat: 28.3690, lng: 75.5925, desc: "Computer Science and Information Systems Department with modern computer labs and research centers." },
      { id: 'chem_pilani', name: 'Chemical Engineering Department', lat: 28.3675, lng: 75.5915, desc: "Chemical Engineering Department with process labs, pilot plants, and research facilities." },
      { id: 'bio_pilani', name: 'Biological Sciences Department', lat: 28.3685, lng: 75.5895, desc: "Biological Sciences Department with biotechnology labs and life sciences research facilities." },
      { id: 'pharm_pilani', name: 'Pharmacy Department', lat: 28.3650, lng: 75.5895, desc: "Pharmacy Department with pharmaceutical research labs and drug development facilities." },
      { id: 'hss_pilani', name: 'Humanities & Social Sciences', lat: 28.3675, lng: 75.5885, desc: "Humanities and Social Sciences Department promoting liberal arts and social research." },
      { id: 'mgmt_pilani', name: 'Management Department', lat: 28.3665, lng: 75.5905, desc: "Management Department offering MBA programs and business education." },
      
      // Boys Hostels
      { id: 'krishna_hostel', name: 'Krishna Bhavan', lat: 28.3640, lng: 75.5920, desc: "One of the oldest and most prestigious boys hostels, known for its strong alumni network." },
      { id: 'ram_hostel', name: 'Ram Bhavan', lat: 28.3642, lng: 75.5918, desc: "Historic boys hostel with traditional architecture and vibrant student life." },
      { id: 'ashok_hostel', name: 'Ashok Bhavan', lat: 28.3644, lng: 75.5916, desc: "Boys hostel known for its cultural activities and fest participation." },
      { id: 'budh_hostel', name: 'Budh Bhavan', lat: 28.3646, lng: 75.5914, desc: "Boys hostel with modern amenities and active student clubs." },
      { id: 'gandhi_hostel', name: 'Gandhi Bhavan', lat: 28.3648, lng: 75.5912, desc: "Boys hostel promoting values of non-violence and social service." },
      { id: 'shankar_hostel', name: 'Shankar Bhavan', lat: 28.3650, lng: 75.5910, desc: "Boys hostel known for its academic excellence and study culture." },
      { id: 'vyas_hostel', name: 'Vyas Bhavan', lat: 28.3652, lng: 75.5908, desc: "Boys hostel with strong literary and debate traditions." },
      { id: 'malviya_hostel', name: 'Malviya Bhavan', lat: 28.3654, lng: 75.5906, desc: "Boys hostel known for its sports achievements and athletic culture." },
      { id: 'vivekananda_hostel', name: 'Vivekananda Bhavan', lat: 28.3656, lng: 75.5904, desc: "Boys hostel promoting spiritual values and community service." },
      { id: 'cvr_hostel', name: 'C.V. Raman Bhavan', lat: 28.3658, lng: 75.5902, desc: "Boys hostel named after the Nobel laureate, fostering scientific research." },
      
      // Girls Hostels
      { id: 'meera_hostel', name: 'Meera Bhavan', lat: 28.3680, lng: 75.5880, desc: "Main girls hostel with excellent security, modern facilities, and vibrant student life." },
      { id: 'saraswati_hostel', name: 'Saraswati Bhavan', lat: 28.3682, lng: 75.5878, desc: "Girls hostel promoting academic excellence and cultural activities." },
      { id: 'mira_new_hostel', name: 'New Meera Bhavan', lat: 28.3684, lng: 75.5876, desc: "Newly constructed girls hostel with state-of-the-art facilities." },
      
      // Dining and Food
      { id: 'rams_pilani', name: 'Rams (Main Mess)', lat: 28.3650, lng: 75.5875, desc: "The legendary main dining hall serving the entire campus, known for its diverse menu and student gatherings." },
      { id: 'girls_mess', name: 'Girls Mess', lat: 28.3681, lng: 75.5879, desc: "Dedicated mess for girls hostels with special dietary accommodations." },
      { id: 'faculty_club', name: 'Faculty Club', lat: 28.3670, lng: 75.5885, desc: "Faculty dining and social club with restaurant facilities." },
      
      // Sports and Recreation
      { id: 'sports_pilani', name: 'Sports Complex', lat: 28.3640, lng: 75.5865, desc: "Comprehensive sports facilities including gymnasium, courts, and fields for various games." },
      { id: 'swimming_pool_pilani', name: 'Swimming Pool', lat: 28.3638, lng: 75.5863, desc: "Olympic-size swimming pool for recreation, training, and competitive events." },
      { id: 'football_ground_pilani', name: 'Football Ground', lat: 28.3635, lng: 75.5860, desc: "Full-size football ground hosting BOSM and other sporting events." },
      { id: 'cricket_ground_pilani', name: 'Cricket Ground', lat: 28.3633, lng: 75.5858, desc: "Cricket ground with proper pitch facilities for matches and practice." },
      { id: 'basketball_courts_pilani', name: 'Basketball Courts', lat: 28.3642, lng: 75.5867, desc: "Multiple basketball courts for recreational and competitive play." },
      { id: 'tennis_courts_pilani', name: 'Tennis Courts', lat: 28.3644, lng: 75.5869, desc: "Professional tennis courts for tournaments and training." },
      { id: 'volleyball_courts', name: 'Volleyball Courts', lat: 28.3646, lng: 75.5871, desc: "Sand and hard court volleyball facilities." },
      { id: 'hockey_ground', name: 'Hockey Ground', lat: 28.3631, lng: 75.5856, desc: "Standard hockey ground with astroturf for matches and practice." },
      
      // Essential Services
      { id: 'medical_pilani', name: 'Medical Center', lat: 28.3645, lng: 75.5870, desc: "Campus medical facility with 24/7 emergency services, pharmacy, and specialist consultation." },
      { id: 'swd_office', name: 'Student Welfare Division', lat: 28.3673, lng: 75.5897, desc: "Student Welfare Division office for student services, scholarships, and grievances." },
      { id: 'post_office_pilani', name: 'Post Office', lat: 28.3665, lng: 75.5875, desc: "Campus post office for mail services, courier, and postal banking." },
      { id: 'bank_pilani', name: 'UCO Bank Branch', lat: 28.3663, lng: 75.5873, desc: "Campus bank branch with ATM and full banking services." },
      { id: 'sbi_atm', name: 'SBI ATM', lat: 28.3667, lng: 75.5877, desc: "State Bank of India ATM for 24/7 banking services." },
      
      // Student Activity Centers
      { id: 'sac_pilani', name: 'Student Activity Centre', lat: 28.3660, lng: 75.5890, desc: "Central hub for student clubs, activities, and cultural events." },
      { id: 'music_room', name: 'Music Room', lat: 28.3662, lng: 75.5892, desc: "Dedicated space for music practice and band rehearsals." },
      { id: 'dance_room', name: 'Dance Room', lat: 28.3664, lng: 75.5894, desc: "Professional dance studio for cultural activities and practice." },
      { id: 'art_room', name: 'Art & Craft Room', lat: 28.3666, lng: 75.5896, desc: "Creative space for art, craft, and design activities." },
      
      // Academic Support
      { id: 'cdc_pilani', name: 'Computer Center', lat: 28.3678, lng: 75.5908, desc: "Central computer facility with high-speed internet and advanced computing resources." },
      { id: 'workshop_pilani', name: 'Central Workshop', lat: 28.3655, lng: 75.5875, desc: "Central workshop for practical training and project work across engineering disciplines." },
      { id: 'printing_press', name: 'Printing Press', lat: 28.3658, lng: 75.5873, desc: "Campus printing facility for academic materials and publications." },
      
      // Unique Campus Spots
      { id: 'convo_lawn', name: 'Convocation Lawn', lat: 28.3669, lng: 75.5896, desc: "Historic lawn where convocations and major events are held under the open sky." },
      { id: 'fd1_lawn', name: 'FD-I Lawn', lat: 28.3679, lng: 75.5909, desc: "Popular gathering spot for students between classes and for informal discussions." },
      { id: 'mess_road', name: 'Mess Road', lat: 28.3655, lng: 75.5880, desc: "The main road connecting hostels to Rams, always bustling with student activity." },
      { id: 'old_gate', name: 'Old Gate', lat: 28.3650, lng: 75.5850, desc: "Historic entrance gate to the campus, now a nostalgic landmark." },
      { id: 'new_gate', name: 'New Gate (Main Entrance)', lat: 28.3690, lng: 75.5930, desc: "Modern main entrance to the campus with security and visitor management." }
    ],
    outlets: [
      { name: 'Restro (Restaurant)', timing: '7:00 AM - 11:00 PM' },
      { name: 'Food Court (FC)', timing: '10:00 AM - 2:00 AM' },
      { name: 'Chowpatty (Street Food)', timing: '6:00 PM - 11:00 PM' },
      { name: 'Tikka Corner', timing: '7:00 PM - 12:00 AM' },
      { name: 'Juice Corner', timing: '8:00 AM - 10:00 PM' },
      { name: 'Tea Stall', timing: '6:00 AM - 11:00 PM' },
      { name: 'Ice Cream Parlor', timing: '11:00 AM - 11:00 PM' },
      { name: 'Akshay Supermarket', timing: '8:00 AM - 10:00 PM' },
      { name: 'Medical Store (Pharmacy)', timing: '8:00 AM - 10:00 PM' },
      { name: 'Stationery Shop', timing: '8:00 AM - 9:00 PM' },
      { name: 'Xerox & Printing', timing: '8:00 AM - 10:00 PM' },
      { name: 'Barber Shop', timing: '8:00 AM - 8:00 PM (Sunday closed)' },
      { name: 'Laundry Service', timing: '8:00 AM - 8:00 PM' },
      { name: 'Tailor Shop', timing: '9:00 AM - 7:00 PM' },
      { name: 'Cobbler', timing: '9:00 AM - 6:00 PM' },
      { name: 'UCO Bank Branch', timing: '10:00 AM - 4:00 PM (Mon-Fri)' },
      { name: 'SBI ATM', timing: '24/7' },
      { name: 'UCO Bank ATM', timing: '24/7' },
      { name: 'Post Office', timing: '10:00 AM - 5:00 PM (Mon-Sat)' },
      { name: 'PCO/STD Booth', timing: '24/7' },
      { name: 'Mobile Recharge', timing: '8:00 AM - 9:00 PM' },
      { name: 'Computer Repair', timing: '9:00 AM - 7:00 PM (Mon-Sat)' },
      { name: 'Sports Equipment Shop', timing: '4:00 PM - 8:00 PM' },
      { name: 'Optical Shop', timing: '10:00 AM - 7:00 PM' }
    ],
    messTimings: [
      ['Breakfast:', '07:00 AM - 9:00 AM'],
      ['Lunch:', '12:00 PM - 2:00 PM'],
      ['Snacks:', '04:00 PM - 06:00 PM'],
      ['Dinner:', '7:30 PM - 9:30 PM']
    ],
    emergencyContacts: [
      { name: 'Security Control Room', phone: '01596-242209' },
      { name: 'Main Gate Security', phone: '01596-242210' },
      { name: 'Medical Center', phone: '01596-242212' },
      { name: 'Ambulance Service', phone: '01596-242213' },
      { name: 'Fire Station', phone: '01596-242215' },
      { name: 'Chief Warden (Boys)', phone: '01596-242218' },
      { name: 'Chief Warden (Girls)', phone: '01596-242219' },
      { name: 'Maintenance Emergency', phone: '01596-242220' },
      { name: 'Administration Office', phone: '01596-242211' },
      { name: 'Director Office', phone: '01596-242201' }
    ],
    autoDrivers: [
      '9413456789', '9413567890', '9413678901', '9413789012',
      '9413890123', '9413901234', '9414012345', '9414123456',
      '9414234567', '9414345678', '9414456789', '9414567890',
      '9414678901', '9414789012', '9414890123', '9414901234',
      '9415012345', '9415123456', '9415234567', '9415345678',
      '9829123456', '9829234567', '9829345678', '9829456789'
    ],
    busRoutes: [
      {
        route: 'Pilani - Jhunjhunu',
        times: ['7:00 AM', '9:00 AM', '12:00 PM', '3:00 PM', '6:00 PM', '8:00 PM']
      },
      {
        route: 'Pilani - Chirawa',
        times: ['7:30 AM', '10:00 AM', '1:00 PM', '4:00 PM', '7:00 PM']
      },
      {
        route: 'Pilani - Sikar',
        times: ['6:30 AM', '8:30 AM', '11:30 AM', '2:30 PM', '5:30 PM']
      },
      {
        route: 'Pilani - Jaipur',
        times: ['6:00 AM', '8:00 AM', '2:00 PM', '6:00 PM']
      }
    ]
  }
};

export const heroImages = [
  {
    title: "BITS Hyderabad - Modern Excellence",
    link: "/hyderabad",
    thumbnail: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
  },
  {
    title: "BITS Goa - Coastal Paradise", 
    link: "/goa",
    thumbnail: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
  },
  {
    title: "BITS Pilani - Historic Legacy",
    link: "/pilani", 
    thumbnail: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
  },
  {
    title: "Campus Life at Hyderabad",
    link: "/hyderabad",
    thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
  },
  {
    title: "Goa Campus Serenity",
    link: "/goa",
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop", 
  },
  {
    title: "Pilani Heritage",
    link: "/pilani",
    thumbnail: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop",
  },
  {
    title: "Student Activities Hyderabad",
    link: "/hyderabad", 
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
  },
  {
    title: "Beach Campus Goa",
    link: "/goa",
    thumbnail: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
  },
  {
    title: "Clock Tower Pilani",
    link: "/pilani",
    thumbnail: "https://images.unsplash.com/photo-1580974928064-f0aeef70895a?w=800&h=600&fit=crop",
  },
  {
    title: "Innovation Hub Hyderabad", 
    link: "/hyderabad",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
  },
  {
    title: "Sunset at Goa Campus",
    link: "/goa", 
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
  },
  {
    title: "Desert Campus Pilani",
    link: "/pilani",
    thumbnail: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=600&fit=crop",
  },
  {
    title: "Tech Labs Hyderabad",
    link: "/hyderabad",
    thumbnail: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop", 
  },
  {
    title: "Library Views Goa",
    link: "/goa",
    thumbnail: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
  },
  {
    title: "Campus Traditions Pilani", 
    link: "/pilani",
    thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
  }
];