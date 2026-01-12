import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeroParallax } from './ui/hero-parallax';
import { CardContainer, CardBody, CardItem } from './ui/3d-card';
import { heroImages } from '../data/campusData';
import { ArrowUpRight, Users, Layers, Trophy } from 'lucide-react';
import { useIsMobile } from '../hooks/useIsMobile';

const LandingPage = () => {
  const isMobile = useIsMobile();
  
  const campuses = [
    {
      id: "hyd",
      name: "Hyderabad",
      fullName: "BITS Pilani, Hyderabad Campus",
      location: "Telangana",
      tagline: "The Modern Fortress",
      description: "A convergence of state-of-the-art infrastructure and a vibrant startup culture.",
      image: "/bitsh.jpg",
      link: "/hyderabad",
      accent: "text-cyan-400",
      border: "hover:border-cyan-500/50",
      shadow: "hover:shadow-cyan-500/20",
      stats: {area: "200 Acres" }
    },
    {
      id: "goa",
      name: "Goa",
      fullName: "BITS Pilani, K.K. Birla Goa Campus",
      location: "Zuarinagar",
      tagline: "Coastal Serenity",
      description: "Where academic rigor meets the creative freedom of the coast.",
      image: "/bitsg.jpeg",
      link: "/goa",
      accent: "text-emerald-400",
      border: "hover:border-emerald-500/50",
      shadow: "hover:shadow-emerald-500/20",
      stats: {area: "180 Acres" }
    },
    {
      id: "pilani",
      name: "Pilani",
      fullName: "BITS Pilani, Pilani Campus",
      location: "Rajasthan",
      tagline: "The Historic Legacy",
      description: "The flagship campus where tradition creates the foundation for innovation.",
      image: "/bitsp.jpg",
      link: "/pilani",
      accent: "text-amber-400",
      border: "hover:border-amber-500/50",
      shadow: "hover:shadow-amber-500/20",
      stats: {area: "328 Acres" }
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-white/20 selection:text-black">
      
      <div className="relative z-10">
        {!isMobile ? (
          <HeroParallax products={heroImages} />
        ) : (
          <div className="h-auto py-20 md:py-40 overflow-hidden bg-neutral-950 antialiased relative flex flex-col">
            <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-white/30"></div>
                <p className="text-sm font-mono text-neutral-400 uppercase tracking-widest">
                   The Experience
                </p>
              </div>
              <h1 className="text-4xl md:text-8xl font-bold text-white tracking-tighter leading-tight">
                BITS Pilani <br /> 
                <span className="text-neutral-500">Campus101</span>
              </h1>
              <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-400 font-light leading-relaxed">
                A unified interface to explore the three bastions of excellence. 
                From the historic corridors of <span className="text-white font-medium">Pilani</span>, 
                to the coastal calm of <span className="text-white font-medium">Goa</span>, 
                and the modern fortress of <span className="text-white font-medium">Hyderabad</span>.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="relative w-full bg-neutral-950 mt-0 md:-mt-20 pb-32">
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-2">
                Select Campus
              </h2>
              <p className="text-neutral-400 text-lg font-light tracking-wide">
                Three locations. One distinctive legacy.
              </p>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="hidden md:flex gap-8 text-neutral-500 font-mono text-xs uppercase tracking-widest"
            >
              <div className="flex items-center gap-2">
                <Layers size={14} /> 3 Campuses
              </div>
              <div className="flex items-center gap-2">
                <Users size={14} /> 10k+ Students
              </div>
              <div className="flex items-center gap-2">
                <Trophy size={14} /> Est. 1964
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {campuses.map((campus, index) => (
              <motion.div
                key={campus.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="h-full"
              >
                {!isMobile ? (
                  <CardContainer className="inter-var w-full h-full">
                    <CardBody className={`relative group/card h-full w-full rounded-2xl p-4 border border-white/10 bg-neutral-900/50 backdrop-blur-sm transition-all duration-500 ${campus.border} ${campus.shadow}`}>
                      
                      <CardItem 
                        translateZ="100" 
                        className="absolute inset-0 z-50 w-full h-full"
                      >
                        <Link 
                          to={campus.link} 
                          className="w-full h-full block" 
                          aria-label={`Visit ${campus.name}`}
                        />
                      </CardItem>

                      <CardItem
                        translateZ="40"
                        className="w-full mb-6 overflow-hidden rounded-xl aspect-[4/3] relative"
                      >
                        <div className="absolute inset-0 bg-black/20 group-hover/card:bg-transparent transition-colors duration-500 z-10" />
                        <img
                          src={campus.image}
                          className="h-full w-full object-cover grayscale-[30%] group-hover/card:grayscale-0 group-hover/card:scale-105 transition-all duration-700 ease-out"
                          alt={`${campus.fullName} - ${campus.description}`}
                          loading="lazy"
                          decoding="async"
                        />
                      </CardItem>

                      <div className="px-2 pb-2 flex flex-col h-full justify-between">
                        <div>
                          <CardItem
                            translateZ="50"
                            className="flex items-center justify-between mb-2"
                          >
                            <span className={`text-xs font-bold tracking-[0.2em] uppercase ${campus.accent}`}>
                              {campus.location}
                            </span>
                          </CardItem>

                          <CardItem
                            translateZ="60"
                            as="h3"
                            className="text-3xl font-semibold text-white mb-2 tracking-tight"
                          >
                            {campus.name}
                          </CardItem>

                          <CardItem
                            as="p"
                            translateZ="50"
                            className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-2"
                          >
                            {campus.description}
                          </CardItem>
                        </div>

                        {/* Stats & Action */}
                        <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-4">
                          <CardItem translateZ="40" className="flex gap-4 text-xs font-mono text-neutral-500">
                            <span>{campus.stats.area}</span>
                          </CardItem>

                          <CardItem
                            translateZ="40"
                            as="div"
                            className="group/btn flex items-center gap-2 text-white text-sm font-medium hover:text-neutral-300 transition-colors"
                          >
                            Visit
                            <div className="bg-white text-black rounded-full p-1 group-hover/card:-rotate-45 transition-transform duration-300">
                              <ArrowUpRight size={14} />
                            </div>
                          </CardItem>
                        </div>
                      </div>
                    </CardBody>
                  </CardContainer>
                ) : (
                  <Link 
                    to={campus.link} 
                    className="relative group/card h-full w-full rounded-2xl p-4 border border-white/10 bg-neutral-900/50 backdrop-blur-sm transition-all duration-500 hover:bg-neutral-800/50 flex flex-col"
                  >
                    <div className="w-full mb-6 overflow-hidden rounded-xl aspect-[4/3] relative">
                      <div className="absolute inset-0 bg-black/20 group-hover/card:bg-transparent transition-colors duration-500 z-10" />
                      <img
                        src={campus.image}
                        className="h-full w-full object-cover grayscale-[30%] group-hover/card:grayscale-0 transition-all duration-700 ease-out"
                        alt={`${campus.fullName} - ${campus.description}`}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    <div className="px-2 pb-2 flex flex-col h-full justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-xs font-bold tracking-[0.2em] uppercase ${campus.accent}`}>
                            {campus.location}
                          </span>
                        </div>

                        <h3 className="text-3xl font-semibold text-white mb-2 tracking-tight">
                          {campus.name}
                        </h3>

                        <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-2">
                          {campus.description}
                        </p>
                      </div>

                      {/* Stats & Action */}
                      <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-4">
                        <div className="flex gap-4 text-xs font-mono text-neutral-500">
                          <span>{campus.stats.area}</span>
                        </div>

                        <div className="group/btn flex items-center gap-2 text-white text-sm font-medium hover:text-neutral-300 transition-colors">
                          Visit
                          <div className="bg-white text-black rounded-full p-1 transition-transform duration-300">
                            <ArrowUpRight size={14} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-neutral-950 border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center opacity-60 hover:opacity-100 transition-opacity">
          <p className="text-neutral-500 text-sm font-mono">
            © {new Date().getFullYear()} Campus101
          </p>
          <div className="flex gap-6 text-sm text-neutral-500">
            <a href="https://www.linkedin.com/in/sdeevanapalli" className="hover:text-white transition-colors">
              Shriniketh Deevanapalli
            </a>
            <span>&</span>
            <a href="https://www.linkedin.com/in/kushagra-singh47/" className="hover:text-white transition-colors">
              Kushagra Singh
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;