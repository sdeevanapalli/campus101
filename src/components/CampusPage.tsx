import React, { useState, useRef, useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  ChevronUp,
  Clock,
  Store,
  User,
  Bus,
  Car,
  Phone,
  Utensils,
  HeartHandshake,
  Handshake,
  AlertTriangle,
  Menu,
  X,
  Home,
  BookOpen,
  Map,
  Info,
  MapPin,
  ArrowLeft,
  Mail,
  Search,
} from 'lucide-react';

import 'leaflet/dist/leaflet.css';
import { CampusData } from '../data/campusData';


const ContactCard: React.FC<{ name: string; phone: string; email: string; label?: string }> = ({
  name,
  phone,
  email,
  label
}) => (
  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-102 hover:shadow-md">
    <div className="flex justify-between items-center">
      <div>
        <h4 className="font-semibold text-gray-800 dark:text-white transition-colors duration-200">
          {name}
        </h4>
        {label && (
          <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-200">
            {label}
          </p>
        )}
      </div>
      <div className="flex space-x-2">
        <a
          href={`tel:${phone}`}
          className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center space-x-1 transform hover:scale-105 active:scale-95"
        >
          <Phone size={16} className="transition-transform duration-200 hover:rotate-12" />
          <span className="text-sm font-medium">Call</span>
        </a>
        <a
          href={`mailto:${email}`}
          className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 flex items-center space-x-1 transform hover:scale-105 active:scale-95"
        >
          <Mail size={16} className="transition-transform duration-200 hover:rotate-12" />
          <span className="text-sm font-medium">Email</span>
        </a>
      </div>
    </div>
  </div>
);

const BusScheduleItem: React.FC<{ time: string; color: string }> = ({ time, color }) => (
  <div className={`bg-white dark:bg-gray-800 p-2 rounded text-center font-medium transition-all duration-300 hover:shadow-md transform hover:scale-105 ${color} border-l-4 ${color === 'text-green-700 dark:text-green-200' ? 'border-green-500' : 'border-blue-500'}`}>
    {time}
  </div>
);

// Route Badge with bounce animation
const RouteBadge: React.FC<{ route: string }> = ({ route }) => (
  <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-200 dark:hover:bg-blue-700 transform hover:scale-110 cursor-default">
    {route}
  </span>
);

interface CampusPageProps {
  campusData: CampusData;
}
interface Warden {
  name: string;
  phone: string;
  email?: string;
  bhavan?: string;
  type?: 'Boys' | 'Girls';
  role?: string;
}

// Collapsible Section with smooth animations
interface CollapsibleSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  icon,
  children,
  defaultOpen = false
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [height, setHeight] = useState<number | undefined>(defaultOpen ? undefined : 0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen, children]);

  return (
    <div className="mb-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between bg-gradient-to-r from-blue-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 hover:from-blue-100 hover:to-orange-100 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300"
      >
        <div className="flex items-center space-x-3">
          <div className="text-blue-600 dark:text-orange-400 transition-colors duration-300">
            {icon}
          </div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
            {title}
          </h2>
        </div>
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown size={24} className="text-gray-600 dark:text-gray-300" />
        </div>
      </button>
      <div
        ref={contentRef}
        style={{ height }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div className="p-6 pt-0">
          {children}
        </div>
      </div>
    </div>
  );
};



// Auto Driver Grid (if available)
const AutoDriverGrid: React.FC<{ drivers: string[] }> = ({ drivers }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {drivers.map((phone, index) => (
        <a
          key={index}
          href={`tel:${phone}`}
          className="bg-gradient-to-r from-blue-100 to-blue-300 dark:from-blue-700 dark:to-blue-900 p-3 rounded-lg text-center hover:from-blue-200 hover:to-blue-400 dark:hover:from-blue-600 dark:hover:to-blue-800 transition-all duration-300 border border-blue-300 dark:border-blue-700 hover:border-blue-400 transform hover:scale-105 hover:shadow-md"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          <div className="text-sm font-medium text-gray-700 dark:text-white mb-1 transition-colors duration-200">{index + 1}</div>
          <div className="text-sm font-mono text-blue-700 dark:text-blue-300 transition-colors duration-200">{phone}</div>
        </a>
      ))}
    </div>
  );
};

