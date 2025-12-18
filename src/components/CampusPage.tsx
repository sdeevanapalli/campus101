import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Map as MapIcon,
  Phone,
  Car,
  Bus,
  ExternalLink,
  Users,
  Search,
  Zap,
  Coffee,
  Shield,
  Grid,
  Info,
  Heart,
  Github,
  Utensils,
  Clock,
  MapPin,
  AlertTriangle,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import { CampusData } from '../data/campusData';

// --- LEAFLET ICON FIX START ---
import L from 'leaflet';

// Import marker images explicitly
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for the broken icon in production builds
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: typeof markerIcon === 'string' ? markerIcon : (markerIcon as any).src,
  iconRetinaUrl: typeof markerIcon2x === 'string' ? markerIcon2x : (markerIcon2x as any).src,
  shadowUrl: typeof markerShadow === 'string' ? markerShadow : (markerShadow as any).src,
});
// --- LEAFLET ICON FIX END ---

// --- Design Primitives ---

const GlassCard = ({ children, className, onClick, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: delay * 0.1 }}
    onClick={onClick}
    className={`
      relative overflow-hidden
      bg-zinc-900/60 backdrop-blur-xl
      border border-white/5
      rounded-[32px]
      hover:bg-zinc-800/80 hover:border-white/10 hover:shadow-2xl hover:shadow-indigo-500/10
      transition-all duration-500 ease-out
      group
      ${className}
    `}
  >
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    <div className="relative z-10 h-full">{children}</div>
  </motion.div>
);

const GlassInput = ({ placeholder, value, onChange, icon: Icon }: any) => (
  <div className="relative group">
    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-indigo-400 transition-colors">
      <Icon size={18} />
    </div>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-black/40 border border-white/10 text-white pl-12 pr-4 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all placeholder:text-zinc-600"
    />
  </div>
);

const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="mb-8 px-2">
    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-2">
      {title}
    </h2>
    <p className="text-zinc-500 text-lg font-medium tracking-wide">
      {subtitle}
    </p>
  </div>
);

// Shared placeholder for in-progress features
const InProgress = ({ label = 'Feature', context = 'Pilani' }: { label?: string; context?: string }) => (
  <div className="relative min-h-[40vh] w-full rounded-[32px] overflow-hidden border border-white/10 bg-zinc-950 flex items-center justify-center">
    <div className="text-center space-y-4 px-8 max-w-xl">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-200 uppercase text-[11px] font-bold tracking-[0.25em]">
        <AlertTriangle size={16} className="text-amber-300" />
        <span>In Progress</span>
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-white">{label} for {context} campus</h3>
      <p className="text-zinc-400 text-base leading-relaxed">We’re still building this section. It’ll be available soon.</p>
    </div>
  </div>
);

const FlyToLocation = ({ center }: { center: [number, number] }) => {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, 17, { duration: 1.5 });
  }, [center, map]);
  return null;
};

// --- Views ---

