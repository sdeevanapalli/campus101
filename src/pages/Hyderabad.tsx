import React from 'react';
import CampusPage from '../components/CampusPage';
import { campusData } from '../data/campusData';

const Hyderabad = () => {
  return <CampusPage campusData={campusData.hyderabad} />;
};

export default Hyderabad;