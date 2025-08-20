import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeroParallax } from './ui/hero-parallax';
import { CardContainer, CardBody, CardItem } from './ui/3d-card';
import { heroImages } from '../data/campusData';
import { MapPin, Users, Book, Sparkles } from 'lucide-react';

const LandingPage = () => {
  const campuses = [
    {
      name: "BITS Pilani, Hyderabad Campus",
      location: "Hyderabad, Telangana",
      description: "Modern tech hub with state-of-the-art facilities and vibrant student life",
      image: "/bitsh.jpg",
      link: "/hyderabad",
      color: "from-blue-500 to-cyan-500",
      stats: { students: "3,000+", facilities: "50+", clubs: "40+" }
    },
    {
      name: "BITS Pilani, K. K. Birla Goa Campus", 
      location: "Zuarinagar, Goa",
      description: "Coastal paradise offering academic excellence with beachside serenity",
      image: "/bitsg.jpeg", 
      link: "/goa",
      color: "from-emerald-500 to-teal-500",
      stats: { students: "2,500+", facilities: "40+", clubs: "35+" }
    },
    {
      name: "BITS Pilani",
      location: "Pilani, Rajasthan", 
      description: "Historic flagship campus where tradition meets innovation",
      image: "/bitsp.jpg",
      link: "/pilani",
      color: "from-orange-500 to-red-500", 
      stats: { students: "4,000+", facilities: "60+", clubs: "50+" }
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Parallax Section */}
      <HeroParallax products={heroImages} />
      
      {/* Campus Selection Section */}
      <div className="relative z-10 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">
              Choose Your Campus
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the unique character, facilities, and opportunities each BITS campus offers.
              From Hyderabad's modern innovation to Goa's coastal charm and Pilani's historic legacy.
            </p>
          </motion.div>

          {/* Updated grid with better spacing */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 px-4">
            {campuses.map((campus, index) => (
              <motion.div
                key={campus.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex justify-center" // Center the card in its grid cell
              >
                <CardContainer className="inter-var w-full max-w-sm">
                  <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      {campus.name}
                    </CardItem>
                    
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 flex items-center"
                    >
                      <MapPin size={16} className="mr-2" />
                      {campus.location}
                    </CardItem>

                    <CardItem translateZ="100" className="w-full mt-4">
                      <img
                        src={campus.image}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt={campus.name}
                      />
                    </CardItem>

                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-4 dark:text-neutral-300"
                    >
                      {campus.description}
                    </CardItem>

                    {/* Stats */}
                    <CardItem translateZ="80" className="mt-4">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="flex flex-col items-center">
                          <Users size={20} className="text-blue-400 mb-1" />
                          <span className="text-xs text-gray-400">Students</span>
                          <span className="text-sm font-semibold text-white">{campus.stats.students}</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Book size={20} className="text-green-400 mb-1" />
                          <span className="text-xs text-gray-400">Facilities</span>
                          <span className="text-sm font-semibold text-white">{campus.stats.facilities}</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Sparkles size={20} className="text-purple-400 mb-1" />
                          <span className="text-xs text-gray-400">Clubs</span>
                          <span className="text-sm font-semibold text-white">{campus.stats.clubs}</span>
                        </div>
                      </div>
                    </CardItem>

                    <div className="flex justify-between items-center mt-6">
                      <CardItem
                        translateZ={20}
                        as={Link}
                        to={campus.link}
                        className={`px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r ${campus.color} hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                      >
                        Explore Campus
                      </CardItem>
                      
                      <CardItem
                        translateZ={20}
                        as="div"
                        className="px-4 py-2 rounded-xl bg-black/[0.8] text-white text-sm font-normal"
                      >
                        Campus Guide →
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              What You'll Discover
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Get comprehensive information about each campus including interactive maps, 
              facility timings, contact details, and insider tips from students.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🗺️", title: "Interactive Maps", desc: "Detailed campus maps with location markers" },
              { icon: "🕒", title: "Facility Timings", desc: "Up-to-date schedules for all campus services" },
              { icon: "📞", title: "Emergency Contacts", desc: "Important numbers and contact information" },
              { icon: "🍽️", title: "Mess Menus", desc: "Dining schedules and food outlet information" }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black py-12 text-center">
        <p className="text-gray-400">
          Built with ❤️ for BITS students by{' '}
          <a
            href="https://www.linkedin.com/in/sdeevanapalli"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            Shriniketh Deevanapalli
          </a>
          {' '}and{' '}
          <a
            href="https://www.linkedin.com/in/kushagra-singh47/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            Kushagra Singh
          </a>
        </p>
      </div>
    </div>
  );
};

export default LandingPage;