import React, { useEffect, useState } from 'react';
import { Menu, MapPin, Clock, LogOut, LogIn } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Home2 = () => {
  const [currentTime, setCurrentTime] = useState('09:41 AM');
  useEffect(() => {
    const map = L.map('map', {
        zoomControl: false,
        attributionControl: false
    }).setView([19.0760, 72.8777], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    const marker = L.marker([19.0760, 72.8777]).addTo(map);

    return () => map.remove();
}, []); 

  return (
    <>
       <div className="h-screen w-full relative bg-black">
      {/* Location and Time Display with Menu */}
      <div className="absolute top-4 left-4 right-4 z-10">
        <div className="bg-white rounded-full shadow-md px-4 py-3 flex items-center">
          <Menu className="h-6 w-6 text-gray-600 mr-3 cursor-pointer hover:text-gray-800" />
          <div className="flex-1 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700">181, Sion Panvel Highway Road</span>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <Clock className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700">{currentTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div id="map" className="w-full h-full z-0"></div>

      {/* Punch Buttons */}
      <div className="absolute bottom-6 left-4 right-4">
        <div className="flex rounded-full overflow-hidden shadow-lg">
          <button className="flex-1 bg-[#4CAF50] text-white py-4 text-center font-bold text-lg hover:bg-[#45a049] flex items-center justify-center gap-2">
            <LogIn className="h-5 w-5" />
            PUNCH IN
          </button>
          <button className="flex-1 bg-[#ff4747] text-white py-4 text-center font-bold text-lg hover:bg-[#ff3333] flex items-center justify-center gap-2">
            <LogOut className="h-5 w-5" />
            PUNCH OUT
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home2
