import React from 'react'
import { MapPin, LogIn, LogOut, User, Clock, Clipboard } from 'lucide-react';
const Home = () => {
  return (
    <>
   <div className="min-h-screen bg-gray-100">
  {/* Navigation Menu with hover effect */}
  <nav className="bg-white shadow-sm border-b transition-all duration-300 hover:shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center space-x-3 group">
          <MapPin className="h-7 w-7 text-blue-600 transform transition-transform group-hover:rotate-12 duration-300" />
          <span className="text-2xl font-bold text-gray-800 tracking-tight group-hover:text-blue-600 transition-colors duration-300">Attendance Hub</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative group">
            {/* <div className="w-12 h-12 bg-blue-100 rounded-full overflow-hidden border-2 border-blue-300 shadow-sm transition-transform duration-300 group-hover:scale-110">
              <img 
                src="/api/placeholder/48/48" 
                alt="Profile" 
                className="w-full h-full object-cover transform transition hover:scale-105"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </nav>

  {/* Main Content */}
  <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Today's Hours */}
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-start transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-blue-50">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Today's Hours</h2>
      <div className="text-5xl font-bold text-blue-600 transition-colors duration-300 hover:text-blue-700">7.5 hrs</div>
      <div className="flex items-center space-x-2 mt-2 text-gray-600">
        <Clipboard className="h-5 w-5 transition-transform duration-300 hover:rotate-12" />
        <span>Punched in at 9:00 AM</span>
      </div>
    </div>

    {/* Weekly Average */}
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-start transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-blue-50">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Weekly Average</h2>
      <div className="text-5xl font-bold text-blue-600 transition-colors duration-300 hover:text-blue-700">38.5 hrs</div>
      <div className="flex items-center space-x-2 mt-2 text-gray-600">
        <Clipboard className="h-5 w-5 transition-transform duration-300 hover:rotate-12" />
        <span>Last 7 days</span>
      </div>
    </div>

    {/* Current Status */}
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-start transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-green-50">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Current Status</h2>
      <div className="text-5xl font-bold text-green-500">Active</div>
      <div className="flex items-center space-x-2 mt-2 text-gray-600">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
        <span>Last updated: Just now</span>
      </div>
    </div>

    {/* Map Container */}
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4 col-span-1 md:col-span-3 transform transition-all duration-300 hover:shadow-xl">
      <div className="aspect-w-16 aspect-h-9 w-full relative">
        <svg 
          className="w-full h-[500px] bg-gray-50 rounded-lg transition-all duration-300 hover:bg-gray-100"
          viewBox="0 0 200 200"
        >
          <defs>
            <pattern 
              id="grid" 
              width="20" 
              height="20" 
              patternUnits="userSpaceOnUse"
            >
              <path 
                d="M 20 0 L 0 0 0 20" 
                fill="none" 
                stroke="rgba(99,102,241,0.1)" 
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#grid)" />
          
          {/* Enhanced Location Marker */}
          <g transform="translate(100, 100)">
            <circle 
              cx="0" 
              cy="0" 
              r="5" 
              fill="#6366f1" 
              className="animate-pulse"
            />
            <circle 
              cx="0" 
              cy="0" 
              r="15" 
              fill="#6366f1" 
              opacity="0.3"
              className="animate-ping"
            />
            <circle 
              cx="0" 
              cy="0" 
              r="25" 
              fill="#6366f1" 
              opacity="0.1"
              className="animate-pulse"
            />
          </g>
        </svg>
        
        {/* Location Info Overlay */}
        <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md flex items-center space-x-2 transition-all duration-300 hover:bg-white hover:shadow-lg">
          <MapPin className="h-5 w-5 text-blue-600 transition-transform duration-300 hover:rotate-12" />
          <span className="text-sm text-gray-700">Workspace Location</span>
        </div>

        {/* Coordinates Overlay */}
        <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-2 text-sm text-gray-600 transition-all duration-300 hover:bg-white hover:shadow-lg">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-blue-600 transition-transform duration-300 hover:rotate-12" />
            <span>Current: (0.000°, 0.000°)</span>
          </div>
        </div>
      </div>
    </div>

    {/* Action Buttons */}
    <div className="flex flex-col sm:flex-row justify-center gap-6 col-span-1 md:col-span-3">
      <button className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-blue-600 text-white font-semibold rounded-2xl shadow-lg transform transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 active:scale-95">
        <LogIn className="h-6 w-6 transform transition-transform group-hover:rotate-12" />
        <span>Punch In</span>
      </button>
      <button className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-purple-600 text-white font-semibold rounded-2xl shadow-lg transform transition-all duration-300 hover:bg-purple-700 hover:shadow-xl hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 active:scale-95">
        <LogOut className="h-6 w-6 transform transition-transform group-hover:rotate-12" />
        <span>Punch Out</span>
      </button>
    </div>
  </main>

  {/* Status Bar */}
  <footer className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-200 py-3 transition-all duration-300 hover:bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center space-x-2 group">
          <User  className="h-4 w-4 text-blue-600 transition-transform duration-300 group-hover:rotate-12" />
          <span className="group-hover:text-blue-600 transition-colors duration-300">User</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
          <span>Active</span>
        </div>
      </div>
    </div>
  </footer>
</div>
    </>
  )
}

export default Home
