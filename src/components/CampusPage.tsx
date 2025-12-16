import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Menu,
  X,
  Home,
  Map as MapIcon,
  Info,
  MapPin,
  ArrowLeft,
  Phone,
  Mail,
  Car,
  Bus,
  Clock,
  ExternalLink,
  Users,
  AlertTriangle,
  FileText,
  Heart
} from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import { CampusData } from '../data/campusData';

// --- Utility Components ---

const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={`px-2 py-1 rounded-md text-xs font-mono uppercase tracking-widest ${className}`}>
    {children}
  </span>
);

const RouteBadge = ({ route }: { route: string }) => (
  <span className="bg-zinc-800 text-zinc-300 border border-white/5 px-3 py-1.5 rounded-lg text-sm font-mono hover:bg-blue-500/20 hover:text-blue-200 hover:border-blue-500/30 transition-all cursor-default">
    {route}
  </span>
);

const ContactItem = ({ name, phone, label, delay }: { name: string; phone: string; label?: string; delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: delay * 0.05 }}
    className="group flex items-center justify-between p-4 rounded-xl border border-white/5 bg-zinc-800/40 hover:bg-zinc-800 hover:border-blue-500/30 transition-all duration-300"
  >
    <div>
      <h4 className="font-medium text-zinc-200 group-hover:text-blue-200 transition-colors">{name}</h4>
      {label && <p className="text-xs text-zinc-500 mt-1">{label}</p>}
    </div>
    <div className="flex gap-2">
      <a
        href={`tel:${phone}`}
        className="p-2 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors"
        title="Call"
      >
        <Phone size={16} />
      </a>
    </div>
  </motion.div>
);