const HomeView = ({ data, setTab }: { data: CampusData, setTab: any }) => {
  return (
    <div className="space-y-6 pb-32">
      <SectionHeader title={`Hello, BITSian`} subtitle={`Welcome to ${data.name}`} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* 1. Overview Card */}
        <GlassCard className="md:col-span-2 p-8 flex flex-col justify-between min-h-[240px] bg-gradient-to-br from-indigo-500/10 to-purple-500/5">
           <div>
             <h3 className="text-3xl font-bold text-white mb-2">Quick Access</h3>
             <p className="text-zinc-400">Navigate campus life with ease.</p>
           </div>
           <div className="flex gap-4 mt-8 flex-wrap">
              <button onClick={() => setTab('transport')} className="flex-1 py-4 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-bold uppercase tracking-wider transition-all flex flex-col items-center gap-2">
                 <Bus size={20} className="text-rose-400" /> Transport
              </button>
              <button onClick={() => setTab('outlets')} className="flex-1 py-4 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-bold uppercase tracking-wider transition-all flex flex-col items-center gap-2">
                 <Utensils size={20} className="text-orange-400" /> Campus Outlets
              </button>
              <button onClick={() => setTab('map')} className="flex-1 py-4 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-bold uppercase tracking-wider transition-all flex flex-col items-center gap-2">
                 <MapIcon size={20} className="text-blue-400" /> Map
              </button>
           </div>
        </GlassCard>

        {/* 2. Quick Status */}
        <GlassCard className="p-6 flex flex-col justify-center items-center text-center gap-4 bg-zinc-900/80">
            <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
                <Clock size={32} />
            </div>
            <div>
                <h3 className="text-4xl font-bold text-white tracking-tighter">
                    {new Date().getHours()}:{new Date().getMinutes().toString().padStart(2, '0')}
                </h3>
                <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mt-1">System Time</p>
            </div>
        </GlassCard>

          {/* 3. Essential Services (hidden for Goa) */}
          {data.slug !== 'goa' && data.slug !== 'pilani'&& (
           <GlassCard className="md:col-span-3 p-6">
             <div className="flex items-center gap-3 mb-6">
               <Zap size={20} className="text-yellow-400" />
               <h3 className="text-lg font-bold text-white">Campus Outlet Phone Numbers</h3>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
               {data.outletPhones?.map((item, i) => (
                 <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                   <div className="truncate pr-2">
                      <span className="block text-sm text-zinc-200 font-medium">{item.name}</span>
                   </div>
                   {item.phone && item.phone !== 'TBD' ? (
                     <a href={`tel:${item.phone}`} className="p-2 bg-indigo-500/10 text-indigo-300 rounded-lg hover:bg-indigo-500 hover:text-white transition-all">
                       <Phone size={14} />
                     </a>
                   ) : <span className="text-[10px] text-zinc-600">N/A</span>}
                 </div>
               ))}
             </div>
           </GlassCard>
          )}
      </div>
    </div>
  );
};

