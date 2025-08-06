import React, { useState, useRef, useEffect } from 'react';
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
} from 'lucide-react';

import 'leaflet/dist/leaflet.css';
import { CampusData } from '../data/campusData';

interface CampusPageProps {
  campusData: CampusData;
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

// Emergency Contact Card
const EmergencyContactCard: React.FC<{ name: string; phone: string; label?: string }> = ({ name, phone, label }) => (
  <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg border border-red-200 dark:border-red-700 transition-all duration-300 hover:shadow-md hover:scale-105">
    <div className="flex justify-between items-center">
      <div>
        <h4 className="font-semibold text-gray-800 dark:text-white transition-colors duration-200">{name}</h4>
        {label && <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-200">{label}</p>}
      </div>
      <a
        href={`tel:${phone}`}
        className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-all duration-300 flex items-center space-x-1 transform hover:scale-105 active:scale-95"
      >
        <Phone size={16} className="transition-transform duration-200 hover:rotate-12" />
        <span className="text-sm font-medium">{phone}</span>
      </a>
    </div>
  </div>
);

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
  const menuItems = [
    { icon: <Home size={20} />, label: 'Home', id: 'home' },
    { icon: <Utensils size={20} />, label: 'Mess Menu', id: 'mess' },
    { icon: <Map size={20} />, label: 'Map', id: 'map' },
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
            <CollapsibleSection title="Mess Timings" icon={<Utensils size={24} />}>
              <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg border border-green-200 dark:border-green-700 transition-all duration-300 hover:shadow-md">
                <h3 className="font-semibold text-green-800 dark:text-green-300 mb-3 flex items-center">
                  <Clock size={16} className="mr-2 transition-transform duration-300 hover:rotate-180" />
                  Mess Timings
                </h3>
                <div className="space-y-2 text-sm">
                  {campusData.messTimings.map(([meal, time], index) => (
                    <div key={meal} className="flex justify-between transition-all duration-300 hover:bg-green-100 dark:hover:bg-green-800 p-2 rounded" style={{ animationDelay: `${index * 0.1}s` }}>
                      <span className="font-medium">{meal}</span>
                      <span>{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CollapsibleSection>

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

            <CollapsibleSection title="Emergency Contacts" icon={<AlertTriangle size={24} />}>
              <div className="space-y-3">
                {campusData.emergencyContacts.map((contact, index) => (
                  <EmergencyContactCard
                    key={index}
                    name={contact.name}
                    phone={contact.phone}
                    label={contact.label}
                  />
                ))}
              </div>
            </CollapsibleSection>

            {campusData.autoDrivers && (
              <CollapsibleSection title="Auto Driver Numbers" icon={<Car size={24} />}>
                <AutoDriverGrid drivers={campusData.autoDrivers} />
              </CollapsibleSection>
            )}
          </>
        );

      case 'map':
        return (
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                <Map size={24} className="mr-3 text-blue-600" />
                Campus Map
              </h2>
            </div>
            
            <div className="flex flex-col lg:flex-row h-[600px]">
              {/* Map */}
              <div className="flex-1 relative">
                <MapContainer
                  center={campusData.mapCenter}
                  zoom={16}
                  style={{ height: '100%', width: '100%' }}
                  className="rounded-b-xl lg:rounded-none"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {campusData.locations.map((location) => (
                    <Marker
                      key={location.id}
                      position={[location.lat, location.lng]}
                      eventHandlers={{
                        click: () => setSelectedLocation(location),
                      }}
                    >
                      <Popup>
                        <div className="p-2">
                          <h3 className="font-semibold text-gray-800">{location.name}</h3>
                          {location.desc && (
                            <p className="text-sm text-gray-600 mt-1">{location.desc}</p>
                          )}
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>

              {/* Location List */}
              <div className="lg:w-80 bg-gray-50 dark:bg-gray-800 p-4 overflow-y-auto">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Locations</h3>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                  {campusData.locations.map((location) => (
                    <a
                      key={location.id}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedLocation(location);
                      }}
                      className={`p-3 rounded-lg border transition-all duration-200 hover:shadow-md ${
                        selectedLocation?.id === location.id
                          ? 'bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700'
                          : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
                      }`}
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
              </div>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
              <Info size={24} className="mr-3 text-blue-600" />
              About Campus Guide
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
                Campus Guide
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