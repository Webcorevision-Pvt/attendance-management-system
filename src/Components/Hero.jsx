import React from "react";

const Hero = () => {
  return (
    <main className="bg-gradient-to-r from-violet-950 to-violet-900 pt-12 dark:bg-violet-950 overflow-hidden relative h-[550px] flex items-center">
      <section className="flex justify-center items-center px-5 md:px-20 w-full max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-8 w-full">
          {/* Hero Text Section */}
          <div className="text-left text-white space-y-4 max-w-lg">
            <h1 className="text-4xl md:text-3xl font-semibold">
              We Build Apps That Get Trending On Appworld
            </h1>
            <p className="text-md md:text-lg opacity-90 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              ducimus eius quis ad enim aliquid iusto eum nihil exercitationem
              necessitatibus?
            </p>
            <div className="space-x-4">
              <button className="rounded-md border-2 border-[#0070f3] bg-[#0070f3] px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-[#0070f3]/80">Get Started</button>
              <button className="rounded-md border-2 border-white px-4 py-2 text-sm text-white transition-colors duration-300">Login</button>
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="flex items-center justify-center md:justify-end h-full p-2 md:p-6 relative -translate-y-12 md:-translate-y-6">
            <img
              src="https://picsum.photos/id/51/200"
              alt="App Development"
              className="w-[250px] md:w-[400px] max-w-full h-auto rounded-2xl object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
