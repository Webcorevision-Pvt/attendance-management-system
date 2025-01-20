import React from 'react'

const LoginPage = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 w-screen min-w-full">
      <div className="relative w-full max-w-md">
        
        <div className="absolute w-48 h-48 bg-blue-500 rounded-full opacity-90 blur-[2px]" 
             style={{ top: '-5rem', left: '-4rem' }}
        ></div>
        <div className="absolute w-48 h-48 bg-orange-500 rounded-full opacity-90 blur-[2px]"
             style={{ bottom: '-4rem', right: '-4rem' }}
        ></div>
        <div className="absolute w-32 h-32 bg-blue-600 rounded-full opacity-70 blur-[1px]"
             style={{ top: '50%', left: '-6rem' }}
        ></div>
        <div className="absolute w-32 h-32 bg-orange-600 rounded-full opacity-70 blur-[1px]"
             style={{ top: '25%', right: '-5rem' }}
        ></div>

        
        <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-xl p-8">
          
          <div className="absolute -top-20 -left-16 w-48 h-48 bg-blue-500 rounded-full opacity-80 blur-md"></div>
          <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-orange-500 rounded-full opacity-80 blur-md"></div>
          
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-6">Welcome Back</h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Username</label>
                <input 
                  type="text"
                  placeholder="Email or Phone"
                  className="w-full px-4 py-3 bg-gray-700/90 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Password</label>
                <input 
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 bg-gray-700/90 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md font-medium 
                         transform transition-all duration-200 ease-in-out
                         hover:bg-blue-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20
                         active:scale-95"
              >
                Log In
              </button>
              
              {/* <div className="flex gap-4 mt-4">
                <button 
                  type="button"
                  className="flex-1 flex items-center justify-center gap-2 
                           bg-gray-700/90 text-white py-2 rounded-md
                           relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gray-600 translate-y-full 
                                transition-transform duration-300 group-hover:translate-y-0"></div>
                  <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-110" 
                       viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.545,12.151L12.545,12.151c0,1.054,0.855,1.909,1.909,1.909h3.536c-0.447,1.72-1.459,3.239-2.856,4.295 c-1.397,1.056-3.147,1.624-4.927,1.624c-2.186,0-4.277-0.869-5.822-2.414C2.869,16.02,2,13.929,2,11.743 c0-2.186,0.869-4.277,2.414-5.822C6.929,4.405,9.02,3.536,11.206,3.536c1.78,0,3.53,0.568,4.927,1.624 c1.397,1.056,2.409,2.575,2.856,4.295h-3.536C14.399,9.455,13.544,10.31,13.544,11.364z"/>
                  </svg>
                  <span className="relative z-10">Google</span>
                </button>
                
                <button 
                  type="button"
                  className="flex-1 flex items-center justify-center gap-2 
                           bg-blue-600 text-white py-2 rounded-md
                           relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-blue-700 translate-y-full 
                                transition-transform duration-300 group-hover:translate-y-0"></div>
                  <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-110" 
                       viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="relative z-10">Facebook</span>
                </button>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default LoginPage