const TransportView = ({ data }: { data: CampusData }) => {
    // Static Data for BITS Hyd
    const shuttleToCity = ['7:50 AM', '8:50 AM', '12:45 PM', '4:00 PM', '5:00 PM'];
    const shuttleToCampus = ['9:00 AM', '10:00 AM', '2:00 PM', '5:00 PM', '6:00 PM'];
    const altRoutes = ['211A', '211B', '211C', '211DY', '212T', '212/564', '212/567', '212/568', '564', '567'];

  // Pilani transport: show in-progress placeholder
  if (data.slug === 'pilani') {
    return (
      <div className="pb-32 space-y-6">
        <SectionHeader title="Transport" subtitle="" />
        <InProgress label="Transport" context="Pilani" />
      </div>
    );
  }

return (
        <div className="pb-32 space-y-6">
            <SectionHeader title="Transport" subtitle="" />

            {/* HYDERABAD SPECIFIC DATA */}
            {data.slug !== 'goa' ? (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    
                    {/* LEFT COLUMN: AUTO DRIVERS */}
                    <div className="lg:col-span-1 h-full">
                        <GlassCard className="p-6 h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <Car size={20} className="text-yellow-400" />
                                <h3 className="text-lg font-bold text-white">Auto Drivers</h3>
                                <p className="text-sm text-neutral-400 mt-2 leading-relaxed"></p>
                            </div>
                            <div className="grid grid-cols-1 gap-3">
                                {data.autoDrivers?.map((phone, i) => (
                                    <a key={i} href={`tel:${phone}`} className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group">
                                        <span className="text-sm text-zinc-400 font-bold uppercase tracking-wider">+91 {phone}</span>
                                        <Phone size={16} className="text-zinc-500 group-hover:text-white" />
                                    </a>
                                ))}
                            </div>
                        </GlassCard>
                    </div>

                    {/* RIGHT COLUMN: BUS NUMBERS & TIMINGS */}
                    <div className="lg:col-span-2 space-y-6">
                        
                        {/* 1. Alternate Routes (Bus Numbers) */}
                        <GlassCard className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <MapPin size={20} className="text-emerald-400" />
                                <h3 className="text-lg font-bold text-white">Alternate Routes (RTC Bus Numbers)</h3>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {altRoutes.map((route) => (
                                    <span key={route} className="px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-300 text-sm font-mono border border-white/10">
                                        {route}
                                    </span>
                                ))}
                            </div>
                            <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 flex gap-3 items-start">
                                <AlertTriangle size={16} className="text-orange-400 shrink-0 mt-0.5" />
                                <p className="text-xs text-orange-200/80 leading-relaxed">
                                    Always confirm with the conductor before boarding if the bus stops at Thumkunta/Tandoor Junction.
                                </p>
                            </div>
                        </GlassCard>

                        {/* 2. Shuttle Schedule (Timings) */}
                        <GlassCard className="p-8">
                            <div className="flex items-center gap-3 mb-8">
                                <Bus size={24} className="text-rose-400" />
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Shuttle Schedule (212)</h3>
                                    <p className="text-zinc-500 text-sm">Daily Service Timetable</p>
                                </div>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span> From Campus
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {shuttleToCampus.map((t, i) => (
                                            <span key={i} className="px-3 py-2 rounded-lg bg-white/5 border border-white/5 text-zinc-300 text-xs font-mono">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> From Secunderabad
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {shuttleToCity.map((t, i) => (
                                            <span key={i} className="px-3 py-2 rounded-lg bg-white/5 border border-white/5 text-zinc-300 text-xs font-mono">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            ) : (
                /* GOA SPECIFIC DATA */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {data.goacabs?.map((cab, idx) => (
                        <GlassCard key={idx} delay={idx} className="p-6">
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-3 rounded-full bg-zinc-950 border border-white/10 text-rose-400">
                                    <Car size={20} />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">{cab.name}</h3>
                            <p className="text-sm text-zinc-500 mb-6">{cab.vehicle}</p>
                            <div className="flex gap-2">
                      <a href={`tel:${cab.phone}`} className="flex-1 py-3 rounded-xl bg-zinc-800 text-white border border-white/10 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-zinc-700 transition-colors">
                                    <Phone size={16} /> Book
                                </a>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            )}
        </div>
    );
};

const OutletsView = ({ data }: { data: CampusData }) => {
    const [outletSearch, setOutletSearch] = useState('');
    const openOutlets = data.outlets.filter(o => !o.closed).length;
    
    const filteredOutlets = data.outlets.filter(outlet => 
      outlet.name.toLowerCase().includes(outletSearch.toLowerCase())
    );
  
    // Pilani outlets: show in-progress placeholder
    if (data.slug === 'pilani') {
      return (
        <div className="pb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 px-2">
              <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-2">Outlets</h2>
              </div>
          </div>
          <InProgress label="Outlets" context="Pilani" />
        </div>
      );
    }

    return (
      <div className="pb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 px-2">
            <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-2">Outlets</h2>
                <div className="flex items-center gap-2">
                </div>
            </div>
            <div className="w-full md:w-80">
                <GlassInput 
                    icon={Search} 
                    placeholder="Search outlets..." 
                    value={outletSearch}
                    onChange={setOutletSearch}
                />
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredOutlets.length > 0 ? (
                filteredOutlets.map((outlet, i) => (
                    <GlassCard key={i} delay={i} className="p-5 flex items-center justify-between group hover:border-orange-500/30">
                        <div>
                            <h3 className="text-lg font-bold text-zinc-200 group-hover:text-white transition-colors">{outlet.name}</h3>
                            <div className="flex items-center gap-2 mt-2">
                                <Clock size={12} className={outlet.closed ? 'text-rose-400' : 'text-emerald-400'} />
                                <span className={`text-xs font-medium ${outlet.closed ? 'text-rose-400' : 'text-emerald-400'}`}>
                                    {outlet.timing}
                                </span>
                            </div>
                        </div>
                    </GlassCard>
                ))
            ) : (
                <div className="col-span-full py-20 text-center text-zinc-500">
                    No outlets matching "{outletSearch}"
                </div>
            )}
        </div>
      </div>
    );
};

const MapView = ({ data }: { data: CampusData }) => {
  const [activeLoc, setActiveLoc] = useState(data.locations[0]);
  const [isListOpen, setListOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen for animation direction
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Goa maps are not ready yet; show a placeholder instead of the interactive map
  if (data.slug === 'goa' ) {
    return (
      <div className="relative h-[80vh] md:h-[75vh] w-full rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-zinc-950 flex items-center justify-center">
        <div className="text-center space-y-4 px-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-200 uppercase text-[11px] font-bold tracking-[0.25em]">
            <AlertTriangle size={16} className="text-amber-300" />
            <span>Coming Soon</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white">In Progress</h3>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
            We are mapping BITS Goa right now. The interactive campus map will arrive shortly. Stay tuned!
          </p>
        </div>
      </div>
    );
  }

    if (data.slug === 'pilani' ) {
    return (
      <div className="relative h-[80vh] md:h-[75vh] w-full rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-zinc-950 flex items-center justify-center">
        <div className="text-center space-y-4 px-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-200 uppercase text-[11px] font-bold tracking-[0.25em]">
            <AlertTriangle size={16} className="text-amber-300" />
            <span>Coming Soon</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white">In Progress</h3>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
            We are mapping BITS Pilani, Pilani Campus right now. The interactive campus map will arrive shortly. Stay tuned!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[80vh] md:h-[75vh] w-full rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-zinc-950">
       <MapContainer
          center={[activeLoc.lat, activeLoc.lng]}
          zoom={17}
          zoomControl={false}
          className="h-full w-full bg-zinc-950"
        >
          <TileLayer
            className="map-tiles-dark"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[activeLoc.lat, activeLoc.lng]}>
             <Popup className="custom-popup">{activeLoc.name}</Popup>
          </Marker>
          <FlyToLocation center={[activeLoc.lat, activeLoc.lng]} />
        </MapContainer>

        {/* Responsive Panel: Bottom Sheet (Mobile) / Sidebar (Desktop) */}
        <motion.div 
           initial={false}
           animate={{ 
             // Mobile: Slide Up/Down (Y-axis), Desktop: Slide Left/Right (X-axis)
             x: !isMobile ? (isListOpen ? 0 : -350) : 0, 
             y: isMobile ? (isListOpen ? 0 : '100%') : 0,
             opacity: 1
           }}
           transition={{ type: "spring", damping: 20, stiffness: 100 }}
           className={`
             absolute z-[500] bg-zinc-900/95 backdrop-blur-xl border border-white/10 flex flex-col transition-all
             /* Mobile Styles */
             bottom-0 left-0 right-0 w-full h-[45vh] rounded-t-3xl border-b-0
             /* Desktop Styles */
             md:top-4 md:left-4 md:bottom-4 md:w-80 md:h-auto md:rounded-3xl md:border-b
           `}
        >
           {/* Mobile Drag Handle */}
           <div 
             className="md:hidden w-full flex justify-center pt-3 pb-1 cursor-pointer" 
             onClick={() => setListOpen(!isListOpen)}
           >
              <div className="w-12 h-1.5 bg-zinc-700 rounded-full" />
           </div>

           <div className="p-4 md:p-6 border-b border-white/5 flex justify-between items-center">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                 <MapIcon size={18} className="text-blue-500" /> Locations
              </h3>
           </div>
           
           <div className="flex-1 overflow-y-auto p-3 space-y-2 custom-scrollbar pb-20 md:pb-0">
              {data.locations.map(loc => (
                 <button
                    key={loc.id}
                    onClick={() => { 
                      setActiveLoc(loc); 
                      // Auto-close sheet on mobile to show map
                      if(isMobile) setListOpen(false); 
                    }}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 border ${
                       activeLoc.id === loc.id 
                       ? 'bg-white/10 border-white/10 text-white shadow-lg' 
                       : 'bg-transparent border-transparent text-zinc-500 hover:bg-white/5 hover:text-zinc-300'
                    }`}
                 >
                    <p className="font-bold text-sm">{loc.name}</p>
                    {activeLoc.id === loc.id && <p className="text-xs mt-1 text-zinc-400 line-clamp-2">{loc.desc}</p>}
                 </button>
              ))}
           </div>
        </motion.div>
        
        {/* Toggle Button */}
        <button 
           onClick={() => setListOpen(!isListOpen)}
           className={`
             absolute z-[500] p-3 bg-white text-black rounded-full shadow-xl hover:scale-110 transition-transform
             /* Desktop: Bottom-Left */
             md:bottom-6 md:left-6
             /* Mobile: Bottom-Left, but hide if sheet is open */
             bottom-6 left-6 
             ${isMobile && isListOpen ? 'hidden' : 'flex'}
           `}
        >
           {isListOpen ? <ArrowRight size={20} className="hidden md:block"/> : <Search size={20}/>}
           {/* Mobile Up Arrow when closed */}
           {!isListOpen && isMobile && <div className="md:hidden">▲</div>} 
        </button>

        {/* GO Button (Open Google Maps) */}
        <a
           href={`https://www.google.com/maps/search/?api=1&query=${activeLoc.lat},${activeLoc.lng}`}
           target="_blank"
           rel="noreferrer"
           className={`
             absolute bottom-6 right-6 z-[500] flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full shadow-xl hover:scale-105 transition-transform font-bold text-sm
             /* On mobile, move button up if sheet is open so it's not covered */
             ${isMobile && isListOpen ? '-translate-y-[46vh]' : 'translate-y-0'}
           `}
        >
           Open in Maps <ExternalLink size={16} />
        </a>

        <style>{`
          .map-tiles-dark { filter: grayscale(100%) invert(100%) brightness(60%) contrast(90%); }
          .leaflet-control-attribution { display: none; }
          .custom-scrollbar::-webkit-scrollbar { width: 0px; background: transparent; }
        `}</style>
    </div>
  );
};
const DirectoryView = ({ data }: { data: CampusData }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredWardens = data.warden?.filter(w => 
        w.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        (w.bhavan && w.bhavan.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  // Pilani wardens: show in-progress placeholder
  if (data.slug === 'pilani') {
    return (
      <div className="pb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 px-2">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-2">Wardens</h2>
            <p className="text-zinc-500 text-lg font-medium tracking-wide">Hostel & Admin Contacts</p>
          </div>
        </div>
        <InProgress label="Wardens" context="Pilani" />
      </div>
    );
  }

  return (
        <div className="pb-32">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 px-2">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-2">Wardens</h2>
                    <p className="text-zinc-500 text-lg font-medium tracking-wide">Hostel & Admin Contacts</p>
                </div>
                <div className="w-full md:w-80">
                    <GlassInput 
                        icon={Search} 
                        placeholder="Search Name or Bhavan..." 
                        value={searchTerm}
                        onChange={setSearchTerm}
                    />
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredWardens && filteredWardens.length > 0 ? (
                    filteredWardens.map((w, idx) => (
                        <GlassCard key={idx} delay={idx} className="p-6 group hover:border-indigo-500/30">
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-3 rounded-full bg-zinc-950 border border-white/10 text-indigo-400 group-hover:scale-110 transition-transform">
                                    <Shield size={20} />
                                </div>
                                {w.bhavan && (
                                    <span className="text-[10px] font-mono border border-white/10 px-2 py-1 rounded text-zinc-500 uppercase tracking-wider">
                                        {w.bhavan}
                                    </span>
                                )}
                            </div>
                            
                            <h3 className="text-xl font-bold text-white mb-1">{w.name}</h3>
                            <p className="text-sm text-zinc-500 mb-6">Hostel Warden</p>
                            
                            <div className="flex gap-2">
                                <a href={`tel:${Array.isArray(w.phone) ? w.phone[0] : w.phone}`} className="flex-1 py-3 rounded-xl bg-white text-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors">
                                    <Phone size={16} /> Call
                                </a>
                            </div>
                        </GlassCard>
                    ))
                ) : (
                    <div className="col-span-full py-20 text-center text-zinc-500">
                        No wardens found for "{searchTerm}"
                    </div>
                )}
            </div>
        </div>
    );
};

const AboutView = () => (
    <div className="pb-32 max-w-3xl mx-auto">
        <SectionHeader title="About" subtitle="The story behind the project" />
        
        <GlassCard className="p-8 md:p-12 mb-6 text-center">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl flex items-center justify-center text-white mb-6 shadow-2xl shadow-indigo-500/20">
                <Heart size={32} fill="currentColor" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Built for BITSians</h3>
            <p className="text-zinc-400 leading-relaxed text-lg mb-8">
                Campus101 is an open-source initiative designed to make campus life easier. 
                From finding the right bus to calling a warden in an emergency, we've got you covered.
            </p>
            
            <div className="flex justify-center gap-4">
                 <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-sm font-bold uppercase tracking-wider">
                    <Github size={18} /> Contribute
                 </a>
            </div>
        </GlassCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <GlassCard className="p-6 flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
                    <Users size={20} />
                 </div>
                 <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Developed By</p>
                    <a href="https://linkedin.com/in/sdeevanapalli" target="_blank" rel="noreferrer" className="text-lg font-bold text-white hover:text-indigo-400 transition-colors">Shriniketh D.</a>
                 </div>
             </GlassCard>
             <GlassCard className="p-6 flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
                    <Users size={20} />
                 </div>
                 <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Co-Developed By</p>
                    <a href="https://linkedin.com/in/kushagra-singh47" target="_blank" rel="noreferrer" className="text-lg font-bold text-white hover:text-indigo-400 transition-colors">Kushagra S.</a>
                 </div>
             </GlassCard>
        </div>
    </div>
);

// --- Main Layout ---

const CampusPage: React.FC<{ campusData: CampusData }> = ({ campusData }) => {
  const [tab, setTab] = useState<'home' | 'transport' | 'outlets' | 'map' | 'directory' | 'about'>('home');

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-500/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />
      </div>

      {/* Top Nav */}
      <nav className="fixed top-0 w-full z-40 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
           <Link to="/" className="text-zinc-400 hover:text-white transition-colors">
              <div className="flex items-center gap-2">
                <ArrowLeft size={16} className="text-zinc-500 group-hover:text-white transition-colors" />
                  <span className="text-sm font-medium tracking-wide">Back</span>
              </div>
           </Link>
           <h1 className="text-sm font-bold tracking-[0.2em] uppercase text-zinc-500">
              Campus<span className="text-white">101</span>
           </h1>
        </div>
      </nav>

      {/* Content Area */}
      <main className="relative z-10 pt-32 px-6 max-w-7xl mx-auto min-h-screen">
        <AnimatePresence mode="wait">
          {tab === 'home' && (
            <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <HomeView data={campusData} setTab={setTab} />
            </motion.div>
          )}
          {tab === 'transport' && (
            <motion.div key="transport" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <TransportView data={campusData} />
            </motion.div>
          )}
          {tab === 'outlets' && (
            <motion.div key="outlets" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <OutletsView data={campusData} />
            </motion.div>
          )}
          {tab === 'map' && (
            <motion.div key="map" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <MapView data={campusData} />
            </motion.div>
          )}
          {tab === 'directory' && (
             <motion.div key="directory" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
               <DirectoryView data={campusData} />
             </motion.div>
          )}
          {tab === 'about' && (
             <motion.div key="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
               <AboutView />
             </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Island Navigation Dock */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-1 p-1.5 rounded-full bg-zinc-900/90 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/50">
           {[
             { id: 'home', icon: Grid, label: 'Home' },
             { id: 'transport', icon: Bus, label: 'Transport' },
             { id: 'outlets', icon: Utensils, label: 'Outlets' },
             { id: 'map', icon: MapIcon, label: 'Map' },
             { id: 'directory', icon: Users, label: 'Wardens' },
             { id: 'about', icon: Info, label: 'About' }
           ].map((item) => (
             <button
               key={item.id}
               onClick={() => setTab(item.id as any)}
               className={`
                 relative px-3 sm:px-4 py-3 rounded-full flex items-center gap-2 transition-all duration-300
                 ${tab === item.id ? 'bg-white text-black' : 'text-zinc-500 hover:text-zinc-300'}
               `}
             >
               <item.icon size={20} className={tab === item.id ? 'stroke-[2.5px]' : 'stroke-2'} />
               {tab === item.id && (
                 <motion.span 
                   initial={{ width: 0, opacity: 0 }} 
                   animate={{ width: 'auto', opacity: 1 }} 
                   className="text-xs font-bold uppercase tracking-wider whitespace-nowrap overflow-hidden hidden md:block"
                 >
                   {item.label}
                 </motion.span>
               )}
             </button>
           ))}
        </div>
      </div>

    </div>
  );
};

export default CampusPage;