// Sidebar Navigation
const Sidebar: React.FC<{ 
  isOpen: boolean; 
  onClose: () => void; 
  activeSection: string; 
  onSectionChange: (section: string) => void;
  campusName: string;
}> = ({ 
  isOpen, 
  onClose, 
  activeSection, 
  onSectionChange,
  campusName
}) => {
  // Add Goa Cabs button only for Goa campus
  const menuItems = [
    { icon: <Home size={20} />, label: 'Home', id: 'home' },
    { icon: <Map size={20} />, label: 'Map', id: 'map' },
    { icon: <Info size={20} />, label: 'Warden Info', id: 'wardens' },
    ...(campusName.toLowerCase().includes('goa') ? [
      { icon: <Car size={20} />, label: 'Goa Cabs', id: 'goacabs' }
    ] : []),
    { icon: <Info size={20} />, label: 'About', id: 'about' }

  ];

  const handleSectionClick = (sectionId: string) => {
    onSectionChange(sectionId);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-600 to-orange-500 dark:from-gray-800 dark:to-gray-700">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
          >
            <X size={24} className="text-white" />
          </button>
          <h2 className="text-xl font-bold text-white">{campusName}</h2>
          <p className="text-blue-100 dark:text-orange-100 text-sm">Campus Guide</p>
        </div>
        
        {/* Menu Items */}
        <div className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSectionClick(item.id)}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

const CampusPage: React.FC<CampusPageProps> = ({ campusData }) => {
  const [isDark, setIsDark] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedLocation, setSelectedLocation] = useState(campusData.locations[0]);

  // Fix Leaflet icon configuration
  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <CollapsibleSection title="Food Outlets & Timings" icon={<Store size={24} />}>
              <div className="space-y-3 text-sm">
                {campusData.outlets.map((outlet, index) => (
                  <div key={index} className="transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded" style={{ animationDelay: `${index * 0.05}s` }}>
                    <h4 className="font-semibold text-gray-800 dark:text-white transition-colors duration-200">{outlet.name}</h4>
                    <p className={`text-sm transition-colors duration-200 ${outlet.closed ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-300'}`}>
                      {outlet.timing}
                    </p>
                  </div>
                ))}
              </div>
            </CollapsibleSection>

            <CollapsibleSection title="Food Outlet Phone Numbers" icon={<Phone size={24} />}>
              <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">Tap on a contact to call directly.</p>
              <div className="grid grid-cols-1 gap-3">
                {[
                  ['Hotspot', '70133 34805'],
                  ['Yummpy\'s', '93814 23625']
                ].map(([name, phone], index) => (
                  <a
                    key={name}
                    href={`tel:${phone}`}
                    className="bg-blue-50 dark:bg-blue-900 p-3 rounded-lg border border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-800 transition-all duration-300 transform hover:scale-102 hover:shadow-md"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-800 dark:text-white">{name}</span>
                      <span className="text-blue-600 dark:text-blue-400 font-mono">{phone}</span>
                    </div>
                  </a>
                ))}
              </div>
            </CollapsibleSection>

            

            {campusData.autoDrivers && (
              <CollapsibleSection title="Auto Driver Numbers" icon={<Car size={24} />}>
                <AutoDriverGrid drivers={campusData.autoDrivers} />
              </CollapsibleSection>
                      
            )}

            <CollapsibleSection title="212 Bus Schedule (BPHC ↔ Secunderabad)" icon={<Bus size={24} />}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg border border-green-200 dark:border-green-700 transition-all duration-300 hover:shadow-md">
                  <h3 className="font-semibold text-green-800 dark:text-green-300 mb-3 flex items-center">
                    <MapPin size={16} className="mr-2 transition-transform duration-300 hover:bounce" />
                    From BPHC
                  </h3>
                  <div className="space-y-2">
                    {['9:00 AM', '10:00 AM', '2:00 PM', '5:00 PM', '6:00 PM'].map((time, index) => (
                      <div key={time} style={{ animationDelay: `${index * 0.1}s` }}>
                        <BusScheduleItem time={time} color="text-green-700 dark:text-green-200" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg border border-blue-200 dark:border-blue-700 transition-all duration-300 hover:shadow-md">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3 flex items-center">
                    <MapPin size={16} className="mr-2 transition-transform duration-300 hover:bounce" />
                    From Secunderabad
                  </h3>
                  <div className="space-y-2">
                    {['7:50 AM', '8:50 AM', '12:45 PM', '4:00 PM', '5:00 PM'].map((time, index) => (
                      <div key={time} style={{ animationDelay: `${index * 0.1}s` }}>
                        <BusScheduleItem time={time} color="text-blue-700 dark:text-blue-200" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            <CollapsibleSection title="Alternate Bus Routes" icon={<Bus size={24} />}>
              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg border border-yellow-200 dark:border-yellow-700 mb-4 transition-all duration-300 hover:shadow-md">
                <div className="flex items-center mb-2">
                  <AlertTriangle size={20} className="text-yellow-600 mr-2 transition-transform duration-300 hover:rotate-12" />
                  <span className="font-semibold text-yellow-800 dark:text-yellow-300">Important Note</span>
                </div>
                <p className="text-yellow-700 dark:text-yellow-100 text-sm">
                  Confirm with the conductor before boarding to ensure it stops at your destination.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600 transition-all duration-300 hover:shadow-md">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-3">
                  From Secunderabad to Thumkunta/Tandoor Junction:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    '211A', '211B', '211C', '211DY', '212T',
                    '212/564', '212/567', '212/568', '212/702',
                    '564', '567', '568'
                  ].map((route, index) => (
                    <div key={route} style={{ animationDelay: `${index * 0.05}s` }}>
                      <RouteBadge route={route} />
                    </div>
                  ))}
                </div>
              </div>
            </CollapsibleSection>

          </>
        );

      case 'goacabs':
        if (campusData.slug === 'goa' && campusData.goacabs && campusData.goacabs.length > 0) {
          return (
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                <Car size={24} className="mr-3 text-blue-600" />
                Goa Campus Cabs
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">Reliable cab contacts for BITS Goa campus. Tap to call.</p>
              <div className="space-y-4">
                {campusData.goacabs.map((cab, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                    <div className="mb-2 sm:mb-0">
                      <h4 className="font-semibold text-gray-800 dark:text-white">{cab.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{cab.vehicle}</p>
                    </div>
                    <div className="flex space-x-2">
                      {Array.isArray(cab.phone)
                        ? cab.phone.map((phoneNum, i) => (
                            <a
                              key={i}
                              href={`tel:${phoneNum}`}
                              className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm hover:bg-blue-700 transition flex items-center space-x-1"
                            >
                              <Phone size={16} />
                              <span>+91 {phoneNum}</span>
                            </a>
                          ))
                        : (
                          <a
                            href={`tel:${cab.phone}`}
                            className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm hover:bg-blue-700 transition flex items-center space-x-1"
                          >
                            <Phone size={16} />
                            <span>Call {cab.phone}</span>
                          </a>
                        )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        } else {
          return (
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 text-center">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center justify-center">
                <Car size={24} className="mr-3 text-blue-600" />
                Goa Campus Cabs
              </h2>
              <p className="text-gray-500 dark:text-gray-400">Cab information is only available for BITS Goa campus.</p>
            </div>
          );
        }
      case 'map':
        return (
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
              <MapPin size={24} className="mr-3 text-blue-600" />
              Campus Navigation
            </h2>
            <p className="mb-6 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              Explore BITS Hyderabad campus locations with interactive map and quick directions.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left side - Location buttons and info */}
              <div className="space-y-4">
                {/* Location Selection Buttons */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {campusData.locations.map((location, index) => (
                    <button
                      key={location.id}
                      onClick={() => setSelectedLocation(location)}
                      className={`p-3 rounded-lg text-left transition-all duration-300 transform hover:scale-105 ${
                        selectedLocation?.id === location.id
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="font-medium text-sm">{location.name}</div>
                    </button>
                  ))}
                </div>

                {/* Selected Location Info */}
                {selectedLocation && (
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border dark:border-gray-700 transition-all duration-500">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white flex items-center">
                      <MapPin size={18} className="mr-2 text-blue-600" />
                      {selectedLocation.name}
                    </h3>
                    {selectedLocation.desc && (
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        {selectedLocation.desc}
                      </p>
                    )}
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${selectedLocation.lat},${selectedLocation.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm font-medium transform hover:scale-105 active:scale-95"
                    >
                      <MapPin size={16} />
                      <span>Open in Google Maps</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Right side - Map Preview */}
              <div className="h-96 lg:h-full min-h-[400px]">
                <div className="w-full h-full rounded-lg overflow-hidden border dark:border-gray-700 shadow-lg">
                  <MapContainer
                    center={[selectedLocation.lat, selectedLocation.lng]}
                    zoom={18}
                    scrollWheelZoom={true}
                    className="w-full h-full z-0"
                    key={selectedLocation.id}
                  >
                    {/* <ChangeView center={[selectedLocation.lat, selectedLocation.lng]} /> */}
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[selectedLocation.lat, selectedLocation.lng]}>
                      <Popup>
                        <div className="text-center">
                          <strong className="text-lg">{selectedLocation.name}</strong>
                          {selectedLocation.desc && (
                            <>
                              <br />
                              <span className="text-sm text-gray-600">{selectedLocation.desc}</span>
                            </>
                          )}
                        </div>
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
              </div>
            </div>

            {/* Quick Access Cards */}
            {/* <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Access</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {campusData.locations.map((location, index) => (
                  <a
                    key={location.id}
                    href={`https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-3 rounded-lg text-center hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-800 dark:hover:to-blue-700 transition-all duration-300 border border-blue-200 dark:border-blue-700 transform hover:scale-105"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {location.name}
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <MapPin size={12} className="mr-1" />
                      View
                    </div>
                  </a>
                ))}
              </div>
            </div> */}
          </div>
        );
      
      case 'wardens':
        return (
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
              <User size={24} className="mr-3 text-blue-600" />
              Warden Contact List
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Below is the updated list of wardens for {campusData.name}.
            </p>
            <div className="space-y-4">
              {campusData.warden && campusData.warden.length > 0 ? (
                campusData.warden.map((warden, index) => (
                  <div
                    key={`${warden.name}-${index}`}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow-sm"
                  >
                    <div className="mb-2 sm:mb-0">
                      <h4 className="font-semibold text-gray-800 dark:text-white">{warden.name}</h4>
                      {warden.bhavan && (
                        <p className="text-sm text-gray-600 dark:text-gray-400">{warden.bhavan}</p>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {Array.isArray(warden.phone)
                        ? warden.phone.length === 1
                          ? (
                              <a
                                href={`tel:${warden.phone[0]}`}
                                className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm hover:bg-blue-700 transition flex items-center space-x-1"
                              >
                                <Phone size={16} />
                                <span>Call</span>
                                <span className="ml-1"></span>
                              </a>
                            )
                          : warden.phone.map((phoneNum, i) => (
                              <a
                                key={i}
                                href={`tel:${phoneNum}`}
                                className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm hover:bg-blue-700 transition flex items-center space-x-1"
                              >
                                <Phone size={16} />
                                <span>{`Call ${i + 1}`}</span>
                                <span className="ml-1"></span>
                              </a>
                            ))
                        : null}
                      {warden.email && (
                        <a
                          href={`mailto:${warden.email}`}
                          className="bg-green-600 text-white px-3 py-1.5 rounded-md text-sm hover:bg-green-700 transition flex items-center space-x-1"
                        >
                          <Mail size={16} />
                          <span>Email</span>
                        </a>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500 dark:text-gray-400">No warden information available for this campus.</p>
                </div>
              )}
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
              <Info size={24} className="mr-3 text-blue-600" />
              About Campus101
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                This comprehensive campus guide provides essential information about {campusData.name}.
                Navigate through campus facilities, find important contact numbers, and discover
                everything you need to know about campus life.
              </p>
              <p>
                {campusData.description}
              </p>
              <p>
                Built with ❤️ for BITSians by{' '}
                <strong>
                  <a
                    href="https://www.linkedin.com/in/sdeevanapalli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 dark:text-blue-400"
                  >
                    Shriniketh Deevanapalli
                  </a>
                </strong>{' '}
                and <strong>
                  <a
                    href="https://www.linkedin.com/in/kushagra-singh47/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 dark:text-blue-400"
                  >
                    Kushagra Singh
                  </a>
                </strong>
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Sidebar */}
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        campusName={campusData.name}
      />

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-orange-500 dark:from-gray-800 dark:to-gray-700 text-white py-4 px-4 transition-all duration-300 sticky top-0 z-30 shadow-lg">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="p-2 rounded-lg hover:bg-white/10 transition-all duration-200 transform hover:scale-110"
            >
              <ArrowLeft size={24} />
            </Link>
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-lg hover:bg-white/10 transition-all duration-200 transform hover:scale-110"
            >
              <Menu size={24} />
            </button>
            <div className="transform transition-all duration-500 hover:scale-105">
              <h1 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                Campus101
              </h1>
              <p className="text-blue-100 dark:text-orange-100 text-sm md:text-base transition-colors duration-300">
                {campusData.name}
              </p>
            </div>
          </div>
          <button
            onClick={toggleDarkMode}
            className="bg-gray-200 dark:bg-gray-800 text-sm px-4 py-2 rounded shadow text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 active:scale-95"
          >
            <span className="flex items-center space-x-2">
              <span className={`transition-transform duration-500 ${isDark ? 'rotate-180' : 'rotate-0'}`}>
                {isDark ? '☀️' : '🌙'}
              </span>
              <span className="hidden sm:inline">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
            </span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default CampusPage;