const CollapsibleSection: React.FC<{
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}> = ({ title, icon, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-4 border border-white/5 rounded-2xl overflow-hidden bg-zinc-800/30 backdrop-blur-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between hover:bg-zinc-800/50 transition-colors duration-300 group"
      >
        <div className="flex items-center gap-4">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-red-500/10 to-blue-500/10 text-zinc-300 group-hover:from-red-500/20 group-hover:to-blue-500/20 group-hover:text-white transition-all">
            {icon}
          </div>
          <h2 className="text-lg font-semibold text-zinc-200 tracking-tight group-hover:text-white">
            {title}
          </h2>
        </div>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={20} className="text-zinc-500 group-hover:text-zinc-300" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 border-t border-white/5">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Sidebar ---
const Sidebar: React.FC<{ 
  isOpen: boolean; 
  onClose: () => void; 
  activeSection: string; 
  onSectionChange: (section: string) => void;
  campusName: string;
}> = ({ isOpen, onClose, activeSection, onSectionChange, campusName }) => {
  const menuItems = [
    { icon: <Home size={18} />, label: 'Home', id: 'home' },
    { icon: <MapIcon size={18} />, label: 'Campus Map', id: 'map' },
    { icon: <Users size={18} />, label: 'Warden Info', id: 'wardens' },
    ...(campusName.toLowerCase().includes('goa') ? [
      { icon: <Car size={18} />, label: 'Goa Cabs', id: 'goacabs' }
    ] : []),
    { icon: <Info size={18} />, label: 'About & Credits', id: 'about' }
  ];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-zinc-950/60 backdrop-blur-sm z-[60]"
            onClick={onClose}
          />
        )}
      </AnimatePresence>
      
      <motion.div 
        className={`fixed left-0 top-0 h-full w-80 bg-zinc-900 border-r border-white/10 z-[70] shadow-2xl`}
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-zinc-900">
          <div>
            <h2 className="text-lg font-bold text-zinc-100 tracking-tighter">Menu</h2>
            <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">{campusName}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-lg text-zinc-400 transition-colors">
            <X size={20} />
          </button>
        </div>
        
        <div className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { onSectionChange(item.id); onClose(); }}
              className={`w-full flex items-center space-x-3 p-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                  : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div className="absolute bottom-6 left-0 w-full px-6">
            <div className="p-4 rounded-xl bg-zinc-800/30 border border-white/5">
                <p className="text-xs text-zinc-500 text-center">
                    Designed for BITSians
                </p>
            </div>
        </div>
      </motion.div>
    </>
  );
};

// --- Main Page ---
interface CampusPageProps {
  campusData: CampusData;
}

const CampusPage: React.FC<CampusPageProps> = ({ campusData }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedLocation, setSelectedLocation] = useState(campusData.locations[0]);

  // Leaflet Icons Fix
  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            
            {/* 1. Food Outlets & Timings */}
            <CollapsibleSection title="Food Outlets" icon={<Clock size={20} />}>
              <div className="grid gap-2">
                {campusData.outlets.map((outlet, index) => (
                  <div key={index} className="flex justify-between items-center p-3 rounded-lg hover:bg-zinc-800/50 transition-colors border-b border-white/5 last:border-0">
                    <span className="text-sm font-medium text-zinc-300">{outlet.name}</span>
                    <Badge className={outlet.closed ? 'text-red-400 bg-red-400/10 border border-red-400/20' : 'text-emerald-400 bg-emerald-400/10 border border-emerald-400/20'}>
                      {outlet.timing}
                    </Badge>
                  </div>
                ))}
              </div>
            </CollapsibleSection>

            {/* 2. Food Outlet Phone Numbers */}
            <CollapsibleSection title="Direct Lines" icon={<Phone size={20} />}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {campusData.outletPhones && campusData.outletPhones.length > 0 ? (
                    campusData.outletPhones.map((contact, index) => {
                        const raw = (contact.phone ?? '').toString();
                        const isCall = raw && raw !== 'TBD';
                        return isCall ? (
                            <ContactItem 
                                key={index} 
                                name={contact.name} 
                                phone={raw} 
                                delay={index} 
                            />
                        ) : (
                            <div key={index} className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-zinc-800/40">
                                <span className="text-zinc-400">{contact.name}</span>
                                <span className="text-xs text-zinc-600 font-mono">N/A</span>
                            </div>
                        )
                    })
                ) : (
                    <div className="text-center p-4 text-sm text-zinc-500">
                        No contact numbers available.
                    </div>
                )}
              </div>
            </CollapsibleSection>

            {/* 3. Auto Driver Numbers (Skip if Goa) */}
            {campusData.slug !== 'goa' && campusData.autoDrivers && (
              <CollapsibleSection title="Auto Drivers" icon={<Car size={20} />}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {campusData.autoDrivers.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone}`}
                      className="flex flex-col items-center justify-center p-4 rounded-xl border border-white/5 bg-zinc-800/40 hover:bg-blue-600/90 hover:border-blue-500 hover:text-white transition-all group"
                    >
                      <span className="text-xs text-zinc-500 group-hover:text-blue-100 mb-1">Driver {index + 1}</span>
                      <span className="font-mono text-sm">{phone}</span>
                    </a>
                  ))}
                </div>
              </CollapsibleSection>
            )}

            {/* 4. Bus Schedule 212 (Skip if Goa) */}
            {campusData.slug !== 'goa' && (
              <CollapsibleSection title="Shuttle Service (212)" icon={<Bus size={20} />}>
                 <div className="grid md:grid-cols-2 gap-6">
                    {/* From Campus */}
                    <div className="p-4 rounded-xl bg-zinc-800/40 border border-white/5">
                        <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500"></span> From Campus
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {['9:00 AM', '10:00 AM', '2:00 PM', '5:00 PM', '6:00 PM'].map(t => (
                                <span key={t} className="px-3 py-1.5 rounded bg-zinc-700/50 text-zinc-300 hover:text-red-400 hover:bg-red-500/10 hover:border-red-500/20 text-sm font-mono border border-transparent transition-all">{t}</span>
                            ))}
                        </div>
                    </div>
                    {/* From City */}
                    <div className="p-4 rounded-xl bg-zinc-800/40 border border-white/5">
                        <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span> From Secunderabad
                        </h3>
                         <div className="flex flex-wrap gap-2">
                            {['7:50 AM', '8:50 AM', '12:45 PM', '4:00 PM', '5:00 PM'].map(t => (
                                <span key={t} className="px-3 py-1.5 rounded bg-zinc-700/50 text-zinc-300 hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/20 text-sm font-mono border border-transparent transition-all">{t}</span>
                            ))}
                        </div>
                    </div>
                 </div>
              </CollapsibleSection>
            )}

            {/* 5. Alternate Bus Routes (Skip if Goa) */}
            {campusData.slug !== 'goa' && (
              <CollapsibleSection title="Alternate Bus Routes" icon={<MapPin size={20} />}>
                  <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 p-4 rounded-lg mb-4 flex items-start gap-3">
                      <AlertTriangle className="text-red-400 shrink-0" size={20} />
                      <p className="text-sm text-red-200">
                          Confirm with the conductor before boarding to ensure the bus stops at your destination.
                      </p>
                  </div>
                  
                  <div className="bg-zinc-800/40 p-6 rounded-xl border border-white/5">
                      <h3 className="text-sm font-semibold text-zinc-300 mb-4">
                        From Secunderabad to Thumkunta/Tandoor Junction:
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          '211A', '211B', '211C', '211DY', '212T',
                          '212/564', '212/567', '212/568', '212/702',
                          '564', '567', '568'
                        ].map((route) => (
                          <RouteBadge key={route} route={route} />
                        ))}
                      </div>
                  </div>
              </CollapsibleSection>
            )}
          </motion.div>
        );

      case 'goacabs':
         return (
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                 <div className="p-6 rounded-2xl bg-gradient-to-r from-red-500/10 to-blue-500/10 border border-white/5 mb-6">
                     <h2 className="text-xl font-bold text-zinc-100 mb-2">Goa Taxi Services</h2>
                     <p className="text-zinc-400 text-sm">Official and trusted cab services for the Goa Campus.</p>
                 </div>
                 
                 {/* Cab List */}
                 <div className="grid gap-3">
                    {campusData.goacabs?.map((cab, idx) => (
                         <div key={idx} className="flex justify-between items-center p-4 rounded-xl bg-zinc-800/40 border border-white/5 hover:border-blue-500/30 transition-all">
                             <div>
                                 <h3 className="font-semibold text-zinc-200">{cab.name}</h3>
                                 <p className="text-xs text-zinc-500">{cab.vehicle || 'Taxi Service'}</p>
                             </div>
                             <div className="flex gap-2">
                                {Array.isArray(cab.phone) ? cab.phone.map((p, i) => (
                                    <a key={i} href={`tel:${p}`} className="p-3 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                                        <Phone size={18} />
                                    </a>
                                )) : (
                                    <a href={`tel:${cab.phone}`} className="p-3 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                                        <Phone size={18} />
                                    </a>
                                )}
                             </div>
                         </div>
                    ))}
                 </div>

                 {/* Google Sheet Link */}
                 <div className="mt-8 text-center">
                    <a 
                        href="https://docs.google.com/spreadsheets/d/1p2h80qan-fqB6YiNC6iQBjygd_JtNwDz/edit?usp=drivesdk&ouid=109919866450311609892&rtpof=true&sd=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-800 hover:bg-blue-600 hover:text-white text-zinc-200 font-medium transition-all"
                    >
                        <FileText size={18} />
                        View Full Rate Card
                    </a>
                 </div>
             </motion.div>
         )

      case 'map':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-200px)] min-h-[600px]">
              
              {/* Location List */}
              <div className="w-full lg:w-1/3 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                <h3 className="text-lg font-bold text-zinc-200 mb-4 flex items-center gap-2">
                    <MapIcon size={18} className="text-red-400"/> Locations
                </h3>
                {campusData.locations.map((location) => (
                    <button
                      key={location.id}
                      onClick={() => setSelectedLocation(location)}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                        selectedLocation?.id === location.id
                          ? 'bg-gradient-to-r from-red-500/10 to-transparent border-red-500/30 text-red-200'
                          : 'bg-zinc-800/40 text-zinc-400 border-white/5 hover:bg-zinc-800 hover:text-zinc-200'
                      }`}
                    >
                      <div className="font-medium text-sm">{location.name}</div>
                      {selectedLocation?.id === location.id && (
                          <div className="mt-2 text-xs opacity-70 leading-relaxed text-zinc-400">
                            {location.desc}
                          </div>
                      )}
                    </button>
                  ))}
              </div>

              {/* Map Container */}
              <div className="w-full lg:w-2/3 rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl">
                 <MapContainer
                    center={[selectedLocation.lat, selectedLocation.lng]}
                    zoom={17}
                    scrollWheelZoom={true}
                    className="w-full h-full z-0 bg-zinc-900"
                    key={selectedLocation.id}
                  >
                    <TileLayer
                      // Adjusted Dark Mode Filter for Grey Theme
                      className="map-tiles-grey" 
                      attribution='© OpenStreetMap'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[selectedLocation.lat, selectedLocation.lng]}>
                      <Popup className="custom-popup">
                         <span className="font-semibold">{selectedLocation.name}</span>
                      </Popup>
                    </Marker>
                  </MapContainer>
                  
                  {/* Overlay Button */}
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${selectedLocation.lat},${selectedLocation.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-6 right-6 z-[400] bg-zinc-800 text-white border border-white/10 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-xl hover:bg-blue-600 hover:border-blue-500 transition-colors"
                  >
                    Open in Google Maps <ExternalLink size={14}/>
                  </a>
              </div>
            </div>
            
            {/* Inject CSS for Grey Map */}
            <style>{`
                .map-tiles-grey {
                    filter: grayscale(100%) invert(90%) contrast(85%) brightness(95%);
                }
                .custom-popup .leaflet-popup-content-wrapper {
                    background: #27272a;
                    color: #e4e4e7;
                    border: 1px solid #3f3f46;
                }
                .custom-popup .leaflet-popup-tip {
                    background: #27272a;
                }
                /* Custom Scrollbar for list */
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #3f3f46;
                    border-radius: 4px;
                }
            `}</style>
          </motion.div>
        );

      case 'wardens':
        return (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="p-6 rounded-2xl bg-gradient-to-r from-red-500/10 to-blue-500/10 border border-white/5 mb-6">
                     <h2 className="text-xl font-bold text-zinc-100 mb-2">Warden Contacts</h2>
                     <p className="text-zinc-400 text-sm">Emergency and administrative contacts for hostels.</p>
                 </div>

                <div className="grid gap-4">
                {campusData.warden?.map((warden, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 rounded-xl border border-white/5 bg-zinc-800/40 hover:border-blue-500/20 transition-all">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-lg font-bold text-zinc-200">{warden.name}</h3>
                            <p className="text-sm text-zinc-500">{warden.bhavan || 'Warden'}</p>
                        </div>
                        <div className="flex gap-3 flex-wrap">
                             {Array.isArray(warden.phone) ? warden.phone.map((p, i) => (
                                <a key={i} href={`tel:${p}`} className="px-4 py-2 rounded-lg bg-zinc-800 text-sm text-zinc-300 flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-colors">
                                    <Phone size={14}/> Call {i+1}
                                </a>
                             )) : (
                                <a href={`tel:${warden.phone}`} className="px-4 py-2 rounded-lg bg-zinc-800 text-sm text-zinc-300 flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-colors">
                                    <Phone size={14}/> Call
                                </a>
                             )}
                             {warden.email && (
                                <a href={`mailto:${warden.email}`} className="px-4 py-2 rounded-lg bg-zinc-800 text-sm text-zinc-300 flex items-center gap-2 hover:bg-red-600 hover:text-white transition-colors">
                                    <Mail size={14}/> Email
                                </a>
                             )}
                        </div>
                    </div>
                ))}
                </div>
            </motion.div>
        );
        
      case 'about':
        return (
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl mx-auto text-center py-12">
                 <div className="w-20 h-20 bg-gradient-to-br from-red-500/10 to-blue-500/10 rounded-2xl mx-auto flex items-center justify-center mb-6 border border-white/5">
                     <Info size={32} className="text-zinc-200"/>
                 </div>
                 <h2 className="text-3xl font-bold text-zinc-100 mb-4">About Campus101</h2>
                 <p className="text-zinc-400 leading-relaxed mb-8">
                    An open-source initiative to simplify campus life at BITS Pilani. 
                    Created to help students navigate the complex ecosystem of transport, food, and facilities.
                 </p>
                 <div className="p-6 rounded-xl bg-zinc-800/40 border border-white/5 mb-8 text-left">
                    <p className="text-zinc-300 text-sm leading-relaxed">
                        {campusData.description}
                    </p>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-6 text-sm">
                     <div className="p-4 rounded-xl border border-white/5 bg-zinc-800/40 hover:bg-zinc-800 transition-colors">
                         <span className="block text-zinc-500 text-xs uppercase tracking-widest mb-2">Developed By</span>
                         <a href="https://linkedin.com/in/sdeevanapalli" target="_blank" rel="noopener noreferrer" className="text-zinc-200 font-medium hover:text-blue-400 flex justify-center items-center gap-2">
                             Shriniketh D. <ExternalLink size={12} />
                         </a>
                     </div>
                     <div className="p-4 rounded-xl border border-white/5 bg-zinc-800/40 hover:bg-zinc-800 transition-colors">
                         <span className="block text-zinc-500 text-xs uppercase tracking-widest mb-2">Co-Developed By</span>
                         <a href="https://linkedin.com/in/kushagra-singh47" target="_blank" rel="noopener noreferrer" className="text-zinc-200 font-medium hover:text-blue-400 flex justify-center items-center gap-2">
                             Kushagra S. <ExternalLink size={12} />
                         </a>
                     </div>
                 </div>

                 <div className="mt-12 flex items-center justify-center gap-2 text-zinc-600 text-sm">
                     Built with <Heart size={14} className="text-red-500 fill-red-500" /> for BITSians
                 </div>
             </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-200 selection:bg-red-500/30">
       
       {/* Background Grid - Adjusted for Grey Theme */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none fixed" />

      {/* Navigation Drawer */}
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        campusName={campusData.name}
      />

      {/* Top Bar */}
      <div className="sticky top-0 z-30 w-full border-b border-white/5 bg-zinc-900/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
             <Link to="/" className="p-2 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-400 hover:text-zinc-100">
                <ArrowLeft size={20} />
             </Link>
             
             {/* MENU BUTTON */}
             <button 
                onClick={() => setSidebarOpen(true)} 
                className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-200 transition-colors"
                aria-label="Open Menu"
             >
                <Menu size={20} />
             </button>
             
             <div className="h-6 w-px bg-white/10 hidden sm:block" />
             <h1 className="text-lg font-semibold tracking-tight truncate max-w-[200px] sm:max-w-none text-zinc-100">
               {campusData.name}
             </h1>
          </div>
          
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest hidden sm:block">
            Campus Guide v2.0
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 py-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default CampusPage;